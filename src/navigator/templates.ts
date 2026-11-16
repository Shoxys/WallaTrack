/**
 * Pre-checked Navigator lines. These are plain templates filled only with
 * engine output, used whenever the AI is off, slow, or fails the number guard.
 */
import { formatDate, formatDuration, ordinal, weekdayName } from '@/engine/dates';
import { categoryNoun } from '@/engine/engine';
import { formatMoney } from '@/engine/money';
import type { PurchaseCheck, Reroute } from '@/engine/types';
import { checkLines } from './guard';
import { GENERAL_NOTICE, type NavigatorLines, type NavigatorMode, type NavigatorReroute, type NavigatorResponse } from './types';

const fmt = (iso: string | null) => (iso ? formatDate(iso) : 'no date yet');

export function templateLines(check: PurchaseCheck, mode: NavigatorMode): NavigatorLines {
  const goal = check.goalName.toLowerCase();
  const { before, after, deltaDays, habitLink } = check;
  const whatIf = mode === 'what-if';

  let impact: string;
  if (after.date === null) {
    impact = `At your current pace there is no arrival date for your ${goal} yet, so this purchase cannot be placed on the track.`;
  } else if (deltaDays > 0) {
    impact = `This ${whatIf ? 'would push' : 'pushes'} your ${goal} back ${formatDuration(deltaDays)}, from ${fmt(before.date)} to ${fmt(after.date)}.`;
  } else {
    impact = `On its own this ${whatIf ? 'would not' : 'does not'} move your ${goal} date. It stays ${fmt(after.date)}.`;
  }

  let habit: string | null = null;
  if (habitLink) {
    const parts: string[] = [];
    if (habitLink.count > 1) parts.push(`${ordinal(habitLink.count)} ${categoryNoun(habitLink.category)} this week`);
    if (habitLink.habit) {
      const h = habitLink.habit;
      const when = h.weekday !== null ? `${weekdayName(h.weekday)} ` : '';
      parts.push(`your ${when}${h.merchant} habit runs at about ${formatMoney(h.weeklyCents)} a week`);
    }
    if (parts.length > 0) {
      const text = parts.join(', and ');
      habit = text.charAt(0).toUpperCase() + text.slice(1) + '.';
    }
  }

  const approve =
    deltaDays > 0
      ? `Purchase approved. You now arrive ${fmt(after.date)}, ${formatDuration(deltaDays)} later.`
      : `Purchase approved. Your arrival date stays ${fmt(after.date)}.`;

  const decline =
    deltaDays > 0
      ? `Purchase cancelled. You stay on pace for ${fmt(before.date)}. That is ${formatDuration(deltaDays)} saved.`
      : `Purchase cancelled. You stay on pace for ${fmt(before.date)} and keep ${formatMoney(check.purchase.amountCents)} in your goal.`;

  return { impact, habit, approve, decline };
}

export function rerouteLine(r: Reroute): string {
  if (r.arrivalDate === null) return 'No arrival date at this pace.';
  return r.daysRecovered > 0
    ? `Arrive ${formatDate(r.arrivalDate)}, ${formatDuration(r.daysRecovered)} sooner.`
    : `Arrive ${formatDate(r.arrivalDate)}.`;
}

function toReroutes(check: PurchaseCheck): NavigatorReroute[] {
  // Only routes that actually win time back are offered (a route already in use would not).
  return check.reroutes.filter((r) => r.daysRecovered > 0).map((r) => ({
    id: r.id,
    label: r.label,
    how: r.how,
    boostCentsPerWeek: r.boostCentsPerWeek,
    arrivalDate: r.arrivalDate,
    daysRecovered: r.daysRecovered,
    line: rerouteLine(r),
  }));
}

/** Assemble the structured response from engine facts plus a set of lines. */
export function buildResponse(
  check: PurchaseCheck,
  mode: NavigatorMode,
  lines: NavigatorLines,
  source: NavigatorResponse['source'],
  guard: NavigatorResponse['guard'],
): NavigatorResponse {
  return {
    mode,
    purchase: {
      merchant: check.purchase.merchant,
      item: check.purchase.item ?? null,
      amountCents: check.purchase.amountCents,
      amount: formatMoney(check.purchase.amountCents),
      category: check.purchase.category,
    },
    goalImpact: {
      goalName: check.goalName,
      beforeDate: check.before.date,
      afterDate: check.after.date,
      deltaDays: check.deltaDays,
      line: lines.impact,
    },
    habitLink: check.habitLink && lines.habit ? { count: check.habitLink.count, category: check.habitLink.category, line: lines.habit } : null,
    actions: {
      approve: { label: 'Approve', resultLine: lines.approve },
      decline: { label: 'Decline', resultLine: lines.decline, daysSaved: check.deltaDays },
    },
    reroutes: toReroutes(check),
    source,
    guard,
    notice: GENERAL_NOTICE,
  };
}

/** The no-AI path: template wording, still run through the number guard. */
export function templateResponse(check: PurchaseCheck, mode: NavigatorMode, note = 'Pre-checked lines'): NavigatorResponse {
  const lines = templateLines(check, mode);
  const result = checkLines(lines, check);
  return buildResponse(check, mode, lines, 'template', {
    passed: result.ok,
    numbersChecked: result.numbersChecked,
    note: result.ok ? note : `${note}; guard flagged: ${result.problems.join('; ')}`,
  });
}
