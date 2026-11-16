/** `npm run check` — prints the engine's dates next to the spec's and fails on a mismatch. */
import { formatDemoCheck, runDemoCheck } from '../src/engine/demoCheck';
import type { Persona } from '../src/engine/types';
import alex from '../src/data/personas/alex.json';

const result = runDemoCheck(alex as Persona);
console.log(formatDemoCheck(result));
process.exit(result.ok ? 0 : 1);
