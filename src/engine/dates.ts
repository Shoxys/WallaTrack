/** Calendar-date helpers on ISO "YYYY-MM-DD" strings (UTC, never the wall clock). */

const DAY_MS = 86_400_000;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function toEpochDay(iso: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) throw new Error(`Invalid date: ${iso}`);
  return Math.round(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / DAY_MS);
}

export function fromEpochDay(day: number): string {
  return new Date(day * DAY_MS).toISOString().slice(0, 10);
}

export function addDays(iso: string, days: number): string {
  return fromEpochDay(toEpochDay(iso) + days);
}

export function diffDays(fromIso: string, toIso: string): number {
  return toEpochDay(toIso) - toEpochDay(fromIso);
}

/** "31 Mar 2028" */
export function formatDate(iso: string): string {
  const d = new Date(toEpochDay(iso) * DAY_MS);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "Mar 2028" */
export function formatMonth(iso: string): string {
  const d = new Date(toEpochDay(iso) * DAY_MS);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "31 Mar" */
export function formatDayMonth(iso: string): string {
  const d = new Date(toEpochDay(iso) * DAY_MS);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

export function weekdayIndex(iso: string): number {
  return new Date(toEpochDay(iso) * DAY_MS).getUTCDay();
}

export function weekdayName(index: number): string {
  return WEEKDAYS[index];
}

/** "less than a day", "3 days", "about 8 weeks" */
export function formatDuration(days: number): string {
  const d = Math.abs(days);
  if (d < 1) return 'less than a day';
  if (d === 1) return '1 day';
  if (d < 14) return `${d} days`;
  return `about ${Math.round(d / 7)} weeks`;
}

/** 1 -> "1st", 3 -> "3rd", 11 -> "11th" */
export function ordinal(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'}`;
}
