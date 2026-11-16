'use client';

import { useState } from 'react';
import { Button } from '@westpac/ui/button';
import { Input } from '@westpac/ui/input';
import { Select } from '@westpac/ui/select';
import { diffDays, formatDate, formatDuration } from '@/engine/dates';
import { formatMoney, parseUserAmountToCents } from '@/engine/money';
import type { Analysis, PurchaseInput, Racer, RacerId } from '@/engine/types';
import type { PersonaState } from '@/state/store';
import { RaceTrack, type TrackFx } from './RaceTrack';

interface Props {
  analysis: Analysis;
  racers: Racer[];
  state: PersonaState;
  snapshotDays: number;
  selected: RacerId;
  onSelect: (id: RacerId) => void;
  fx: TrackFx | null;
  calm: boolean;
  onWhatIf: (purchase: PurchaseInput) => void;
}

const WHAT_IF_CATEGORIES = ['Electronics', 'Shopping', 'Takeaway', 'Eating out', 'Coffee', 'Entertainment', 'Other'];

export function RaceScreen({ analysis, racers, state, snapshotDays, selected, onSelect, fx, calm, onWhatIf }: Props) {
  const you = racers[0];
  const saved = Math.max(0, you.savedCents);
  const percent = Math.round((saved / analysis.goalCents) * 100);
  const vsTarget = you.arrivalDate ? diffDays(you.arrivalDate, analysis.targetDate) : null;

  return (
    <>
      <section className="card">
        <div className="track-head">
          <div>
            <div className="eyebrow">{analysis.goalName} · you arrive</div>
            <div className="big-date">{you.arrivalDate ? formatDate(you.arrivalDate) : 'No date yet'}</div>
          </div>
          {state.reroute && <span className="eyebrow">{state.reroute.label} route</span>}
        </div>
        <RaceTrack
          asOf={analysis.asOf}
          goalCents={analysis.goalCents}
          racers={racers}
          snapshotDays={snapshotDays}
          selected={selected}
          onSelect={onSelect}
          fx={fx}
          calm={calm}
        />
      </section>

      <section className="card">
        <div className="row">
          <h2 style={{ marginBottom: 0 }}>{analysis.goalName}</h2>
          <strong>
            {formatMoney(saved)} of {formatMoney(analysis.goalCents)}
          </strong>
        </div>
        <div className="bar" style={{ margin: '10px 0 8px' }} role="img" aria-label={`${percent}% of the goal saved`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="muted">
          Target date {formatDate(analysis.targetDate)}.{' '}
          {vsTarget === null
            ? 'At this pace there is no arrival date yet.'
            : vsTarget >= 0
              ? `At this pace you arrive ${formatDuration(vsTarget)} before it.`
              : `At this pace you arrive ${formatDuration(vsTarget)} after it.`}
        </div>
      </section>

      <WhatIf onWhatIf={onWhatIf} />
    </>
  );
}

function WhatIf({ onWhatIf }: { onWhatIf: (purchase: PurchaseInput) => void }) {
  const [what, setWhat] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cents = parseUserAmountToCents(amount);
    if (!what.trim()) return setError('Add what you are planning to buy.');
    if (cents === null) return setError('Enter an amount in dollars, like 1200 or 49.95.');
    setError(null);
    onWhatIf({ merchant: what.trim(), amountCents: cents, category });
  };

  return (
    <section className="card">
      <h2>What if I bought…</h2>
      <p className="muted" style={{ marginBottom: 10 }}>
        Check a planned purchase against your goal. Nothing is bought.
      </p>
      <form onSubmit={submit} noValidate>
        <div className="form-grid">
          <label className="field">
            What
            <Input size="medium" value={what} onChange={(e) => setWhat(e.target.value)} placeholder="Gaming PC" maxLength={40} />
          </label>
          <label className="field">
            Amount ($)
            <Input size="medium" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="1200" maxLength={10} />
          </label>
        </div>
        <label className="field" style={{ marginBottom: 10 }}>
          Category
          <Select size="medium" value={category} onChange={(e) => setCategory(e.target.value)}>
            {WHAT_IF_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </label>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" look="hero" size="large" block>
          Check against my goal
        </Button>
      </form>
    </section>
  );
}
