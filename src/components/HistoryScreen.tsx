'use client';

import { Badge } from '@westpac/ui/badge';
import { Button } from '@westpac/ui/button';
import { formatDate, formatDuration } from '@/engine/dates';
import { formatMoney } from '@/engine/money';
import type { Decision } from '@/state/store';

const fmt = (iso: string | null) => (iso ? formatDate(iso) : 'no date yet');

function impact(d: Decision): string {
  if (d.outcome === 'approved') {
    return d.deltaDays > 0
      ? `Goal date moved back ${formatDuration(d.deltaDays)}, from ${fmt(d.beforeDate)} to ${fmt(d.afterDate)}.`
      : `Goal date stayed ${fmt(d.afterDate)}.`;
  }
  if (d.outcome === 'declined') {
    return d.deltaDays > 0
      ? `Stayed on pace for ${fmt(d.beforeDate)}. ${formatDuration(d.deltaDays)} saved.`
      : `Stayed on pace for ${fmt(d.beforeDate)}.`;
  }
  return d.deltaDays > 0
    ? `Would move your goal date back ${formatDuration(d.deltaDays)}, to ${fmt(d.afterDate)}.`
    : `Would not move your goal date of ${fmt(d.afterDate)}.`;
}

export function HistoryScreen({ decisions, onReset }: { decisions: Decision[]; onReset: () => void }) {
  const newestFirst = decisions.slice().reverse();
  return (
    <>
      <section className="card">
        <h2>Decision history</h2>
        {newestFirst.length === 0 && (
          <p className="muted">No purchase checks yet. Tap Pay on the checkout, or try a what-if on the Race tab.</p>
        )}
        {newestFirst.map((d) => (
          <div key={d.id} className="entry">
            <div className="row">
              <strong>
                {d.merchant} · {formatMoney(d.amountCents)}
              </strong>
              <Badge color={d.outcome === 'approved' ? 'danger' : d.outcome === 'declined' ? 'success' : 'muted'} soft>
                {d.outcome === 'approved' ? 'Approved' : d.outcome === 'declined' ? 'Declined' : 'What-if'}
              </Badge>
            </div>
            <div className="muted">{d.category}</div>
            <div className="muted">{impact(d)}</div>
            {d.reroute && (
              <div className="muted">
                Reroute: {d.reroute.label}, arriving {fmt(d.reroute.arrivalDate)}.
              </div>
            )}
          </div>
        ))}
      </section>
      <Button look="faint" size="medium" block onClick={onReset}>
        Reset demo
      </Button>
    </>
  );
}
