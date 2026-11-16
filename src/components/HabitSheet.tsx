import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { habitById, type HabitId } from "@/data/persona";
import { fmtDay, fmtMoney, fmtSpan, planById, youArrivalDay } from "@/engine/engine";
import { useProjection, useStore } from "@/state/store";
import { Button, Card, Sheet, cx } from "./ui";

export function HabitSheet() {
  const { state, dispatch } = useStore();
  const p = useProjection();
  // Keep the last habit so the sheet can finish its exit animation after state clears.
  const last = useRef<HabitId | null>(null);
  if (state.openHabit) last.current = state.openHabit;
  const shownId = last.current;
  const close = () => dispatch({ type: "openHabit", id: null });

  return (
    <Sheet
      open={!!state.openHabit && !!p}
      onClose={close}
      label={shownId ? habitById(shownId).title : "Habit"}
    >
      {shownId && p && <HabitDetail key={shownId} id={shownId} />}
    </Sheet>
  );
}

function HabitDetail({ id }: { id: HabitId }) {
  const { state, dispatch } = useStore();
  const p = useProjection();
  if (!p) return null;
  const habit = habitById(id);
  const good = habit.tone === "good";
  const Icon = habit.icon;
  const max = Math.max(...habit.bars);
  const ghost = p.racers.find((r) => r.id === "ghost")!;

  let impact: { text: React.ReactNode; cta: string; go: () => void };
  if (habit.id === "ubereats") {
    impact = {
      text: (
        <>
          Without it, you’d arrive <b>{fmtDay(ghost.arrivalDay)}</b> —{" "}
          {ghost.arrivalDay < p.youDay
            ? `${fmtSpan(p.youDay - ghost.arrivalDay)} sooner than you are now.`
            : "level with you now."}
        </>
      ),
      cta: "Watch your Habit ghost race",
      go: () => {
        dispatch({ type: "openHabit", id: null });
        dispatch({ type: "goalView", view: "timeline" });
        dispatch({ type: "focusRacer", id: "ghost" });
      },
    };
  } else if (habit.id === "coffee") {
    const plan = planById("comfortable")!;
    const day = youArrivalDay(p.goal, state.savedCents, "comfortable");
    impact = {
      text: (
        <>
          {plan.action} keeps {fmtMoney(plan.boostCents)} a week and arrives <b>{fmtDay(day)}</b>
          {day < p.baseDay ? `, ${fmtSpan(p.baseDay - day)} sooner than your current pace.` : "."}
        </>
      ),
      cta: "Compare plans on the timeline",
      go: () => {
        dispatch({ type: "openHabit", id: null });
        dispatch({ type: "goalView", view: "timeline" });
      },
    };
  } else {
    impact = {
      text: (
        <>
          This streak is what keeps you on pace for <b>{fmtDay(p.youDay)}</b>. Every payday counted
          this quarter.
        </>
      ),
      cta: "See your race",
      go: () => {
        dispatch({ type: "openHabit", id: null });
        dispatch({ type: "goalView", view: "timeline" });
        dispatch({ type: "focusRacer", id: "you" });
      },
    };
  }

  return (
    <div className="space-y-4 px-5 pt-3 pb-6">
      <div className="flex items-center gap-3 pr-10">
        <span
          className={cx(
            "grid size-12 place-items-center rounded-2xl",
            good ? "bg-success-tint text-success" : "bg-danger-tint text-danger",
          )}
        >
          <Icon className="size-6" strokeWidth={2.1} />
        </span>
        <div>
          <p className={cx("text-[12.5px] font-semibold", good ? "text-success" : "text-danger")}>
            {good ? "Good habit" : habit.top ? "Top habit" : "Habit to watch"}
          </p>
          <h2 className="text-[21px] leading-tight font-extrabold tracking-[-0.02em]">
            {habit.title}
          </h2>
        </div>
      </div>

      <p className="text-[14px] leading-snug text-ink">{habit.detail}</p>

      <Card className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[12.5px] font-semibold text-muted">{habit.barsLabel}</p>
          <p
            className={cx(
              "shrink-0 text-[18px] font-extrabold whitespace-nowrap tabular",
              good ? "text-success" : "text-danger",
            )}
          >
            {habit.stat}
            <span className="ml-1 text-[12px] font-semibold text-faint">{habit.statLabel}</span>
          </p>
        </div>
        <div className="mt-4 flex h-24 items-end gap-1.5">
          {habit.bars.map((b, i) => (
            <motion.div
              key={i}
              className={cx(
                "flex-1 rounded-t-[5px]",
                b === 0
                  ? "bg-navy/10"
                  : good
                    ? "bg-success"
                    : i === habit.bars.length - 1
                      ? "bg-danger"
                      : "bg-danger/45",
              )}
              initial={{ height: 0 }}
              animate={{ height: `${Math.max(4, (b / max) * 100)}%` }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 220, damping: 24 }}
              title={fmtMoney(b)}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[11px] text-faint">
          <span>12 weeks ago</span>
          <span>This week</span>
        </div>
      </Card>

      <dl className="grid grid-cols-3 gap-2">
        {habit.facts.map((f) => (
          <div key={f.label} className="rounded-2xl bg-white px-3 py-2.5 ring-1 ring-black/5">
            <dt className="text-[11px] font-medium text-muted">{f.label}</dt>
            <dd className="mt-0.5 text-[15px] font-extrabold tabular">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-2xl bg-navy p-4 text-white">
        <p className="text-[12px] font-semibold text-white/60">Goal impact</p>
        <p className="mt-1 text-[14px] leading-snug [&_b]:font-extrabold">{impact.text}</p>
      </div>

      <Button variant="outline" className="w-full" onClick={impact.go}>
        {impact.cta}
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
