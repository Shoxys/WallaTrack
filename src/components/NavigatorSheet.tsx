'use client';

import { Button } from '@westpac/ui/button';
import { formatDate } from '@/engine/dates';
import { formatMoney } from '@/engine/money';
import type { NavigatorReroute, NavigatorResponse } from '@/navigator/types';
import { Wallaby } from './Wallaby';

export type NavStage = 'checking' | 'ask' | 'approved' | 'rerouted' | 'declined';

export interface NavSession {
  stage: NavStage;
  mode: 'purchase' | 'what-if';
  purchase: { merchant: string; item?: string; amountCents: number; category: string };
  response: NavigatorResponse | null;
  minimized: boolean;
  picked: NavigatorReroute | null;
}

interface Props {
  firstName: string;
  nav: NavSession;
  onApprove: () => void;
  onDecline: () => void;
  onPickReroute: (r: NavigatorReroute) => void;
  onMinimize: () => void;
  onRestore: () => void;
  onClose: () => void;
}

const fmt = (iso: string | null) => (iso ? formatDate(iso) : 'No date yet');

export function NavigatorSheet({ firstName, nav, onApprove, onDecline, onPickReroute, onMinimize, onRestore, onClose }: Props) {
  const { stage, mode, purchase, response } = nav;
  const whatIf = mode === 'what-if';
  const held = !whatIf && (stage === 'checking' || stage === 'ask');

  // Hidden, but the purchase is still on hold: Approve stays one tap away.
  if (nav.minimized && held) {
    return (
      <div className="hold-chip" role="status">
        <span className="grow">
          On hold: {purchase.merchant} {formatMoney(purchase.amountCents)}
        </span>
        <Button look="faint" size="small" onClick={onRestore}>
          Review
        </Button>
        <Button look="primary" size="small" onClick={onApprove}>
          Approve
        </Button>
      </div>
    );
  }

  const title =
    stage === 'checking'
      ? 'Checking your goal'
      : stage === 'approved'
        ? 'Purchase approved'
        : stage === 'rerouted'
          ? `${nav.picked?.label ?? 'Reroute'} picked`
          : stage === 'declined'
            ? 'Purchase cancelled'
            : whatIf
              ? `What if, ${firstName}?`
              : `Quick check, ${firstName}`;
  const eyebrow = whatIf ? 'What-if · nothing is being bought' : held ? 'Purchase on hold' : 'Navigator';
  const dismiss = held ? onMinimize : onClose;

  return (
    <>
      <div className={`scrim${stage === 'ask' || stage === 'checking' ? '' : ' clear'}`} onClick={dismiss} />
      <section className={`sheet${stage === 'ask' || stage === 'checking' ? '' : ' compact'}`} role="dialog" aria-modal="false" aria-label="Navigator purchase check">
        <div className="sheet-top">
          <div className="nav-avatar">
            <Wallaby variant="navigator" scale={3} hopping={stage === 'checking'} />
          </div>
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <div className="app-title">{title}</div>
          </div>
          <button type="button" className="icon-btn" onClick={dismiss} aria-label={held ? 'Hide. Your purchase stays on hold.' : 'Close'}>
            ×
          </button>
        </div>

        {(stage === 'checking' || stage === 'ask') && (
          <div className="purchase-box">
            <div>
              <strong>{purchase.merchant}</strong>
              <div className="muted">{[purchase.item, purchase.category].filter(Boolean).join(' · ')}</div>
            </div>
            <div className="amount">{formatMoney(purchase.amountCents)}</div>
          </div>
        )}

        {stage === 'checking' && (
          <div className="checking" role="status">
            <span className="dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Working out what this does to your goal date
          </div>
        )}

        {stage === 'ask' && response && (
          <>
            <p className="impact">{response.goalImpact.line}</p>
            <div className="dates">
              <div>
                <span className="eyebrow">Now</span>
                <strong>{fmt(response.goalImpact.beforeDate)}</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div className={`after${response.goalImpact.deltaDays > 0 ? '' : ' same'}`}>
                <span className="eyebrow">{whatIf ? 'If you buy it' : 'If approved'}</span>
                <strong>{fmt(response.goalImpact.afterDate)}</strong>
              </div>
            </div>
            {response.habitLink && (
              <div className="habit-line">
                <span aria-hidden="true">↻</span>
                <span>{response.habitLink.line}</span>
              </div>
            )}

            {whatIf ? (
              <>
                {response.reroutes.length > 0 && (
                  <>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>
                      Ways to win the time back if you went ahead
                    </div>
                    {response.reroutes.map((r) => (
                      <div key={r.id} className="reroute">
                        <div>
                          <div className="name">{r.label}</div>
                          <div className="muted">{r.how}</div>
                        </div>
                        <div className="when">{fmt(r.arrivalDate)}</div>
                      </div>
                    ))}
                  </>
                )}
                <div style={{ marginTop: 12 }}>
                  <Button look="primary" size="large" block onClick={onClose}>
                    Done
                  </Button>
                </div>
              </>
            ) : (
              <div className="actions">
                <Button look="hero" soft size="large" block onClick={onDecline}>
                  {response.actions.decline.label}
                </Button>
                <Button look="primary" size="large" block onClick={onApprove}>
                  {response.actions.approve.label}
                </Button>
              </div>
            )}
          </>
        )}

        {stage === 'approved' && response && (
          <>
            <p className="impact">{response.actions.approve.resultLine}</p>
            {response.reroutes.length > 0 && (
              <>
                <div className="eyebrow" style={{ marginBottom: 6 }}>
                  {response.reroutes.length === 3 ? 'Three ways' : 'Ways'} to win the time back
                </div>
                <div className="reroute-tiles">
                  {response.reroutes.map((r) => (
                    <button key={r.id} type="button" className="reroute tile" onClick={() => onPickReroute(r)}>
                      <span className="name">{r.label}</span>
                      <span className="when">{fmt(r.arrivalDate)}</span>
                      <span className="how">{r.how}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            <div style={{ marginTop: 4 }}>
              <Button look="link" size="small" block onClick={onClose}>
                {response.reroutes.length > 0 ? 'Not now' : 'Done'}
              </Button>
            </div>
          </>
        )}

        {stage === 'rerouted' && nav.picked && (
          <>
            <p className="impact">
              You now arrive {fmt(nav.picked.arrivalDate)}. {nav.picked.how}.
            </p>
            <Button look="primary" size="large" block onClick={onClose}>
              Done
            </Button>
          </>
        )}

        {stage === 'declined' && response && (
          <>
            <p className="impact">{response.actions.decline.resultLine}</p>
            <Button look="primary" size="large" block onClick={onClose}>
              Done
            </Button>
          </>
        )}

        {response && stage === 'ask' && (
          <p className="source">
            {response.notice} {response.source === 'ai' ? 'AI wording' : 'Pre-checked wording'}; {response.guard.numbersChecked} figures
            confirmed by the engine.
          </p>
        )}
      </section>
    </>
  );
}
