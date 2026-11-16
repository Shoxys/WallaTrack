/**
 * WallaTrack engine. Pure TypeScript, whole cents, no wall clock.
 *
 *   pace    = net savings per week (income minus spending over the last 12 weeks)
 *   arrival = as-of date + remaining amount / pace, rounded up to the next whole day
 *
 * Every number the app or the AI Navigator shows comes from here.
 */
import { addDays, formatDate, formatDayMonth, toEpochDay, weekdayIndex, weekdayName } from './dates';
import { formatMoney, parseAmountToCents } from './money';
import type {
  Analysis,
  CategorySpend,
  Habit,
  Pace,
  Persona,
  PurchaseCheck,
  PurchaseInput,
  Racer,
  Reroute,
  TrackState,
  Txn,
} from './types';

export const PACE_WINDOW_WEEKS = 12;
export const BEST_STRETCH_WEEKS = 4;

export const EMPTY_STATE: TrackState = { spentCents: 0, boostCentsPerWeek: 0, approvedByCategory: {} };

const MCC_CATEGORY: Record<string, string> = {
  '6513': 'Rent',
  '5411': 'Groceries',
  '4111': 'Transport',
  '4814': 'Phone & internet',
  '4900': 'Utilities',
  '5814': 'Takeaway',
  '5812': 'Eating out',
  '5813': 'Going out',
  '5499': 'Coffee',
  '4899': 'Entertainment',
  '7832': 'Entertainment',
  '5651': 'Shopping',
  '5942': 'Shopping',
  '5732': 'Electronics',
  '7997': 'Health & fitness',
};

const ESSENTIAL = new Set(['Rent', 'Groceries', 'Transport', 'Phone & internet', 'Utilities']);

/** Singular noun used in the habit line, e.g. "3rd takeaway this week". */
const CATEGORY_NOUN: Record<string, string> = {
  Takeaway: 'takeaway',
  Coffee: 'coffee',
  'Eating out': 'meal out',
  'Going out': 'night out',
  Shopping: 'shopping trip',
  Electronics: 'electronics purchase',
  Entertainment: 'entertainment purchase',
};

export function categoryForMcc(mcc: string | undefined): string {
  return (mcc && MCC_CATEGORY[mcc]) || 'Other';
}

export function isEssential(category: string): boolean {
  return ESSENTIAL.has(category);
}

export function categoryNoun(category: string): string {
  return CATEGORY_NOUN[category] ?? `${category.toLowerCase()} purchase`;
}

// ---------- pace maths ----------

/** Whole cents per week, rounded, for display only. */
export function weeklyCents(pace: Pace): number {
  return Math.round(pace.netCents / pace.weeks);
}

export function withBoost(pace: Pace, boostCentsPerWeek: number): Pace {
  return { netCents: pace.netCents + boostCentsPerWeek * pace.weeks, weeks: pace.weeks };
}

/**
 * Days until the remaining amount is saved at this pace, rounded up to a whole day.
 * Integer arithmetic only. Returns null if the pace never gets there.
 */
export function daysToGoal(remainingCents: number, pace: Pace): number | null {
  if (!Number.isInteger(remainingCents) || !Number.isInteger(pace.netCents) || !Number.isInteger(pace.weeks)) {
    throw new Error('Engine works in whole cents and whole weeks');
  }
  if (remainingCents <= 0) return 0;
  if (pace.netCents <= 0 || pace.weeks <= 0) return null;
  const numerator = remainingCents * 7 * pace.weeks;
  return Math.floor((numerator + pace.netCents - 1) / pace.netCents);
}

function arrival(asOf: string, remainingCents: number, pace: Pace): { days: number | null; date: string | null } {
  const days = daysToGoal(remainingCents, pace);
  return { days, date: days === null ? null : addDays(asOf, days) };
}

// ---------- analysis of the transaction history ----------

function toTxns(persona: Persona): Txn[] {
  return persona.transactions
    .filter((t) => t.accountId === persona.wallatrack.spendingAccountId && t.status === 'POSTED')
    .map((t) => {
      const cents = parseAmountToCents(t.amount);
      return {
        id: t.transactionId,
        date: t.postingDateTime.slice(0, 10),
        cents,
        merchant: t.merchantName ?? t.description,
        category: cents > 0 ? 'Income' : categoryForMcc(t.merchantCategoryCode),
      };
    })
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

function sumBetween(txns: Txn[], startDay: number, endDay: number): number {
  let total = 0;
  for (const t of txns) {
    const d = toEpochDay(t.date);
    if (d >= startDay && d < endDay) total += t.cents;
  }
  return total;
}

function findHabits(windowTxns: Txn[], windowStartDay: number, weeks: number): Habit[] {
  const byMerchant = new Map<string, Txn[]>();
  for (const t of windowTxns) {
    if (t.cents >= 0 || isEssential(t.category)) continue;
    const list = byMerchant.get(t.merchant) ?? [];
    list.push(t);
    byMerchant.set(t.merchant, list);
  }
  const habits: Habit[] = [];
  for (const [merchant, list] of byMerchant) {
    const weeksSeen = new Set(list.map((t) => Math.floor((toEpochDay(t.date) - windowStartDay) / 7))).size;
    // A habit shows up in at least three weeks out of four.
    if (weeksSeen * 4 < weeks * 3) continue;
    const totalCents = -list.reduce((s, t) => s + t.cents, 0);
    const dayCounts = new Array<number>(7).fill(0);
    for (const t of list) dayCounts[weekdayIndex(t.date)]++;
    const topDay = dayCounts.indexOf(Math.max(...dayCounts));
    const weekday = dayCounts[topDay] * 10 >= list.length * 7 ? topDay : null;
    const perWeek = Math.round(list.length / weeks);
    const label =
      weekday !== null
        ? `${weekdayName(weekday)} ${merchant}`
        : perWeek > 1
          ? `${merchant}, ${perWeek} times a week`
          : merchant;
    habits.push({
      merchant,
      category: list[0].category,
      totalCents,
      weeks,
      weeklyCents: Math.round(totalCents / weeks),
      occurrences: list.length,
      weeksSeen,
      weekday,
      label,
    });
  }
  return habits.sort((a, b) => b.totalCents - a.totalCents);
}

function findBestStretch(txns: Txn[], windowStartDay: number): Analysis['bestStretch'] {
  if (txns.length === 0) return null;
  const firstDay = toEpochDay(txns[0].date);
  const len = BEST_STRETCH_WEEKS * 7;
  let best: { net: number; start: number } | null = null;
  // Rolling four-week stretches, stepping a week at a time, all before the current pace window.
  for (let start = windowStartDay - len; start >= firstDay; start -= 7) {
    const net = sumBetween(txns, start, start + len);
    if (!best || net > best.net) best = { net, start };
  }
  if (!best) return null;
  return {
    pace: { netCents: best.net, weeks: BEST_STRETCH_WEEKS },
    start: addDays('1970-01-01', best.start),
    end: addDays('1970-01-01', best.start + len - 1),
  };
}

export function analyse(persona: Persona): Analysis {
  const { wallatrack: wt } = persona;
  const txns = toTxns(persona);
  const asOfDay = toEpochDay(persona.asOf);
  const windowStartDay = asOfDay - PACE_WINDOW_WEEKS * 7;
  const windowTxns = txns.filter((t) => {
    const d = toEpochDay(t.date);
    return d >= windowStartDay && d < asOfDay;
  });

  const incomeCents = windowTxns.filter((t) => t.cents > 0).reduce((s, t) => s + t.cents, 0);
  const spendCents = -windowTxns.filter((t) => t.cents < 0).reduce((s, t) => s + t.cents, 0);

  const byCategory = new Map<string, number>();
  for (const t of windowTxns) {
    if (t.cents >= 0) continue;
    byCategory.set(t.category, (byCategory.get(t.category) ?? 0) - t.cents);
  }
  const breakdown: CategorySpend[] = [...byCategory.entries()]
    .map(([category, totalCents]) => ({
      category,
      totalCents,
      weeklyCents: Math.round(totalCents / PACE_WINDOW_WEEKS),
      essential: isEssential(category),
    }))
    .sort((a, b) => b.totalCents - a.totalCents);

  const goalBalance = persona.balances.find((b) => b.accountId === wt.goal.accountId);
  if (!goalBalance) throw new Error('Persona has no balance for the goal account');

  const habits = findHabits(windowTxns, windowStartDay, PACE_WINDOW_WEEKS);

  return {
    personaId: persona.personaId,
    firstName: persona.customer.person.firstName,
    asOf: persona.asOf,
    goalName: wt.goal.name,
    goalCents: parseAmountToCents(wt.goal.amount),
    targetDate: wt.goal.targetDate,
    savedCents: parseAmountToCents(goalBalance.currentBalance),
    windowWeeks: PACE_WINDOW_WEEKS,
    windowStart: addDays(persona.asOf, -PACE_WINDOW_WEEKS * 7),
    incomeCents,
    spendCents,
    pace: { netCents: incomeCents - spendCents, weeks: PACE_WINDOW_WEEKS },
    habits,
    topHabit: habits[0] ?? null,
    bestStretch: findBestStretch(txns, windowStartDay),
    peerPace: { netCents: parseAmountToCents(wt.peerBenchmark.weeklyNet), weeks: 1 },
    peerLabel: wt.peerBenchmark.label,
    breakdown,
    txns,
    rerouteOptions: {
      sideHustle: { how: wt.rerouteOptions.sideHustle.how, weeklyCents: parseAmountToCents(wt.rerouteOptions.sideHustle.weekly) },
      comfortable: { how: wt.rerouteOptions.comfortable.how, weeklyCents: parseAmountToCents(wt.rerouteOptions.comfortable.weekly) },
    },
  };
}

// ---------- the race ----------

function makeRacer(
  a: Analysis,
  id: Racer['id'],
  name: string,
  tagline: string,
  pace: Pace,
  savedCents: number,
  reason: string,
): Racer {
  const remainingCents = Math.max(0, a.goalCents - savedCents);
  const { days, date } = arrival(a.asOf, remainingCents, pace);
  return { id, name, tagline, pace, weeklyCents: weeklyCents(pace), savedCents, remainingCents, days, arrivalDate: date, reason };
}

/** Pace of the You wallaby given the session state. */
export function youPace(a: Analysis, state: TrackState): Pace {
  return withBoost(a.pace, state.boostCentsPerWeek);
}

export function youSavedCents(a: Analysis, state: TrackState): number {
  return a.savedCents - state.spentCents;
}

export function projectRacers(a: Analysis, state: TrackState = EMPTY_STATE): Racer[] {
  const you = youPace(a, state);
  const youWeekly = weeklyCents(you);
  const baseWeekly = weeklyCents(a.pace);
  const parts = [`Over the last ${a.windowWeeks} weeks you kept ${formatMoney(baseWeekly)} a week after spending.`];
  if (state.boostCentsPerWeek > 0) {
    parts.push(`Your reroute adds ${formatMoney(state.boostCentsPerWeek)} a week, so your pace is ${formatMoney(youWeekly)} a week.`);
  }
  if (state.spentCents > 0) {
    parts.push(`Approved purchases have taken ${formatMoney(state.spentCents)} out of your goal savings.`);
  }
  const racers: Racer[] = [makeRacer(a, 'you', 'You', 'Your current pace', you, youSavedCents(a, state), parts.join(' '))];

  if (a.topHabit) {
    const h = a.topHabit;
    const pace = withBoost(a.pace, 0);
    pace.netCents += h.totalCents;
    racers.push(
      makeRacer(
        a,
        'ghost',
        'Habit ghost',
        'You without your top habit',
        pace,
        a.savedCents,
        `This is you without your top habit: ${h.label}, about ${formatMoney(h.weeklyCents)} a week. That would lift your pace to ${formatMoney(weeklyCents(pace))} a week.`,
      ),
    );
  }

  if (a.bestStretch) {
    const b = a.bestStretch;
    const bestWeekly = weeklyCents(b.pace);
    const compare =
      bestWeekly > baseWeekly
        ? 'That is faster than your current pace.'
        : 'Your current pace is ahead of it.';
    racers.push(
      makeRacer(
        a,
        'best',
        'Best you',
        'Your best past stretch',
        b.pace,
        a.savedCents,
        `Your best earlier four weeks (${formatDayMonth(b.start)} to ${formatDate(b.end)}) kept ${formatMoney(bestWeekly)} a week. ${compare}`,
      ),
    );
  }

  racers.push(
    makeRacer(
      a,
      'peer',
      'People like you',
      'Illustrative peer pace',
      a.peerPace,
      a.savedCents,
      `${a.peerLabel} keep about ${formatMoney(weeklyCents(a.peerPace))} a week. Illustrative only, not real customer data.`,
    ),
  );
  return racers;
}

/** Fraction of the goal (0..1) a racer has reached `days` after the as-of date. */
export function progressAt(racer: Racer, goalCents: number, days: number): number {
  const gained = Math.floor((Math.max(0, racer.pace.netCents) * days) / (7 * racer.pace.weeks));
  const cents = Math.min(goalCents, Math.max(0, racer.savedCents + gained));
  return goalCents > 0 ? cents / goalCents : 1;
}

// ---------- the purchase check ----------

function countRecent(a: Analysis, category: string): number {
  const asOfDay = toEpochDay(a.asOf);
  return a.txns.filter((t) => {
    const d = toEpochDay(t.date);
    return t.cents < 0 && t.category === category && d >= asOfDay - 7 && d < asOfDay;
  }).length;
}

export function buildReroutes(a: Analysis, remainingCents: number, afterDays: number | null): Reroute[] {
  const options: Array<Pick<Reroute, 'id' | 'label' | 'how' | 'boostCentsPerWeek'>> = [];
  if (a.topHabit) {
    options.push({
      id: 'fastest',
      label: 'Fastest',
      how: `Pause your ${a.topHabit.label} (about ${formatMoney(a.topHabit.weeklyCents)} a week)`,
      boostCentsPerWeek: a.topHabit.weeklyCents,
    });
  }
  options.push({
    id: 'side-hustle',
    label: 'Side hustle',
    how: `${a.rerouteOptions.sideHustle.how} (${formatMoney(a.rerouteOptions.sideHustle.weeklyCents)} a week)`,
    boostCentsPerWeek: a.rerouteOptions.sideHustle.weeklyCents,
  });
  options.push({
    id: 'comfortable',
    label: 'Comfortable',
    how: `${a.rerouteOptions.comfortable.how} (${formatMoney(a.rerouteOptions.comfortable.weeklyCents)} a week)`,
    boostCentsPerWeek: a.rerouteOptions.comfortable.weeklyCents,
  });
  return options.map((o) => {
    // "Fastest" uses the habit's exact total so no rounding creeps into the date.
    const pace =
      o.id === 'fastest' && a.topHabit
        ? { netCents: a.pace.netCents + a.topHabit.totalCents, weeks: a.pace.weeks }
        : withBoost(a.pace, o.boostCentsPerWeek);
    const { days, date } = arrival(a.asOf, remainingCents, pace);
    return {
      ...o,
      days,
      arrivalDate: date,
      daysRecovered: days !== null && afterDays !== null ? afterDays - days : 0,
    };
  });
}

/** Work out the before and after arrival dates for a purchase, plus the ways back. */
export function checkPurchase(a: Analysis, state: TrackState, purchase: PurchaseInput): PurchaseCheck {
  if (!Number.isInteger(purchase.amountCents) || purchase.amountCents <= 0) {
    throw new Error('Purchase amount must be a positive whole number of cents');
  }
  const pace = youPace(a, state);
  const remainingBefore = Math.max(0, a.goalCents - youSavedCents(a, state));
  const remainingAfter = remainingBefore + purchase.amountCents;
  const before = arrival(a.asOf, remainingBefore, pace);
  const after = arrival(a.asOf, remainingAfter, pace);
  const deltaDays = before.days !== null && after.days !== null ? after.days - before.days : 0;

  const habit = a.habits.find((h) => h.merchant.toLowerCase() === purchase.merchant.trim().toLowerCase()) ?? null;
  const recent = isEssential(purchase.category)
    ? 0
    : countRecent(a, purchase.category) + (state.approvedByCategory[purchase.category] ?? 0);
  const habitLink = recent > 0 || habit ? { count: recent + 1, category: purchase.category, habit } : null;

  return {
    purchase,
    goalName: a.goalName,
    before,
    after,
    deltaDays,
    habitLink,
    reroutes: buildReroutes(a, remainingAfter, after.days),
  };
}
