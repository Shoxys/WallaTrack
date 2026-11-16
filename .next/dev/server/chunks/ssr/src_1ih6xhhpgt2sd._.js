module.exports = [
"[project]/src/components/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$symbol$2f$components$2f$logos$2f$wbc$2d$logo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/symbol/components/logos/wbc-logo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personas/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$demoCheck$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/demoCheck.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/templates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HistoryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HistoryScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InsightsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InsightsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavigatorSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavigatorSheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RaceScreen.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** The pop-up must never block: past this, the app uses its own pre-checked lines. */ const NAVIGATOR_CLIENT_TIMEOUT_MS = 2500;
/** Lets the track appear before You moves, so the knock-back is seen. */ const TRACK_SETTLE_MS = 550;
const TABS = [
    {
        id: 'race',
        label: 'Race',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 20V4m0 1h11l-2 4 2 4H4"
        }, void 0, false, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 29,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'pay',
        label: 'Pay',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 7h18v11H3zM3 11h18M7 15h4"
        }, void 0, false, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 30,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'insights',
        label: 'Insights',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 20V11m7 9V4m7 16v-6"
        }, void 0, false, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 31,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'history',
        label: 'History',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 7v5l3 2M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4"
        }, void 0, false, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 32,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function App() {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PERSONAS"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PERSONA_ID"]];
    const analysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyse"])(persona), [
        persona
    ]);
    const demoCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$demoCheck$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runDemoCheck"])(persona), [
        persona
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_PERSONA_STATE"]);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [calm, setCalm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('race');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('you');
    const [nav, setNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fx, setFx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [payStatus, setPayStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const requestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fxKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Local storage is only available in the browser, so load after mount.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadState"])(persona.personaId));
        setCalm((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadCalm"])());
        setLoaded(true);
        // #pay, #insights or #history opens that tab directly (handy when recording).
        const fromHash = window.location.hash.slice(1);
        if (TABS.some((t)=>t.id === fromHash)) setTab(fromHash);
    }, [
        persona.personaId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loaded) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveState"])(persona.personaId, state);
    }, [
        loaded,
        persona.personaId,
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (pending.current) clearTimeout(pending.current);
        }, []);
    const trackState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            spentCents: state.spentCents,
            boostCentsPerWeek: state.boostCentsPerWeek,
            approvedByCategory: state.approvedByCategory
        }), [
        state.spentCents,
        state.boostCentsPerWeek,
        state.approvedByCategory
    ]);
    const racers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectRacers"])(analysis, trackState), [
        analysis,
        trackState
    ]);
    // The track rests on the day the first wallaby finishes at Alex's starting position.
    const snapshotDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.min(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectRacers"])(analysis).map((r)=>r.days ?? Number.POSITIVE_INFINITY).filter(Number.isFinite), 730), [
        analysis
    ]);
    const showFx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((kind, label)=>{
        fxKey.current += 1;
        setFx({
            kind,
            label,
            key: fxKey.current
        });
    }, []);
    /** Run after the Race tab has had a moment to draw, so the movement is visible. */ const afterTrackSettles = (fn)=>{
        if (pending.current) clearTimeout(pending.current);
        pending.current = setTimeout(fn, TRACK_SETTLE_MS);
    };
    const localResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((purchase, mode, note)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["templateResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPurchase"])(analysis, trackState, purchase), mode, note), [
        analysis,
        trackState
    ]);
    const startCheck = async (purchase, mode)=>{
        const id = ++requestId.current;
        setNav({
            stage: 'checking',
            mode,
            purchase,
            response: null,
            minimized: false,
            picked: null
        });
        if (mode === 'purchase') setPayStatus({
            kind: 'held',
            purchase
        });
        const local = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPurchase"])(analysis, trackState, purchase);
        let response;
        const controller = new AbortController();
        const timer = setTimeout(()=>controller.abort(), NAVIGATOR_CLIENT_TIMEOUT_MS);
        try {
            const body = {
                personaId: persona.personaId,
                mode,
                purchase,
                state: trackState
            };
            const res = await fetch('/api/navigator', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body),
                signal: controller.signal
            });
            if (!res.ok) throw new Error(`Navigator route returned ${res.status}`);
            response = await res.json();
            // The browser runs the same engine. If the route ever disagrees, trust the local numbers.
            if (response.goalImpact.afterDate !== local.after.date || response.goalImpact.beforeDate !== local.before.date) {
                response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["templateResponse"])(local, mode, 'Pre-checked lines (route and engine disagreed)');
            }
        } catch  {
            response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["templateResponse"])(local, mode, 'Pre-checked lines (Navigator route was slow or unreachable)');
        } finally{
            clearTimeout(timer);
        }
        if (requestId.current !== id) return;
        setNav((n)=>n && n.stage === 'checking' ? {
                ...n,
                stage: 'ask',
                response
            } : n);
        if (mode === 'what-if') {
            setState((s)=>({
                    ...s,
                    decisions: [
                        ...s.decisions,
                        toDecision(s, 'what-if', response)
                    ]
                }));
        }
    };
    const approve = ()=>{
        if (!nav || nav.mode !== 'purchase') return;
        requestId.current += 1;
        const response = nav.response ?? localResponse(nav.purchase, 'purchase', 'Pre-checked lines');
        const { purchase } = nav;
        setNav({
            ...nav,
            stage: 'approved',
            response,
            minimized: false
        });
        setPayStatus({
            kind: 'approved',
            purchase
        });
        setSelected('you');
        setTab('race');
        afterTrackSettles(()=>{
            setState((s)=>({
                    ...s,
                    spentCents: s.spentCents + purchase.amountCents,
                    approvedByCategory: {
                        ...s.approvedByCategory,
                        [purchase.category]: (s.approvedByCategory[purchase.category] ?? 0) + 1
                    },
                    decisions: [
                        ...s.decisions,
                        toDecision(s, 'approved', response)
                    ]
                }));
            const delta = response.goalImpact.deltaDays;
            if (delta > 0) showFx('knock', `Back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(delta)}`);
        });
    };
    const decline = ()=>{
        if (!nav || nav.mode !== 'purchase') return;
        requestId.current += 1;
        const response = nav.response ?? localResponse(nav.purchase, 'purchase', 'Pre-checked lines');
        setNav({
            ...nav,
            stage: 'declined',
            response,
            minimized: false
        });
        setPayStatus({
            kind: 'declined',
            purchase: nav.purchase
        });
        setSelected('you');
        setTab('race');
        afterTrackSettles(()=>{
            setState((s)=>({
                    ...s,
                    decisions: [
                        ...s.decisions,
                        toDecision(s, 'declined', response)
                    ]
                }));
            const delta = response.goalImpact.deltaDays;
            showFx('hop', delta > 0 ? `${capitalise((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(delta))} saved` : 'On pace');
        });
    };
    const pickReroute = (r)=>{
        if (!nav) return;
        setNav({
            ...nav,
            stage: 'rerouted',
            picked: r
        });
        setState((s)=>{
            const decisions = s.decisions.slice();
            const last = decisions.length - 1;
            if (last >= 0 && decisions[last].outcome === 'approved') {
                decisions[last] = {
                    ...decisions[last],
                    reroute: {
                        id: r.id,
                        label: r.label,
                        arrivalDate: r.arrivalDate
                    }
                };
            }
            return {
                ...s,
                boostCentsPerWeek: r.boostCentsPerWeek,
                reroute: {
                    id: r.id,
                    label: r.label
                },
                decisions
            };
        });
        setSelected('you');
        const recovered = nav.response?.goalImpact.afterDate && r.arrivalDate ? daysBetween(r.arrivalDate, nav.response.goalImpact.afterDate) : 0;
        showFx('surge', recovered > 0 ? `${capitalise((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(recovered))} sooner` : r.label);
    };
    const reset = ()=>{
        if (pending.current) clearTimeout(pending.current);
        requestId.current += 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearState"])(persona.personaId);
        setState(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_PERSONA_STATE"]);
        setNav(null);
        setFx(null);
        setPayStatus(null);
        setSelected('you');
        setTab('race');
    };
    const toggleCalm = ()=>{
        setCalm((c)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveCalm"])(!c);
            return !c;
        });
    };
    const held = nav && nav.mode === 'purchase' && (nav.stage === 'checking' || nav.stage === 'ask');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "desk",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "phone",
            "data-calm": calm,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "phone-notch",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "status-bar",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "9:41"
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "5G ▮▮▮"
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "app-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$symbol$2f$components$2f$logos$2f$wbc$2d$logo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WBCLogo"], {
                                "aria-label": "Westpac"
                            }, void 0, false, {
                                fileName: "[project]/src/components/App.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "app-title",
                                    children: "WallaTrack"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "app-sub",
                                    children: [
                                        persona.customer.person.firstName,
                                        " ",
                                        persona.customer.person.lastName,
                                        " · demo data"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "calm-toggle",
                            "aria-pressed": calm,
                            onClick: toggleCalm,
                            children: [
                                "Calm motion ",
                                calm ? 'on' : 'off'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `screen${held && nav.minimized ? ' has-chip' : ''}`,
                    children: [
                        tab === 'race' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RaceScreen"], {
                            analysis: analysis,
                            racers: racers,
                            state: state,
                            snapshotDays: snapshotDays,
                            selected: selected,
                            onSelect: setSelected,
                            fx: fx,
                            calm: calm,
                            onWhatIf: (p)=>startCheck(p, 'what-if')
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        tab === 'pay' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckoutScreen"], {
                            persona: persona,
                            status: payStatus,
                            busy: !!held,
                            onPay: (p)=>startCheck(p, 'purchase')
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        tab === 'insights' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InsightsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsightsScreen"], {
                            analysis: analysis,
                            state: state,
                            demoCheck: demoCheck
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 250,
                            columnNumber: 34
                        }, this),
                        tab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HistoryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistoryScreen"], {
                            decisions: state.decisions,
                            onReset: reset
                        }, void 0, false, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 251,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "notice",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GENERAL_NOTICE"],
                                " All data shown is fictional."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "tabs",
                    "aria-label": "Sections",
                    children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "tab",
                            "aria-current": tab === t.id ? 'page' : undefined,
                            onClick: ()=>setTab(t.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "aria-hidden": "true",
                                    children: t.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/App.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this),
                                t.label
                            ]
                        }, t.id, true, {
                            fileName: "[project]/src/components/App.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this),
                nav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavigatorSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigatorSheet"], {
                    firstName: analysis.firstName,
                    nav: nav,
                    onApprove: approve,
                    onDecline: decline,
                    onPickReroute: pickReroute,
                    onMinimize: ()=>setNav((n)=>n ? {
                                ...n,
                                minimized: true
                            } : n),
                    onRestore: ()=>setNav((n)=>n ? {
                                ...n,
                                minimized: false
                            } : n),
                    onClose: ()=>setNav(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/App.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
function toDecision(s, outcome, r) {
    return {
        id: s.decisions.length + 1,
        outcome,
        merchant: r.purchase.merchant,
        item: r.purchase.item,
        amountCents: r.purchase.amountCents,
        category: r.purchase.category,
        beforeDate: r.goalImpact.beforeDate,
        afterDate: r.goalImpact.afterDate,
        deltaDays: r.goalImpact.deltaDays,
        reroute: null
    };
}
function daysBetween(fromIso, toIso) {
    return Math.round((Date.parse(toIso) - Date.parse(fromIso)) / 86_400_000);
}
function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
}),
"[project]/src/components/CheckoutScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckoutScreen",
    ()=>CheckoutScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/button/button.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const THUMB = {
    pc: 'PC',
    'uber-eats': 'UE',
    coffee: 'FW'
};
function CheckoutScreen({ persona, status, busy, onPay }) {
    const items = persona.wallatrack.demoPurchases;
    const [pickedId, setPickedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(items[0].id);
    const picked = items.find((i)=>i.id === pickedId) ?? items[0];
    const amountCents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(picked.amount);
    const card = persona.accounts.find((a)=>a.accountId === persona.wallatrack.spendingAccountId);
    const pay = ()=>onPay({
            merchant: picked.merchant,
            item: picked.item,
            amountCents,
            category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryForMcc"])(picked.merchantCategoryCode)
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Checkout"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "radiogroup",
                        "aria-label": "Demo purchase",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "radio",
                                "aria-checked": item.id === pickedId,
                                className: "pick",
                                onClick: ()=>setPickedId(item.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "thumb",
                                        "aria-hidden": "true",
                                        children: THUMB[item.id] ?? item.merchant.slice(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: item.item
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                style: {
                                                    display: 'block'
                                                },
                                                children: [
                                                    item.merchant,
                                                    " · ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryForMcc"])(item.merchantCategoryCode)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "price",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(item.amount))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutScreen.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        style: {
                            marginBottom: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "muted",
                                children: "Total to pay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "total",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(amountCents)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "paycard",
                        style: {
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "▭"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    card?.displayName ?? 'Everyday',
                                    " debit card · ",
                                    card?.maskedNumber.slice(-4) ?? '0000'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutScreen.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        look: "primary",
                        size: "xlarge",
                        block: true,
                        disabled: busy,
                        onClick: pay,
                        children: [
                            "Pay ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(amountCents)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        style: {
                            marginTop: 8
                        },
                        children: "Demo checkout. No real payment is made."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutScreen.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutScreen.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `status ${status.kind === 'held' ? 'held' : status.kind === 'approved' ? 'done' : 'cancelled'}`,
                role: "status",
                children: [
                    status.kind === 'held' && `On hold: ${status.purchase.merchant} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(status.purchase.amountCents)}. Waiting for your call.`,
                    status.kind === 'approved' && `Paid: ${status.purchase.merchant} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(status.purchase.amountCents)}.`,
                    status.kind === 'declined' && `Cancelled: ${status.purchase.merchant} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(status.purchase.amountCents)}. Nothing was charged.`
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutScreen.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutScreen.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/HistoryScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryScreen",
    ()=>HistoryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$badge$2f$badge$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/badge/badge.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/button/button.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const fmt = (iso)=>iso ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(iso) : 'no date yet';
function impact(d) {
    if (d.outcome === 'approved') {
        return d.deltaDays > 0 ? `Goal date moved back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(d.deltaDays)}, from ${fmt(d.beforeDate)} to ${fmt(d.afterDate)}.` : `Goal date stayed ${fmt(d.afterDate)}.`;
    }
    if (d.outcome === 'declined') {
        return d.deltaDays > 0 ? `Stayed on pace for ${fmt(d.beforeDate)}. ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(d.deltaDays)} saved.` : `Stayed on pace for ${fmt(d.beforeDate)}.`;
    }
    return d.deltaDays > 0 ? `Would move your goal date back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(d.deltaDays)}, to ${fmt(d.afterDate)}.` : `Would not move your goal date of ${fmt(d.afterDate)}.`;
}
function HistoryScreen({ decisions, onReset }) {
    const newestFirst = decisions.slice().reverse();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Decision history"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HistoryScreen.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    newestFirst.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "No purchase checks yet. Tap Pay on the checkout, or try a what-if on the Race tab."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HistoryScreen.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    newestFirst.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "entry",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                d.merchant,
                                                " · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(d.amountCents)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HistoryScreen.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$badge$2f$badge$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            color: d.outcome === 'approved' ? 'danger' : d.outcome === 'declined' ? 'success' : 'muted',
                                            soft: true,
                                            children: d.outcome === 'approved' ? 'Approved' : d.outcome === 'declined' ? 'Declined' : 'What-if'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HistoryScreen.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HistoryScreen.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: d.category
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HistoryScreen.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: impact(d)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HistoryScreen.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                d.reroute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: [
                                        "Reroute: ",
                                        d.reroute.label,
                                        ", arriving ",
                                        fmt(d.reroute.arrivalDate),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HistoryScreen.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, d.id, true, {
                            fileName: "[project]/src/components/HistoryScreen.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HistoryScreen.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                look: "faint",
                size: "medium",
                block: true,
                onClick: onReset,
                children: "Reset demo"
            }, void 0, false, {
                fileName: "[project]/src/components/HistoryScreen.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HistoryScreen.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/InsightsScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsightsScreen",
    ()=>InsightsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function InsightsScreen({ analysis: a, state, demoCheck }) {
    const remaining = a.goalCents - a.savedCents;
    const maxCategory = Math.max(...a.breakdown.map((c)=>c.totalCents), 1);
    const approved = state.decisions.filter((d)=>d.outcome === 'approved');
    const declined = state.decisions.filter((d)=>d.outcome === 'declined');
    const sum = (list, pick)=>list.reduce((s, d)=>s + pick(d), 0);
    const passed = demoCheck.checks.filter((c)=>c.ok).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Your last ",
                            a.windowWeeks,
                            " weeks"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kpis",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "kpi",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "In"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(Math.round(a.incomeCents / a.windowWeeks))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "muted",
                                        children: "a week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "kpi",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(Math.round(a.spendCents / a.windowWeeks))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "muted",
                                        children: "a week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "kpi",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "Kept"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeklyCents"])(a.pace))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "muted",
                                        children: "a week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        style: {
                            marginTop: 8
                        },
                        children: "What you keep each week is your pace. Your arrival date is what is left to save, divided by that pace."
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InsightsScreen.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Your habits"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    a.habits.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "No repeat spending found yet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 52,
                        columnNumber: 35
                    }, this),
                    a.habits.map((h, i)=>{
                        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysToGoal"])(remaining, {
                            netCents: a.pace.netCents + h.totalCents,
                            weeks: a.pace.weeks
                        });
                        const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysToGoal"])(remaining, a.pace);
                        const sooner = days !== null && base !== null ? base - days : 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "entry",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: h.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InsightsScreen.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents),
                                                " a week"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InsightsScreen.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: [
                                        h.category,
                                        " · ",
                                        h.occurrences,
                                        " purchases in ",
                                        h.weeksSeen,
                                        " of the last ",
                                        h.weeks,
                                        " weeks",
                                        i === 0 ? ' · your top habit' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                days !== null && sooner > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: [
                                        "Without it, your goal date would be ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(a.asOf, days)),
                                        ", ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(sooner),
                                        " sooner."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, h.merchant, true, {
                            fileName: "[project]/src/components/InsightsScreen.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InsightsScreen.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            state.decisions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Your purchase checks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Approved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            approved.length,
                                            " · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(sum(approved, (d)=>d.amountCents))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: approved.length === 0 ? 'Nothing approved yet.' : `Moved your goal date back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(sum(approved, (d)=>d.deltaDays))} before any reroute.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Declined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            declined.length,
                                            " · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(sum(declined, (d)=>d.amountCents))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: declined.length === 0 ? 'Nothing declined yet.' : `Kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(sum(declined, (d)=>d.amountCents))} in your goal and saved ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(sum(declined, (d)=>d.deltaDays))}.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/InsightsScreen.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InsightsScreen.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Where it goes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    a.breakdown.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 9
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    style: {
                                        fontSize: 13
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: c.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InsightsScreen.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(c.weeklyCents),
                                                " a week"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InsightsScreen.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bar${c.essential ? ' essential' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: `${Math.max(2, Math.round(c.totalCents / maxCategory * 100))}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InsightsScreen.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, c.category, true, {
                            fileName: "[project]/src/components/InsightsScreen.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            "Navy bars are essentials. Red bars are everything else. Weekly averages over ",
                            a.windowWeeks,
                            " weeks."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InsightsScreen.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Engine check"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        style: {
                            marginBottom: 6
                        },
                        children: [
                            passed,
                            " of ",
                            demoCheck.checks.length,
                            " demo dates recomputed from the transactions and confirmed when the app started."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InsightsScreen.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    demoCheck.checks.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "check-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: c.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: c.ok ? 'ok' : 'bad',
                                    children: [
                                        c.actual,
                                        c.ok ? ' ✓' : ` (spec ${c.expected})`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InsightsScreen.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, c.label, true, {
                            fileName: "[project]/src/components/InsightsScreen.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InsightsScreen.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InsightsScreen.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/NavigatorSheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigatorSheet",
    ()=>NavigatorSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/button/button.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wallaby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Wallaby.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const fmt = (iso)=>iso ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(iso) : 'No date yet';
function NavigatorSheet({ firstName, nav, onApprove, onDecline, onPickReroute, onMinimize, onRestore, onClose }) {
    const { stage, mode, purchase, response } = nav;
    const whatIf = mode === 'what-if';
    const held = !whatIf && (stage === 'checking' || stage === 'ask');
    // Hidden, but the purchase is still on hold: Approve stays one tap away.
    if (nav.minimized && held) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hold-chip",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "grow",
                    children: [
                        "On hold: ",
                        purchase.merchant,
                        " ",
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(purchase.amountCents)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    look: "faint",
                    size: "small",
                    onClick: onRestore,
                    children: "Review"
                }, void 0, false, {
                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    look: "primary",
                    size: "small",
                    onClick: onApprove,
                    children: "Approve"
                }, void 0, false, {
                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NavigatorSheet.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    const title = stage === 'checking' ? 'Checking your goal' : stage === 'approved' ? 'Purchase approved' : stage === 'rerouted' ? `${nav.picked?.label ?? 'Reroute'} picked` : stage === 'declined' ? 'Purchase cancelled' : whatIf ? `What if, ${firstName}?` : `Quick check, ${firstName}`;
    const eyebrow = whatIf ? 'What-if · nothing is being bought' : held ? 'Purchase on hold' : 'Navigator';
    const dismiss = held ? onMinimize : onClose;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `scrim${stage === 'ask' || stage === 'checking' ? '' : ' clear'}`,
                onClick: dismiss
            }, void 0, false, {
                fileName: "[project]/src/components/NavigatorSheet.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `sheet${stage === 'ask' || stage === 'checking' ? '' : ' compact'}`,
                role: "dialog",
                "aria-modal": "false",
                "aria-label": "Navigator purchase check",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sheet-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-avatar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wallaby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wallaby"], {
                                    variant: "navigator",
                                    scale: 3,
                                    hopping: stage === 'checking'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow",
                                        children: eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "app-title",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "icon-btn",
                                onClick: dismiss,
                                "aria-label": held ? 'Hide. Your purchase stays on hold.' : 'Close',
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    (stage === 'checking' || stage === 'ask') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "purchase-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: purchase.merchant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "muted",
                                        children: [
                                            purchase.item,
                                            purchase.category
                                        ].filter(Boolean).join(' · ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "amount",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(purchase.amountCents)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    stage === 'checking' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "checking",
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dots",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            "Working out what this does to your goal date"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    stage === 'ask' && response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "impact",
                                children: response.goalImpact.line
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dates",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow",
                                                children: "Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: fmt(response.goalImpact.beforeDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `after${response.goalImpact.deltaDays > 0 ? '' : ' same'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow",
                                                children: whatIf ? 'If you buy it' : 'If approved'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: fmt(response.goalImpact.afterDate)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            response.habitLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "habit-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "↻"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: response.habitLink.line
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            whatIf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    response.reroutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "eyebrow",
                                                style: {
                                                    marginBottom: 6
                                                },
                                                children: "Ways to win the time back if you went ahead"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this),
                                            response.reroutes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reroute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "name",
                                                                    children: r.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "muted",
                                                                    children: r.how
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "when",
                                                            children: fmt(r.arrivalDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 12
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            look: "primary",
                                            size: "large",
                                            block: true,
                                            onClick: onClose,
                                            children: "Done"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavigatorSheet.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        look: "hero",
                                        soft: true,
                                        size: "large",
                                        block: true,
                                        onClick: onDecline,
                                        children: response.actions.decline.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        look: "primary",
                                        size: "large",
                                        block: true,
                                        onClick: onApprove,
                                        children: response.actions.approve.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    stage === 'approved' && response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "impact",
                                children: response.actions.approve.resultLine
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            response.reroutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow",
                                        style: {
                                            marginBottom: 6
                                        },
                                        children: [
                                            response.reroutes.length === 3 ? 'Three ways' : 'Ways',
                                            " to win the time back"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reroute-tiles",
                                        children: response.reroutes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "reroute tile",
                                                onClick: ()=>onPickReroute(r),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "name",
                                                        children: r.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "when",
                                                        children: fmt(r.arrivalDate)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "how",
                                                        children: r.how
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.id, true, {
                                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    look: "link",
                                    size: "small",
                                    block: true,
                                    onClick: onClose,
                                    children: response.reroutes.length > 0 ? 'Not now' : 'Done'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavigatorSheet.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    stage === 'rerouted' && nav.picked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "impact",
                                children: [
                                    "You now arrive ",
                                    fmt(nav.picked.arrivalDate),
                                    ". ",
                                    nav.picked.how,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                look: "primary",
                                size: "large",
                                block: true,
                                onClick: onClose,
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    stage === 'declined' && response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "impact",
                                children: response.actions.decline.resultLine
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                look: "primary",
                                size: "large",
                                block: true,
                                onClick: onClose,
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavigatorSheet.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    response && stage === 'ask' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "source",
                        children: [
                            response.notice,
                            " ",
                            response.source === 'ai' ? 'AI wording' : 'Pre-checked wording',
                            "; ",
                            response.guard.numbersChecked,
                            " figures confirmed by the engine."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NavigatorSheet.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavigatorSheet.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NavigatorSheet.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/RaceScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RaceScreen",
    ()=>RaceScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/button/button.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$input$2f$input$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/input/input.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$select$2f$select$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/select/select.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceTrack$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RaceTrack.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const WHAT_IF_CATEGORIES = [
    'Electronics',
    'Shopping',
    'Takeaway',
    'Eating out',
    'Coffee',
    'Entertainment',
    'Other'
];
function RaceScreen({ analysis, racers, state, snapshotDays, selected, onSelect, fx, calm, onWhatIf }) {
    const you = racers[0];
    const saved = Math.max(0, you.savedCents);
    const percent = Math.round(saved / analysis.goalCents * 100);
    const vsTarget = you.arrivalDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffDays"])(you.arrivalDate, analysis.targetDate) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "track-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow",
                                        children: [
                                            analysis.goalName,
                                            " · you arrive"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RaceScreen.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "big-date",
                                        children: you.arrivalDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(you.arrivalDate) : 'No date yet'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceScreen.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            state.reroute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    state.reroute.label,
                                    " route"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 41,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RaceTrack$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RaceTrack"], {
                        asOf: analysis.asOf,
                        goalCents: analysis.goalCents,
                        racers: racers,
                        snapshotDays: snapshotDays,
                        selected: selected,
                        onSelect: onSelect,
                        fx: fx,
                        calm: calm
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginBottom: 0
                                },
                                children: analysis.goalName
                            }, void 0, false, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(saved),
                                    " of ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(analysis.goalCents)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar",
                        style: {
                            margin: '10px 0 8px'
                        },
                        role: "img",
                        "aria-label": `${percent}% of the goal saved`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${percent}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/RaceScreen.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted",
                        children: [
                            "Target date ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(analysis.targetDate),
                            ".",
                            ' ',
                            vsTarget === null ? 'At this pace there is no arrival date yet.' : vsTarget >= 0 ? `At this pace you arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(vsTarget)} before it.` : `At this pace you arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(vsTarget)} after it.`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatIf, {
                onWhatIf: onWhatIf
            }, void 0, false, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RaceScreen.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function WhatIf({ onWhatIf }) {
    const [what, setWhat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Electronics');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const submit = (e)=>{
        e.preventDefault();
        const cents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUserAmountToCents"])(amount);
        if (!what.trim()) return setError('Add what you are planning to buy.');
        if (cents === null) return setError('Enter an amount in dollars, like 1200 or 49.95.');
        setError(null);
        onWhatIf({
            merchant: what.trim(),
            amountCents: cents,
            category
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "What if I bought…"
            }, void 0, false, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                style: {
                    marginBottom: 10
                },
                children: "Check a planned purchase against your goal. Nothing is bought."
            }, void 0, false, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    "What",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$input$2f$input$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        size: "medium",
                                        value: what,
                                        onChange: (e)=>setWhat(e.target.value),
                                        placeholder: "Gaming PC",
                                        maxLength: 40
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceScreen.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    "Amount ($)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$input$2f$input$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        size: "medium",
                                        inputMode: "decimal",
                                        value: amount,
                                        onChange: (e)=>setAmount(e.target.value),
                                        placeholder: "1200",
                                        maxLength: 10
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RaceScreen.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        style: {
                            marginBottom: 10
                        },
                        children: [
                            "Category",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$select$2f$select$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                size: "medium",
                                value: category,
                                onChange: (e)=>setCategory(e.target.value),
                                children: WHAT_IF_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c,
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/src/components/RaceScreen.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RaceScreen.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "error",
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        look: "hero",
                        size: "large",
                        block: true,
                        children: "Check against my goal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceScreen.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceScreen.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RaceScreen.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/RaceTrack.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RaceTrack",
    ()=>RaceTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@westpac/ui/dist/components/button/button.component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wallaby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Wallaby.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const PLAY_MS = 8000;
const CALM_PLAY_MS = 12000;
const CALM_STEP_MS = 500;
function RaceTrack({ asOf, goalCents, racers, snapshotDays, selected, onSelect, fx, calm }) {
    const [playDays, setPlayDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fxActive, setFxActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const endDays = Math.max(snapshotDays, ...racers.map((r)=>r.days ?? 0)) + 14;
    const days = playDays ?? snapshotDays;
    const playing = playDays !== null;
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const t = timers.current;
        if (t.raf) cancelAnimationFrame(t.raf);
        if (t.interval) clearInterval(t.interval);
        if (t.timeout) clearTimeout(t.timeout);
        timers.current = {};
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>stop, [
        stop
    ]);
    // Run the short reaction (knock-back, surge, hop) each time a new one arrives.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fx) return;
        setFxActive(true);
        const t = setTimeout(()=>setFxActive(false), 2600);
        return ()=>clearTimeout(t);
    }, [
        fx
    ]);
    const play = ()=>{
        stop();
        const finish = ()=>{
            setPlayDays(endDays);
            timers.current.timeout = setTimeout(()=>setPlayDays(null), 1600);
        };
        setPlayDays(0);
        if (calm) {
            // Calm motion: a few gentle steps instead of a frame-by-frame run.
            const steps = Math.round(CALM_PLAY_MS / CALM_STEP_MS);
            let i = 0;
            timers.current.interval = setInterval(()=>{
                i += 1;
                if (i >= steps) {
                    if (timers.current.interval) clearInterval(timers.current.interval);
                    finish();
                } else {
                    setPlayDays(Math.round(endDays * i / steps));
                }
            }, CALM_STEP_MS);
            return;
        }
        const started = performance.now();
        const tick = (now)=>{
            const t = Math.min(1, (now - started) / PLAY_MS);
            if (t >= 1) return finish();
            setPlayDays(Math.round(endDays * t));
            timers.current.raf = requestAnimationFrame(tick);
        };
        timers.current.raf = requestAnimationFrame(tick);
    };
    const cancel = ()=>{
        stop();
        setPlayDays(null);
    };
    const left = (fraction)=>`calc(${fraction.toFixed(4)} * (100% - 32px))`;
    const todayFraction = goalCents > 0 ? Math.min(1, Math.max(0, racers[0].savedCents) / goalCents) : 0;
    const picked = racers.find((r)=>r.id === selected) ?? racers[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `track${playing ? ' playing' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "finish"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceTrack.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    racers.map((r, i)=>{
                        const fraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progressAt"])(r, goalCents, days);
                        const arrived = r.days !== null && days >= r.days;
                        const isYou = r.id === 'you';
                        const showFx = isYou && fx && fxActive;
                        const hopping = playing && !arrived || isYou && showFx && fx.kind === 'surge';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "lane",
                            "aria-pressed": selected === r.id,
                            "aria-label": `${r.name}, ${r.tagline}. Arrives ${r.arrivalDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate) : 'no date yet'}. Show details.`,
                            onClick: ()=>onSelect(r.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "lane-label",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: r.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RaceTrack.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "date",
                                            children: r.arrivalDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate) : 'No date yet'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RaceTrack.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "lane-run",
                                    children: [
                                        i === racers.length - 1 && !playing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "today-mark",
                                            style: {
                                                left: `calc(${todayFraction.toFixed(4)} * (100% - 32px) + 4px)`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RaceTrack.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RaceTrack.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `runner${r.id === 'ghost' ? ' ghostly' : ''}${showFx && fx.kind !== 'surge' ? ` fx-${fx.kind}` : ''}`,
                                            style: {
                                                left: left(fraction)
                                            },
                                            children: [
                                                showFx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `fx-tag${fx.kind === 'knock' ? '' : ' good'}`,
                                                    children: fx.label
                                                }, fx.key, false, {
                                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wallaby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wallaby"], {
                                                    variant: r.id,
                                                    hopping: !!hopping
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RaceTrack.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.id, true, {
                            fileName: "[project]/src/components/RaceTrack.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceTrack.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "track-foot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "playhead",
                        "aria-live": "off",
                        children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Running: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(asOf, days))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                    lineNumber: 150,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RaceTrack.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Track shown at ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(asOf, snapshotDays))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RaceTrack.tsx",
                                    lineNumber: 154,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RaceTrack.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceTrack.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$westpac$2f$ui$2f$dist$2f$components$2f$button$2f$button$2e$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        look: "hero",
                        soft: true,
                        size: "small",
                        onClick: playing ? cancel : play,
                        children: playing ? 'Stop' : 'Play the race'
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceTrack.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceTrack.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Wallaby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wallaby"], {
                        variant: picked.id,
                        scale: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/RaceTrack.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                children: [
                                    picked.name,
                                    " · ",
                                    picked.tagline
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RaceTrack.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "big-date",
                                children: picked.arrivalDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(picked.arrivalDate) : 'No date yet'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RaceTrack.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: picked.reason
                            }, void 0, false, {
                                fileName: "[project]/src/components/RaceTrack.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RaceTrack.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RaceTrack.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RaceTrack.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Wallaby.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallaby",
    ()=>Wallaby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wallabySprite.ts [app-ssr] (ecmascript)");
;
;
function Wallaby({ variant, scale = 2, hopping = false }) {
    const size = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPRITE_SIZE"] * scale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `sprite${hopping ? ' hopping' : ''}`,
        style: {
            width: size,
            height: size
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size * 2,
            height: size,
            viewBox: `0 0 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPRITE_SIZE"] * 2} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPRITE_SIZE"]}`,
            shapeRendering: "crispEdges",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spritePixels"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallabySprite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PALETTES"][variant]).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: p.x,
                    y: p.y,
                    width: p.w,
                    height: 1,
                    fill: p.fill
                }, i, false, {
                    fileName: "[project]/src/components/Wallaby.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Wallaby.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Wallaby.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/wallabySprite.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pixel-art wallaby sprite sheet: two 16x16 frames (standing, mid-hop) laid
 * side by side. Each character is one pixel:
 *   . empty   b body   d dark fur   l light belly   e eye   n nose   s scarf
 */ __turbopack_context__.s([
    "FRAMES",
    ()=>FRAMES,
    "PALETTES",
    ()=>PALETTES,
    "SPRITE_SIZE",
    ()=>SPRITE_SIZE,
    "spritePixels",
    ()=>spritePixels
]);
const SPRITE_SIZE = 16;
const STAND = [
    '...........d..d.',
    '...........b..b.',
    '...........bbbb.',
    '..........bbbebb',
    '..........bbbbbn',
    '..........bbbbb.',
    '.........ssss...',
    '.......bbbbbll..',
    '......bbbbbbllb.',
    '.....bbbbbbbll..',
    '....bbbbbbbbbl..',
    '...bbbbbbbbbb...',
    '..dbbbbbbbbb....',
    '.dd...bbb.bbb...',
    'dd....bb...bb...',
    'd.....dddd.dddd.'
];
const HOP = [
    '...........d..d.',
    '...........b..b.',
    '...........bbbb.',
    '..........bbbebb',
    '..........bbbbbn',
    '..........bbbbb.',
    '.........ssss...',
    'd......bbbbbll..',
    'dd....bbbbbbllb.',
    '.dd..bbbbbbbll..',
    '..dbbbbbbbbbbl..',
    '...bbbbbbbbbb...',
    '....bbbbbbbb....',
    '...bbb..bbb.....',
    '..ddd..ddd......',
    '................'
];
const FRAMES = [
    STAND,
    HOP
];
const PALETTES = {
    you: {
        b: '#DA1710',
        d: '#99100B',
        l: '#FACCCB',
        e: '#1C1C1F',
        n: '#1C1C1F',
        s: '#1F1C4F'
    },
    ghost: {
        b: '#B9B4D6',
        d: '#8E88B8',
        l: '#E6E3F3',
        e: '#4B4670',
        n: '#4B4670',
        s: '#B9B4D6'
    },
    best: {
        b: '#E3A008',
        d: '#A16207',
        l: '#FDECC0',
        e: '#1C1C1F',
        n: '#1C1C1F',
        s: '#A16207'
    },
    peer: {
        b: '#5B7C99',
        d: '#3B5670',
        l: '#D5E1EC',
        e: '#1C1C1F',
        n: '#1C1C1F',
        s: '#3B5670'
    },
    navigator: {
        b: '#8A6A4F',
        d: '#5E4532',
        l: '#EBDCCB',
        e: '#1C1C1F',
        n: '#1C1C1F',
        s: '#DA1710'
    }
};
function spritePixels(palette) {
    const out = [];
    FRAMES.forEach((frame, f)=>{
        frame.forEach((row, y)=>{
            let x = 0;
            while(x < row.length){
                const ch = row[x];
                let w = 1;
                while(x + w < row.length && row[x + w] === ch)w++;
                if (ch !== '.') out.push({
                    x: f * SPRITE_SIZE + x,
                    y,
                    w,
                    fill: palette[ch]
                });
                x += w;
            }
        });
    });
    return out;
}
}),
"[project]/src/data/personas/alex.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"personaId\":\"alex\",\"notice\":\"Fictional demo data. Alex Sample is not a real person and no real banking data is used.\",\"asOf\":\"2026-11-16\",\"customer\":{\"customerUType\":\"person\",\"person\":{\"firstName\":\"Alex\",\"lastName\":\"Sample\"}},\"accounts\":[{\"accountId\":\"acc-alex-everyday\",\"displayName\":\"Everyday\",\"maskedNumber\":\"xxxx xxxx 4821\",\"productCategory\":\"TRANS_AND_SAVINGS_ACCOUNTS\",\"productName\":\"Everyday Account\",\"openStatus\":\"OPEN\",\"isOwned\":true},{\"accountId\":\"acc-alex-goal\",\"displayName\":\"First home starter\",\"maskedNumber\":\"xxxx xxxx 7730\",\"productCategory\":\"TRANS_AND_SAVINGS_ACCOUNTS\",\"productName\":\"Goal Saver\",\"openStatus\":\"OPEN\",\"isOwned\":true}],\"balances\":[{\"accountId\":\"acc-alex-everyday\",\"currentBalance\":\"1312.40\",\"availableBalance\":\"1312.40\",\"currency\":\"AUD\"},{\"accountId\":\"acc-alex-goal\",\"currentBalance\":\"4200.00\",\"availableBalance\":\"4200.00\",\"currency\":\"AUD\"}],\"transactions\":[{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0002\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-01T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0003\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0004\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0008\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-02T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0005\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0009\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-03T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0001\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-06-04T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0006\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0007\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0010\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-05T09:00:00+10:00\",\"amount\":\"-63.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0011\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-06T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0012\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-06-07T09:00:00+10:00\",\"amount\":\"-156.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0013\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-08T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0014\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0015\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0019\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-09T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0016\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0020\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-10T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0017\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0023\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-06-11T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0018\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0021\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-12T09:00:00+10:00\",\"amount\":\"-59.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0022\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-13T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0024\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-06-14T09:00:00+10:00\",\"amount\":\"-107.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0026\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-15T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0027\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0028\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0032\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-16T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0029\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0033\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-17T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0025\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-06-18T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0030\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0031\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0034\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-19T09:00:00+10:00\",\"amount\":\"-67.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0035\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-20T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0036\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-06-21T09:00:00+10:00\",\"amount\":\"-162.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0037\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-22T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0038\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0039\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0043\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0048\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"CITY POWER AND GAS\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-64.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"City Power & Gas\",\"merchantCategoryCode\":\"4900\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0040\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0044\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-24T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0041\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0047\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-06-25T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0042\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0045\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-26T09:00:00+10:00\",\"amount\":\"-61.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0046\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-27T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0049\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-06-28T09:00:00+10:00\",\"amount\":\"-78.61\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0051\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-29T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0052\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0053\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0057\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-30T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0054\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0058\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-01T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0050\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-02T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0055\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0056\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0059\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-03T09:00:00+10:00\",\"amount\":\"-58.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0060\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-04T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0061\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-07-05T09:00:00+10:00\",\"amount\":\"-99.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0062\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-06T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0063\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0064\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0068\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-07T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0065\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0069\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0073\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-24.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0066\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0072\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-07-09T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0067\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0070\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-10T09:00:00+10:00\",\"amount\":\"-60.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0071\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-11T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0074\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-07-12T09:00:00+10:00\",\"amount\":\"-48.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0076\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-13T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0077\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0078\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0082\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-14T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0079\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0083\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-15T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0075\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-16T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0080\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0081\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0084\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-17T09:00:00+10:00\",\"amount\":\"-57.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0085\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-18T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0086\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-07-19T09:00:00+10:00\",\"amount\":\"-92.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0087\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-20T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0088\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0089\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0093\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-21T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0090\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0094\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-22T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0091\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0097\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-07-23T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0092\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0095\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-24T09:00:00+10:00\",\"amount\":\"-62.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0096\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-25T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0098\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-07-26T09:00:00+10:00\",\"amount\":\"-88.11\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0100\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-27T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0101\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0102\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0106\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-28T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0103\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0107\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-29T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0099\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-30T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0104\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0105\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-31T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0108\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-31T09:00:00+10:00\",\"amount\":\"-64.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0109\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-01T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0110\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-08-02T09:00:00+10:00\",\"amount\":\"-142.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0111\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-03T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0112\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0113\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0117\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-04T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0114\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0118\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-05T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0115\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0121\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-08-06T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0116\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0119\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-07T09:00:00+10:00\",\"amount\":\"-60.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0120\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-08T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0122\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-08-09T09:00:00+10:00\",\"amount\":\"-99.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0124\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-10T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0125\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0126\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0130\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-11T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0127\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0131\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-12T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0123\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-08-13T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0128\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0129\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0132\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-14T09:00:00+10:00\",\"amount\":\"-65.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0133\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-15T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0134\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-08-16T09:00:00+10:00\",\"amount\":\"-157.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0135\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-17T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0136\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0137\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0141\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-18T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0138\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0142\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-19T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0139\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0145\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-08-20T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0140\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0143\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-21T09:00:00+10:00\",\"amount\":\"-61.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0144\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-22T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0146\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-08-23T09:00:00+10:00\",\"amount\":\"-127.51\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0148\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-24T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0149\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0150\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0154\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-25T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0151\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0155\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-26T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0147\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-08-27T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0152\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0153\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0156\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-28T09:00:00+10:00\",\"amount\":\"-58.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0157\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-29T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0158\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-08-30T09:00:00+10:00\",\"amount\":\"-90.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0159\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-31T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0160\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-31T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0161\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0165\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-01T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0162\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0166\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-02T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0163\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0169\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-09-03T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0164\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0167\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-04T09:00:00+10:00\",\"amount\":\"-64.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0168\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-05T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0170\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-09-06T09:00:00+10:00\",\"amount\":\"-65.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0172\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-07T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0173\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0174\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0178\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-08T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0175\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0179\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-09T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0171\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-09-10T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0176\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0177\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0180\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-11T09:00:00+10:00\",\"amount\":\"-61.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0181\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-12T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0182\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-09-13T09:00:00+10:00\",\"amount\":\"-70.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0183\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-14T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0184\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0185\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0189\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0194\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"CITY POWER AND GAS\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-64.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"City Power & Gas\",\"merchantCategoryCode\":\"4900\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0186\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0190\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-16T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0187\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0193\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-09-17T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0188\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0191\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-18T09:00:00+10:00\",\"amount\":\"-66.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0192\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-19T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0195\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-09-20T09:00:00+10:00\",\"amount\":\"-34.91\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0197\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-21T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0198\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0199\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0203\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-22T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0200\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0204\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-23T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0196\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-09-24T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0201\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0202\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0205\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-25T09:00:00+10:00\",\"amount\":\"-59.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0206\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-26T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0207\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-09-27T09:00:00+10:00\",\"amount\":\"-31.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0208\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-09-27T09:00:00+10:00\",\"amount\":\"-58.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0209\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-28T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0210\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0211\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0215\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-29T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0212\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0216\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-30T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0213\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0219\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-10-01T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0214\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0217\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-02T09:00:00+10:00\",\"amount\":\"-62.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0218\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-03T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0220\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-10-04T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0222\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-05T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0223\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0224\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0228\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-06T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0225\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0229\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-07T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0221\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-10-08T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0226\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0227\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0230\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-09T09:00:00+10:00\",\"amount\":\"-63.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0231\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-10T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0232\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-10-11T09:00:00+10:00\",\"amount\":\"-99.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0233\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-12T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0234\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0235\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0239\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-13T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0236\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0240\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-14T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0237\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0243\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-10-15T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0238\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0241\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-16T09:00:00+10:00\",\"amount\":\"-57.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0242\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-17T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0244\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-10-18T09:00:00+10:00\",\"amount\":\"-86.51\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0246\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-19T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0247\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0248\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0252\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-20T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0249\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0253\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-21T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0245\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-10-22T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0250\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0251\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0254\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-23T09:00:00+10:00\",\"amount\":\"-64.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0255\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-24T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0256\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-10-25T09:00:00+10:00\",\"amount\":\"-67.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0257\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-26T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0258\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0259\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0263\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-27T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0260\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0264\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-28T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0261\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0267\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-10-29T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0262\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0265\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-30T09:00:00+10:00\",\"amount\":\"-60.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0266\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-31T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0268\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-11-01T09:00:00+10:00\",\"amount\":\"-80.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0270\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-11-02T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0271\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0272\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0276\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-11-03T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0273\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0277\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-11-04T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0269\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-11-05T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0274\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0275\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0278\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-11-06T09:00:00+10:00\",\"amount\":\"-63.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0279\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-11-07T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0280\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-11-08T09:00:00+10:00\",\"amount\":\"-83.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0281\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-11-09T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0282\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0283\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0287\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-11-10T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0284\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0288\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-11-11T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0285\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0291\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-11-12T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0286\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0289\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-11-13T09:00:00+10:00\",\"amount\":\"-61.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0290\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-11-14T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0292\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-11-15T09:00:00+10:00\",\"amount\":\"-28.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0293\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-11-15T09:00:00+10:00\",\"amount\":\"-49.81\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"}],\"wallatrack\":{\"spendingAccountId\":\"acc-alex-everyday\",\"goal\":{\"name\":\"First home starter\",\"amount\":\"15000.00\",\"targetDate\":\"2028-06-30\",\"accountId\":\"acc-alex-goal\"},\"peerBenchmark\":{\"weeklyNet\":\"92.00\",\"label\":\"Renters on a similar income\"},\"rerouteOptions\":{\"sideHustle\":{\"how\":\"Add a small weekend side hustle\",\"weekly\":\"29.00\"},\"comfortable\":{\"how\":\"Pick up your Friday takeaway instead of delivery\",\"weekly\":\"17.50\"}},\"demoPurchases\":[{\"id\":\"pc\",\"merchant\":\"TechHub Online\",\"item\":\"Gaming PC\",\"amount\":\"1200.00\",\"merchantCategoryCode\":\"5732\"},{\"id\":\"uber-eats\",\"merchant\":\"Uber Eats\",\"item\":\"Dinner delivery\",\"amount\":\"62.00\",\"merchantCategoryCode\":\"5814\"},{\"id\":\"coffee\",\"merchant\":\"Bean Scene Espresso\",\"item\":\"Flat white\",\"amount\":\"5.50\",\"merchantCategoryCode\":\"5499\"}]}}");
}),
"[project]/src/data/personas/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PERSONA_ID",
    ()=>DEFAULT_PERSONA_ID,
    "PERSONAS",
    ()=>PERSONAS,
    "getPersona",
    ()=>getPersona
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$alex$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personas/alex.json.[json].cjs [app-ssr] (ecmascript)");
;
const PERSONAS = {
    alex: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$alex$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
const DEFAULT_PERSONA_ID = 'alex';
function getPersona(id) {
    return PERSONAS[id] ?? null;
}
}),
"[project]/src/engine/dates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "diffDays",
    ()=>diffDays,
    "formatDate",
    ()=>formatDate,
    "formatDayMonth",
    ()=>formatDayMonth,
    "formatDuration",
    ()=>formatDuration,
    "formatMonth",
    ()=>formatMonth,
    "fromEpochDay",
    ()=>fromEpochDay,
    "ordinal",
    ()=>ordinal,
    "toEpochDay",
    ()=>toEpochDay,
    "weekdayIndex",
    ()=>weekdayIndex,
    "weekdayName",
    ()=>weekdayName
]);
/** Calendar-date helpers on ISO "YYYY-MM-DD" strings (UTC, never the wall clock). */ const DAY_MS = 86_400_000;
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
function toEpochDay(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
    if (!m) throw new Error(`Invalid date: ${iso}`);
    return Math.round(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / DAY_MS);
}
function fromEpochDay(day) {
    return new Date(day * DAY_MS).toISOString().slice(0, 10);
}
function addDays(iso, days) {
    return fromEpochDay(toEpochDay(iso) + days);
}
function diffDays(fromIso, toIso) {
    return toEpochDay(toIso) - toEpochDay(fromIso);
}
function formatDate(iso) {
    const d = new Date(toEpochDay(iso) * DAY_MS);
    return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
function formatMonth(iso) {
    const d = new Date(toEpochDay(iso) * DAY_MS);
    return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
function formatDayMonth(iso) {
    const d = new Date(toEpochDay(iso) * DAY_MS);
    return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}
function weekdayIndex(iso) {
    return new Date(toEpochDay(iso) * DAY_MS).getUTCDay();
}
function weekdayName(index) {
    return WEEKDAYS[index];
}
function formatDuration(days) {
    const d = Math.abs(days);
    if (d < 1) return 'less than a day';
    if (d === 1) return '1 day';
    if (d < 14) return `${d} days`;
    return `about ${Math.round(d / 7)} weeks`;
}
function ordinal(n) {
    const v = n % 100;
    if (v >= 11 && v <= 13) return `${n}th`;
    return `${n}${[
        'th',
        'st',
        'nd',
        'rd'
    ][n % 10] ?? 'th'}`;
}
}),
"[project]/src/engine/demoCheck.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPEC_DATES",
    ()=>SPEC_DATES,
    "formatDemoCheck",
    ()=>formatDemoCheck,
    "runDemoCheck",
    ()=>runDemoCheck
]);
/**
 * Startup check: the engine recomputes every demo date in LEAD-SPEC.md from
 * the persona's transactions and compares it with what the spec says.
 * The expected dates live only here; nothing on screen is read from this list.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
;
;
;
const SPEC_DATES = {
    you: '2028-03-31',
    ghost: '2027-11-06',
    best: '2028-04-20',
    peer: '2029-02-15',
    afterPc: '2028-05-26',
    fastest: '2027-12-16',
    sideHustle: '2028-02-26',
    comfortable: '2028-03-29'
};
function runDemoCheck(persona) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyse"])(persona);
    const racers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectRacers"])(a, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_STATE"]);
    const racerDate = (id)=>racers.find((r)=>r.id === id)?.arrivalDate ?? null;
    const pc = persona.wallatrack.demoPurchases.find((p)=>p.id === 'pc');
    const check = pc ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPurchase"])(a, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_STATE"], {
        merchant: pc.merchant,
        item: pc.item,
        amountCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(pc.amount),
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryForMcc"])(pc.merchantCategoryCode)
    }) : null;
    const reroute = (id)=>check?.reroutes.find((r)=>r.id === id)?.arrivalDate ?? null;
    const rows = [
        [
            'You',
            SPEC_DATES.you,
            racerDate('you')
        ],
        [
            'Habit ghost',
            SPEC_DATES.ghost,
            racerDate('ghost')
        ],
        [
            'Best you',
            SPEC_DATES.best,
            racerDate('best')
        ],
        [
            'People like you',
            SPEC_DATES.peer,
            racerDate('peer')
        ],
        [
            'You before the $1,200 PC',
            SPEC_DATES.you,
            check?.before.date ?? null
        ],
        [
            'You after the $1,200 PC',
            SPEC_DATES.afterPc,
            check?.after.date ?? null
        ],
        [
            'Reroute: Fastest',
            SPEC_DATES.fastest,
            reroute('fastest')
        ],
        [
            'Reroute: Side hustle',
            SPEC_DATES.sideHustle,
            reroute('side-hustle')
        ],
        [
            'Reroute: Comfortable',
            SPEC_DATES.comfortable,
            reroute('comfortable')
        ]
    ];
    const checks = rows.map(([label, expected, actual])=>({
            label,
            expected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(expected),
            actual: actual ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(actual) : 'never',
            ok: actual === expected
        }));
    return {
        ok: checks.every((c)=>c.ok),
        checks
    };
}
function formatDemoCheck(result) {
    const lines = result.checks.map((c)=>`  ${c.ok ? 'ok  ' : 'FAIL'} ${c.label.padEnd(26)} engine ${c.actual.padEnd(12)} spec ${c.expected}`);
    const passed = result.checks.filter((c)=>c.ok).length;
    return [
        `[WallaTrack] engine date check: ${passed}/${result.checks.length} confirmed`,
        ...lines
    ].join('\n');
}
}),
"[project]/src/engine/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEST_STRETCH_WEEKS",
    ()=>BEST_STRETCH_WEEKS,
    "EMPTY_STATE",
    ()=>EMPTY_STATE,
    "PACE_WINDOW_WEEKS",
    ()=>PACE_WINDOW_WEEKS,
    "analyse",
    ()=>analyse,
    "buildReroutes",
    ()=>buildReroutes,
    "categoryForMcc",
    ()=>categoryForMcc,
    "categoryNoun",
    ()=>categoryNoun,
    "checkPurchase",
    ()=>checkPurchase,
    "daysToGoal",
    ()=>daysToGoal,
    "isEssential",
    ()=>isEssential,
    "progressAt",
    ()=>progressAt,
    "projectRacers",
    ()=>projectRacers,
    "weeklyCents",
    ()=>weeklyCents,
    "withBoost",
    ()=>withBoost,
    "youPace",
    ()=>youPace,
    "youSavedCents",
    ()=>youSavedCents
]);
/**
 * WallaTrack engine. Pure TypeScript, whole cents, no wall clock.
 *
 *   pace    = net savings per week (income minus spending over the last 12 weeks)
 *   arrival = as-of date + remaining amount / pace, rounded up to the next whole day
 *
 * Every number the app or the AI Navigator shows comes from here.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
;
;
const PACE_WINDOW_WEEKS = 12;
const BEST_STRETCH_WEEKS = 4;
const EMPTY_STATE = {
    spentCents: 0,
    boostCentsPerWeek: 0,
    approvedByCategory: {}
};
const MCC_CATEGORY = {
    '6513': 'Rent',
    '5411': 'Groceries',
    '4111': 'Transport',
    '4814': 'Phone & internet',
    '4900': 'Utilities',
    '5814': 'Takeaway',
    '5812': 'Eating out',
    '5813': 'Going out',
    '5499': 'Coffee',
    '4899': 'Entertainment',
    '7832': 'Entertainment',
    '5651': 'Shopping',
    '5942': 'Shopping',
    '5732': 'Electronics',
    '7997': 'Health & fitness'
};
const ESSENTIAL = new Set([
    'Rent',
    'Groceries',
    'Transport',
    'Phone & internet',
    'Utilities'
]);
/** Singular noun used in the habit line, e.g. "3rd takeaway this week". */ const CATEGORY_NOUN = {
    Takeaway: 'takeaway',
    Coffee: 'coffee',
    'Eating out': 'meal out',
    'Going out': 'night out',
    Shopping: 'shopping trip',
    Electronics: 'electronics purchase',
    Entertainment: 'entertainment purchase'
};
function categoryForMcc(mcc) {
    return mcc && MCC_CATEGORY[mcc] || 'Other';
}
function isEssential(category) {
    return ESSENTIAL.has(category);
}
function categoryNoun(category) {
    return CATEGORY_NOUN[category] ?? `${category.toLowerCase()} purchase`;
}
function weeklyCents(pace) {
    return Math.round(pace.netCents / pace.weeks);
}
function withBoost(pace, boostCentsPerWeek) {
    return {
        netCents: pace.netCents + boostCentsPerWeek * pace.weeks,
        weeks: pace.weeks
    };
}
function daysToGoal(remainingCents, pace) {
    if (!Number.isInteger(remainingCents) || !Number.isInteger(pace.netCents) || !Number.isInteger(pace.weeks)) {
        throw new Error('Engine works in whole cents and whole weeks');
    }
    if (remainingCents <= 0) return 0;
    if (pace.netCents <= 0 || pace.weeks <= 0) return null;
    const numerator = remainingCents * 7 * pace.weeks;
    return Math.floor((numerator + pace.netCents - 1) / pace.netCents);
}
function arrival(asOf, remainingCents, pace) {
    const days = daysToGoal(remainingCents, pace);
    return {
        days,
        date: days === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(asOf, days)
    };
}
// ---------- analysis of the transaction history ----------
function toTxns(persona) {
    return persona.transactions.filter((t)=>t.accountId === persona.wallatrack.spendingAccountId && t.status === 'POSTED').map((t)=>{
        const cents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(t.amount);
        return {
            id: t.transactionId,
            date: t.postingDateTime.slice(0, 10),
            cents,
            merchant: t.merchantName ?? t.description,
            category: cents > 0 ? 'Income' : categoryForMcc(t.merchantCategoryCode)
        };
    }).sort((a, b)=>a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
}
function sumBetween(txns, startDay, endDay) {
    let total = 0;
    for (const t of txns){
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
        if (d >= startDay && d < endDay) total += t.cents;
    }
    return total;
}
function findHabits(windowTxns, windowStartDay, weeks) {
    const byMerchant = new Map();
    for (const t of windowTxns){
        if (t.cents >= 0 || isEssential(t.category)) continue;
        const list = byMerchant.get(t.merchant) ?? [];
        list.push(t);
        byMerchant.set(t.merchant, list);
    }
    const habits = [];
    for (const [merchant, list] of byMerchant){
        const weeksSeen = new Set(list.map((t)=>Math.floor(((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date) - windowStartDay) / 7))).size;
        // A habit shows up in at least three weeks out of four.
        if (weeksSeen * 4 < weeks * 3) continue;
        const totalCents = -list.reduce((s, t)=>s + t.cents, 0);
        const dayCounts = new Array(7).fill(0);
        for (const t of list)dayCounts[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekdayIndex"])(t.date)]++;
        const topDay = dayCounts.indexOf(Math.max(...dayCounts));
        const weekday = dayCounts[topDay] * 10 >= list.length * 7 ? topDay : null;
        const perWeek = Math.round(list.length / weeks);
        const label = weekday !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekdayName"])(weekday)} ${merchant}` : perWeek > 1 ? `${merchant}, ${perWeek} times a week` : merchant;
        habits.push({
            merchant,
            category: list[0].category,
            totalCents,
            weeks,
            weeklyCents: Math.round(totalCents / weeks),
            occurrences: list.length,
            weeksSeen,
            weekday,
            label
        });
    }
    return habits.sort((a, b)=>b.totalCents - a.totalCents);
}
function findBestStretch(txns, windowStartDay) {
    if (txns.length === 0) return null;
    const firstDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(txns[0].date);
    const len = BEST_STRETCH_WEEKS * 7;
    let best = null;
    // Rolling four-week stretches, stepping a week at a time, all before the current pace window.
    for(let start = windowStartDay - len; start >= firstDay; start -= 7){
        const net = sumBetween(txns, start, start + len);
        if (!best || net > best.net) best = {
            net,
            start
        };
    }
    if (!best) return null;
    return {
        pace: {
            netCents: best.net,
            weeks: BEST_STRETCH_WEEKS
        },
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start + len - 1)
    };
}
function analyse(persona) {
    const { wallatrack: wt } = persona;
    const txns = toTxns(persona);
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(persona.asOf);
    const windowStartDay = asOfDay - PACE_WINDOW_WEEKS * 7;
    const windowTxns = txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
        return d >= windowStartDay && d < asOfDay;
    });
    const incomeCents = windowTxns.filter((t)=>t.cents > 0).reduce((s, t)=>s + t.cents, 0);
    const spendCents = -windowTxns.filter((t)=>t.cents < 0).reduce((s, t)=>s + t.cents, 0);
    const byCategory = new Map();
    for (const t of windowTxns){
        if (t.cents >= 0) continue;
        byCategory.set(t.category, (byCategory.get(t.category) ?? 0) - t.cents);
    }
    const breakdown = [
        ...byCategory.entries()
    ].map(([category, totalCents])=>({
            category,
            totalCents,
            weeklyCents: Math.round(totalCents / PACE_WINDOW_WEEKS),
            essential: isEssential(category)
        })).sort((a, b)=>b.totalCents - a.totalCents);
    const goalBalance = persona.balances.find((b)=>b.accountId === wt.goal.accountId);
    if (!goalBalance) throw new Error('Persona has no balance for the goal account');
    const habits = findHabits(windowTxns, windowStartDay, PACE_WINDOW_WEEKS);
    return {
        personaId: persona.personaId,
        firstName: persona.customer.person.firstName,
        asOf: persona.asOf,
        goalName: wt.goal.name,
        goalCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.goal.amount),
        targetDate: wt.goal.targetDate,
        savedCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(goalBalance.currentBalance),
        windowWeeks: PACE_WINDOW_WEEKS,
        windowStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(persona.asOf, -PACE_WINDOW_WEEKS * 7),
        incomeCents,
        spendCents,
        pace: {
            netCents: incomeCents - spendCents,
            weeks: PACE_WINDOW_WEEKS
        },
        habits,
        topHabit: habits[0] ?? null,
        bestStretch: findBestStretch(txns, windowStartDay),
        peerPace: {
            netCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.peerBenchmark.weeklyNet),
            weeks: 1
        },
        peerLabel: wt.peerBenchmark.label,
        breakdown,
        txns,
        rerouteOptions: {
            sideHustle: {
                how: wt.rerouteOptions.sideHustle.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.sideHustle.weekly)
            },
            comfortable: {
                how: wt.rerouteOptions.comfortable.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.comfortable.weekly)
            }
        }
    };
}
// ---------- the race ----------
function makeRacer(a, id, name, tagline, pace, savedCents, reason) {
    const remainingCents = Math.max(0, a.goalCents - savedCents);
    const { days, date } = arrival(a.asOf, remainingCents, pace);
    return {
        id,
        name,
        tagline,
        pace,
        weeklyCents: weeklyCents(pace),
        savedCents,
        remainingCents,
        days,
        arrivalDate: date,
        reason
    };
}
function youPace(a, state) {
    return withBoost(a.pace, state.boostCentsPerWeek);
}
function youSavedCents(a, state) {
    return a.savedCents - state.spentCents;
}
function projectRacers(a, state = EMPTY_STATE) {
    const you = youPace(a, state);
    const youWeekly = weeklyCents(you);
    const baseWeekly = weeklyCents(a.pace);
    const parts = [
        `Over the last ${a.windowWeeks} weeks you kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(baseWeekly)} a week after spending.`
    ];
    if (state.boostCentsPerWeek > 0) {
        parts.push(`Your reroute adds ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(state.boostCentsPerWeek)} a week, so your pace is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(youWeekly)} a week.`);
    }
    if (state.spentCents > 0) {
        parts.push(`Approved purchases have taken ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(state.spentCents)} out of your goal savings.`);
    }
    const racers = [
        makeRacer(a, 'you', 'You', 'Your current pace', you, youSavedCents(a, state), parts.join(' '))
    ];
    if (a.topHabit) {
        const h = a.topHabit;
        const pace = withBoost(a.pace, 0);
        pace.netCents += h.totalCents;
        racers.push(makeRacer(a, 'ghost', 'Habit ghost', 'You without your top habit', pace, a.savedCents, `This is you without your top habit: ${h.label}, about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents)} a week. That would lift your pace to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(pace))} a week.`));
    }
    if (a.bestStretch) {
        const b = a.bestStretch;
        const bestWeekly = weeklyCents(b.pace);
        const compare = bestWeekly > baseWeekly ? 'That is faster than your current pace.' : 'Your current pace is ahead of it.';
        racers.push(makeRacer(a, 'best', 'Best you', 'Your best past stretch', b.pace, a.savedCents, `Your best earlier four weeks (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDayMonth"])(b.start)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(b.end)}) kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(bestWeekly)} a week. ${compare}`));
    }
    racers.push(makeRacer(a, 'peer', 'People like you', 'Illustrative peer pace', a.peerPace, a.savedCents, `${a.peerLabel} keep about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(a.peerPace))} a week. Illustrative only, not real customer data.`));
    return racers;
}
function progressAt(racer, goalCents, days) {
    const gained = Math.floor(Math.max(0, racer.pace.netCents) * days / (7 * racer.pace.weeks));
    const cents = Math.min(goalCents, Math.max(0, racer.savedCents + gained));
    return goalCents > 0 ? cents / goalCents : 1;
}
// ---------- the purchase check ----------
function countRecent(a, category) {
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(a.asOf);
    return a.txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
        return t.cents < 0 && t.category === category && d >= asOfDay - 7 && d < asOfDay;
    }).length;
}
function buildReroutes(a, remainingCents, afterDays) {
    const options = [];
    if (a.topHabit) {
        options.push({
            id: 'fastest',
            label: 'Fastest',
            how: `Pause your ${a.topHabit.label} (about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(a.topHabit.weeklyCents)} a week)`,
            boostCentsPerWeek: a.topHabit.weeklyCents
        });
    }
    options.push({
        id: 'side-hustle',
        label: 'Side hustle',
        how: `${a.rerouteOptions.sideHustle.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.sideHustle.weeklyCents)} a week)`,
        boostCentsPerWeek: a.rerouteOptions.sideHustle.weeklyCents
    });
    options.push({
        id: 'comfortable',
        label: 'Comfortable',
        how: `${a.rerouteOptions.comfortable.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.comfortable.weeklyCents)} a week)`,
        boostCentsPerWeek: a.rerouteOptions.comfortable.weeklyCents
    });
    return options.map((o)=>{
        // "Fastest" uses the habit's exact total so no rounding creeps into the date.
        const pace = o.id === 'fastest' && a.topHabit ? {
            netCents: a.pace.netCents + a.topHabit.totalCents,
            weeks: a.pace.weeks
        } : withBoost(a.pace, o.boostCentsPerWeek);
        const { days, date } = arrival(a.asOf, remainingCents, pace);
        return {
            ...o,
            days,
            arrivalDate: date,
            daysRecovered: days !== null && afterDays !== null ? afterDays - days : 0
        };
    });
}
function checkPurchase(a, state, purchase) {
    if (!Number.isInteger(purchase.amountCents) || purchase.amountCents <= 0) {
        throw new Error('Purchase amount must be a positive whole number of cents');
    }
    const pace = youPace(a, state);
    const remainingBefore = Math.max(0, a.goalCents - youSavedCents(a, state));
    const remainingAfter = remainingBefore + purchase.amountCents;
    const before = arrival(a.asOf, remainingBefore, pace);
    const after = arrival(a.asOf, remainingAfter, pace);
    const deltaDays = before.days !== null && after.days !== null ? after.days - before.days : 0;
    const habit = a.habits.find((h)=>h.merchant.toLowerCase() === purchase.merchant.trim().toLowerCase()) ?? null;
    const recent = isEssential(purchase.category) ? 0 : countRecent(a, purchase.category) + (state.approvedByCategory[purchase.category] ?? 0);
    const habitLink = recent > 0 || habit ? {
        count: recent + 1,
        category: purchase.category,
        habit
    } : null;
    return {
        purchase,
        goalName: a.goalName,
        before,
        after,
        deltaDays,
        habitLink,
        reroutes: buildReroutes(a, remainingAfter, after.days)
    };
}
}),
"[project]/src/engine/money.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Whole-cent money helpers. No floats are used for money maths. */ /** Parse a CDR-style decimal string ("-62.00", "1850", "5.5") into integer cents. */ __turbopack_context__.s([
    "formatMoney",
    ()=>formatMoney,
    "parseAmountToCents",
    ()=>parseAmountToCents,
    "parseUserAmountToCents",
    ()=>parseUserAmountToCents
]);
function parseAmountToCents(amount) {
    const m = /^\s*(-)?(\d+)(?:\.(\d{1,2}))?\s*$/.exec(amount);
    if (!m) throw new Error(`Invalid amount: ${JSON.stringify(amount)}`);
    const cents = Number(m[2]) * 100 + Number((m[3] ?? '').padEnd(2, '0'));
    return m[1] ? -cents : cents;
}
function parseUserAmountToCents(input) {
    const cleaned = input.replace(/[$,\s]/g, '');
    if (!/^\d{1,7}(\.\d{1,2})?$/.test(cleaned)) return null;
    const cents = parseAmountToCents(cleaned);
    return cents > 0 ? cents : null;
}
function formatMoney(cents) {
    const sign = cents < 0 ? '-' : '';
    const abs = Math.abs(cents);
    const dollars = Math.floor(abs / 100).toLocaleString('en-AU');
    const rem = abs % 100;
    return `${sign}$${dollars}${rem === 0 ? '' : '.' + String(rem).padStart(2, '0')}`;
}
}),
"[project]/src/navigator/guard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allowedFacts",
    ()=>allowedFacts,
    "checkLine",
    ()=>checkLine,
    "checkLines",
    ()=>checkLines
]);
/**
 * Number guard. Every figure in a Navigator line must be one the engine
 * produced for this purchase check. A line with any other number, date or
 * spelled-out quantity is rejected and the pre-checked template is used.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
;
const MONTH = '(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*';
const DATE_RE = new RegExp(`\\b(\\d{1,2})\\s+(${MONTH})\\s+(\\d{4})\\b`, 'g');
const NUMBER_RE = /\$?\d[\d,]*(?:\.\d+)?/g;
const NUMBER_WORDS = /\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|twenty|thirty|forty|fifty|hundred|thousand|dozen|couple|half|double|triple)\b/i;
function normaliseNumber(token) {
    const cleaned = token.replace(/[$,]/g, '');
    const [whole, frac = ''] = cleaned.split('.');
    const trimmedFrac = frac.replace(/0+$/, '');
    return trimmedFrac ? `${Number(whole)}.${trimmedFrac}` : String(Number(whole));
}
function allowedFacts(check) {
    const dates = new Set();
    const numbers = new Set();
    const addDate = (iso)=>{
        if (iso) dates.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(iso));
    };
    const addCents = (cents)=>numbers.add(normaliseNumber((cents / 100).toFixed(2)));
    const addSpan = (days)=>{
        const d = Math.abs(days);
        numbers.add(String(d));
        if (d >= 14) numbers.add(String(Math.round(d / 7)));
    };
    addDate(check.before.date);
    addDate(check.after.date);
    addCents(check.purchase.amountCents);
    addSpan(check.deltaDays);
    if (check.habitLink) {
        numbers.add(String(check.habitLink.count));
        if (check.habitLink.habit) addCents(check.habitLink.habit.weeklyCents);
    }
    for (const r of check.reroutes){
        addDate(r.arrivalDate);
        addCents(r.boostCentsPerWeek);
        addSpan(r.daysRecovered);
    }
    return {
        dates,
        numbers
    };
}
function normaliseDate(day, month, year) {
    return `${Number(day)} ${month.slice(0, 3)} ${year}`;
}
function checkLine(line, check) {
    const { dates, numbers } = allowedFacts(check);
    const problems = [];
    let numbersChecked = 0;
    // Full dates first, then whatever numbers are left once the dates are taken out.
    const rest = line.replace(DATE_RE, (_m, day, month, year)=>{
        numbersChecked += 1;
        const date = normaliseDate(day, month, year);
        if (!dates.has(date)) problems.push(`date "${date}" is not an engine date`);
        return ' ';
    });
    for (const token of rest.match(NUMBER_RE) ?? []){
        numbersChecked += 1;
        if (!numbers.has(normaliseNumber(token))) problems.push(`number "${token}" is not an engine number`);
    }
    const word = NUMBER_WORDS.exec(rest);
    if (word) problems.push(`spelled-out quantity "${word[0]}"`);
    if (line.length > 220) problems.push('line is too long');
    return {
        ok: problems.length === 0,
        numbersChecked,
        problems
    };
}
function checkLines(lines, check) {
    const all = [
        lines.impact,
        lines.habit,
        lines.approve,
        lines.decline
    ].filter((l)=>!!l);
    const results = all.map((l)=>checkLine(l, check));
    const problems = results.flatMap((r)=>r.problems);
    // The impact line has to actually state the engine's answer, not just avoid wrong numbers.
    if (check.after.date && !lines.impact.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(check.after.date))) {
        problems.push('impact line does not state the new arrival date');
    }
    return {
        ok: problems.length === 0,
        numbersChecked: results.reduce((s, r)=>s + r.numbersChecked, 0),
        problems
    };
}
}),
"[project]/src/navigator/templates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildResponse",
    ()=>buildResponse,
    "rerouteLine",
    ()=>rerouteLine,
    "templateLines",
    ()=>templateLines,
    "templateResponse",
    ()=>templateResponse
]);
/**
 * Pre-checked Navigator lines. These are plain templates filled only with
 * engine output, used whenever the AI is off, slow, or fails the number guard.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/guard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/types.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const fmt = (iso)=>iso ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(iso) : 'no date yet';
function templateLines(check, mode) {
    const goal = check.goalName.toLowerCase();
    const { before, after, deltaDays, habitLink } = check;
    const whatIf = mode === 'what-if';
    let impact;
    if (after.date === null) {
        impact = `At your current pace there is no arrival date for your ${goal} yet, so this purchase cannot be placed on the track.`;
    } else if (deltaDays > 0) {
        impact = `This ${whatIf ? 'would push' : 'pushes'} your ${goal} back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)}, from ${fmt(before.date)} to ${fmt(after.date)}.`;
    } else {
        impact = `On its own this ${whatIf ? 'would not' : 'does not'} move your ${goal} date. It stays ${fmt(after.date)}.`;
    }
    let habit = null;
    if (habitLink) {
        const parts = [];
        if (habitLink.count > 1) parts.push(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ordinal"])(habitLink.count)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryNoun"])(habitLink.category)} this week`);
        if (habitLink.habit) {
            const h = habitLink.habit;
            const when = h.weekday !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekdayName"])(h.weekday)} ` : '';
            parts.push(`your ${when}${h.merchant} habit runs at about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents)} a week`);
        }
        if (parts.length > 0) {
            const text = parts.join(', and ');
            habit = text.charAt(0).toUpperCase() + text.slice(1) + '.';
        }
    }
    const approve = deltaDays > 0 ? `Purchase approved. You now arrive ${fmt(after.date)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)} later.` : `Purchase approved. Your arrival date stays ${fmt(after.date)}.`;
    const decline = deltaDays > 0 ? `Purchase cancelled. You stay on pace for ${fmt(before.date)}. That is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)} saved.` : `Purchase cancelled. You stay on pace for ${fmt(before.date)} and keep ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(check.purchase.amountCents)} in your goal.`;
    return {
        impact,
        habit,
        approve,
        decline
    };
}
function rerouteLine(r) {
    if (r.arrivalDate === null) return 'No arrival date at this pace.';
    return r.daysRecovered > 0 ? `Arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(r.daysRecovered)} sooner.` : `Arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate)}.`;
}
function toReroutes(check) {
    // Only routes that actually win time back are offered (a route already in use would not).
    return check.reroutes.filter((r)=>r.daysRecovered > 0).map((r)=>({
            id: r.id,
            label: r.label,
            how: r.how,
            boostCentsPerWeek: r.boostCentsPerWeek,
            arrivalDate: r.arrivalDate,
            daysRecovered: r.daysRecovered,
            line: rerouteLine(r)
        }));
}
function buildResponse(check, mode, lines, source, guard) {
    return {
        mode,
        purchase: {
            merchant: check.purchase.merchant,
            item: check.purchase.item ?? null,
            amountCents: check.purchase.amountCents,
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(check.purchase.amountCents),
            category: check.purchase.category
        },
        goalImpact: {
            goalName: check.goalName,
            beforeDate: check.before.date,
            afterDate: check.after.date,
            deltaDays: check.deltaDays,
            line: lines.impact
        },
        habitLink: check.habitLink && lines.habit ? {
            count: check.habitLink.count,
            category: check.habitLink.category,
            line: lines.habit
        } : null,
        actions: {
            approve: {
                label: 'Approve',
                resultLine: lines.approve
            },
            decline: {
                label: 'Decline',
                resultLine: lines.decline,
                daysSaved: check.deltaDays
            }
        },
        reroutes: toReroutes(check),
        source,
        guard,
        notice: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GENERAL_NOTICE"]
    };
}
function templateResponse(check, mode, note = 'Pre-checked lines') {
    const lines = templateLines(check, mode);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkLines"])(lines, check);
    return buildResponse(check, mode, lines, 'template', {
        passed: result.ok,
        numbersChecked: result.numbersChecked,
        note: result.ok ? note : `${note}; guard flagged: ${result.problems.join('; ')}`
    });
}
}),
"[project]/src/navigator/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENERAL_NOTICE",
    ()=>GENERAL_NOTICE
]);
const GENERAL_NOTICE = 'General information only. WallaTrack shows factual information based on your transactions, not personal advice. The choice is yours.';
}),
"[project]/src/state/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Per-persona session state, kept in browser local storage. No database. */ __turbopack_context__.s([
    "EMPTY_PERSONA_STATE",
    ()=>EMPTY_PERSONA_STATE,
    "clearState",
    ()=>clearState,
    "loadCalm",
    ()=>loadCalm,
    "loadState",
    ()=>loadState,
    "saveCalm",
    ()=>saveCalm,
    "saveState",
    ()=>saveState
]);
const EMPTY_PERSONA_STATE = {
    spentCents: 0,
    boostCentsPerWeek: 0,
    approvedByCategory: {},
    reroute: null,
    decisions: []
};
const key = (personaId)=>`wallatrack:v1:${personaId}`;
const CALM_KEY = 'wallatrack:v1:calm';
function loadState(personaId) {
    try {
        const raw = window.localStorage.getItem(key(personaId));
        if (!raw) return EMPTY_PERSONA_STATE;
        const s = JSON.parse(raw);
        if (!Number.isInteger(s.spentCents) || !Number.isInteger(s.boostCentsPerWeek) || !Array.isArray(s.decisions)) {
            return EMPTY_PERSONA_STATE;
        }
        return {
            ...EMPTY_PERSONA_STATE,
            ...s
        };
    } catch  {
        return EMPTY_PERSONA_STATE;
    }
}
function saveState(personaId, state) {
    try {
        window.localStorage.setItem(key(personaId), JSON.stringify(state));
    } catch  {
    // Storage can be unavailable (private mode); the demo still works for the session.
    }
}
function clearState(personaId) {
    try {
        window.localStorage.removeItem(key(personaId));
    } catch  {
    // ignore
    }
}
function loadCalm() {
    try {
        const raw = window.localStorage.getItem(CALM_KEY);
        if (raw !== null) return raw === '1';
    } catch  {
    // ignore
    }
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}
function saveCalm(calm) {
    try {
        window.localStorage.setItem(CALM_KEY, calm ? '1' : '0');
    } catch  {
    // ignore
    }
}
}),
];

//# sourceMappingURL=src_1ih6xhhpgt2sd._.js.map