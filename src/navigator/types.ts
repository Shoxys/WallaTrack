import type { RerouteId } from '@/engine/types';

export type NavigatorMode = 'purchase' | 'what-if';

/** Request body for POST /api/navigator. */
export interface NavigatorRequest {
  personaId: string;
  mode: NavigatorMode;
  purchase: { merchant: string; item?: string; amountCents: number; category: string };
  state: { spentCents: number; boostCentsPerWeek: number; approvedByCategory: Record<string, number> };
}

/** The four sentences the Navigator says. Wording may come from the AI; numbers never do. */
export interface NavigatorLines {
  impact: string;
  habit: string | null;
  approve: string;
  decline: string;
}

export interface NavigatorReroute {
  id: RerouteId;
  label: string;
  how: string;
  boostCentsPerWeek: number;
  arrivalDate: string | null;
  line: string;
}

/** Structured JSON returned by the Navigator route. */
export interface NavigatorResponse {
  mode: NavigatorMode;
  purchase: { merchant: string; item: string | null; amountCents: number; amount: string; category: string };
  goalImpact: {
    goalName: string;
    beforeDate: string | null;
    afterDate: string | null;
    deltaDays: number;
    line: string;
  };
  habitLink: { count: number; category: string; line: string } | null;
  actions: {
    approve: { label: string; resultLine: string };
    decline: { label: string; resultLine: string; daysSaved: number };
  };
  reroutes: NavigatorReroute[];
  /** Where the wording came from. Numbers always come from the engine. */
  source: 'ai' | 'template';
  guard: { passed: boolean; numbersChecked: number; note: string };
  notice: string;
}

export const GENERAL_NOTICE =
  'General information only. WallaTrack shows factual information based on your transactions, not personal advice. The choice is yours.';
