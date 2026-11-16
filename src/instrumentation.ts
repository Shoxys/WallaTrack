/** Runs once when the server starts: the engine re-checks every demo date in the spec. */
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const { PERSONAS, DEFAULT_PERSONA_ID } = await import('@/data/personas');
  const { runDemoCheck, formatDemoCheck } = await import('@/engine/demoCheck');
  const result = runDemoCheck(PERSONAS[DEFAULT_PERSONA_ID]);
  const report = formatDemoCheck(result);
  if (result.ok) console.log(report);
  else console.error(`${report}\n[WallaTrack] WARNING: the engine disagrees with LEAD-SPEC.md. The engine's dates are shown on screen.`);
}
