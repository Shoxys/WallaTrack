import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button, Card, Notice, ScreenHeader, cx } from "@/components/ui";
import { Navigator } from "@/components/Wallaby";
import {
  DAY_MS,
  PACE,
  TODAY,
  arrivalDays,
  dayToIso,
  fmtDay,
  fmtDMY,
  fmtMoney,
  fmtSpan,
  isoToDay,
} from "@/engine/engine";
import { DEFAULT_GOAL, useStore } from "@/state/store";
import { HABITS, TRANSACTIONS } from "@/data/persona";

const AMOUNT_PRESETS = [5_000, 10_000, 15_000, 25_000];
const REASONS = ["First home starter", "New car", "Big trip", "Emergency fund"];
const STEP = 500;

function monthsFromToday(months: number) {
  const d = new Date(TODAY);
  return Math.round(
    (Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + months, d.getUTCDate()) - TODAY) / DAY_MS,
  );
}

const TIMELINE_PRESETS = [
  { label: "1 year", day: monthsFromToday(12) },
  { label: "18 months", day: monthsFromToday(18) },
  { label: "2 years", day: monthsFromToday(24) },
];

export function GoalSetupScreen() {
  const { state, dispatch } = useStore();
  const existing = state.goal;
  const [amount, setAmount] = useState(
    String((existing?.amountCents ?? DEFAULT_GOAL.amountCents) / 100),
  );
  const [targetIso, setTargetIso] = useState(
    dayToIso(existing?.targetDay ?? DEFAULT_GOAL.targetDay),
  );
  const [reason, setReason] = useState(existing?.reason ?? DEFAULT_GOAL.reason);
  const dateRef = useRef<HTMLInputElement>(null);

  const dollars = Number(amount.replace(/[^\d]/g, "")) || 0;
  const amountCents = dollars * 100;
  const targetDay = isoToDay(targetIso);

  const errors = {
    amount:
      amountCents <= state.savedCents
        ? `Make it more than your current ${fmtMoney(state.savedCents, { cents: false })} balance.`
        : dollars > 500_000
          ? "Keep it under $500,000 for this demo."
          : null,
    target:
      targetDay === null
        ? "Pick an end date."
        : targetDay < 30
          ? "Pick a date at least a month away."
          : targetDay > 3650
            ? "Pick a date within 10 years."
            : null,
    reason: reason.trim().length === 0 ? "Tell us what it’s for." : null,
  };
  const valid = !errors.amount && !errors.target && !errors.reason;

  const preview = useMemo(() => {
    if (errors.amount || targetDay === null) return null;
    const day = arrivalDays(amountCents - state.savedCents, PACE.baseCents);
    return { day, vs: day - targetDay };
  }, [amountCents, targetDay, state.savedCents, errors.amount]);

  const step = (dir: 1 | -1) =>
    setAmount(String(Math.max(STEP, Math.round((dollars + dir * STEP) / STEP) * STEP)));

  return (
    <div className="pb-8">
      <ScreenHeader
        title={existing ? "Edit goal" : "Set goal"}
        subtitle="Goal"
        onBack={existing ? () => dispatch({ type: "goalView", view: "insights" }) : undefined}
      />
      <div className="space-y-3.5 px-5">
        <Card className="p-4">
          <label htmlFor="goal-amount" className="text-[15px] font-bold text-ink">
            Total amount
          </label>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[38px] leading-none font-bold text-ink">$</span>
            <input
              id="goal-amount"
              inputMode="numeric"
              value={dollars ? dollars.toLocaleString("en-AU") : ""}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-0 min-w-0 flex-1 bg-transparent text-[38px] leading-none font-bold text-ink tabular placeholder:text-faint"
            />
            <div className="flex flex-col overflow-hidden rounded-[5px] border border-line-strong">
              <button
                onClick={() => step(1)}
                className="grid h-7 w-10 place-items-center text-navy hover:bg-navy-faint"
                aria-label="Increase by $500"
              >
                <ChevronUp className="size-4" />
              </button>
              <button
                onClick={() => step(-1)}
                className="grid h-7 w-10 place-items-center border-t border-line-strong text-navy hover:bg-navy-faint"
                aria-label="Decrease by $500"
              >
                <ChevronDown className="size-4" />
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {AMOUNT_PRESETS.map((v) => (
              <Chip key={v} active={dollars === v} onClick={() => setAmount(String(v))}>
                ${v.toLocaleString("en-AU")}
              </Chip>
            ))}
          </div>
          {errors.amount && <FieldError>{errors.amount}</FieldError>}
        </Card>

        <Card className="p-4">
          <p id="goal-date-label" className="text-[15px] font-bold text-ink">
            Timeline end
          </p>
          <div className="relative mt-1.5">
            <CalendarDays className="pointer-events-none absolute top-1/2 left-3.5 size-[18px] -translate-y-1/2 text-navy" />
            {/* Native picker, presented with a DD/MM/YYYY label regardless of browser locale */}
            <button
              type="button"
              aria-labelledby="goal-date-label"
              aria-describedby="goal-date-value"
              onClick={() => {
                const el = dateRef.current;
                if (!el) return;
                try {
                  el.showPicker();
                } catch {
                  el.focus();
                }
              }}
              className="flex h-12 w-full items-center rounded-[5px] border border-line-strong bg-white pr-3 pl-11 text-left text-[16px] text-ink tabular hover:border-navy"
            >
              <span id="goal-date-value">
                {targetDay !== null ? fmtDMY(targetDay) : "DD/MM/YYYY"}
              </span>
              {targetDay !== null && targetDay >= 30 && (
                <span className="ml-auto text-[12.5px] font-medium text-muted">
                  {fmtSpan(targetDay)} away
                </span>
              )}
            </button>
            <input
              ref={dateRef}
              type="date"
              tabIndex={-1}
              aria-hidden="true"
              value={targetIso}
              min={dayToIso(30)}
              onChange={(e) => setTargetIso(e.target.value)}
              className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {TIMELINE_PRESETS.map((p) => (
              <Chip
                key={p.label}
                active={targetDay === p.day}
                onClick={() => setTargetIso(dayToIso(p.day))}
              >
                {p.label}
              </Chip>
            ))}
          </div>
          {errors.target && <FieldError>{errors.target}</FieldError>}
        </Card>

        <Card className="p-4">
          <label htmlFor="goal-reason" className="text-[15px] font-bold text-ink">
            What are you saving for?
          </label>
          <input
            id="goal-reason"
            value={reason}
            maxLength={40}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g. First home starter"
            className="mt-1.5 h-12 w-full rounded-[5px] border border-line-strong bg-white px-3.5 text-[16px] text-ink placeholder:text-muted/70"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {REASONS.map((r) => (
              <Chip key={r} active={reason === r} onClick={() => setReason(r)}>
                {r}
              </Chip>
            ))}
          </div>
          {errors.reason && <FieldError>{errors.reason}</FieldError>}
        </Card>

        {preview && (
          <div className="rounded-lg bg-navy-faint px-4 py-3 text-[13px] leading-snug text-ink">
            At your current pace of <b className="tabular">{fmtMoney(PACE.baseCents)}/wk</b>, you’d
            reach {fmtMoney(amountCents, { cents: false })} on <b>{fmtDay(preview.day)}</b>
            {preview.vs > 0 ? (
              <> — {fmtSpan(preview.vs)} after your end date.</>
            ) : (
              <>
                {" "}
                — {preview.vs === 0 ? "right on" : `${fmtSpan(preview.vs)} before`} your end date.
              </>
            )}
          </div>
        )}

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          disabled={!valid}
          onClick={() =>
            targetDay !== null &&
            dispatch({ type: "setGoal", goal: { amountCents, targetDay, reason: reason.trim() } })
          }
        >
          Confirm goal
        </Button>
        <Notice>
          Confirming runs an analysis of your last 12 weeks of payments. Demo data only.
        </Notice>
      </div>
    </div>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "h-8 rounded-full border px-3 text-[13.5px] transition-colors duration-300",
        active
          ? "border-navy bg-navy text-white"
          : "border-line-strong bg-white text-ink hover:border-navy",
      )}
    >
      {children}
    </button>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-2.5 text-[12.5px] font-medium text-danger">{children}</p>;
}

/* ---------- Analysing ---------- */

const STEPS = [
  {
    label: "Reading 12 weeks of transactions",
    done: `${TRANSACTIONS.length} recent payments · 6 paydays`,
  },
  { label: "Spotting habits", done: `${HABITS.length} habits found` },
  { label: "Projecting four racers", done: "You, Habit ghost, Best you, People like you" },
  { label: "Engine checking every number", done: "All dates verified" },
];

export function AnalysingScreen() {
  const { state, dispatch } = useStore();
  const [done, setDone] = useState(0);
  const stepMs = state.calm ? 250 : 650;

  useEffect(() => {
    if (done >= STEPS.length) {
      const t = setTimeout(() => dispatch({ type: "goalView", view: "insights" }), stepMs);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone((d) => d + 1), stepMs);
    return () => clearTimeout(t);
  }, [done, stepMs, dispatch]);

  return (
    <div className="flex min-h-full flex-col items-center px-6 pt-10 pb-8">
      <Navigator mood={done >= STEPS.length ? "happy" : "thinking"} className="w-36" />
      <h1 className="mt-6 text-center font-brand text-[26px] leading-tight text-navy">
        {done >= STEPS.length ? "Your race is ready" : "Analysing your goal"}
      </h1>
      <p className="mt-1 text-center text-[14px] text-muted">
        {state.goal
          ? `${fmtMoney(state.goal.amountCents, { cents: false })} · ${state.goal.reason}`
          : ""}
      </p>
      <ol className="mt-8 w-full space-y-2.5">
        {STEPS.map((s, i) => {
          const complete = i < done;
          const active = i === done;
          return (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: i <= done ? 1 : 0.4, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 border border-line"
            >
              <span
                className={cx(
                  "grid size-7 shrink-0 place-items-center rounded-full transition-colors",
                  complete ? "bg-success text-white" : active ? "bg-navy/10" : "bg-navy/5",
                )}
              >
                {complete ? (
                  <Check className="size-4" strokeWidth={3} />
                ) : active ? (
                  <span className="size-3 animate-spin rounded-full border-2 border-navy border-t-transparent" />
                ) : null}
              </span>
              <div className="min-w-0">
                <p className="text-[14.5px] font-medium">{s.label}</p>
                {complete && <p className="truncate text-[12px] text-muted">{s.done}</p>}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
