/**
 * Number guard. Every figure in a Navigator line must be one the engine
 * produced for this purchase check. A line with any other number, date or
 * spelled-out quantity is rejected and the pre-checked template is used.
 */
import { formatDate } from '@/engine/dates';
import type { PurchaseCheck } from '@/engine/types';
import type { NavigatorLines } from './types';

const MONTH = '(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*';
const DATE_RE = new RegExp(`\\b(\\d{1,2})\\s+(${MONTH})\\s+(\\d{4})\\b`, 'g');
const NUMBER_RE = /\$?\d[\d,]*(?:\.\d+)?/g;
const NUMBER_WORDS =
  /\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|twenty|thirty|forty|fifty|hundred|thousand|dozen|couple|half|double|triple)\b/i;

export interface GuardResult {
  ok: boolean;
  numbersChecked: number;
  problems: string[];
}

function normaliseNumber(token: string): string {
  const cleaned = token.replace(/[$,]/g, '');
  const [whole, frac = ''] = cleaned.split('.');
  const trimmedFrac = frac.replace(/0+$/, '');
  return trimmedFrac ? `${Number(whole)}.${trimmedFrac}` : String(Number(whole));
}

/** Everything the engine says about this check, as allowed dates and allowed numbers. */
export function allowedFacts(check: PurchaseCheck): { dates: Set<string>; numbers: Set<string> } {
  const dates = new Set<string>();
  const numbers = new Set<string>();
  const addDate = (iso: string | null) => {
    if (iso) dates.add(formatDate(iso));
  };
  const addCents = (cents: number) => numbers.add(normaliseNumber((cents / 100).toFixed(2)));
  const addSpan = (days: number) => {
    const d = Math.abs(days);
    numbers.add(String(d));
    if (d >= 14) numbers.add(String(Math.round(d / 7)));
  };

  addDate(check.before.date);
  addDate(check.after.date);
  addCents(check.purchase.amountCents);
  addSpan(check.deltaDays);
  if (check.habitLink) {
    numbers.add(String(check.habitLink.count));
    if (check.habitLink.habit) addCents(check.habitLink.habit.weeklyCents);
  }
  for (const r of check.reroutes) {
    addDate(r.arrivalDate);
    addCents(r.boostCentsPerWeek);
    addSpan(r.daysRecovered);
  }
  return { dates, numbers };
}

function normaliseDate(day: string, month: string, year: string): string {
  return `${Number(day)} ${month.slice(0, 3)} ${year}`;
}

export function checkLine(line: string, check: PurchaseCheck): GuardResult {
  const { dates, numbers } = allowedFacts(check);
  const problems: string[] = [];
  let numbersChecked = 0;

  // Full dates first, then whatever numbers are left once the dates are taken out.
  const rest = line.replace(DATE_RE, (_m, day: string, month: string, year: string) => {
    numbersChecked += 1;
    const date = normaliseDate(day, month, year);
    if (!dates.has(date)) problems.push(`date "${date}" is not an engine date`);
    return ' ';
  });
  for (const token of rest.match(NUMBER_RE) ?? []) {
    numbersChecked += 1;
    if (!numbers.has(normaliseNumber(token))) problems.push(`number "${token}" is not an engine number`);
  }
  const word = NUMBER_WORDS.exec(rest);
  if (word) problems.push(`spelled-out quantity "${word[0]}"`);
  if (line.length > 220) problems.push('line is too long');

  return { ok: problems.length === 0, numbersChecked, problems };
}

export function checkLines(lines: NavigatorLines, check: PurchaseCheck): GuardResult {
  const all = [lines.impact, lines.habit, lines.approve, lines.decline].filter((l): l is string => !!l);
  const results = all.map((l) => checkLine(l, check));
  const problems = results.flatMap((r) => r.problems);

  // The impact line has to actually state the engine's answer, not just avoid wrong numbers.
  if (check.after.date && !lines.impact.includes(formatDate(check.after.date))) {
    problems.push('impact line does not state the new arrival date');
  }
  return {
    ok: problems.length === 0,
    numbersChecked: results.reduce((s, r) => s + r.numbersChecked, 0),
    problems,
  };
}
