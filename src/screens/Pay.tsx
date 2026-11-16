import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, ChevronRight, Hand, Nfc, Repeat, Target } from "lucide-react";
import { Button, Card, CategoryIcon, Notice, ScreenHeader, Sheet, cx } from "@/components/ui";
import { Navigator, type NavigatorMood } from "@/components/Wallaby";
import { CATEGORIES, DEMO_PURCHASES, PERSONA, type Purchase } from "@/data/persona";
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
import { useStore, type Decision } from "@/state/store";

export function PayScreen() {
  const { state, dispatch } = useStore();
  const [holding, setHolding] = useState<string | null>(null);
  const [wiName, setWiName] = useState("New laptop");
  const [wiAmount, setWiAmount] = useState("1,800");
  const held =
    state.check && !state.check.open && !state.check.decisionId ? state.check.purchase : null;

  const pay = (purchase: Purchase) => {
    setHolding(purchase.id);
    setTimeout(
      () => {
        setHolding(null);
        dispatch({ type: "startCheck", purchase });
      },
      state.calm ? 150 : 650,
    );
  };

  const wiCents = (Number(wiAmount.replace(/[^\d.]/g, "")) || 0) * 100;

  return (
    <div className="pb-8">
      <ScreenHeader
        title="Pay"
        subtitle={`Debit card ending ${PERSONA.account.card} · demo checkout`}
      />
      <div className="space-y-5 px-5">
        <AnimatePresence>
          {held && (
            <motion.button
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              onClick={() => dispatch({ type: "reopenCheck" })}
              className="flex w-full items-center gap-3 rounded-[20px] bg-amber-tint p-3.5 text-left ring-1 ring-amber/15"
            >
              <Hand className="size-5 shrink-0 text-amber" />
              <span className="min-w-0 flex-1 text-[13px] leading-snug">
                <b>{held.item}</b> ({fmtMoney(held.amountCents)}) is on hold until you approve or
                decline it.
              </span>
              <ChevronRight className="size-5 shrink-0 text-amber" />
            </motion.button>
          )}
        </AnimatePresence>

        <section className="space-y-2.5">
          <h2 className="px-1 text-[15px] font-bold">Ready at checkout</h2>
          {DEMO_PURCHASES.map((p) => {
            const isHolding = holding === p.id;
            return (
              <Card key={p.id} className="p-4">
                <div className="flex items-center gap-3">
                  <CategoryIcon category={p.category} size="lg" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-bold">{p.merchant}</p>
                    <p className="truncate text-[13px] text-muted">{p.item}</p>
                  </div>
                  <p className="text-[17px] font-extrabold tabular">{fmtMoney(p.amountCents)}</p>
                </div>
                <button
                  onClick={() => pay(p)}
                  disabled={!!holding}
                  className={cx(
                    "mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-semibold transition-colors",
                    isHolding ? "bg-navy text-white" : "bg-navy/[0.06] text-navy hover:bg-navy/10",
                  )}
                >
                  {isHolding ? (
                    <>
                      <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Holding payment…
                    </>
                  ) : (
                    <>
                      <Nfc className="size-[18px]" />
                      Tap to pay {fmtMoney(p.amountCents)}
                    </>
                  )}
                </button>
              </Card>
            );
          })}
        </section>

        <section className="space-y-2.5">
          <h2 className="px-1 text-[15px] font-bold">What if?</h2>
          <Card className="p-4">
            <p className="text-[13.5px] leading-snug text-muted">
              Planning something bigger? Run the same goal check first. Nothing gets charged.
            </p>
            <div className="mt-3 grid grid-cols-[1fr_7.5rem] gap-2">
              <input
                value={wiName}
                onChange={(e) => setWiName(e.target.value)}
                placeholder="What is it?"
                aria-label="Planned purchase"
                className="h-12 min-w-0 rounded-xl bg-canvas px-3.5 text-[15px] font-semibold outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-navy/40"
              />
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[15px] font-semibold text-muted">
                  $
                </span>
                <input
                  value={wiAmount}
                  onChange={(e) => setWiAmount(e.target.value)}
                  inputMode="decimal"
                  aria-label="Amount"
                  className="h-12 w-full rounded-xl bg-canvas pr-3 pl-7 text-[15px] font-semibold outline-none ring-1 ring-black/5 tabular focus:ring-2 focus:ring-navy/40"
                />
              </div>
            </div>
            <Button
              variant="outline"
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
          </Card>
        </section>
        <Notice>Purchases here are simulated. No real money moves and no card is charged.</Notice>
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
        <p className="mt-0.5 truncate text-[13px] font-semibold" style={{ color: cat.color }}>
          {purchase.whatIf ? "What-if" : `${purchase.merchant} · ${cat.label}`}
        </p>
      </div>
      <p className="text-[19px] font-extrabold tracking-[-0.02em] tabular">
        {fmtMoney(purchase.amountCents)}
      </p>
    </Card>
  );
}

function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: -6 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      className="relative rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13.5px] leading-snug font-semibold text-ink shadow-sm ring-1 ring-black/5"
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
                : `Quick goal check before you pay, ${PERSONA.firstName}.`}
          </SpeechBubble>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        <ItemCard purchase={purchase} />

        <Card className="p-4">
          <p className="text-[13px] font-semibold text-muted">How this impacts your goal</p>
          {!ready ? (
            <div className="mt-3 space-y-2.5" aria-label="Checking">
              <div className="wt-shimmer h-4 w-[92%] rounded-md" />
              <div className="wt-shimmer h-4 w-[70%] rounded-md" />
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <div className="wt-shimmer h-[68px] rounded-2xl" />
                <ArrowRight className="size-5 text-faint" />
                <div className="wt-shimmer h-[68px] rounded-2xl" />
              </div>
            </div>
          ) : impact && goal ? (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mt-1.5 text-[17px] leading-snug font-bold tracking-[-0.01em]">
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
              <span
                className={cx(
                  "mt-2.5 inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-[12.5px] font-semibold",
                  purchase.habitLink ? "bg-danger-tint text-danger" : "bg-navy/[0.06] text-muted",
                )}
              >
                <Repeat className="size-3.5" />
                {purchase.habitLink ?? "One-off purchase · not part of a habit"}
              </span>

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
                variant="soft"
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
            : "Payment held — nothing is charged until you choose."}
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <Button
            variant="outline"
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
        "rounded-2xl px-3 py-2.5 ring-1",
        tone === "bad"
          ? "bg-danger-tint/60 ring-danger/20"
          : tone === "good"
            ? "bg-success-tint ring-success/20"
            : "bg-canvas ring-black/5",
      )}
    >
      <p className="text-[11.5px] font-semibold text-muted">{label}</p>
      <p
        className={cx(
          "text-[24px] leading-tight font-extrabold tracking-[-0.02em] tabular",
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
          className="mt-3 text-[24px] leading-tight font-extrabold tracking-[-0.025em]"
        >
          {title}
        </motion.h2>
        <p className="mt-1 max-w-[300px] text-[14px] leading-snug text-muted">
          {!hasGoal
            ? approved && !whatIf
              ? "Paid. Set a goal to see how purchases like this affect it."
              : "Set a goal to see how decisions like this add up."
            : whatIf
              ? approved
                ? `Nothing was charged. Buying it would move your goal to ${fmtDay(decision.afterDay!)}.`
                : `Nothing was charged. Skipping it keeps you on ${fmtDay(decision.beforeDay!)}.`
              : approved
                ? delta > 0
                  ? `Your goal moved back ${fmtSpan(delta)}. You’ve been knocked back on the track.`
                  : "Paid. This one doesn’t move your goal date."
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
            <p className="text-[14.5px] font-bold">Win the time back</p>
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
                      "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left ring-1 transition-all",
                      active
                        ? "bg-success-tint ring-2 ring-success"
                        : "bg-canvas ring-black/5 hover:ring-navy/25",
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
            variant="hero"
            onClick={() => {
              dispatch({ type: "closeResult" });
              dispatch({ type: "goalView", view: "setup" });
            }}
          >
            Set a goal
          </Button>
        )}
        <Button size="lg" variant="outline" onClick={() => dispatch({ type: "closeResult" })}>
          Close
        </Button>
      </div>
    </div>
  );
}
