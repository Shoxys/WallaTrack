'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@westpac/ui/button';
import { addDays, formatDate, formatMonth } from '@/engine/dates';
import { progressAt } from '@/engine/engine';
import type { Racer, RacerId } from '@/engine/types';
import { Wallaby } from './Wallaby';

export interface TrackFx {
  kind: 'knock' | 'surge' | 'hop';
  label: string;
  key: number;
}

interface Props {
  asOf: string;
  goalCents: number;
  racers: Racer[];
  /** Day offset the track rests on when not playing (when the first wallaby finishes). */
  snapshotDays: number;
  selected: RacerId;
  onSelect: (id: RacerId) => void;
  fx: TrackFx | null;
  calm: boolean;
}

const PLAY_MS = 8000;
const CALM_PLAY_MS = 12000;
const CALM_STEP_MS = 500;

export function RaceTrack({ asOf, goalCents, racers, snapshotDays, selected, onSelect, fx, calm }: Props) {
  const [playDays, setPlayDays] = useState<number | null>(null);
  const [fxActive, setFxActive] = useState(false);
  const timers = useRef<{ raf?: number; interval?: ReturnType<typeof setInterval>; timeout?: ReturnType<typeof setTimeout> }>({});

  const endDays = Math.max(snapshotDays, ...racers.map((r) => r.days ?? 0)) + 14;
  const days = playDays ?? snapshotDays;
  const playing = playDays !== null;

  const stop = useCallback(() => {
    const t = timers.current;
    if (t.raf) cancelAnimationFrame(t.raf);
    if (t.interval) clearInterval(t.interval);
    if (t.timeout) clearTimeout(t.timeout);
    timers.current = {};
  }, []);

  useEffect(() => stop, [stop]);

  // Run the short reaction (knock-back, surge, hop) each time a new one arrives.
  useEffect(() => {
    if (!fx) return;
    setFxActive(true);
    const t = setTimeout(() => setFxActive(false), 2600);
    return () => clearTimeout(t);
  }, [fx]);

  const play = () => {
    stop();
    const finish = () => {
      setPlayDays(endDays);
      timers.current.timeout = setTimeout(() => setPlayDays(null), 1600);
    };
    setPlayDays(0);
    if (calm) {
      // Calm motion: a few gentle steps instead of a frame-by-frame run.
      const steps = Math.round(CALM_PLAY_MS / CALM_STEP_MS);
      let i = 0;
      timers.current.interval = setInterval(() => {
        i += 1;
        if (i >= steps) {
          if (timers.current.interval) clearInterval(timers.current.interval);
          finish();
        } else {
          setPlayDays(Math.round((endDays * i) / steps));
        }
      }, CALM_STEP_MS);
      return;
    }
    const started = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / PLAY_MS);
      if (t >= 1) return finish();
      setPlayDays(Math.round(endDays * t));
      timers.current.raf = requestAnimationFrame(tick);
    };
    timers.current.raf = requestAnimationFrame(tick);
  };

  const cancel = () => {
    stop();
    setPlayDays(null);
  };

  const left = (fraction: number) => `calc(${fraction.toFixed(4)} * (100% - 32px))`;
  const todayFraction = goalCents > 0 ? Math.min(1, Math.max(0, racers[0].savedCents) / goalCents) : 0;
  const picked = racers.find((r) => r.id === selected) ?? racers[0];

  return (
    <div>
      <div className={`track${playing ? ' playing' : ''}`}>
        <div className="finish" />
        {racers.map((r, i) => {
          const fraction = progressAt(r, goalCents, days);
          const arrived = r.days !== null && days >= r.days;
          const isYou = r.id === 'you';
          const showFx = isYou && fx && fxActive;
          const hopping = (playing && !arrived) || (isYou && showFx && fx.kind === 'surge');
          return (
            <button
              key={r.id}
              type="button"
              className="lane"
              aria-pressed={selected === r.id}
              aria-label={`${r.name}, ${r.tagline}. Arrives ${r.arrivalDate ? formatDate(r.arrivalDate) : 'no date yet'}. Show details.`}
              onClick={() => onSelect(r.id)}
            >
              <span className="lane-label">
                <span>{r.name}</span>
                <span className="date">{r.arrivalDate ? formatDate(r.arrivalDate) : 'No date yet'}</span>
              </span>
              <span className="lane-run">
                {i === racers.length - 1 && !playing && (
                  <span className="today-mark" style={{ left: `calc(${todayFraction.toFixed(4)} * (100% - 32px) + 4px)` }}>
                    <span>Today</span>
                  </span>
                )}
                <span
                  className={`runner${r.id === 'ghost' ? ' ghostly' : ''}${showFx && fx.kind !== 'surge' ? ` fx-${fx.kind}` : ''}`}
                  style={{ left: left(fraction) }}
                >
                  {showFx && (
                    <span key={fx.key} className={`fx-tag${fx.kind === 'knock' ? '' : ' good'}`}>
                      {fx.label}
                    </span>
                  )}
                  <Wallaby variant={r.id} hopping={!!hopping} />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="track-foot">
        <span className="playhead" aria-live="off">
          {playing ? (
            <>
              Running: <strong>{formatMonth(addDays(asOf, days))}</strong>
            </>
          ) : (
            <>
              Track shown at <strong>{formatDate(addDays(asOf, snapshotDays))}</strong>
            </>
          )}
        </span>
        <Button look="hero" soft size="small" onClick={playing ? cancel : play}>
          {playing ? 'Stop' : 'Play the race'}
        </Button>
      </div>

      <div className="detail" aria-live="polite">
        <Wallaby variant={picked.id} scale={3} />
        <div>
          <div className="eyebrow">
            {picked.name} · {picked.tagline}
          </div>
          <div className="big-date">{picked.arrivalDate ? formatDate(picked.arrivalDate) : 'No date yet'}</div>
          <div className="muted">{picked.reason}</div>
        </div>
      </div>
    </div>
  );
}
