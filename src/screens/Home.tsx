import { ChevronRight, Gift, Pencil, Sparkles, Trophy } from "lucide-react";
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
      <JourneyWidget />
    </div>
  );
}

function GoalWidget() {
  const { state, dispatch } = useStore();
  const p = useProjection();
  const { kangaroo } = state;
  const look = {
    color: RACER_META.you.color,
    fur: kangaroo.fur,
    outfit: kangaroo.outfit,
    accessory: kangaroo.accessory,
    baby: kangaroo.baby,
  };

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
          Pick an amount and a date. {kangaroo.name} and three future versions of you will race to
          the finish.
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
            <RacerSprite {...look} hopping className="h-9 w-auto" />
          </motion.div>
        </div>
      </button>
    );
  }

  const percent = Math.round(p.progress * 100);
  const completed = percent >= 100;
  const behind = p.vsTargetDays > 0;
  const plan = planById(state.planId);
  const openGoal = () => dispatch({ type: "navigate", tab: "goal", goalView: "timeline" });
  return (
    <section className="wt-goal-card relative isolate overflow-hidden rounded-2xl px-5 pt-4 pb-4 text-white">
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] text-white/65">Goal</p>
          <button
            onClick={openGoal}
            className="block max-w-full truncate text-left text-[17px] font-bold hover:underline"
          >
            {p.goal.reason}
          </button>
        </div>
        <span
          className={cx(
            "inline-flex h-6 shrink-0 items-center rounded-full px-2.5 text-[12.5px] font-medium",
            completed || !behind
              ? "bg-[#4ADE80]/15 text-[#7BE7A2]"
              : "bg-[#FFB45C]/15 text-[#FFC27A]",
          )}
        >
          {completed ? "Completed" : behind ? `${fmtSpan(p.vsTargetDays)} behind` : "On track"}
        </span>
      </div>
      <p className="relative z-10 mt-2 text-[30px] leading-none font-bold tabular">
        {fmtMoney(state.savedCents, { cents: false })}
        <span className="text-[17px] font-semibold text-white/55">
          {" "}
          / {fmtMoney(p.goal.amountCents, { cents: false })}
        </span>
      </p>

      <div className="relative my-2 flex h-[104px] items-center justify-center">
        <Sparkles className="absolute top-4 left-7 size-4 text-[#F9D377]" />
        <span className="absolute top-8 right-9 text-[#F8D078]" aria-hidden="true">
          ✦
        </span>
        <span className="absolute bottom-5 left-14 text-[12px] text-[#D9C7FF]" aria-hidden="true">
          ✧
        </span>
        <span className="-translate-x-8">
          <RacerSprite {...look} className="h-[100px] w-auto" />
        </span>
        <button
          onClick={() => dispatch({ type: "goalView", view: "customise" })}
          className="absolute right-0 bottom-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-2 text-[12.5px] font-bold text-white transition-colors hover:bg-white/25"
        >
          <Pencil className="size-3" /> Customise
        </button>
      </div>

      <div className="relative z-10 flex items-center gap-2.5">
        <ProgressBar
          value={p.progress}
          barClass={completed ? "bg-[#7BE7A2]" : "bg-[#F1423C]"}
          trackClass="bg-white/12"
          className="h-2.5 flex-1"
        />
        <span className="w-10 text-right text-[15px] font-bold tabular">{percent}%</span>
      </div>

      {completed ? (
        <div className="relative z-10 mt-3 rounded-xl bg-white p-3 text-center text-navy">
          <p className="flex items-center justify-center gap-2 text-[17px] font-bold">
            <Trophy className="size-5 text-[#E9A315]" /> Goal achieved!
          </p>
          <p className="mt-0.5 text-[12.5px] text-muted">You’ve reached your savings goal.</p>
          <button
            onClick={() => dispatch({ type: "goalView", view: "journey" })}
            className="mt-2.5 h-9 w-full rounded-[4px] border border-navy bg-navy text-[14px] font-medium text-white transition-colors hover:bg-navy-hover"
          >
            See your journey
          </button>
        </div>
      ) : (
        <button
          onClick={openGoal}
          className="group relative z-10 mt-3 flex w-full items-end justify-between gap-2 border-t border-white/10 pt-3 text-left"
        >
          <span>
            <span className="block text-[12px] text-white/55">
              {plan ? `Arriving · ${plan.name} plan` : "Arriving at current pace"}
            </span>
            <b className="block text-[15px]">{fmtDay(p.youDay)}</b>
          </span>
          <span className="ml-auto text-right">
            <span className="block text-[12px] text-white/55">Target</span>
            <b className="block text-[15px]">{fmtDay(p.goal.targetDay)}</b>
          </span>
          <ChevronRight className="mb-0.5 size-5 text-white/50 transition-transform group-hover:translate-x-0.5" />
        </button>
      )}
      {state.demoMilestone !== null && (
        <p className="relative z-10 mt-2 text-center text-[11px] text-white/60">
          Demo milestone preview · not a real account balance
        </p>
      )}
    </section>
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

function JourneyWidget() {
  const { state, dispatch } = useStore();
  if (!state.goal) return null;
  return (
    <button
      onClick={() => dispatch({ type: "goalView", view: "journey" })}
      className={cx(
        cardClass,
        "flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-canvas-faint",
      )}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-faint text-navy">
        <Gift className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <b className="block text-[15px]">Your journey</b>
        <span className="text-[13px] text-muted">
          Savings milestones with {state.kangaroo.name}
        </span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-muted" />
    </button>
  );
}
