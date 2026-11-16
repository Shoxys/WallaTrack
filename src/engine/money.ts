/** Whole-cent money helpers. No floats are used for money maths. */

/** Parse a CDR-style decimal string ("-62.00", "1850", "5.5") into integer cents. */
export function parseAmountToCents(amount: string): number {
  const m = /^\s*(-)?(\d+)(?:\.(\d{1,2}))?\s*$/.exec(amount);
  if (!m) throw new Error(`Invalid amount: ${JSON.stringify(amount)}`);
  const cents = Number(m[2]) * 100 + Number((m[3] ?? '').padEnd(2, '0'));
  return m[1] ? -cents : cents;
}

/** Parse free-typed user input ("$1,200", "1200.5") into cents, or null if invalid. */
export function parseUserAmountToCents(input: string): number | null {
  const cleaned = input.replace(/[$,\s]/g, '');
  if (!/^\d{1,7}(\.\d{1,2})?$/.test(cleaned)) return null;
  const cents = parseAmountToCents(cleaned);
  return cents > 0 ? cents : null;
}

/** "$1,200" for whole dollars, "$5.50" otherwise. */
export function formatMoney(cents: number): string {
  const sign = cents < 0 ? '-' : '';
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100).toLocaleString('en-AU');
  const rem = abs % 100;
  return `${sign}$${dollars}${rem === 0 ? '' : '.' + String(rem).padStart(2, '0')}`;
}
