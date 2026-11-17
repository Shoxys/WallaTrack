/**
 * WallaTrack deterministic engine.
 * All money is in whole cents. Pace is net savings per week (cents/week).
 * Arrival = remaining amount divided by pace, rounded up to the next whole day.
 */

export const DAY_MS = 86_400_000;

/** Demo "today" — Tuesday 17 November 2026. Every projection counts from here. */
export const TODAY = Date.UTC(2026, 10, 17);

export type RacerId = "you" | "ghost" | "best" | "peers";
export type PlanId = "fastest" | "side" | "comfortable";

export interface Goal {
  amountCents: number;
  /** Target day offset from TODAY */
  targetDay: number;
  reason: string;
  /** Saved amount at the moment the goal was set — baseline racers start here */
  startSavedCents: number;
}

export interface Plan {
  id: PlanId;
  name: string;
  title: string;
  action: string;
  boostCents: number;
}

export interface RacerProjection {
  id: RacerId;
  name: string;
  paceCents: number;
  startCents: number;
  arrivalDay: number;
}

/** Persona paces (Alex Sample, last 12 weeks of CDR-shaped transactions). */
export const PACE = {
  /** Current pace: $1,814.40 kept over 12 weeks */
  baseCents: 15_120,
  /** Top habit: Friday Uber Eats, $748.80 over 12 weeks */
  habitCents: 6_240,
  /** Best stretch: Aug 2026 */
  bestCents: 17_600,
  /** Illustrative peer pace */
  peersCents: 9_210,
} as const;

export const PLANS: Plan[] = [
  {
    id: "fastest",
    name: "Fastest",
    title: "Remove top habit",
    action: "Pause Friday Uber Eats",
    boostCents: PACE.habitCents,
  },
  {
    id: "side",
    name: "Side hustle",
    title: "Extra savings",
    action: "One 2-hour shift a fortnight",
    boostCents: 2_930,
  },
  {
    id: "comfortable",
    name: "Comfortable",
    title: "Small swaps",
    action: "Home coffee 3 days a week",
    boostCents: 1_750,
  },
];

export const planById = (id: PlanId | null) => PLANS.find((p) => p.id === id) ?? null;

/** Days to cover `remainingCents` at `paceCents` per week. */
export function arrivalDays(remainingCents: number, paceCents: number): number {
  if (remainingCents <= 0) return 0;
  if (paceCents <= 0) return Number.POSITIVE_INFINITY;
  return Math.ceil((remainingCents * 7) / paceCents);
}

export function youPaceCents(planId: PlanId | null): number {
  return PACE.baseCents + (planById(planId)?.boostCents ?? 0);
}

export function youArrivalDay(goal: Goal, savedCents: number, planId: PlanId | null): number {
  return arrivalDays(goal.amountCents - savedCents, youPaceCents(planId));
}

export function projectRacers(
  goal: Goal,
  savedCents: number,
  planId: PlanId | null,
): RacerProjection[] {
  const baseRemaining = goal.amountCents - goal.startSavedCents;
  const you = youPaceCents(planId);
  return [
    {
      id: "you",
      name: "You",
      paceCents: you,
      startCents: savedCents,
      arrivalDay: arrivalDays(goal.amountCents - savedCents, you),
    },
    {
      id: "ghost",
      name: "Habit ghost",
      paceCents: PACE.baseCents + PACE.habitCents,
      startCents: goal.startSavedCents,
      arrivalDay: arrivalDays(baseRemaining, PACE.baseCents + PACE.habitCents),
    },
    {
      id: "best",
      name: "Best you",
      paceCents: PACE.bestCents,
      startCents: goal.startSavedCents,
      arrivalDay: arrivalDays(baseRemaining, PACE.bestCents),
    },
    {
      id: "peers",
      name: "People like you",
      paceCents: PACE.peersCents,
      startCents: goal.startSavedCents,
      arrivalDay: arrivalDays(baseRemaining, PACE.peersCents),
    },
  ];
}

/** Saved amount for a racer at a given day of the race. */
export function savedAt(racer: RacerProjection, day: number, goalCents: number): number {
  return Math.min(goalCents, racer.startCents + (racer.paceCents * day) / 7);
}

export interface PurchaseImpact {
  beforeDay: number;
  afterDay: number;
  deltaDays: number;
}

export function purchaseImpact(
  goal: Goal,
  savedCents: number,
  planId: PlanId | null,
  amountCents: number,
): PurchaseImpact {
  const beforeDay = youArrivalDay(goal, savedCents, planId);
  const afterDay = youArrivalDay(goal, savedCents - amountCents, planId);
  return { beforeDay, afterDay, deltaDays: afterDay - beforeDay };
}

/** Weekly pace needed to arrive exactly on the target day. */
export function neededPaceCents(goal: Goal, savedCents: number): number {
  const days = Math.max(1, goal.targetDay);
  return Math.ceil(((goal.amountCents - savedCents) * 7) / days);
}

/* ---------- Dates ---------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const dayToDate = (day: number) => new Date(TODAY + day * DAY_MS);
export const dateToDay = (d: Date) => Math.round((d.getTime() - TODAY) / DAY_MS);

/** "31 Mar 2028" */
export function fmtDay(day: number): string {
  if (!Number.isFinite(day)) return "Never";
  const d = dayToDate(day);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "Mar 2028" */
export function fmtMonth(day: number): string {
  const d = dayToDate(day);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "03/28" */
export function fmtMMYY(day: number): string {
  const d = dayToDate(day);
  return `${String(d.getUTCMonth() + 1).padStart(2, "0")}/${String(d.getUTCFullYear()).slice(2)}`;
}

/** "31/01/2028" */
export function fmtDMY(day: number): string {
  const d = dayToDate(day);
  return `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${d.getUTCFullYear()}`;
}

/** "Tuesday 17 November" */
export function fmtLongDay(day: number): string {
  const d = dayToDate(day);
  return `${WEEKDAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MONTHS_LONG[d.getUTCMonth()]}`;
}

/** ISO yyyy-mm-dd for <input type="date"> */
export function dayToIso(day: number): string {
  return dayToDate(day).toISOString().slice(0, 10);
}

export function isoToDay(iso: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  return Math.round((Date.UTC(+m[1], +m[2] - 1, +m[3]) - TODAY) / DAY_MS);
}

/** Human span: "8 weeks", "3 days", "1 week" */
export function fmtSpan(days: number): string {
  const abs = Math.abs(days);
  if (abs < 7) return `${abs} day${abs === 1 ? "" : "s"}`;
  const weeks = Math.round(abs / 7);
  return `${weeks} week${weeks === 1 ? "" : "s"}`;
}

/* ---------- Money ---------- */

export function fmtMoney(cents: number, opts: { cents?: boolean; sign?: boolean } = {}): string {
  const showCents = opts.cents ?? true;
  const abs = Math.abs(cents) / 100;
  const body = abs.toLocaleString("en-AU", {
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  });
  const sign = cents < 0 ? "−" : opts.sign ? "+" : "";
  return `${sign}$${body}`;
}

/** "$15k", "$7.5k" */
export function fmtK(cents: number): string {
  const k = cents / 100_000;
  return `$${Number.isInteger(k) ? k : k.toFixed(1)}k`;
}

/* ---------- Number guard ---------- */

export interface EngineCheck {
  label: string;
  expected: string;
  actual: string;
  ok: boolean;
}

/**
 * Re-checks every demo date from the spec at startup. The UI only ever renders
 * engine output, so this guards the published demo numbers.
 */
export function verifyDemoDates(): EngineCheck[] {
  const goal: Goal = {
    amountCents: 1_500_000,
    targetDay: 0,
    reason: "",
    startSavedCents: 420_000,
  };
  const racers = projectRacers(goal, 420_000, null);
  const by = (id: RacerId) => racers.find((r) => r.id === id)!.arrivalDay;
  const pc = purchaseImpact(goal, 420_000, null, 120_000);
  const afterPc = 300_000;
  const checks: [string, string, number][] = [
    ["You (current pace)", "31 Mar 2028", by("you")],
    ["Habit ghost", "6 Nov 2027", by("ghost")],
    ["People like you", "15 Feb 2029", by("peers")],
    ["PC purchase: before", "31 Mar 2028", pc.beforeDay],
    ["PC purchase: after", "26 May 2028", pc.afterDay],
    ["Reroute: Fastest", "16 Dec 2027", youArrivalDay(goal, afterPc, "fastest")],
    ["Reroute: Side hustle", "26 Feb 2028", youArrivalDay(goal, afterPc, "side")],
    ["Reroute: Comfortable", "29 Mar 2028", youArrivalDay(goal, afterPc, "comfortable")],
  ];
  return checks.map(([label, expected, day]) => {
    const actual = fmtDay(day);
    return { label, expected, actual, ok: actual === expected };
  });
}
