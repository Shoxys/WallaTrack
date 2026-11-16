/**
 * Optional AI wording for the Navigator. The model only rephrases: it is given
 * the engine's facts and must reuse them verbatim. Whatever comes back is run
 * through the number guard before it is shown. Server-side only.
 */
import Anthropic from '@anthropic-ai/sdk';
import { formatDate, formatDuration } from '@/engine/dates';
import { formatMoney } from '@/engine/money';
import type { PurchaseCheck } from '@/engine/types';
import type { NavigatorLines, NavigatorMode } from './types';

export const NAVIGATOR_MODEL = 'claude-sonnet-5-5';
/** The pop-up has to appear in under two seconds, so the AI gets less than that. */
export const AI_TIMEOUT_MS = 1800;

const SYSTEM = `You write the short lines spoken by the Navigator, a friendly wallaby inside a banking app that shows a customer how a purchase moves the date they reach a savings goal.

You are given facts worked out by the app and a set of plain template lines. Rewrite the template lines so they sound warm, clear and human, in Australian English.

The customer sees your lines next to the app's own figures, and a checker rejects any line containing a figure the app did not supply. So:
- Use dates, dollar amounts and durations exactly as they appear in the facts, in digits, in the same format. Do not add, round, combine or calculate any figure, and do not spell numbers out as words.
- The impact line must include the new arrival date.
- This is factual information, not advice. Describe what happens; never tell the customer what they should do, and never judge the purchase.
- One sentence per line, under 160 characters, no emoji.
- If the template for the habit line is null, return null for it.`;

const SCHEMA = {
  type: 'object',
  properties: {
    impact: { type: 'string' },
    habit: { type: ['string', 'null'] },
    approve: { type: 'string' },
    decline: { type: 'string' },
  },
  required: ['impact', 'habit', 'approve', 'decline'],
  additionalProperties: false,
} as const;

let client: Anthropic | null = null;

export function aiEnabled(): boolean {
  return !!process.env.ANTHROPIC_API_KEY;
}

function facts(check: PurchaseCheck, mode: NavigatorMode) {
  return {
    mode: mode === 'what-if' ? 'what-if (nothing is being bought, the customer is only asking)' : 'purchase held at checkout',
    goal: check.goalName,
    purchase: {
      merchant: check.purchase.merchant,
      item: check.purchase.item ?? null,
      amount: formatMoney(check.purchase.amountCents),
      category: check.purchase.category,
    },
    arrivalBefore: check.before.date ? formatDate(check.before.date) : null,
    arrivalAfter: check.after.date ? formatDate(check.after.date) : null,
    pushedBackBy: check.deltaDays > 0 ? formatDuration(check.deltaDays) : 'not at all',
  };
}

/** Returns reworded lines, or throws on timeout, refusal, or any API problem. */
export async function aiLines(check: PurchaseCheck, mode: NavigatorMode, template: NavigatorLines): Promise<NavigatorLines> {
  client ??= new Anthropic({ maxRetries: 0, timeout: AI_TIMEOUT_MS });

  const response = await client.beta.messages.create(
    {
      model: NAVIGATOR_MODEL,
      max_tokens: 1024,
      // Short rewording task with a hard latency budget: no thinking, low effort.
      thinking: { type: 'between_tools' },
      output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
      // If a safety classifier declines, let the API retry on its default fallback model.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: SYSTEM,
      messages: [
        {
          role: 'user',
          content: JSON.stringify({ facts: facts(check, mode), templateLines: template }, null, 2),
        },
      ],
    },
    { timeout: AI_TIMEOUT_MS, maxRetries: 0 },
  );

  if (response.stop_reason !== 'end_turn') throw new Error(`AI stopped with ${response.stop_reason}`);
  const text = response.content.find((b) => b.type === 'text');
  if (!text || text.type !== 'text') throw new Error('AI returned no text');

  const parsed = JSON.parse(text.text) as Partial<NavigatorLines>;
  if (typeof parsed.impact !== 'string' || typeof parsed.approve !== 'string' || typeof parsed.decline !== 'string') {
    throw new Error('AI response is missing a line');
  }
  return {
    impact: parsed.impact.trim(),
    // The habit line only exists when the engine found a habit link.
    habit: template.habit === null ? null : typeof parsed.habit === 'string' && parsed.habit.trim() ? parsed.habit.trim() : template.habit,
    approve: parsed.approve.trim(),
    decline: parsed.decline.trim(),
  };
}
