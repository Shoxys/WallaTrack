/** Per-persona session state, kept in browser local storage. No database. */
import type { RerouteId, TrackState } from '@/engine/types';

export type Outcome = 'approved' | 'declined' | 'what-if';

export interface Decision {
  id: number;
  outcome: Outcome;
  merchant: string;
  item: string | null;
  amountCents: number;
  category: string;
  beforeDate: string | null;
  afterDate: string | null;
  deltaDays: number;
  reroute: { id: RerouteId; label: string; arrivalDate: string | null } | null;
}

export interface PersonaState extends TrackState {
  reroute: { id: RerouteId; label: string } | null;
  decisions: Decision[];
}

export const EMPTY_PERSONA_STATE: PersonaState = {
  spentCents: 0,
  boostCentsPerWeek: 0,
  approvedByCategory: {},
  reroute: null,
  decisions: [],
};

const key = (personaId: string) => `wallatrack:v1:${personaId}`;
const CALM_KEY = 'wallatrack:v1:calm';

export function loadState(personaId: string): PersonaState {
  try {
    const raw = window.localStorage.getItem(key(personaId));
    if (!raw) return EMPTY_PERSONA_STATE;
    const s = JSON.parse(raw) as Partial<PersonaState>;
    if (!Number.isInteger(s.spentCents) || !Number.isInteger(s.boostCentsPerWeek) || !Array.isArray(s.decisions)) {
      return EMPTY_PERSONA_STATE;
    }
    return { ...EMPTY_PERSONA_STATE, ...s } as PersonaState;
  } catch {
    return EMPTY_PERSONA_STATE;
  }
}

export function saveState(personaId: string, state: PersonaState): void {
  try {
    window.localStorage.setItem(key(personaId), JSON.stringify(state));
  } catch {
    // Storage can be unavailable (private mode); the demo still works for the session.
  }
}

export function clearState(personaId: string): void {
  try {
    window.localStorage.removeItem(key(personaId));
  } catch {
    // ignore
  }
}

export function loadCalm(): boolean {
  try {
    const raw = window.localStorage.getItem(CALM_KEY);
    if (raw !== null) return raw === '1';
  } catch {
    // ignore
  }
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export function saveCalm(calm: boolean): void {
  try {
    window.localStorage.setItem(CALM_KEY, calm ? '1' : '0');
  } catch {
    // ignore
  }
}
