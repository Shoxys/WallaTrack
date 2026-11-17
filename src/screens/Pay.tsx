import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, ChevronRight, Repeat, Target } from "lucide-react";
import {
  Alert,
  Button,
  Card,
  CategoryIcon,
  Notice,
  Pill,
  ScreenHeader,
  SectionTitle,
  Sheet,
  cx,
} from "@/components/ui";
import { PendingIcon, TickCircleIcon } from "@/components/GelIcons";
import { Navigator, type NavigatorMood } from "@/components/Wallaby";
import { CATEGORIES, PERSONA, type Purchase } from "@/data/persona";
import {
  PLANS,
  fmtDay,
  fmtMMYY,
  fmtMoney,
  fmtSpan,
  purchaseImpact,
  youArrivalDay,
  youPaceCents,
} from "@/engine/engine";
import { usePending, useStore, type Decision } from "@/state/store";

const inputClass =
  "h-12 w-full min-w-0 rounded-[5px] border border-line-strong bg-white px-3.5 text-[16px] text-ink placeholder:text-muted/70";

export function PayScreen() {
  const { dispatch } = useStore();
  const pending = usePending();
  const [wiName, setWiName] = useState("New laptop");
  const [wiAmount, setWiAmount] = useState("1,800");
  const wiCents = (Number(wiAmount.replace(/[^\d.]/g, "")) || 0) * 100;

  return (
    <div className="pb-8">
      <ScreenHeader
        title="Pay"
        subtitle={`${PERSONA.account.name} · card ending ${PERSONA.account.card}`}
      />
      <div className="space-y-6 px-5">
        <section className="space-y-2.5">
          <SectionTitle
            action={
              pending.length > 0 && <Pill tone="warn">{pending.length} awaiting approval</Pill>
            }
          >
            Pending transactions
          </SectionTitle>
          <p className="px-1 text-[13.5px] leading-snug text-muted">
            Online card purchases over $100, or linked to a habit you track, wait here. Approve to
            settle the payment, or decline to cancel it.
          </p>

          {pending.length > 0 ? (
            <Card className="divide-y divide-line overflow-hidden">
              {pending.map((p) => (
                <button
                  key={p.id}
                  onClick={() => dispatch({ type: "startCheck", purchase: p })}
                  className="grid w-full grid-cols-[auto_1fr_auto] gap-x-3 px-4 py-3.5 text-left transition-colors hover:bg-canvas-faint"
                >
                  <span className="row-span-4">
                    <CategoryIcon category={p.category} />
                  </span>
                  <p className="truncate text-[15px] font-bold text-ink">{p.merchant}</p>
                  <span className="text-right text-[15px] font-bold tabular">
                    {fmtMoney(-p.amountCents)}
                  </span>
                  <p className="truncate text-[13.5px] text-muted">{p.item}</p>
                  <span className="inline-flex items-center justify-end text-[13.5px] text-hero">
                    Review
                    <ChevronRight className="size-4" />
                  </span>
                  <p className="col-span-2 mt-1.5 text-[12.5px] text-muted">
                    <span className="font-medium" style={{ color: CATEGORIES[p.category].color }}>
                      {CATEGORIES[p.category].label}
                    </span>{" "}
                    · Online · {p.placed}
                  </p>
                  <p className="col-span-2 mt-0.5 flex items-center gap-1.5 text-[12.5px] text-amber">
                    <PendingIcon className="size-3.5 shrink-0" />
                    Held: {p.heldBecause}
                  </p>
                </button>
              ))}
            </Card>
          ) : (
            <Card className="flex flex-col items-center px-5 py-6 text-center">
              <TickCircleIcon className="size-8 text-success" />
              <p className="mt-2 text-[15px] font-bold">You’re all caught up</p>
              <p className="mt-0.5 text-[13.5px] text-muted">
                No online purchases are waiting for approval.
              </p>
              <Button
                variant="link"
                size="sm"
                className="mt-1"
                onClick={() => dispatch({ type: "restorePending" })}
              >
                Restore demo transactions
              </Button>
            </Card>
          )}
        </section>

        <section className="space-y-2.5">
          <SectionTitle>What if?</SectionTitle>
          <Card className="overflow-hidden">
            <div className="p-4">
              <p className="text-[13.5px] leading-snug text-muted">
                Planning something bigger? Run the same goal check before you buy it.
              </p>
              <div className="mt-3 grid grid-cols-[1fr_7.5rem] gap-2">
                <input
                  value={wiName}
                  onChange={(e) => setWiName(e.target.value)}
                  placeholder="What is it?"
                  aria-label="Planned purchase"
                  className={inputClass}
                />
                <div className="relative">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[16px] text-muted">
                    $
                  </span>
                  <input
                    value={wiAmount}
                    onChange={(e) => setWiAmount(e.target.value)}
                    inputMode="decimal"
                    aria-label="Amount"
                    className={cx(inputClass, "pl-7 tabular")}
                  />
                </div>
              </div>
              <Button
                variant="heroSoft"
                className="mt-3 w-full"
                disabled={wiCents <= 0 || !wiName.trim()}
                onClick={() =>
                  dispatch({
                    type: "startCheck",
                    purchase: {
                      id: `whatif-${Date.now()}`,
                      merchant: "What-if",
                      item: wiName.trim(),
                      category: "shopping",
                      amountCents: Math.round(wiCents),
                      whatIf: true,
                    },
                  })
                }
              >
                Check goal impact
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <Alert look="info" className="border-b-0">
              This is a pretend purchase. No money moves and nothing is charged to your card.
            </Alert>
          </Card>
        </section>
      </div>
    </div>
  );
}

/* ---------- Purchase check sheet ---------- */

export function PurchaseSheet() {
  const { state, dispatch } = useStore();
  const check = state.check;
  // Keep the last check so the sheet can finish its exit animation after state clears.
  const last = useRef(check);
  if (check) last.current = check;
  const shown = last.current;
  const close = () => dispatch({ type: check?.decisionId ? "closeResult" : "dismissCheck" });
  return (
    <Sheet open={!!check?.open} onClose={close} label="Purchase check" tall>
      {shown &&
        (shown.decisionId ? (
          <PurchaseResult key={shown.decisionId} decisionId={shown.decisionId} />
        ) : (
          <PurchaseReview key={shown.purchase.id} purchase={shown.purchase} />
        ))}
    </Sheet>
  );
}

function ItemCard({ purchase }: { purchase: Purchase }) {
  const cat = CATEGORIES[purchase.category];
  return (
    <Card className="flex items-center gap-3 p-4">
      <CategoryIcon category={purchase.category} size="lg" />
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-[15.5px] leading-tight font-bold">{purchase.item}</p>
        <p className="mt-0.5 line-clamp-2 text-[13px] text-muted">
          {purchase.whatIf ? (
            "What-if purchase"
          ) : (
            <>
              {purchase.merchant} ·{" "}
              <span className="font-medium" style={{ color: cat.color }}>
                {cat.label}
              </span>
            </>
          )}
        </p>
      </div>
      <p className="text-[19px] font-bold tabular">{fmtMoney(purchase.amountCents)}</p>
    </Card>
  );
}

function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: -6 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      className="relative rounded-xl rounded-bl-[3px] border border-line bg-white px-3.5 py-2.5 text-[13.5px] leading-snug font-medium text-ink"
    >
      {children}
    </motion.div>
  );
}

function PurchaseReview({ purchase }: { purchase: Purchase }) {
  const { state, dispatch } = useStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), state.calm ? 250 : 1100);
    return () => clearTimeout(t);
  }, [state.calm]);

  const goal = state.goal;
  const impact = goal
    ? purchaseImpact(goal, state.savedCents, state.planId, purchase.amountCents)
    : null;
  const big = !!impact && impact.deltaDays >= 7;
  const mood: NavigatorMood = !ready ? "thinking" : big ? "worried" : "idle";
  const weeksOfSaving = purchase.amountCents / youPaceCents(state.planId);
  const whatIf = !!purchase.whatIf;

  return (
    <div className="flex min-h-full flex-col px-5 pt-3 pb-5">
      <div className="flex items-end gap-2 pr-10">
        <Navigator mood={mood} className="w-24 shrink-0" />
        <div className="mb-3 min-w-0">
          <SpeechBubble>
            {!ready
              ? "Hold on — checking this against your goal…"
              : whatIf
                ? `Here’s what ${purchase.item.toLowerCase()} would do to your goal.`
                : `Quick goal check before this settles, ${PERSONA.firstName}.`}
          </SpeechBubble>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        <ItemCard purchase={purchase} />
        {purchase.placed && (
          <p className="-mt-1 flex items-center gap-1.5 px-1 text-[12.5px] text-muted">
            <PendingIcon className="size-4 text-amber" />
            Pending · placed {purchase.placed?.toLowerCase()} · {purchase.heldBecause}
          </p>
        )}

        <Card className="p-4">
          <p className="text-[13px] font-bold text-navy">How this impacts your goal</p>
          {!ready ? (
            <div className="mt-3 space-y-2.5" aria-label="Checking">
              <div className="wt-shimmer h-4 w-[92%] rounded-md" />
              <div className="wt-shimmer h-4 w-[70%] rounded-md" />
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <div className="wt-shimmer h-[68px] rounded-lg" />
                <ArrowRight className="size-5 text-faint" />
                <div className="wt-shimmer h-[68px] rounded-lg" />
              </div>
            </div>
          ) : impact && goal ? (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mt-1.5 text-[17px] leading-snug font-bold">
                {impact.deltaDays === 0 ? (
                  <>This doesn’t move your {goal.reason.toLowerCase()} date.</>
                ) : (
                  <>
                    This {whatIf ? "would push" : "pushes"} your {goal.reason.toLowerCase()} back{" "}
                    {impact.deltaDays >= 7 ? "about " : ""}
                    <span className="text-danger">{fmtSpan(impact.deltaDays)}</span>.
                  </>
                )}
              </p>
              <p className="mt-1 text-[13px] text-muted">
                That’s{" "}
                {weeksOfSaving >= 1
                  ? `${weeksOfSaving.toFixed(1)} weeks`
                  : `${Math.round(weeksOfSaving * 7)} days`}{" "}
                of saving at {fmtMoney(youPaceCents(state.planId))}/wk.
              </p>
              <Pill tone={purchase.habitLink ? "bad" : "neutral"} className="mt-2.5">
                <Repeat className="size-3.5" />
                {purchase.habitLink ?? "One-off purchase · not part of a habit"}
              </Pill>

              <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <DateBox label="Now" day={impact.beforeDay} />
                <ArrowRight className="size-5 text-navy" />
                <DateBox
                  label="After"
                  day={impact.afterDay}
                  tone={impact.deltaDays > 0 ? "bad" : "neutral"}
                />
              </div>
            </motion.div>
          ) : (
            <div className="mt-2">
              <p className="text-[14px] leading-snug">
                You haven’t set a goal yet, so there’s nothing to measure this against.
              </p>
              <Button
                variant="faint"
                size="sm"
                className="mt-3"
                onClick={() => {
                  dispatch({ type: "dismissCheck" });
                  dispatch({ type: "goalView", view: "setup" });
                }}
              >
                <Target className="size-4" />
                Set a goal
              </Button>
            </div>
          )}
        </Card>
        <Notice>
          General information only. The Navigator shows the impact; the decision is yours.
        </Notice>
      </div>

      <div className="mt-auto pt-4">
        <p className="mb-2.5 text-center text-[12px] text-muted">
          {whatIf
            ? "Nothing will be charged."
            : "This payment won’t settle until you approve it. Declining cancels it."}
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <Button
            variant="primarySoft"
            size="lg"
            onClick={() => dispatch({ type: "decide", outcome: "declined" })}
          >
            {whatIf ? "Skip it" : "Decline"}
          </Button>
          <Button size="lg" onClick={() => dispatch({ type: "decide", outcome: "approved" })}>
            {whatIf ? "I’d buy it" : "Approve"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function DateBox({
  label,
  day,
  tone = "neutral",
  struck = false,
}: {
  label: string;
  day: number;
  tone?: "neutral" | "bad" | "good";
  struck?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-lg border px-3 py-2.5",
        tone === "bad"
          ? "border-danger/40 bg-danger-tint"
          : tone === "good"
            ? "border-success/40 bg-success-tint"
            : "border-line bg-white",
      )}
    >
      <p className="text-[12px] text-muted">{label}</p>
      <p
        className={cx(
          "text-[24px] leading-tight font-bold tabular",
          struck
            ? "text-faint line-through decoration-2"
            : tone === "bad"
              ? "text-danger"
              : tone === "good"
                ? "text-success"
                : "text-ink",
        )}
      >
        {fmtMMYY(day)}
      </p>
      <p className="text-[11.5px] text-muted">{fmtDay(day)}</p>
    </div>
  );
}

/* ---------- Confirmation ---------- */

function PurchaseResult({ decisionId }: { decisionId: string }) {
  const { state } = useStore();
  const decision = state.decisions.find((d) => d.id === decisionId);
  return decision ? <ResultBody decision={decision} /> : null;
}

function ResultBody({ decision }: { decision: Decision }) {
  const { state, dispatch } = useStore();
  const approved = decision.outcome === "approved";
  const { purchase, whatIf } = decision;
  const hasGoal = decision.beforeDay !== null && decision.afterDay !== null && !!state.goal;
  const delta = hasGoal ? decision.afterDay! - decision.beforeDay! : 0;
  const reroute = decision.reroute;
  const showReroutes = approved && !whatIf && hasGoal && delta > 0;

  const [knocked, setKnocked] = useState(approved && !whatIf && delta > 0);
  useEffect(() => {
    if (!knocked) return;
    const t = setTimeout(() => setKnocked(false), 950);
    return () => clearTimeout(t);
  }, [knocked]);

  const mood: NavigatorMood = !approved
    ? "happy"
    : reroute
      ? "happy"
      : knocked
        ? "knocked"
        : delta >= 7
          ? "worried"
          : "idle";

  const title = whatIf
    ? approved
      ? "Noted — just a what-if"
      : "Skipped — nice one"
    : approved
      ? "Payment approved"
      : "Payment declined";

  const rerouteDay =
    reroute && state.goal ? youArrivalDay(state.goal, state.savedCents, reroute) : null;

  return (
    <div className="flex min-h-full flex-col px-5 pt-4 pb-5">
      <div className="flex flex-col items-center text-center">
        <Navigator mood={mood} className="w-32" />
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 font-brand text-[26px] leading-tight text-navy"
        >
          {title}
        </motion.h2>
        {!whatIf && (
          <Pill tone={approved ? "good" : "neutral"} className="mt-2">
            {approved ? `Settled to ${PERSONA.account.name}` : "Cancelled · nothing was charged"}
          </Pill>
        )}
        <p className="mt-1 max-w-[300px] text-[14px] leading-snug text-muted">
          {!hasGoal
            ? approved && !whatIf
              ? "Set a goal to see how purchases like this affect it."
              : "Set a goal to see how decisions like this add up."
            : whatIf
              ? approved
                ? `Nothing was charged. Buying it would move your goal to ${fmtDay(decision.afterDay!)}.`
                : `Nothing was charged. Skipping it keeps you on ${fmtDay(decision.beforeDay!)}.`
              : approved
                ? delta > 0
                  ? `Your goal moved back ${fmtSpan(delta)}. You’ve been knocked back on the track.`
                  : "This one doesn’t move your goal date."
                : delta > 0
                  ? `You kept ${fmtSpan(delta)} on your goal and stayed on pace.`
                  : "Cancelled. Your goal date is unchanged."}
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <ItemCard purchase={purchase} />

        {hasGoal && (
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            {approved ? (
              <>
                <DateBox label="Before" day={decision.beforeDay!} />
                <ArrowRight className="size-5 text-navy" />
                <DateBox
                  label={whatIf ? "If bought" : "Now"}
                  day={decision.afterDay!}
                  tone={delta > 0 ? "bad" : "neutral"}
                />
              </>
            ) : (
              <>
                <DateBox label="Avoided" day={decision.afterDay!} struck={delta > 0} />
                <ArrowRight className="size-5 text-navy" />
                <DateBox label="Still on" day={decision.beforeDay!} tone="good" />
              </>
            )}
          </div>
        )}

        {showReroutes && (
          <Card className="p-4">
            <p className="text-[15px] font-bold text-navy">Win the time back</p>
            <p className="text-[12.5px] text-muted">
              Pick a reroute and You surges forward on the track.
            </p>
            <div className="mt-3 space-y-2">
              {PLANS.map((pl) => {
                const day = youArrivalDay(state.goal!, state.savedCents, pl.id);
                const active = reroute === pl.id;
                return (
                  <button
                    key={pl.id}
                    onClick={() =>
                      dispatch({
                        type: "applyPlan",
                        planId: active ? null : pl.id,
                        fromReroute: true,
                      })
                    }
                    className={cx(
                      "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                      active
                        ? "border-success bg-success-tint"
                        : "border-line bg-white hover:border-navy/50",
                    )}
                  >
                    <span
                      className={cx(
                        "grid size-5 shrink-0 place-items-center rounded-full border-2",
                        active ? "border-success bg-success text-white" : "border-navy/25",
                      )}
                    >
                      {active && <Check className="size-3" strokeWidth={3.5} />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-bold">{pl.name}</p>
                      <p className="text-[12px] leading-snug text-muted">{pl.action}</p>
                    </div>
                    <span className="shrink-0 text-right">
                      <span className="block text-[13px] font-bold tabular">{fmtDay(day)}</span>
                      <span className="block text-[11.5px] font-semibold text-success tabular">
                        +{fmtMoney(pl.boostCents)}/wk
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <AnimatePresence>
              {rerouteDay !== null && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pt-3 text-[13px] font-semibold text-success"
                >
                  Back on track for {fmtDay(rerouteDay)}
                  {rerouteDay < decision.beforeDay! &&
                    ` — ${fmtSpan(decision.beforeDay! - rerouteDay)} sooner than before the purchase`}
                  .
                </motion.p>
              )}
            </AnimatePresence>
          </Card>
        )}
      </div>

      <div className="mt-auto grid gap-2.5 pt-5">
        {state.goal ? (
          <Button
            size="lg"
            onClick={() => {
              dispatch({ type: "closeResult" });
              dispatch({ type: "goalView", view: "timeline" });
            }}
          >
            See timeline
          </Button>
        ) : (
          <Button
            size="lg"
            variant="primary"
            onClick={() => {
              dispatch({ type: "closeResult" });
              dispatch({ type: "goalView", view: "setup" });
            }}
          >
            Set a goal
          </Button>
        )}
        <Button size="lg" variant="heroSoft" onClick={() => dispatch({ type: "closeResult" })}>
          Close
        </Button>
      </div>
    </div>
  );
}
