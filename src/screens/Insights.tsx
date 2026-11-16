import { ArrowRight, CircleCheck, CircleX, TrendingUp } from "lucide-react";
import { Card, Notice, Pill, ProgressBar, SectionTitle, cardClass, cx } from "@/components/ui";
import { CATEGORIES, HABITS, SUMMARY, type Habit } from "@/data/persona";
import { PACE, fmtDay, fmtMoney, fmtSpan, neededPaceCents, planById } from "@/engine/engine";
import { useProjection, useStore } from "@/state/store";
import { GoalHeader } from "./GoalHeader";

export function InsightsScreen() {
  const { state, dispatch } = useStore();
  const p = useProjection();
  if (!p) return null;
  const { goal } = p;
  const plan = planById(state.planId);
  const behind = p.vsTargetDays > 0;
  const pace = p.racers.find((r) => r.id === "you")!.paceCents;
  const needed = neededPaceCents(goal, state.savedCents);
  const gap = needed - pace;
  const best = p.racers.find((r) => r.id === "best")!;
  const ghost = p.racers.find((r) => r.id === "ghost")!;

  const reasons: { tone: "bad" | "good" | "neutral"; text: React.ReactNode }[] = [
    {
      tone: "neutral",
      text: (
        <>
          Rent is <b>{Math.round((SUMMARY.breakdown[0].cents / SUMMARY.inCents) * 100)}%</b> of your
          income. It’s fixed, so it isn’t counted as a lever.
        </>
      ),
    },
    behind
      ? {
          tone: "bad",
          text: (
            <>
              Takeaway averages <b>{fmtMoney(PACE.habitCents)} a week</b> — about{" "}
              {(PACE.habitCents / gap).toFixed(1).replace(/\.0$/, "")}× the {fmtMoney(gap)}/wk gap
              to your target.
            </>
          ),
        }
      : {
          tone: "neutral",
          text: (
            <>
              Friday Uber Eats is your biggest flexible spend at{" "}
              <b>{fmtMoney(PACE.habitCents)} a week</b>.
            </>
          ),
        },
    {
      tone: best.arrivalDay <= goal.targetDay ? "good" : "neutral",
      text: (
        <>
          In August you kept <b>{fmtMoney(PACE.bestCents, { cents: false })} a week</b>. That pace
          arrives <b>{fmtDay(best.arrivalDay)}</b>
          {best.arrivalDay <= goal.targetDay ? ", before your target." : "."}
        </>
      ),
    },
  ];

  const charged = state.decisions.filter((d) => d.outcome === "approved" && !d.whatIf);
  if (charged.length) {
    const total = charged.reduce((s, d) => s + d.purchase.amountCents, 0);
    const days = charged.reduce((s, d) => s + ((d.afterDay ?? 0) - (d.beforeDay ?? 0)), 0);
    reasons.push({
      tone: "bad",
      text: (
        <>
          Approved purchases since setting this goal: <b>{fmtMoney(total)}</b>, adding about{" "}
          {fmtSpan(days)}.
        </>
      ),
    });
  }

  return (
    <div className="pb-8">
      <GoalHeader />
      <div className="space-y-5 px-5">
        <Card className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-semibold text-muted">Saving for</p>
              <p className="text-[30px] leading-tight font-extrabold tracking-[-0.03em] tabular">
                {fmtMoney(goal.amountCents, { cents: false })}
              </p>
            </div>
            <Pill tone={behind ? "warn" : "good"}>
              {behind
                ? `${fmtSpan(p.vsTargetDays)} behind`
                : p.vsTargetDays === 0
                  ? "On target"
                  : `${fmtSpan(p.vsTargetDays)} ahead`}
            </Pill>
          </div>
          <ProgressBar value={p.progress} className="mt-4" />
          <div className="mt-2 flex justify-between text-[12.5px] text-muted">
            <span className="tabular">
              <b className="text-ink">{fmtMoney(state.savedCents, { cents: false })}</b> saved ·{" "}
              {Math.round(p.progress * 100)}%
            </span>
            <span>Target {fmtDay(goal.targetDay)}</span>
          </div>

          <p className="mt-5 text-[17px] leading-[1.45] font-medium tracking-[-0.01em] text-ink">
            Projected to hit your goal by <b className="font-extrabold">{fmtDay(p.youDay)}</b>{" "}
            {plan ? `with your ${plan.name} plan` : "at your current pace"}.{" "}
            {behind ? (
              <>
                That’s about{" "}
                <b className="font-extrabold text-amber">{fmtSpan(p.vsTargetDays)} behind</b> your{" "}
                {fmtDay(goal.targetDay)} target.
              </>
            ) : (
              <>
                That’s{" "}
                <b className="font-extrabold text-success">
                  {p.vsTargetDays === 0 ? "right on" : `${fmtSpan(p.vsTargetDays)} ahead of`}
                </b>{" "}
                your {fmtDay(goal.targetDay)} target.
              </>
            )}
          </p>

          <dl className="mt-4 grid grid-cols-3 divide-x divide-black/[0.06] rounded-2xl bg-canvas py-3">
            <Stat label="Your pace" value={`${fmtMoney(pace)}`} sub="/wk" />
            <Stat label="Needed" value={fmtMoney(Math.max(0, needed))} sub="/wk" />
            <Stat
              label={gap > 0 ? "Gap" : "Spare"}
              value={fmtMoney(Math.abs(gap))}
              sub="/wk"
              tone={gap > 0 ? "text-amber" : "text-success"}
            />
          </dl>
          <button
            onClick={() => dispatch({ type: "goalView", view: "timeline" })}
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-hero hover:underline"
          >
            See the race to {fmtDay(p.youDay)}
            <ArrowRight className="size-4" />
          </button>
        </Card>

        <section className="space-y-2.5">
          <SectionTitle>Financial summary</SectionTitle>
          <Card className="p-5">
            <div className="flex items-center justify-between text-[12.5px] text-muted">
              <span>Last {SUMMARY.weeks} weeks</span>
              <span className="tabular">{fmtMoney(SUMMARY.inCents, { cents: false })} in</span>
            </div>
            <div className="mt-2 flex h-3.5 overflow-hidden rounded-full">
              {SUMMARY.breakdown.map((b) => (
                <span
                  key={b.category}
                  style={{
                    width: `${(b.cents / SUMMARY.inCents) * 100}%`,
                    background: CATEGORIES[b.category].color,
                  }}
                  className="border-r-2 border-white last:border-r-0"
                />
              ))}
              <span
                style={{ width: `${(SUMMARY.keptCents / SUMMARY.inCents) * 100}%` }}
                className="bg-[repeating-linear-gradient(135deg,#008A23_0_3px,#3fb15a_3px_6px)]"
              />
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {SUMMARY.breakdown.map((b) => (
                <li
                  key={b.category}
                  className="flex items-center justify-between gap-2 text-[12.5px]"
                >
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ background: CATEGORIES[b.category].color }}
                    />
                    <span className="truncate text-muted">{CATEGORIES[b.category].label}</span>
                  </span>
                  <span className="font-semibold tabular">
                    {fmtMoney(b.cents, { cents: false })}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-2 text-[12.5px]">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-success" />
                  <span className="font-semibold text-success">Kept</span>
                </span>
                <span className="font-bold text-success tabular">
                  {fmtMoney(SUMMARY.keptCents, { cents: false })}
                </span>
              </li>
            </ul>

            <div className="mt-5 border-t border-black/[0.06] pt-4">
              <p className="flex items-center gap-1.5 text-[13px] font-bold">
                <TrendingUp className="size-4 text-navy" />
                {behind ? "Why you’re behind" : "What’s shaping your pace"}
              </p>
              <ul className="mt-2.5 space-y-2.5">
                {reasons.map((r, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-snug text-ink">
                    <span
                      className={cx(
                        "mt-[7px] size-1.5 shrink-0 rounded-full",
                        r.tone === "bad"
                          ? "bg-danger"
                          : r.tone === "good"
                            ? "bg-success"
                            : "bg-navy/40",
                      )}
                    />
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-2.5">
          <SectionTitle>Habits we noticed</SectionTitle>
          <div className="grid grid-cols-3 gap-2.5">
            {[HABITS[2], HABITS[0], HABITS[1]].map((h) => (
              <HabitTile key={h.id} habit={h} />
            ))}
          </div>
          <p className="px-1 text-[12px] text-faint">
            Without Friday Uber Eats you’d arrive {fmtDay(ghost.arrivalDay)} — that’s your Habit
            ghost.
          </p>
        </section>

        {state.decisions.length > 0 && (
          <section className="space-y-2.5">
            <SectionTitle>Purchase decisions</SectionTitle>
            <Card className="divide-y divide-black/[0.05] px-4 py-1">
              {state.decisions.slice(0, 5).map((d) => {
                const approved = d.outcome === "approved";
                const delta =
                  d.afterDay !== null && d.beforeDay !== null ? d.afterDay - d.beforeDay : null;
                return (
                  <div key={d.id} className="flex items-center gap-3 py-3">
                    {approved ? (
                      <CircleCheck className="size-5 shrink-0 text-navy" />
                    ) : (
                      <CircleX className="size-5 shrink-0 text-success" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] font-semibold">{d.purchase.item}</p>
                      <p className="text-[12px] text-muted">
                        {d.whatIf ? "What-if · " : ""}
                        {approved ? "Approved" : "Declined"} · {fmtMoney(d.purchase.amountCents)}
                      </p>
                    </div>
                    {delta !== null && (
                      <span
                        className={cx(
                          "text-[12.5px] font-semibold",
                          approved ? "text-amber" : "text-success",
                        )}
                      >
                        {approved ? `+${fmtSpan(delta)}` : `${fmtSpan(delta)} kept`}
                      </span>
                    )}
                  </div>
                );
              })}
            </Card>
          </section>
        )}

        <Notice>
          General information only, not financial advice. WallaTrack shows the impact; the choice is
          always yours.
        </Notice>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: string;
}) {
  return (
    <div className="px-3 text-center">
      <dt className="text-[11.5px] font-medium text-muted">{label}</dt>
      <dd className={cx("mt-0.5 text-[15px] font-extrabold tabular", tone)}>
        {value}
        {sub && <span className="text-[11px] font-semibold text-faint">{sub}</span>}
      </dd>
    </div>
  );
}

function HabitTile({ habit }: { habit: Habit }) {
  const { dispatch } = useStore();
  const good = habit.tone === "good";
  const Icon = habit.icon;
  return (
    <button
      onClick={() => dispatch({ type: "openHabit", id: habit.id })}
      className={cx(
        cardClass,
        "flex flex-col items-start p-3 text-left transition-transform hover:-translate-y-0.5",
        good ? "ring-2 ring-success/35" : "ring-2 ring-danger/30",
      )}
    >
      <span
        className={cx(
          "grid size-8 place-items-center rounded-[10px]",
          good ? "bg-success-tint text-success" : "bg-danger-tint text-danger",
        )}
      >
        <Icon className="size-4" strokeWidth={2.2} />
      </span>
      <p className="mt-2.5 text-[11px] font-semibold text-muted">
        {good ? "Good habit" : habit.top ? "Top habit" : "Habit"}
      </p>
      <p className="text-[13px] leading-tight font-bold">{habit.title}</p>
      <p
        className={cx(
          "mt-1.5 text-[14px] font-extrabold tabular",
          good ? "text-success" : "text-danger",
        )}
      >
        {habit.stat}
        <span className="ml-0.5 text-[11px] font-semibold text-faint">
          {habit.statLabel === "a week" ? "/wk" : ""}
        </span>
      </p>
    </button>
  );
}
