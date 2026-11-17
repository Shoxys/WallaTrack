import { ChevronRight, Flag } from "lucide-react";
import { motion } from "motion/react";
import { Card, ProgressBar, SectionTitle, cardClass, cx } from "@/components/ui";
import { RacerSprite } from "@/components/Wallaby";
import { TxnRow } from "@/components/TxnRow";
import { HABITS, PERSONA, RACER_META } from "@/data/persona";
import { fmtDay, fmtLongDay, fmtMoney, fmtSpan, planById } from "@/engine/engine";
import { usePending, useProjection, useStore, useTransactions } from "@/state/store";
import { PendingIcon } from "@/components/GelIcons";

export function HomeScreen() {
  return (
    <div className="space-y-6 px-5 pb-8">
      <header className="pt-4">
        <p className="text-[14px] text-muted">{fmtLongDay(0)}</p>
        <h1 className="mt-0.5 font-brand text-[30px] leading-tight text-navy">
          G'day, {PERSONA.firstName}
        </h1>
      </header>
      <GoalWidget />
      <PaymentsWidget />
      <HabitsWidget />
    </div>
  );
}

function GoalWidget() {
  const { state, dispatch } = useStore();
  const p = useProjection();

  if (!p) {
    return (
      <button
        onClick={() => dispatch({ type: "goalView", view: "setup" })}
        className="group relative block w-full overflow-hidden rounded-2xl bg-navy p-5 text-left text-white"
      >
        <div className="absolute inset-x-0 bottom-0 h-14 bg-[repeating-linear-gradient(90deg,rgb(255_255_255/0.07)_0_2px,transparent_2px_28px)]" />
        <div className="wt-finish absolute right-5 bottom-0 h-14 w-2 opacity-70" />
        <p className="text-[13px] text-white/65">No goal yet</p>
        <h2 className="mt-1 font-brand text-[24px] leading-tight">Set a savings goal</h2>
        <p className="mt-1.5 max-w-[250px] text-[13.5px] leading-snug text-white/75">
          Pick an amount and a date. Four future versions of you will race to the finish.
        </p>
        <span className="mt-4 inline-flex h-[42px] items-center gap-1.5 rounded-[5px] border border-hero bg-hero px-4 text-[15px] font-medium transition-colors duration-300 group-hover:border-hero-hover group-hover:bg-hero-hover">
          Set goal
          <ChevronRight className="size-4" />
        </span>
        <div className="relative mt-3 h-10">
          <motion.div
            className="absolute bottom-0"
            initial={{ left: "0%" }}
            animate={{ left: ["0%", "62%"] }}
            transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 0.8, ease: "linear" }}
          >
            <RacerSprite color={RACER_META.you.color} hopping className="h-9 w-auto" />
          </motion.div>
        </div>
      </button>
    );
  }

  const behind = p.vsTargetDays > 0;
  const plan = planById(state.planId);
  return (
    <button
      onClick={() => dispatch({ type: "navigate", tab: "goal", goalView: "insights" })}
      className="group block w-full overflow-hidden rounded-2xl bg-navy p-5 text-left text-white"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] text-white/65">Goal</p>
          <h2 className="truncate text-[17px] font-bold">{p.goal.reason}</h2>
        </div>
        <span
          className={cx(
            "inline-flex h-6 shrink-0 items-center rounded-full px-2.5 text-[12.5px] font-medium",
            behind ? "bg-[#FFB45C]/15 text-[#FFC27A]" : "bg-[#4ADE80]/15 text-[#7BE7A2]",
          )}
        >
          {behind ? `${fmtSpan(p.vsTargetDays)} behind` : "On track"}
        </span>
      </div>
      <p className="mt-3 text-[30px] leading-none font-bold tabular">
        {fmtMoney(state.savedCents, { cents: false })}
        <span className="text-[17px] font-semibold text-white/55">
          {" "}
          / {fmtMoney(p.goal.amountCents, { cents: false })}
        </span>
      </p>

      <div className="relative mt-9 mb-1">
        <ProgressBar
          value={p.progress}
          barClass="bg-[#F1423C]"
          trackClass="bg-white/12"
          className="h-2.5"
        />
        <motion.div
          className="absolute -top-[30px]"
          initial={false}
          animate={{ left: `calc(${p.progress * 100}% - 22px)` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <RacerSprite color={RACER_META.you.color} className="h-7 w-auto" />
        </motion.div>
        <Flag className="absolute -top-5 right-0 size-4 text-white/70" />
      </div>

      <div className="mt-4 flex items-end justify-between gap-2 border-t border-white/10 pt-3.5">
        <div>
          <p className="text-[12px] text-white/55">
            {plan ? `Arriving · ${plan.name} plan` : "Arriving at current pace"}
          </p>
          <p className="text-[15px] font-bold">{fmtDay(p.youDay)}</p>
        </div>
        <div className="text-right">
          <p className="text-[12px] text-white/55">Target</p>
          <p className="text-[15px] font-bold">{fmtDay(p.goal.targetDay)}</p>
        </div>
        <ChevronRight className="mb-0.5 size-5 text-white/50 transition-transform group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}

function PaymentsWidget() {
  const { state, dispatch } = useStore();
  const txns = useTransactions();
  const pending = usePending();
  return (
    <section className="space-y-2.5">
      <SectionTitle
        action={
          <button
            onClick={() => dispatch({ type: "navigate", tab: "account" })}
            className="text-[14px] text-hero hover:underline"
          >
            View more
          </button>
        }
      >
        Payments
      </SectionTitle>
      <Card className="overflow-hidden">
        {pending.length > 0 && (
          <button
            onClick={() => dispatch({ type: "navigate", tab: "pay" })}
            className="flex w-full items-center gap-2.5 border-b border-amber/40 bg-amber-tint px-4 py-3 text-left text-amber"
          >
            <PendingIcon className="size-5 shrink-0" />
            <span className="min-w-0 flex-1 text-[13.5px] leading-snug">
              <b>
                {pending.length} pending payment{pending.length === 1 ? "" : "s"}
              </b>{" "}
              need{pending.length === 1 ? "s" : ""} your approval
            </span>
            <ChevronRight className="size-4 shrink-0" />
          </button>
        )}
        <div className="divide-y divide-line px-4 py-1">
          {txns.slice(0, 3).map((t) => (
            <TxnRow key={t.id} txn={t} fresh={state.addedTxns.some((a) => a.id === t.id)} />
          ))}
        </div>
      </Card>
    </section>
  );
}

function HabitsWidget() {
  const { state, dispatch } = useStore();
  if (!state.goal) {
    return (
      <p className="rounded-xl border border-dashed border-line-strong px-4 py-3.5 text-[13.5px] leading-snug text-muted">
        Habit insights appear here once you set a goal. We'll look at your last 12 weeks of
        payments.
      </p>
    );
  }
  const picks = [HABITS.find((h) => h.tone === "good")!, HABITS.find((h) => h.top)!];
  return (
    <section className="space-y-2.5">
      <SectionTitle>Your habits</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {picks.map((h) => {
          const good = h.tone === "good";
          const Icon = h.icon;
          return (
            <button
              key={h.id}
              onClick={() => {
                dispatch({ type: "navigate", tab: "goal", goalView: "insights" });
                dispatch({ type: "openHabit", id: h.id });
              }}
              className={cx(
                cardClass,
                "relative overflow-hidden p-4 pt-5 text-left transition-colors hover:bg-canvas-faint",
              )}
            >
              <span
                className={cx("absolute inset-x-0 top-0 h-1", good ? "bg-success" : "bg-danger")}
                aria-hidden="true"
              />
              <span
                className={cx(
                  "grid size-9 place-items-center rounded-full",
                  good ? "bg-success-tint text-success" : "bg-danger-tint text-danger",
                )}
              >
                <Icon className="size-5" />
              </span>
              <p className="mt-3 text-[12.5px] text-muted">{good ? "Keep it up" : "Top habit"}</p>
              <p className="text-[14.5px] leading-tight font-bold">{h.title}</p>
              <p className="mt-1.5 text-[13px] text-muted">
                <span className={cx("font-bold tabular", good ? "text-success" : "text-danger")}>
                  {h.stat}
                </span>{" "}
                {h.statLabel}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
