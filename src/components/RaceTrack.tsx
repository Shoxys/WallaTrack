import { useMemo } from "react";
import { RACER_META } from "@/data/persona";
import { fmtDay, fmtK, savedAt, type RacerId, type RacerProjection } from "@/engine/engine";
import { useStore } from "@/state/store";
import { RacerSprite } from "./Wallaby";
import { cx } from "./ui";

const SPRITE_W = 36;
const FINISH_W = 8;
const RESERVED = SPRITE_W + FINISH_W;

/** Left offset for a sprite whose nose sits at `pct` of the goal. */
const spriteLeft = (pct: number) => `calc(${pct} * (100% - ${RESERVED}px))`;
/** X position of the nose line for `pct` of the goal. */
export const noseX = (pct: number) => `calc(${SPRITE_W}px + ${pct} * (100% - ${RESERVED}px))`;

export function checkpointsFor(goalCents: number): number[] {
  const step = Math.max(50_000, Math.round(goalCents / 3 / 50_000) * 50_000);
  return [step, step * 2].filter((c) => c < goalCents);
}

const PLACES = ["1st", "2nd", "3rd", "4th"];

export interface LaneMarker {
  racerId: RacerId;
  pct: number;
  label?: string;
  tone?: "bad" | "good" | "neutral";
}

export function RaceTrack({
  racers,
  goalCents,
  day,
  smooth,
  playing,
  focus,
  onFocus,
  markers = [],
  overrideStart,
  cheer,
}: {
  racers: RacerProjection[];
  goalCents: number;
  day: number;
  /** Ease position changes (jumps, plan changes); off during live playback */
  smooth: boolean;
  playing: boolean;
  focus: RacerId;
  onFocus: (id: RacerId) => void;
  /** Faint "before" sprites and captions inside a lane */
  markers?: LaneMarker[];
  /** Temporarily render a racer from a different start (knock-back animation) */
  overrideStart?: { racerId: RacerId; cents: number } | null;
  cheer?: RacerId | null;
}) {
  const checkpoints = useMemo(() => checkpointsFor(goalCents), [goalCents]);
  // The You lane is the customer's own wallaby, dressed as they customised it.
  const { kangaroo } = useStore().state;
  const places = useMemo(() => {
    const order = [...racers].sort((a, b) => a.arrivalDay - b.arrivalDay);
    const out = {} as Record<RacerId, string>;
    // Racers finishing on the same day share a place.
    order.forEach((r, i) => {
      const prev = order[i - 1];
      out[r.id] = prev && prev.arrivalDay === r.arrivalDay ? out[prev.id] : PLACES[i];
    });
    return out;
  }, [racers]);

  return (
    <div>
      {/* Scale */}
      <div className="relative mb-1 h-4 text-[10px] font-semibold text-white/45">
        <span className="absolute -translate-x-1/2 tabular" style={{ left: noseX(0) }}>
          $0
        </span>
        {checkpoints.map((c) => (
          <span
            key={c}
            className="absolute -translate-x-1/2 tabular"
            style={{ left: noseX(c / goalCents) }}
          >
            {fmtK(c)}
          </span>
        ))}
        <span className="absolute right-0 font-pixel text-[11px] tracking-wide text-white">
          {fmtK(goalCents)}
        </span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0">
          {checkpoints.map((c) => (
            <div
              key={c}
              className="absolute top-0 bottom-0 border-l-2 border-dotted border-white/15"
              style={{ left: noseX(c / goalCents) }}
            />
          ))}
          <div
            className="wt-finish absolute top-0 right-0 bottom-0 rounded-sm"
            style={{ width: FINISH_W }}
          />
        </div>

        <div className="relative space-y-1">
          {racers.map((r, i) => {
            const meta = RACER_META[r.id];
            const start = overrideStart?.racerId === r.id ? overrideStart.cents : r.startCents;
            const pct = savedAt({ ...r, startCents: start }, day, goalCents) / goalCents;
            const done = day >= r.arrivalDay;
            const focused = focus === r.id;
            const laneMarkers = markers.filter((m) => m.racerId === r.id);
            const caption = laneMarkers.find((m) => m.label);
            return (
              <button
                key={r.id}
                onClick={() => onFocus(r.id)}
                aria-pressed={focused}
                aria-label={`${r.name}: arrives ${fmtDay(r.arrivalDay)}`}
                className={cx(
                  "relative block h-[58px] w-full rounded-xl text-left transition-colors",
                  focused ? "bg-white/[0.09]" : "hover:bg-white/[0.04]",
                )}
              >
                {focused && (
                  <span
                    className="absolute top-2 bottom-2 left-0 w-[3px] rounded-full"
                    style={{ background: meta.color }}
                  />
                )}
                <span className="absolute top-1 left-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-white/85">
                  <span className="size-1.5 rounded-full" style={{ background: meta.color }} />
                  {r.name}
                </span>
                {caption ? (
                  <span
                    className={cx(
                      "absolute top-1 right-3.5 font-pixel text-[11px] tracking-wide",
                      caption.tone === "bad"
                        ? "text-[#FF8A80]"
                        : caption.tone === "good"
                          ? "text-[#7BE7A2]"
                          : "text-white/70",
                    )}
                  >
                    {caption.label}
                  </span>
                ) : (
                  done && (
                    <span
                      className="absolute right-[52px] bottom-[14px] font-pixel text-[11px] tracking-wide whitespace-nowrap"
                      style={{ color: meta.color }}
                    >
                      {places[r.id]} · {fmtDay(r.arrivalDay)}
                    </span>
                  )
                )}
                <span className="absolute inset-x-1 bottom-[5px] border-b border-white/10" />

                {laneMarkers
                  .filter((m) => m.pct >= 0)
                  .map((m, k) => (
                    <span
                      key={k}
                      className="pointer-events-none absolute bottom-[6px] opacity-35 grayscale-[40%]"
                      style={{
                        left: spriteLeft(m.pct),
                        transition: smooth ? "left 650ms cubic-bezier(.2,.8,.2,1)" : "none",
                      }}
                    >
                      <RacerSprite color={meta.color} ghost className="h-8 w-9" />
                    </span>
                  ))}

                <span
                  className={cx("absolute bottom-[6px]", cheer === r.id && "wt-cheer")}
                  style={{
                    left: spriteLeft(pct),
                    transition: smooth ? "left 700ms cubic-bezier(.2,.8,.2,1)" : "none",
                  }}
                >
                  <RacerSprite
                    color={meta.color}
                    ghost={r.id === "ghost"}
                    {...(r.id === "you" && {
                      fur: kangaroo.fur,
                      outfit: kangaroo.outfit,
                      accessory: kangaroo.accessory,
                      baby: kangaroo.baby,
                    })}
                    hopping={playing && !done}
                    delay={-i * 110}
                    className="h-8 w-9"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
