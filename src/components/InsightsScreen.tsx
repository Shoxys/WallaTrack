'use client';

import { addDays, formatDate, formatDuration } from '@/engine/dates';
import type { DateCheck } from '@/engine/demoCheck';
import { daysToGoal, weeklyCents } from '@/engine/engine';
import { formatMoney } from '@/engine/money';
import type { Analysis } from '@/engine/types';
import type { PersonaState } from '@/state/store';

interface Props {
  analysis: Analysis;
  state: PersonaState;
  demoCheck: { ok: boolean; checks: DateCheck[] };
}

export function InsightsScreen({ analysis: a, state, demoCheck }: Props) {
  const remaining = a.goalCents - a.savedCents;
  const maxCategory = Math.max(...a.breakdown.map((c) => c.totalCents), 1);
  const approved = state.decisions.filter((d) => d.outcome === 'approved');
  const declined = state.decisions.filter((d) => d.outcome === 'declined');
  const sum = (list: typeof approved, pick: (d: (typeof approved)[number]) => number) => list.reduce((s, d) => s + pick(d), 0);
  const passed = demoCheck.checks.filter((c) => c.ok).length;

  return (
    <>
      <section className="card">
        <h2>Your last {a.windowWeeks} weeks</h2>
        <div className="kpis">
          <div className="kpi">
            <span className="eyebrow">In</span>
            <strong>{formatMoney(Math.round(a.incomeCents / a.windowWeeks))}</strong>
            <span className="muted">a week</span>
          </div>
          <div className="kpi">
            <span className="eyebrow">Out</span>
            <strong>{formatMoney(Math.round(a.spendCents / a.windowWeeks))}</strong>
            <span className="muted">a week</span>
          </div>
          <div className="kpi">
            <span className="eyebrow">Kept</span>
            <strong>{formatMoney(weeklyCents(a.pace))}</strong>
            <span className="muted">a week</span>
          </div>
        </div>
        <p className="muted" style={{ marginTop: 8 }}>
          What you keep each week is your pace. Your arrival date is what is left to save, divided by that pace.
        </p>
      </section>

      <section className="card">
        <h2>Your habits</h2>
        {a.habits.length === 0 && <p className="muted">No repeat spending found yet.</p>}
        {a.habits.map((h, i) => {
          const days = daysToGoal(remaining, { netCents: a.pace.netCents + h.totalCents, weeks: a.pace.weeks });
          const base = daysToGoal(remaining, a.pace);
          const sooner = days !== null && base !== null ? base - days : 0;
          return (
            <div key={h.merchant} className="entry">
              <div className="row">
                <strong>{h.label}</strong>
                <strong>{formatMoney(h.weeklyCents)} a week</strong>
              </div>
              <div className="muted">
                {h.category} · {h.occurrences} purchases in {h.weeksSeen} of the last {h.weeks} weeks
                {i === 0 ? ' · your top habit' : ''}
              </div>
              {days !== null && sooner > 0 && (
                <div className="muted">
                  Without it, your goal date would be {formatDate(addDays(a.asOf, days))}, {formatDuration(sooner)} sooner.
                </div>
              )}
            </div>
          );
        })}
      </section>

      {state.decisions.length > 0 && (
        <section className="card">
          <h2>Your purchase checks</h2>
          <div className="entry">
            <div className="row">
              <strong>Approved</strong>
              <strong>
                {approved.length} · {formatMoney(sum(approved, (d) => d.amountCents))}
              </strong>
            </div>
            <div className="muted">
              {approved.length === 0
                ? 'Nothing approved yet.'
                : `Moved your goal date back ${formatDuration(sum(approved, (d) => d.deltaDays))} before any reroute.`}
            </div>
          </div>
          <div className="entry">
            <div className="row">
              <strong>Declined</strong>
              <strong>
                {declined.length} · {formatMoney(sum(declined, (d) => d.amountCents))}
              </strong>
            </div>
            <div className="muted">
              {declined.length === 0
                ? 'Nothing declined yet.'
                : `Kept ${formatMoney(sum(declined, (d) => d.amountCents))} in your goal and saved ${formatDuration(sum(declined, (d) => d.deltaDays))}.`}
            </div>
          </div>
        </section>
      )}

      <section className="card">
        <h2>Where it goes</h2>
        {a.breakdown.map((c) => (
          <div key={c.category} style={{ marginBottom: 9 }}>
            <div className="row" style={{ fontSize: 13 }}>
              <span>{c.category}</span>
              <strong>{formatMoney(c.weeklyCents)} a week</strong>
            </div>
            <div className={`bar${c.essential ? ' essential' : ''}`}>
              <span style={{ width: `${Math.max(2, Math.round((c.totalCents / maxCategory) * 100))}%` }} />
            </div>
          </div>
        ))}
        <p className="muted">Navy bars are essentials. Red bars are everything else. Weekly averages over {a.windowWeeks} weeks.</p>
      </section>

      <section className="card">
        <h2>Engine check</h2>
        <p className="muted" style={{ marginBottom: 6 }}>
          {passed} of {demoCheck.checks.length} demo dates recomputed from the transactions and confirmed when the app started.
        </p>
        {demoCheck.checks.map((c) => (
          <div key={c.label} className="check-row">
            <span>{c.label}</span>
            <span className={c.ok ? 'ok' : 'bad'}>
              {c.actual}
              {c.ok ? ' ✓' : ` (spec ${c.expected})`}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
