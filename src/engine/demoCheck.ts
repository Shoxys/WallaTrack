/**
 * Startup check: the engine recomputes every demo date in LEAD-SPEC.md from
 * the persona's transactions and compares it with what the spec says.
 * The expected dates live only here; nothing on screen is read from this list.
 */
import { formatDate } from './dates';
import { EMPTY_STATE, analyse, checkPurchase, categoryForMcc, projectRacers } from './engine';
import { parseAmountToCents } from './money';
import type { Persona } from './types';

export interface DateCheck {
  label: string;
  expected: string;
  actual: string;
  ok: boolean;
}

/** Dates quoted in LEAD-SPEC.md, "Demo data". */
export const SPEC_DATES = {
  you: '2028-03-31',
  ghost: '2027-11-06',
  best: '2028-04-20',
  peer: '2029-02-15',
  afterPc: '2028-05-26',
  fastest: '2027-12-16',
  sideHustle: '2028-02-26',
  comfortable: '2028-03-29',
} as const;

export function runDemoCheck(persona: Persona): { ok: boolean; checks: DateCheck[] } {
  const a = analyse(persona);
  const racers = projectRacers(a, EMPTY_STATE);
  const racerDate = (id: string) => racers.find((r) => r.id === id)?.arrivalDate ?? null;

  const pc = persona.wallatrack.demoPurchases.find((p) => p.id === 'pc');
  const check = pc
    ? checkPurchase(a, EMPTY_STATE, {
        merchant: pc.merchant,
        item: pc.item,
        amountCents: parseAmountToCents(pc.amount),
        category: categoryForMcc(pc.merchantCategoryCode),
      })
    : null;
  const reroute = (id: string) => check?.reroutes.find((r) => r.id === id)?.arrivalDate ?? null;

  const rows: Array<[string, string, string | null]> = [
    ['You', SPEC_DATES.you, racerDate('you')],
    ['Habit ghost', SPEC_DATES.ghost, racerDate('ghost')],
    ['Best you', SPEC_DATES.best, racerDate('best')],
    ['People like you', SPEC_DATES.peer, racerDate('peer')],
    ['You before the $1,200 PC', SPEC_DATES.you, check?.before.date ?? null],
    ['You after the $1,200 PC', SPEC_DATES.afterPc, check?.after.date ?? null],
    ['Reroute: Fastest', SPEC_DATES.fastest, reroute('fastest')],
    ['Reroute: Side hustle', SPEC_DATES.sideHustle, reroute('side-hustle')],
    ['Reroute: Comfortable', SPEC_DATES.comfortable, reroute('comfortable')],
  ];

  const checks = rows.map(([label, expected, actual]) => ({
    label,
    expected: formatDate(expected),
    actual: actual ? formatDate(actual) : 'never',
    ok: actual === expected,
  }));
  return { ok: checks.every((c) => c.ok), checks };
}

export function formatDemoCheck(result: { ok: boolean; checks: DateCheck[] }): string {
  const lines = result.checks.map(
    (c) => `  ${c.ok ? 'ok  ' : 'FAIL'} ${c.label.padEnd(26)} engine ${c.actual.padEnd(12)} spec ${c.expected}`,
  );
  const passed = result.checks.filter((c) => c.ok).length;
  return [`[WallaTrack] engine date check: ${passed}/${result.checks.length} confirmed`, ...lines].join('\n');
}
