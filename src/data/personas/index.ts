import type { Persona } from '@/engine/types';
import alex from './alex.json';

export const PERSONAS: Record<string, Persona> = {
  alex: alex as Persona,
};

export const DEFAULT_PERSONA_ID = 'alex';

export function getPersona(id: string): Persona | null {
  return PERSONAS[id] ?? null;
}
