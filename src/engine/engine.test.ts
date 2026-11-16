import { describe, expect, it } from 'vitest';
import alexJson from '@/data/personas/alex.json';
import { checkLine, checkLines } from '@/navigator/guard';
import { navigate } from '@/navigator/navigate';
import { templateLines, templateResponse } from '@/navigator/templates';
import { addDays, diffDays, formatDate, formatDuration, ordinal } from './dates';
import { SPEC_DATES, runDemoCheck } from './demoCheck';
import { EMPTY_STATE, analyse, categoryForMcc, checkPurchase, daysToGoal, projectRacers, progressAt, weeklyCents, withBoost } from './engine';
import { formatMoney, parseAmountToCents, parseUserAmountToCents } from './money';
import type { Persona, PurchaseInput, TrackState } from './types';

const alex = alexJson as Persona;
const a = analyse(alex);
const PC: PurchaseInput = { merchant: 'TechHub Online', item: 'Gaming PC', amountCents: 120000, category: 'Electronics' };
const UBER: PurchaseInput = { merchant: 'Uber Eats', amountCents: 6200, category: 'Takeaway' };
const COFFEE: PurchaseInput = { merchant: 'Bean Scene Espresso', amountCents: 550, category: 'Coffee' };

describe('money', () => {
  it('parses decimal strings into whole cents', () => {
    expect(parseAmountToCents('1850.00')).toBe(185000);
    expect(parseAmountToCents('-62.00')).toBe(-6200);
    expect(parseAmountToCents('5.5')).toBe(550);
    expect(parseAmountToCents('0.07')).toBe(7);
    expect(() => parseAmountToCents('12.345')).toThrow();
  });
  it('parses what the customer types', () => {
    expect(parseUserAmountToCents('$1,200')).toBe(120000);
    expect(parseUserAmountToCents('19.99')).toBe(1999);
    expect(parseUserAmountToCents('abc')).toBeNull();
    expect(parseUserAmountToCents('0')).toBeNull();
  });
  it('formats money', () => {
    expect(formatMoney(120000)).toBe('$1,200');
    expect(formatMoney(550)).toBe('$5.50');
    expect(formatMoney(1750)).toBe('$17.50');
  });
});

describe('dates', () => {
  it('adds days across a leap year', () => {
    expect(addDays('2026-11-16', 501)).toBe('2028-03-31');
    expect(addDays('2028-02-28', 1)).toBe('2028-02-29');
    expect(diffDays('2028-03-31', '2028-05-26')).toBe(56);
  });
  it('formats dates and durations', () => {
    expect(formatDate('2028-03-31')).toBe('31 Mar 2028');
    expect(formatDuration(56)).toBe('about 8 weeks');
    expect(formatDuration(3)).toBe('3 days');
    expect(formatDuration(0)).toBe('less than a day');
    expect([1, 2, 3, 4, 11, 12, 13, 21, 22].map(ordinal)).toEqual(['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '21st', '22nd']);
  });
});

describe('pace and arrival', () => {
  it('arrival = remaining / pace, rounded up to a whole day', () => {
    expect(daysToGoal(1080000, { netCents: 15100, weeks: 1 })).toBe(501);
    expect(daysToGoal(1050000, { netCents: 15000, weeks: 1 })).toBe(490); // exactly 70 weeks
    expect(daysToGoal(1050001, { netCents: 15000, weeks: 1 })).toBe(491);
    expect(daysToGoal(0, { netCents: 15000, weeks: 1 })).toBe(0);
  });
  it('never arrives when nothing is being saved', () => {
    expect(daysToGoal(1000, { netCents: 0, weeks: 1 })).toBeNull();
    expect(daysToGoal(1000, { netCents: -500, weeks: 1 })).toBeNull();
  });
  it('rejects fractional cents', () => {
    expect(() => daysToGoal(1000.5, { netCents: 100, weeks: 1 })).toThrow();
  });
  it('boosts are added per week', () => {
    expect(weeklyCents(withBoost({ netCents: 181200, weeks: 12 }, 2900))).toBe(18000);
  });
});

describe('Alex Sample, from transactions', () => {
  it('matches the spec: paid $1,850 a fortnight, $390 rent a week, $4,200 of $15,000', () => {
    expect(a.incomeCents).toBe(185000 * 6);
    expect(a.breakdown.find((c) => c.category === 'Rent')?.weeklyCents).toBe(39000);
    expect(a.savedCents).toBe(420000);
    expect(a.goalCents).toBe(1500000);
  });
  it('works out pace as net savings per week', () => {
    expect(a.pace).toEqual({ netCents: 181200, weeks: 12 });
    expect(weeklyCents(a.pace)).toBe(15100);
    expect(a.incomeCents - a.spendCents).toBe(a.pace.netCents);
  });
  it('finds Friday Uber Eats at $62 a week as the top habit', () => {
    expect(a.topHabit?.merchant).toBe('Uber Eats');
    expect(a.topHabit?.weeklyCents).toBe(6200);
    expect(a.topHabit?.label).toBe('Friday Uber Eats');
  });
  it('category totals add up to total spending', () => {
    expect(a.breakdown.reduce((s, c) => s + c.totalCents, 0)).toBe(a.spendCents);
  });
  it('every amount in the persona is whole cents', () => {
    for (const t of alex.transactions) expect(Number.isInteger(parseAmountToCents(t.amount))).toBe(true);
  });
});

describe('demo dates from LEAD-SPEC.md', () => {
  it('the startup check confirms every date', () => {
    const result = runDemoCheck(alex);
    expect(result.checks.filter((c) => !c.ok)).toEqual([]);
    expect(result.checks).toHaveLength(9);
  });
  it('projects the four wallabies', () => {
    const dates = Object.fromEntries(projectRacers(a).map((r) => [r.id, r.arrivalDate]));
    expect(dates).toEqual({ you: SPEC_DATES.you, ghost: SPEC_DATES.ghost, best: SPEC_DATES.best, peer: SPEC_DATES.peer });
  });
  it('the $1,200 PC moves You from 31 Mar 2028 to 26 May 2028', () => {
    const check = checkPurchase(a, EMPTY_STATE, PC);
    expect(check.before.date).toBe('2028-03-31');
    expect(check.after.date).toBe('2028-05-26');
    expect(check.deltaDays).toBe(56);
    expect(check.habitLink).toBeNull();
  });
  it('offers the three reroutes', () => {
    const check = checkPurchase(a, EMPTY_STATE, PC);
    expect(check.reroutes.map((r) => [r.id, r.arrivalDate])).toEqual([
      ['fastest', '2027-12-16'],
      ['side-hustle', '2028-02-26'],
      ['comfortable', '2028-03-29'],
    ]);
    for (const r of check.reroutes) expect(r.daysRecovered).toBeGreaterThan(0);
  });
});

describe('session state', () => {
  const approvedPc: TrackState = { spentCents: 120000, boostCentsPerWeek: 0, approvedByCategory: { Electronics: 1 } };

  it('approving knocks You back and leaves the other wallabies alone', () => {
    const racers = projectRacers(a, approvedPc);
    expect(racers.find((r) => r.id === 'you')?.arrivalDate).toBe('2028-05-26');
    expect(racers.find((r) => r.id === 'ghost')?.arrivalDate).toBe(SPEC_DATES.ghost);
  });
  it('picking Fastest moves You forward to 16 Dec 2027', () => {
    const fastest = checkPurchase(a, EMPTY_STATE, PC).reroutes[0];
    const racers = projectRacers(a, { ...approvedPc, boostCentsPerWeek: fastest.boostCentsPerWeek });
    expect(racers.find((r) => r.id === 'you')?.arrivalDate).toBe('2027-12-16');
  });
  it('a declined purchase changes nothing', () => {
    expect(projectRacers(a, EMPTY_STATE)[0].arrivalDate).toBe(SPEC_DATES.you);
  });
  it('progress never passes the finish line and reflects the knock-back', () => {
    const before = projectRacers(a, EMPTY_STATE)[0];
    const after = projectRacers(a, approvedPc)[0];
    expect(progressAt(before, a.goalCents, 0)).toBeCloseTo(0.28);
    expect(progressAt(after, a.goalCents, 0)).toBeCloseTo(0.2);
    expect(progressAt(before, a.goalCents, 5000)).toBe(1);
  });
});

describe('habit link', () => {
  it('flags the 3rd takeaway this week for Uber Eats', () => {
    const check = checkPurchase(a, EMPTY_STATE, UBER);
    expect(check.habitLink?.count).toBe(3);
    expect(check.habitLink?.habit?.merchant).toBe('Uber Eats');
    expect(templateLines(check, 'purchase').habit).toBe('3rd takeaway this week, and your Friday Uber Eats habit runs at about $62 a week.');
  });
  it('counts purchases approved this session', () => {
    const check = checkPurchase(a, { ...EMPTY_STATE, approvedByCategory: { Takeaway: 1 } }, UBER);
    expect(check.habitLink?.count).toBe(4);
  });
  it('categorises by merchant category code', () => {
    expect(categoryForMcc('5814')).toBe('Takeaway');
    expect(categoryForMcc('0000')).toBe('Other');
  });
});

describe('number guard', () => {
  const pcCheck = checkPurchase(a, EMPTY_STATE, PC);

  it('passes every pre-checked template line', () => {
    for (const purchase of [PC, UBER, COFFEE]) {
      for (const mode of ['purchase', 'what-if'] as const) {
        const check = checkPurchase(a, EMPTY_STATE, purchase);
        const result = checkLines(templateLines(check, mode), check);
        expect(result.problems).toEqual([]);
        expect(templateResponse(check, mode).guard.passed).toBe(true);
      }
    }
  });
  it('states the demo line for the PC', () => {
    expect(templateLines(pcCheck, 'purchase').impact).toBe(
      'This pushes your first home starter back about 8 weeks, from 31 Mar 2028 to 26 May 2028.',
    );
  });
  it('rejects a wrong date, a wrong amount and spelled-out numbers', () => {
    expect(checkLine('This pushes your goal back to 27 May 2028.', pcCheck).ok).toBe(false);
    expect(checkLine('That $1,250 PC moves you to 26 May 2028.', pcCheck).ok).toBe(false);
    expect(checkLine('This sets you back eight weeks.', pcCheck).ok).toBe(false);
    expect(checkLine('This pushes your goal back about 8 weeks, to 26 May 2028.', pcCheck).ok).toBe(true);
  });
  it('requires the impact line to state the new date', () => {
    const lines = { ...templateLines(pcCheck, 'purchase'), impact: 'This one will slow you down a bit.' };
    expect(checkLines(lines, pcCheck).ok).toBe(false);
  });
});

describe('navigator fallback', () => {
  const req = { mode: 'purchase' as const, purchase: PC, state: EMPTY_STATE };

  it('uses templates when AI is off', async () => {
    const res = await navigate(alex, req, { useAi: false });
    expect(res.source).toBe('template');
    expect(res.goalImpact.afterDate).toBe('2028-05-26');
    expect(res.reroutes).toHaveLength(3);
  });
  it('keeps AI wording that passes the guard', async () => {
    const res = await navigate(alex, req, {
      useAi: true,
      wording: async (_c, _m, t) => ({ ...t, impact: 'Heads up: this moves your first home starter out to 26 May 2028.' }),
    });
    expect(res.source).toBe('ai');
    expect(res.goalImpact.line).toContain('26 May 2028');
  });
  it('falls back when the AI invents a number', async () => {
    const res = await navigate(alex, req, {
      useAi: true,
      wording: async (_c, _m, t) => ({ ...t, impact: 'This pushes your goal back 9 weeks, to 26 May 2028.' }),
    });
    expect(res.source).toBe('template');
    expect(res.goalImpact.line).toContain('about 8 weeks');
  });
  it('falls back when the AI is slow or fails', async () => {
    const slow = await navigate(alex, req, { useAi: true, timeoutMs: 20, wording: () => new Promise(() => {}) });
    expect(slow.source).toBe('template');
    const broken = await navigate(alex, req, { useAi: true, wording: async () => Promise.reject(new Error('boom')) });
    expect(broken.source).toBe('template');
  });
});
