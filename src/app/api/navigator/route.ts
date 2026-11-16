import { NextResponse } from 'next/server';
import { getPersona } from '@/data/personas';
import { navigate } from '@/navigator/navigate';
import type { NavigatorRequest } from '@/navigator/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isCents(n: unknown): n is number {
  return typeof n === 'number' && Number.isInteger(n) && n >= 0 && n <= 100_000_000;
}

function parse(body: unknown): NavigatorRequest | string {
  if (!body || typeof body !== 'object') return 'Body must be a JSON object';
  const b = body as Record<string, unknown>;
  const purchase = b.purchase as Record<string, unknown> | undefined;
  const state = (b.state ?? {}) as Record<string, unknown>;
  if (typeof b.personaId !== 'string') return 'personaId is required';
  if (!purchase || typeof purchase.merchant !== 'string' || !purchase.merchant.trim()) return 'purchase.merchant is required';
  if (!isCents(purchase.amountCents) || purchase.amountCents === 0) return 'purchase.amountCents must be a positive whole number of cents';
  const spentCents = state.spentCents ?? 0;
  const boost = state.boostCentsPerWeek ?? 0;
  if (!isCents(spentCents) || !isCents(boost)) return 'state amounts must be whole cents';

  const approved: Record<string, number> = {};
  if (state.approvedByCategory && typeof state.approvedByCategory === 'object') {
    for (const [k, v] of Object.entries(state.approvedByCategory as Record<string, unknown>)) {
      if (typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < 1000) approved[k.slice(0, 40)] = v;
    }
  }
  return {
    personaId: b.personaId,
    mode: b.mode === 'what-if' ? 'what-if' : 'purchase',
    purchase: {
      merchant: purchase.merchant.trim().slice(0, 60),
      item: typeof purchase.item === 'string' && purchase.item.trim() ? purchase.item.trim().slice(0, 60) : undefined,
      amountCents: purchase.amountCents,
      category: typeof purchase.category === 'string' && purchase.category.trim() ? purchase.category.trim().slice(0, 40) : 'Other',
    },
    state: { spentCents, boostCentsPerWeek: boost, approvedByCategory: approved },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Body must be valid JSON' }, { status: 400 });
  }
  const req = parse(body);
  if (typeof req === 'string') return NextResponse.json({ error: req }, { status: 400 });

  const persona = getPersona(req.personaId);
  if (!persona) return NextResponse.json({ error: `Unknown persona "${req.personaId}"` }, { status: 404 });

  const started = Date.now();
  const response = await navigate(persona, req);
  return NextResponse.json(response, { headers: { 'x-navigator-ms': String(Date.now() - started) } });
}
