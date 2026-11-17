import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Flag, Pause, Play, RotateCcw } from "lucide-react";
import { Alert, Card, Notice, Pill, SectionTitle, cx } from "@/components/ui";
import { RaceTrack, checkpointsFor, type LaneMarker } from "@/components/RaceTrack";
import { RacerSprite } from "@/components/Wallaby";
import { RACER_META } from "@/data/persona";
import {
  PLANS,
  fmtDay,
  fmtK,
  fmtMoney,
  fmtMonth,
  fmtSpan,
  planById,
  projectRacers,
  savedAt,
  youArrivalDay,
  type PlanId,
  type RacerProjection,
} from "@/engine/engine";
import { useProjection, useStore, type Decision } from "@/state/store";
import { GoalHeader } from "./GoalHeader";

const RACE_MS = 9000;

interface RaceEvent {
  day: number;
  label: string;
  color: string;
}

function buildEvents(racers: RacerProjection[], goalCents: number, targetDay: number): RaceEvent[] {
  const events: RaceEvent[] = [{ day: targetDay, label: "Target date", color: "#ffffff" }];
  const cps = checkpointsFor(goalCents);
  racers.forEach((r) => {
    const color = RACER_META[r.id].color;
    cps.forEach((c) => {
      if (c > r.startCents) {
        events.push({
          day: Math.ceil(((c - r.startCents) * 7) / r.paceCents),
          label: `${r.name} hit ${fmtK(c)}`,
          color,
        });
      }
    });
    events.push({ day: r.arrivalDay, label: `${r.name} finished`, color });
  });
  return events.sort((a, b) => a.day - b.day);
}

export function TimelineScreen() {
  const { state, dispatch } = useStore();
  const p = useProjection()!;
  const { goal, racers } = p;

  // Capture the decision that brought us here before it is marked as seen.
  const [decision] = useState<Decision | null>(
    () => state.decisions.find((d) => d.id === state.unseenDecisionId) ?? null,
  );
  const [showBanner, setShowBanner] = useState(!!decision);
  const [knock, setKnock] = useState<number | null>(
    decision?.outcome === "approved" ? decision.savedBefore : null,
  );
  const [cheer, setCheer] = useState(decision?.outcome === "declined");

  const maxDay = useMemo(
    () => Math.max(...racers.map((r) => r.arrivalDay), goal.targetDay) + 28,
    [racers, goal.targetDay],
  );
  const [day, setDay] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [smooth, setSmooth] = useState(true);
  const events = useMemo(
    () => buildEvents(racers, goal.amountCents, goal.targetDay),
    [racers, goal],
  );

  useEffect(() => {
    if (!decision) return;
    dispatch({ type: "markDecisionSeen" });
    const t1 = setTimeout(() => setKnock(null), 650);
    const t2 = setTimeout(() => setCheer(false), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [decision, dispatch]);

  // Playback loop
  const raf = useRef(0);
  useEffect(() => {
    if (!playing) return;
    setSmooth(false);
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setDay((d) => {
        const next = d + (dt / RACE_MS) * maxDay;
        if (next >= maxDay) {
          setPlaying(false);
          return maxDay;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, maxDay]);

  const jump = (to: number) => {
    setPlaying(false);
    setSmooth(true);
    setDay(Math.max(0, Math.min(maxDay, to)));
  };
  const togglePlay = () => {
    if (playing) return setPlaying(false);
    if (day >= maxDay) setDay(0);
    setKnock(null);
    setPlaying(true);
  };
  const prevEvent = () => jump([...events].reverse().find((e) => e.day < day - 0.5)?.day ?? 0);
  const nextEvent = () => jump(events.find((e) => e.day > day + 0.5)?.day ?? maxDay);

  const pickPlan = (id: PlanId) => {
    dispatch({ type: "applyPlan", planId: state.planId === id ? null : id });
    dispatch({ type: "focusRacer", id: "you" });
    setKnock(null);
    setDay(0);
    setPlaying(true);
  };

  const current = [...events].reverse().find((e) => e.day <= day && day - e.day < maxDay * 0.06);
  const plan = planById(state.planId);
  const you = racers.find((r) => r.id === "you")!;

  // Faint "before" sprite: You at base pace while a plan is active, or You before an approval.
  const markers: LaneMarker[] = [];
  if (knock !== null) {
    markers.push({ racerId: "you", pct: knock / goal.amountCents });
  } else if (
    decision?.outcome === "approved" &&
    day === 0 &&
    decision.afterDay !== null &&
    decision.beforeDay !== null
  ) {
    markers.push({
      racerId: "you",
      pct: decision.savedBefore / goal.amountCents,
      label: `−${fmtSpan(decision.afterDay - decision.beforeDay)}`,
      tone: "bad",
    });
  }
  if (plan) {
    const base = projectRacers(goal, state.savedCents, null)[0];
    markers.push({ racerId: "you", pct: savedAt(base, day, goal.amountCents) / goal.amountCents });
  }
  if (cheer) markers.push({ racerId: "you", pct: -1, label: "On pace!", tone: "good" });

  return (
    <div className="pb-8">
      <GoalHeader />
      <div className="space-y-5 px-5">
        <AnimatePresence>
          {decision && showBanner && (
            <DecisionBanner
              decision={decision}
              youDay={p.youDay}
              onClose={() => setShowBanner(false)}
            />
          )}
        </AnimatePresence>

        <div className="relative overflow-hidden rounded-2xl bg-navy p-4 pb-5 text-white">
          <div className="mb-3 flex items-start justify-between px-1">
            <div>
              <p className="font-pixel text-[12px] tracking-[0.12em] text-white/55">WALLABY RACE</p>
              <p className="mt-0.5 text-[12px] text-white/70">
                to {fmtMoney(goal.amountCents, { cents: false })} · target{" "}
                {fmtMonth(goal.targetDay)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-pixel text-[22px] leading-none tracking-wide tabular">
                {fmtMonth(day).toUpperCase()}
              </p>
              <p className="mt-1 font-pixel text-[11px] tracking-wider text-white/55">
                WEEK {Math.floor(day / 7)}
              </p>
            </div>
          </div>

          <RaceTrack
            racers={racers}
            goalCents={goal.amountCents}
            day={day}
            smooth={smooth}
            playing={playing}
            focus={state.focusRacer}
            onFocus={(id) => dispatch({ type: "focusRacer", id })}
            markers={markers.filter((m) => m.pct >= 0 || m.label)}
            overrideStart={knock !== null ? { racerId: "you", cents: knock } : null}
            cheer={cheer ? "you" : null}
          />

          <div className="mt-2.5 flex h-5 items-center justify-center px-1" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={current?.label ?? (day === 0 ? "start" : "run")}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-1.5 text-[12.5px] font-semibold"
              >
                {current ? (
                  <>
                    <span className="size-2 rounded-full" style={{ background: current.color }} />
                    {current.label} · {fmtDay(current.day)}
                  </>
                ) : day === 0 ? (
                  <span className="text-white/60">Press play to race all four to the finish</span>
                ) : (
                  <span className="text-white/40">Racing…</span>
                )}
              </motion.p>
            </AnimatePresence>
          </div>

          <Scrubber
            day={day}
            maxDay={maxDay}
            racers={racers}
            targetDay={goal.targetDay}
            onScrub={jump}
          />

          <div className="mt-3 flex items-center justify-center gap-3">
            <RoundButton label="Restart" onClick={() => jump(0)} small>
              <RotateCcw className="size-4" />
            </RoundButton>
            <RoundButton label="Previous checkpoint" onClick={prevEvent}>
              <ChevronLeft className="size-5" />
            </RoundButton>
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="grid size-14 place-items-center rounded-full bg-white text-navy shadow-[0_6px_16px_rgb(0_0_0/0.3)] transition-transform hover:scale-105 active:scale-95"
            >
              {playing ? (
                <Pause className="size-6 fill-current" />
              ) : (
                <Play className="ml-0.5 size-6 fill-current" />
              )}
            </button>
            <RoundButton label="Next checkpoint" onClick={nextEvent}>
              <ChevronRight className="size-5" />
            </RoundButton>
            <span className="w-9" />
          </div>
        </div>

        {renderRacerDetails()}

        <section className="space-y-2.5">
          <SectionTitle
            action={
              plan && (
                <button
                  onClick={() => pickPlan(plan.id)}
                  className="text-[13px] font-semibold text-hero hover:underline"
                >
                  Clear plan
                </button>
              )
            }
          >
            Adjust plans
          </SectionTitle>
          <p className="px-1 text-[13px] leading-snug text-muted">
            Pick a change to see how You’s pace moves against the other racers.
          </p>
          <div className="space-y-2">
            {PLANS.map((pl) => {
              const active = state.planId === pl.id;
              const arrive = youArrivalDay(goal, state.savedCents, pl.id);
              const saved = p.baseDay - arrive;
              return (
                <button
                  key={pl.id}
                  onClick={() => pickPlan(pl.id)}
                  aria-pressed={active}
                  className={cx(
                    "flex w-full items-center gap-3 rounded-xl border bg-white p-3.5 text-left transition-colors",
                    active
                      ? "border-navy bg-navy-faint ring-1 ring-navy ring-inset"
                      : "border-line hover:border-navy",
                  )}
                >
                  <span
                    className={cx(
                      "grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
                      active ? "border-navy bg-navy" : "border-line-strong",
                    )}
                  >
                    {active && <span className="size-1.5 rounded-full bg-white" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold tracking-wide text-hero uppercase">
                      {pl.name}
                    </p>
                    <p className="text-[14.5px] leading-tight font-bold">{pl.title}</p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-muted">
                      {pl.action} ·{" "}
                      <span className="font-semibold text-success">
                        +{fmtMoney(pl.boostCents)}/wk
                      </span>
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[13px] font-bold tabular">{fmtDay(arrive)}</p>
                    <p className="text-[11.5px] font-semibold text-success">
                      {fmtSpan(saved)} sooner
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <Notice>
          Projections use your last 12 weeks of payments. People like you is illustrative. General
          information only.
        </Notice>
      </div>
    </div>
  );

  function renderRacerDetails() {
    const r = racers.find((x) => x.id === state.focusRacer)!;
    const meta = RACER_META[r.id];
    const vsTarget = r.arrivalDay - goal.targetDay;
    const vsYou = r.arrivalDay - you.arrivalDay;
    return (
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-navy">
            <RacerSprite color={meta.color} ghost={r.id === "ghost"} className="h-7 w-auto" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[16px] leading-tight font-bold">{r.name}</p>
            <p className="mt-0.5 text-[12.5px] text-muted tabular">
              {r.id === "you" && plan ? `${plan.name} plan` : meta.tag} · {fmtMoney(r.paceCents)}/wk
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11.5px] font-medium text-muted">Arrives</p>
            <p className="text-[16px] font-bold tabular">{fmtDay(r.arrivalDay)}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Pill tone={vsTarget > 0 ? "warn" : "good"}>
            <Flag className="size-3" />
            {vsTarget > 0
              ? `${fmtSpan(vsTarget)} after target`
              : vsTarget === 0
                ? "On target"
                : `${fmtSpan(vsTarget)} before target`}
          </Pill>
          {r.id !== "you" && vsYou !== 0 && (
            <Pill tone="neutral">
              {fmtSpan(vsYou)} {vsYou < 0 ? "ahead of" : "behind"} You
            </Pill>
          )}
          {r.id === "you" && plan && <Pill tone="good">was {fmtDay(p.baseDay)}</Pill>}
        </div>
        <p className="mt-3 text-[13.5px] leading-snug text-ink">
          <span className="font-semibold">Summary: </span>
          {meta.summary}
          {r.id === "you" &&
            plan &&
            ` Your ${plan.name} plan adds ${fmtMoney(plan.boostCents)} a week (${plan.action.toLowerCase()}).`}
        </p>
      </Card>
    );
  }
}

function Scrubber({
  day,
  maxDay,
  racers,
  targetDay,
  onScrub,
}: {
  day: number;
  maxDay: number;
  racers: RacerProjection[];
  targetDay: number;
  onScrub: (d: number) => void;
}) {
  const at = (d: number) => `calc(9px + ${d / maxDay} * (100% - 18px))`;
  return (
    <div className="mt-5 px-1">
      <div className="relative h-[18px]">
        <div className="absolute inset-x-[9px] top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/15" />
        <div
          className="absolute top-1/2 left-[9px] h-1.5 -translate-y-1/2 rounded-full bg-[#F1423C]"
          style={{ width: `calc(${day / maxDay} * (100% - 18px))` }}
        />
        {racers.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-navy"
            style={{ left: at(r.arrivalDay), background: RACER_META[r.id].color }}
          />
        ))}
        <span
          className="pointer-events-none absolute -top-3.5 -translate-x-1/2"
          style={{ left: at(targetDay) }}
        >
          <Flag className="size-3.5 fill-white text-white" />
        </span>
        <input
          type="range"
          min={0}
          max={maxDay}
          step={1}
          value={Math.round(day)}
          onChange={(e) => onScrub(Number(e.target.value))}
          aria-label="Race timeline"
          aria-valuetext={fmtDay(Math.round(day))}
          className="wt-range absolute inset-0 w-full"
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[11px] font-medium text-white/50">
        <span>Today</span>
        <span>
          <Flag className="mr-1 inline size-3 -translate-y-px fill-white/50" />
          Target {fmtMonth(targetDay)}
        </span>
        <span>{fmtMonth(maxDay)}</span>
      </div>
    </div>
  );
}

function RoundButton({
  label,
  onClick,
  children,
  small,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cx(
        "grid place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",
        small ? "size-9" : "size-11",
      )}
    >
      {children}
    </button>
  );
}

function DecisionBanner({
  decision,
  youDay,
  onClose,
}: {
  decision: Decision;
  youDay: number;
  onClose: () => void;
}) {
  const approved = decision.outcome === "approved";
  const reroute = planById(decision.reroute);
  const delta =
    decision.afterDay !== null && decision.beforeDay !== null
      ? decision.afterDay - decision.beforeDay
      : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
    >
      <Alert
        look={approved ? "warning" : "success"}
        heading={`${decision.purchase.item} ${approved ? "approved" : "declined"} · ${fmtMoney(decision.purchase.amountCents)}`}
        onClose={onClose}
      >
        {approved ? (
          <>
            You were knocked back {fmtSpan(delta)}: {fmtDay(decision.beforeDay!)} →{" "}
            {fmtDay(decision.afterDay!)}.
            {reroute && ` With the ${reroute.name} plan you now arrive ${fmtDay(youDay)}.`}
          </>
        ) : (
          <>
            You stayed on pace for {fmtDay(decision.beforeDay!)} and kept {fmtSpan(delta)}.
          </>
        )}
      </Alert>
    </motion.div>
  );
}
