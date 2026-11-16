'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { WBCLogo } from '@westpac/ui/symbol';
import { DEFAULT_PERSONA_ID, PERSONAS } from '@/data/personas';
import { formatDuration } from '@/engine/dates';
import { runDemoCheck } from '@/engine/demoCheck';
import { analyse, checkPurchase, projectRacers } from '@/engine/engine';
import type { PurchaseInput, RacerId, TrackState } from '@/engine/types';
import { templateResponse } from '@/navigator/templates';
import type { NavigatorMode, NavigatorReroute, NavigatorRequest, NavigatorResponse } from '@/navigator/types';
import { GENERAL_NOTICE } from '@/navigator/types';
import { EMPTY_PERSONA_STATE, clearState, loadCalm, loadState, saveCalm, saveState, type Decision, type PersonaState } from '@/state/store';
import { CheckoutScreen, type PayStatus } from './CheckoutScreen';
import { HistoryScreen } from './HistoryScreen';
import { InsightsScreen } from './InsightsScreen';
import { NavigatorSheet, type NavSession } from './NavigatorSheet';
import { RaceScreen } from './RaceScreen';
import type { TrackFx } from './RaceTrack';

type Tab = 'race' | 'pay' | 'insights' | 'history';

/** The pop-up must never block: past this, the app uses its own pre-checked lines. */
const NAVIGATOR_CLIENT_TIMEOUT_MS = 2500;
/** Lets the track appear before You moves, so the knock-back is seen. */
const TRACK_SETTLE_MS = 550;

const TABS: Array<{ id: Tab; label: string; icon: React.ReactNode }> = [
  { id: 'race', label: 'Race', icon: <path d="M4 20V4m0 1h11l-2 4 2 4H4" /> },
  { id: 'pay', label: 'Pay', icon: <path d="M3 7h18v11H3zM3 11h18M7 15h4" /> },
  { id: 'insights', label: 'Insights', icon: <path d="M5 20V11m7 9V4m7 16v-6" /> },
  { id: 'history', label: 'History', icon: <path d="M12 7v5l3 2M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4" /> },
];

export function App() {
  const persona = PERSONAS[DEFAULT_PERSONA_ID];
  const analysis = useMemo(() => analyse(persona), [persona]);
  const demoCheck = useMemo(() => runDemoCheck(persona), [persona]);

  const [state, setState] = useState<PersonaState>(EMPTY_PERSONA_STATE);
  const [loaded, setLoaded] = useState(false);
  const [calm, setCalm] = useState(false);
  const [tab, setTab] = useState<Tab>('race');
  const [selected, setSelected] = useState<RacerId>('you');
  const [nav, setNav] = useState<NavSession | null>(null);
  const [fx, setFx] = useState<TrackFx | null>(null);
  const [payStatus, setPayStatus] = useState<PayStatus | null>(null);
  const requestId = useRef(0);
  const fxKey = useRef(0);
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Local storage is only available in the browser, so load after mount.
  useEffect(() => {
    setState(loadState(persona.personaId));
    setCalm(loadCalm());
    setLoaded(true);
    // #pay, #insights or #history opens that tab directly (handy when recording).
    const fromHash = window.location.hash.slice(1);
    if (TABS.some((t) => t.id === fromHash)) setTab(fromHash as Tab);
  }, [persona.personaId]);

  useEffect(() => {
    if (loaded) saveState(persona.personaId, state);
  }, [loaded, persona.personaId, state]);

  useEffect(
    () => () => {
      if (pending.current) clearTimeout(pending.current);
    },
    [],
  );

  const trackState: TrackState = useMemo(
    () => ({ spentCents: state.spentCents, boostCentsPerWeek: state.boostCentsPerWeek, approvedByCategory: state.approvedByCategory }),
    [state.spentCents, state.boostCentsPerWeek, state.approvedByCategory],
  );
  const racers = useMemo(() => projectRacers(analysis, trackState), [analysis, trackState]);
  // The track rests on the day the first wallaby finishes at Alex's starting position.
  const snapshotDays = useMemo(
    () => Math.min(...projectRacers(analysis).map((r) => r.days ?? Number.POSITIVE_INFINITY).filter(Number.isFinite), 730),
    [analysis],
  );

  const showFx = useCallback((kind: TrackFx['kind'], label: string) => {
    fxKey.current += 1;
    setFx({ kind, label, key: fxKey.current });
  }, []);

  /** Run after the Race tab has had a moment to draw, so the movement is visible. */
  const afterTrackSettles = (fn: () => void) => {
    if (pending.current) clearTimeout(pending.current);
    pending.current = setTimeout(fn, TRACK_SETTLE_MS);
  };

  const localResponse = useCallback(
    (purchase: PurchaseInput, mode: NavigatorMode, note: string): NavigatorResponse =>
      templateResponse(checkPurchase(analysis, trackState, purchase), mode, note),
    [analysis, trackState],
  );

  const startCheck = async (purchase: PurchaseInput, mode: NavigatorMode) => {
    const id = ++requestId.current;
    setNav({ stage: 'checking', mode, purchase, response: null, minimized: false, picked: null });
    if (mode === 'purchase') setPayStatus({ kind: 'held', purchase });

    const local = checkPurchase(analysis, trackState, purchase);
    let response: NavigatorResponse;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), NAVIGATOR_CLIENT_TIMEOUT_MS);
    try {
      const body: NavigatorRequest = { personaId: persona.personaId, mode, purchase, state: trackState };
      const res = await fetch('/api/navigator', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Navigator route returned ${res.status}`);
      response = (await res.json()) as NavigatorResponse;
      // The browser runs the same engine. If the route ever disagrees, trust the local numbers.
      if (response.goalImpact.afterDate !== local.after.date || response.goalImpact.beforeDate !== local.before.date) {
        response = templateResponse(local, mode, 'Pre-checked lines (route and engine disagreed)');
      }
    } catch {
      response = templateResponse(local, mode, 'Pre-checked lines (Navigator route was slow or unreachable)');
    } finally {
      clearTimeout(timer);
    }
    if (requestId.current !== id) return;
    setNav((n) => (n && n.stage === 'checking' ? { ...n, stage: 'ask', response } : n));

    if (mode === 'what-if') {
      setState((s) => ({ ...s, decisions: [...s.decisions, toDecision(s, 'what-if', response)] }));
    }
  };

  const approve = () => {
    if (!nav || nav.mode !== 'purchase') return;
    requestId.current += 1;
    const response = nav.response ?? localResponse(nav.purchase, 'purchase', 'Pre-checked lines');
    const { purchase } = nav;
    setNav({ ...nav, stage: 'approved', response, minimized: false });
    setPayStatus({ kind: 'approved', purchase });
    setSelected('you');
    setTab('race');
    afterTrackSettles(() => {
      setState((s) => ({
        ...s,
        spentCents: s.spentCents + purchase.amountCents,
        approvedByCategory: { ...s.approvedByCategory, [purchase.category]: (s.approvedByCategory[purchase.category] ?? 0) + 1 },
        decisions: [...s.decisions, toDecision(s, 'approved', response)],
      }));
      const delta = response.goalImpact.deltaDays;
      if (delta > 0) showFx('knock', `Back ${formatDuration(delta)}`);
    });
  };

  const decline = () => {
    if (!nav || nav.mode !== 'purchase') return;
    requestId.current += 1;
    const response = nav.response ?? localResponse(nav.purchase, 'purchase', 'Pre-checked lines');
    setNav({ ...nav, stage: 'declined', response, minimized: false });
    setPayStatus({ kind: 'declined', purchase: nav.purchase });
    setSelected('you');
    setTab('race');
    afterTrackSettles(() => {
      setState((s) => ({ ...s, decisions: [...s.decisions, toDecision(s, 'declined', response)] }));
      const delta = response.goalImpact.deltaDays;
      showFx('hop', delta > 0 ? `${capitalise(formatDuration(delta))} saved` : 'On pace');
    });
  };

  const pickReroute = (r: NavigatorReroute) => {
    if (!nav) return;
    setNav({ ...nav, stage: 'rerouted', picked: r });
    setState((s) => {
      const decisions = s.decisions.slice();
      const last = decisions.length - 1;
      if (last >= 0 && decisions[last].outcome === 'approved') {
        decisions[last] = { ...decisions[last], reroute: { id: r.id, label: r.label, arrivalDate: r.arrivalDate } };
      }
      return { ...s, boostCentsPerWeek: r.boostCentsPerWeek, reroute: { id: r.id, label: r.label }, decisions };
    });
    setSelected('you');
    const recovered = nav.response?.goalImpact.afterDate && r.arrivalDate ? daysBetween(r.arrivalDate, nav.response.goalImpact.afterDate) : 0;
    showFx('surge', recovered > 0 ? `${capitalise(formatDuration(recovered))} sooner` : r.label);
  };

  const reset = () => {
    if (pending.current) clearTimeout(pending.current);
    requestId.current += 1;
    clearState(persona.personaId);
    setState(EMPTY_PERSONA_STATE);
    setNav(null);
    setFx(null);
    setPayStatus(null);
    setSelected('you');
    setTab('race');
  };

  const toggleCalm = () => {
    setCalm((c) => {
      saveCalm(!c);
      return !c;
    });
  };

  const held = nav && nav.mode === 'purchase' && (nav.stage === 'checking' || nav.stage === 'ask');

  return (
    <div className="desk">
      <main className="phone" data-calm={calm}>
        <div className="phone-notch" aria-hidden="true" />
        <div className="status-bar" aria-hidden="true">
          <span>9:41</span>
          <span>5G ▮▮▮</span>
        </div>
        <header className="app-header">
          <span className="logo">
            <WBCLogo aria-label="Westpac" />
          </span>
          <div>
            <div className="app-title">WallaTrack</div>
            <div className="app-sub">
              {persona.customer.person.firstName} {persona.customer.person.lastName} · demo data
            </div>
          </div>
          <button type="button" className="calm-toggle" aria-pressed={calm} onClick={toggleCalm}>
            Calm motion {calm ? 'on' : 'off'}
          </button>
        </header>

        <div className={`screen${held && nav.minimized ? ' has-chip' : ''}`}>
          {tab === 'race' && (
            <RaceScreen
              analysis={analysis}
              racers={racers}
              state={state}
              snapshotDays={snapshotDays}
              selected={selected}
              onSelect={setSelected}
              fx={fx}
              calm={calm}
              onWhatIf={(p) => startCheck(p, 'what-if')}
            />
          )}
          {tab === 'pay' && (
            <CheckoutScreen persona={persona} status={payStatus} busy={!!held} onPay={(p) => startCheck(p, 'purchase')} />
          )}
          {tab === 'insights' && <InsightsScreen analysis={analysis} state={state} demoCheck={demoCheck} />}
          {tab === 'history' && <HistoryScreen decisions={state.decisions} onReset={reset} />}
          <p className="notice">{GENERAL_NOTICE} All data shown is fictional.</p>
        </div>

        <nav className="tabs" aria-label="Sections">
          {TABS.map((t) => (
            <button key={t.id} type="button" className="tab" aria-current={tab === t.id ? 'page' : undefined} onClick={() => setTab(t.id)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {t.icon}
              </svg>
              {t.label}
            </button>
          ))}
        </nav>

        {nav && (
          <NavigatorSheet
            firstName={analysis.firstName}
            nav={nav}
            onApprove={approve}
            onDecline={decline}
            onPickReroute={pickReroute}
            onMinimize={() => setNav((n) => (n ? { ...n, minimized: true } : n))}
            onRestore={() => setNav((n) => (n ? { ...n, minimized: false } : n))}
            onClose={() => setNav(null)}
          />
        )}
      </main>
    </div>
  );
}

function toDecision(s: PersonaState, outcome: Decision['outcome'], r: NavigatorResponse): Decision {
  return {
    id: s.decisions.length + 1,
    outcome,
    merchant: r.purchase.merchant,
    item: r.purchase.item,
    amountCents: r.purchase.amountCents,
    category: r.purchase.category,
    beforeDate: r.goalImpact.beforeDate,
    afterDate: r.goalImpact.afterDate,
    deltaDays: r.goalImpact.deltaDays,
    reroute: null,
  };
}

function daysBetween(fromIso: string, toIso: string): number {
  return Math.round((Date.parse(toIso) - Date.parse(fromIso)) / 86_400_000);
}

function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
