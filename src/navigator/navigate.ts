/**
 * Server-side Navigator: engine facts first, optional AI wording second,
 * number guard last. Any AI problem falls back to the pre-checked lines.
 */
import { analyse, checkPurchase } from '@/engine/engine';
import type { Persona } from '@/engine/types';
import { AI_TIMEOUT_MS, aiEnabled, aiLines } from './ai';
import { checkLines } from './guard';
import { buildResponse, templateLines, templateResponse } from './templates';
import type { NavigatorRequest, NavigatorResponse } from './types';

type Wording = typeof aiLines;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`AI took longer than ${ms}ms`)), ms);
    promise.then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
    );
  });
}

export async function navigate(
  persona: Persona,
  req: Pick<NavigatorRequest, 'mode' | 'purchase' | 'state'>,
  options: { useAi?: boolean; wording?: Wording; timeoutMs?: number } = {},
): Promise<NavigatorResponse> {
  const analysis = analyse(persona);
  const check = checkPurchase(analysis, req.state, req.purchase);
  const useAi = options.useAi ?? aiEnabled();
  if (!useAi) return templateResponse(check, req.mode, 'Pre-checked lines (AI wording is off)');

  const template = templateLines(check, req.mode);
  try {
    const lines = await withTimeout((options.wording ?? aiLines)(check, req.mode, template), options.timeoutMs ?? AI_TIMEOUT_MS);
    const result = checkLines(lines, check);
    if (!result.ok) {
      console.warn('[WallaTrack] AI wording failed the number guard:', result.problems.join('; '));
      return templateResponse(check, req.mode, 'Pre-checked lines (AI wording failed the number guard)');
    }
    return buildResponse(check, req.mode, lines, 'ai', {
      passed: true,
      numbersChecked: result.numbersChecked,
      note: 'AI wording, every figure confirmed by the engine',
    });
  } catch (err) {
    console.warn('[WallaTrack] AI wording unavailable:', err instanceof Error ? err.message : err);
    return templateResponse(check, req.mode, 'Pre-checked lines (AI was slow or unavailable)');
  }
}
