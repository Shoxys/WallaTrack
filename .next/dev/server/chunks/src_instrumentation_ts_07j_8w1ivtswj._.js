module.exports = [
"[project]/src/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Runs once when the server starts: the engine re-checks every demo date in the spec. */ __turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { PERSONAS, DEFAULT_PERSONA_ID } = await __turbopack_context__.A("[project]/src/data/personas/index.ts [instrumentation] (ecmascript, async loader)");
    const { runDemoCheck, formatDemoCheck } = await __turbopack_context__.A("[project]/src/engine/demoCheck.ts [instrumentation] (ecmascript, async loader)");
    const result = runDemoCheck(PERSONAS[DEFAULT_PERSONA_ID]);
    const report = formatDemoCheck(result);
    if (result.ok) console.log(report);
    else console.error(`${report}\n[WallaTrack] WARNING: the engine disagrees with LEAD-SPEC.md. The engine's dates are shown on screen.`);
}
}),
];

//# sourceMappingURL=src_instrumentation_ts_07j_8w1ivtswj._.js.map