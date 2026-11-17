module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/navigator/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personas/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$navigate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/navigate.ts [app-route] (ecmascript)");
;
;
;
const runtime = 'nodejs';
const dynamic = 'force-dynamic';
function isCents(n) {
    return typeof n === 'number' && Number.isInteger(n) && n >= 0 && n <= 100_000_000;
}
function parse(body) {
    if (!body || typeof body !== 'object') return 'Body must be a JSON object';
    const b = body;
    const purchase = b.purchase;
    const state = b.state ?? {};
    if (typeof b.personaId !== 'string') return 'personaId is required';
    if (!purchase || typeof purchase.merchant !== 'string' || !purchase.merchant.trim()) return 'purchase.merchant is required';
    if (!isCents(purchase.amountCents) || purchase.amountCents === 0) return 'purchase.amountCents must be a positive whole number of cents';
    const spentCents = state.spentCents ?? 0;
    const boost = state.boostCentsPerWeek ?? 0;
    if (!isCents(spentCents) || !isCents(boost)) return 'state amounts must be whole cents';
    const approved = {};
    if (state.approvedByCategory && typeof state.approvedByCategory === 'object') {
        for (const [k, v] of Object.entries(state.approvedByCategory)){
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
            category: typeof purchase.category === 'string' && purchase.category.trim() ? purchase.category.trim().slice(0, 40) : 'Other'
        },
        state: {
            spentCents,
            boostCentsPerWeek: boost,
            approvedByCategory: approved
        }
    };
}
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Body must be valid JSON'
        }, {
            status: 400
        });
    }
    const req = parse(body);
    if (typeof req === 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: req
    }, {
        status: 400
    });
    const persona = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPersona"])(req.personaId);
    if (!persona) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: `Unknown persona "${req.personaId}"`
    }, {
        status: 404
    });
    const started = Date.now();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$navigate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["navigate"])(persona, req);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
        headers: {
            'x-navigator-ms': String(Date.now() - started)
        }
    });
}
}),
"[project]/src/data/personas/alex.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"personaId\":\"alex\",\"notice\":\"Fictional demo data. Alex Sample is not a real person and no real banking data is used.\",\"asOf\":\"2026-11-16\",\"customer\":{\"customerUType\":\"person\",\"person\":{\"firstName\":\"Alex\",\"lastName\":\"Sample\"}},\"accounts\":[{\"accountId\":\"acc-alex-everyday\",\"displayName\":\"Everyday\",\"maskedNumber\":\"xxxx xxxx 4821\",\"productCategory\":\"TRANS_AND_SAVINGS_ACCOUNTS\",\"productName\":\"Everyday Account\",\"openStatus\":\"OPEN\",\"isOwned\":true},{\"accountId\":\"acc-alex-goal\",\"displayName\":\"First home starter\",\"maskedNumber\":\"xxxx xxxx 7730\",\"productCategory\":\"TRANS_AND_SAVINGS_ACCOUNTS\",\"productName\":\"Goal Saver\",\"openStatus\":\"OPEN\",\"isOwned\":true}],\"balances\":[{\"accountId\":\"acc-alex-everyday\",\"currentBalance\":\"1312.40\",\"availableBalance\":\"1312.40\",\"currency\":\"AUD\"},{\"accountId\":\"acc-alex-goal\",\"currentBalance\":\"4200.00\",\"availableBalance\":\"4200.00\",\"currency\":\"AUD\"}],\"transactions\":[{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0002\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-01T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0003\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0004\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0008\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-02T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0005\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0009\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-03T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0001\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-06-04T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0006\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0007\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0010\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-05T09:00:00+10:00\",\"amount\":\"-63.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0011\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-06T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0012\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-06-07T09:00:00+10:00\",\"amount\":\"-156.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0013\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-08T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0014\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0015\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0019\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-09T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0016\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0020\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-10T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0017\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0023\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-06-11T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0018\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0021\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-12T09:00:00+10:00\",\"amount\":\"-59.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0022\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-13T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0024\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-06-14T09:00:00+10:00\",\"amount\":\"-107.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0026\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-15T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0027\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0028\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0032\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-16T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0029\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0033\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-17T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0025\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-06-18T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0030\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0031\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0034\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-19T09:00:00+10:00\",\"amount\":\"-67.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0035\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-20T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0036\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-06-21T09:00:00+10:00\",\"amount\":\"-162.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0037\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-22T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0038\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0039\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0043\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0048\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"CITY POWER AND GAS\",\"postingDateTime\":\"2026-06-23T09:00:00+10:00\",\"amount\":\"-64.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"City Power & Gas\",\"merchantCategoryCode\":\"4900\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0040\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0044\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-06-24T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0041\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0047\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-06-25T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0042\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0045\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-06-26T09:00:00+10:00\",\"amount\":\"-61.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0046\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-06-27T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0049\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-06-28T09:00:00+10:00\",\"amount\":\"-78.61\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0051\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-06-29T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0052\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0053\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-06-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0057\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-06-30T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0054\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0058\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-01T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0050\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-02T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0055\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0056\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0059\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-03T09:00:00+10:00\",\"amount\":\"-58.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0060\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-04T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0061\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-07-05T09:00:00+10:00\",\"amount\":\"-99.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0062\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-06T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0063\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0064\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0068\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-07T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0065\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0069\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0073\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-07-08T09:00:00+10:00\",\"amount\":\"-24.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0066\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0072\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-07-09T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0067\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0070\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-10T09:00:00+10:00\",\"amount\":\"-60.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0071\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-11T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0074\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-07-12T09:00:00+10:00\",\"amount\":\"-48.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0076\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-13T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0077\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0078\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0082\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-14T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0079\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0083\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-15T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0075\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-16T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0080\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0081\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0084\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-17T09:00:00+10:00\",\"amount\":\"-57.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0085\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-18T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0086\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-07-19T09:00:00+10:00\",\"amount\":\"-92.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0087\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-20T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0088\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0089\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0093\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-21T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0090\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0094\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-22T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0091\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0097\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-07-23T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0092\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0095\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-24T09:00:00+10:00\",\"amount\":\"-62.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0096\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-07-25T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0098\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-07-26T09:00:00+10:00\",\"amount\":\"-88.11\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0100\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-07-27T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0101\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0102\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0106\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-07-28T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0103\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0107\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-07-29T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0099\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-07-30T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0104\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0105\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-07-31T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0108\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-07-31T09:00:00+10:00\",\"amount\":\"-64.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0109\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-01T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0110\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-08-02T09:00:00+10:00\",\"amount\":\"-142.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0111\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-03T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0112\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0113\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0117\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-04T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0114\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0118\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-05T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0115\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0121\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-08-06T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0116\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0119\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-07T09:00:00+10:00\",\"amount\":\"-60.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0120\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-08T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0122\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-08-09T09:00:00+10:00\",\"amount\":\"-99.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0124\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-10T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0125\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0126\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0130\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-11T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0127\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0131\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-12T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0123\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-08-13T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0128\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0129\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0132\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-14T09:00:00+10:00\",\"amount\":\"-65.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0133\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-15T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0134\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-08-16T09:00:00+10:00\",\"amount\":\"-157.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0135\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-17T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0136\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0137\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0141\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-18T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0138\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0142\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-19T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0139\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0145\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-08-20T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0140\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0143\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-21T09:00:00+10:00\",\"amount\":\"-61.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0144\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-22T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0146\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-08-23T09:00:00+10:00\",\"amount\":\"-127.51\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0148\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-24T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0149\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0150\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0154\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-08-25T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0151\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0155\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-08-26T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0147\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-08-27T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0152\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0153\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0156\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-08-28T09:00:00+10:00\",\"amount\":\"-58.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0157\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-08-29T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0158\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-08-30T09:00:00+10:00\",\"amount\":\"-90.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0159\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-08-31T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0160\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-08-31T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0161\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0165\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-01T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0162\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0166\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-02T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0163\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0169\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-09-03T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0164\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0167\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-04T09:00:00+10:00\",\"amount\":\"-64.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0168\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-05T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0170\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-09-06T09:00:00+10:00\",\"amount\":\"-65.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0172\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-07T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0173\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0174\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0178\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-08T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0175\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0179\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-09T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0171\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-09-10T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0176\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0177\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0180\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-11T09:00:00+10:00\",\"amount\":\"-61.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0181\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-12T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0182\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-09-13T09:00:00+10:00\",\"amount\":\"-70.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0183\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-14T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0184\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0185\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0189\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0194\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"CITY POWER AND GAS\",\"postingDateTime\":\"2026-09-15T09:00:00+10:00\",\"amount\":\"-64.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"City Power & Gas\",\"merchantCategoryCode\":\"4900\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0186\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0190\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-16T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0187\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-17T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0193\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-09-17T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0188\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-18T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0191\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-18T09:00:00+10:00\",\"amount\":\"-66.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0192\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-19T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0195\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-09-20T09:00:00+10:00\",\"amount\":\"-34.91\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0197\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-21T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0198\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0199\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0203\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-22T09:00:00+10:00\",\"amount\":\"-118.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0200\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0204\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-23T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0196\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-09-24T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0201\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-24T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0202\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-25T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0205\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-09-25T09:00:00+10:00\",\"amount\":\"-59.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0206\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-09-26T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0207\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-09-27T09:00:00+10:00\",\"amount\":\"-31.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0208\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-09-27T09:00:00+10:00\",\"amount\":\"-58.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0209\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-09-28T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0210\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0211\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0215\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-09-29T09:00:00+10:00\",\"amount\":\"-103.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0212\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-09-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0216\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-09-30T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0213\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-01T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0219\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-10-01T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0214\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0217\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-02T09:00:00+10:00\",\"amount\":\"-62.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0218\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-03T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0220\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-10-04T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0222\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-05T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0223\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0224\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0228\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-06T09:00:00+10:00\",\"amount\":\"-122.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0225\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-07T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0229\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-07T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0221\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-10-08T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0226\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-08T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0227\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0230\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-09T09:00:00+10:00\",\"amount\":\"-63.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0231\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-10T09:00:00+10:00\",\"amount\":\"-46.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0232\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-10-11T09:00:00+10:00\",\"amount\":\"-99.40\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0233\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-12T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0234\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0235\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0239\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-13T09:00:00+10:00\",\"amount\":\"-109.70\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0236\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-14T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0240\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-14T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0237\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-15T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0243\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-10-15T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0238\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-16T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0241\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-16T09:00:00+10:00\",\"amount\":\"-57.60\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0242\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-17T09:00:00+10:00\",\"amount\":\"-42.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0244\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"HARBOUR BISTRO\",\"postingDateTime\":\"2026-10-18T09:00:00+10:00\",\"amount\":\"-86.51\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Bistro\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0246\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-19T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0247\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-19T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0248\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-20T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0252\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-20T09:00:00+10:00\",\"amount\":\"-115.20\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0249\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-21T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0253\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-21T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0245\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-10-22T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0250\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-22T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0251\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-23T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0254\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-23T09:00:00+10:00\",\"amount\":\"-64.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0255\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-24T09:00:00+10:00\",\"amount\":\"-51.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0256\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"NORTHSIDE CINEMAS\",\"postingDateTime\":\"2026-10-25T09:00:00+10:00\",\"amount\":\"-67.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Northside Cinemas\",\"merchantCategoryCode\":\"7832\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0257\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-10-26T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0258\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-26T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0259\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-27T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0263\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-10-27T09:00:00+10:00\",\"amount\":\"-106.80\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0260\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-28T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0264\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-10-28T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0261\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-29T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0267\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"SOUTHERN MOBILE\",\"postingDateTime\":\"2026-10-29T09:00:00+10:00\",\"amount\":\"-45.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Southern Mobile\",\"merchantCategoryCode\":\"4814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0262\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-10-30T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0265\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-10-30T09:00:00+10:00\",\"amount\":\"-60.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0266\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-10-31T09:00:00+10:00\",\"amount\":\"-39.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0268\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THREAD AND CO\",\"postingDateTime\":\"2026-11-01T09:00:00+10:00\",\"amount\":\"-80.90\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thread & Co\",\"merchantCategoryCode\":\"5651\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0270\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-11-02T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0271\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-02T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0272\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-03T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0276\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-11-03T09:00:00+10:00\",\"amount\":\"-120.10\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0273\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-04T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0277\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-11-04T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0269\",\"isDetailAvailable\":false,\"type\":\"TRANSFER_INCOMING\",\"status\":\"POSTED\",\"description\":\"SALARY BRIGHTSIDE RETAIL PTY LTD\",\"postingDateTime\":\"2026-11-05T09:00:00+10:00\",\"amount\":\"1850.00\",\"currency\":\"AUD\",\"reference\":\"\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0274\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-05T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0275\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-06T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0278\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-11-06T09:00:00+10:00\",\"amount\":\"-63.30\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0279\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-11-07T09:00:00+10:00\",\"amount\":\"-48.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0280\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"LANTERN NOODLE BAR\",\"postingDateTime\":\"2026-11-08T09:00:00+10:00\",\"amount\":\"-83.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Lantern Noodle Bar\",\"merchantCategoryCode\":\"5812\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0281\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"HARBOUR REALTY RENT\",\"postingDateTime\":\"2026-11-09T09:00:00+10:00\",\"amount\":\"-390.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Harbour Realty\",\"merchantCategoryCode\":\"6513\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0282\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-09T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0283\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-10T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0287\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"FRESHWAY SUPERMARKET\",\"postingDateTime\":\"2026-11-10T09:00:00+10:00\",\"amount\":\"-111.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Freshway Supermarket\",\"merchantCategoryCode\":\"5411\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0284\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-11T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0288\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"METRO TRANSIT TOP UP\",\"postingDateTime\":\"2026-11-11T09:00:00+10:00\",\"amount\":\"-40.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Metro Transit\",\"merchantCategoryCode\":\"4111\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0285\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-12T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0291\",\"isDetailAvailable\":false,\"type\":\"DIRECT_DEBIT\",\"status\":\"POSTED\",\"description\":\"STREAMBOX\",\"postingDateTime\":\"2026-11-12T09:00:00+10:00\",\"amount\":\"-18.99\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Streambox\",\"merchantCategoryCode\":\"4899\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0286\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"BEAN SCENE ESPRESSO\",\"postingDateTime\":\"2026-11-13T09:00:00+10:00\",\"amount\":\"-5.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Bean Scene Espresso\",\"merchantCategoryCode\":\"5499\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0289\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"UBER EATS\",\"postingDateTime\":\"2026-11-13T09:00:00+10:00\",\"amount\":\"-61.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Uber Eats\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0290\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THE CORNER HOTEL\",\"postingDateTime\":\"2026-11-14T09:00:00+10:00\",\"amount\":\"-44.00\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"The Corner Hotel\",\"merchantCategoryCode\":\"5813\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0292\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"THAI GARDEN TAKEAWAY\",\"postingDateTime\":\"2026-11-15T09:00:00+10:00\",\"amount\":\"-28.50\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Thai Garden Takeaway\",\"merchantCategoryCode\":\"5814\"},{\"accountId\":\"acc-alex-everyday\",\"transactionId\":\"txn-alex-0293\",\"isDetailAvailable\":false,\"type\":\"PAYMENT\",\"status\":\"POSTED\",\"description\":\"PAGE TURNER BOOKS\",\"postingDateTime\":\"2026-11-15T09:00:00+10:00\",\"amount\":\"-49.81\",\"currency\":\"AUD\",\"reference\":\"\",\"merchantName\":\"Page Turner Books\",\"merchantCategoryCode\":\"5942\"}],\"wallatrack\":{\"spendingAccountId\":\"acc-alex-everyday\",\"goal\":{\"name\":\"First home starter\",\"amount\":\"15000.00\",\"targetDate\":\"2028-06-30\",\"accountId\":\"acc-alex-goal\"},\"peerBenchmark\":{\"weeklyNet\":\"92.00\",\"label\":\"Renters on a similar income\"},\"rerouteOptions\":{\"sideHustle\":{\"how\":\"Add a small weekend side hustle\",\"weekly\":\"29.00\"},\"comfortable\":{\"how\":\"Pick up your Friday takeaway instead of delivery\",\"weekly\":\"17.50\"}},\"demoPurchases\":[{\"id\":\"pc\",\"merchant\":\"TechHub Online\",\"item\":\"Gaming PC\",\"amount\":\"1200.00\",\"merchantCategoryCode\":\"5732\"},{\"id\":\"uber-eats\",\"merchant\":\"Uber Eats\",\"item\":\"Dinner delivery\",\"amount\":\"62.00\",\"merchantCategoryCode\":\"5814\"},{\"id\":\"coffee\",\"merchant\":\"Bean Scene Espresso\",\"item\":\"Flat white\",\"amount\":\"5.50\",\"merchantCategoryCode\":\"5499\"}]}}");
}),
"[project]/src/data/personas/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PERSONA_ID",
    ()=>DEFAULT_PERSONA_ID,
    "PERSONAS",
    ()=>PERSONAS,
    "getPersona",
    ()=>getPersona
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$alex$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personas/alex.json.[json].cjs [app-route] (ecmascript)");
;
const PERSONAS = {
    alex: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personas$2f$alex$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
};
const DEFAULT_PERSONA_ID = 'alex';
function getPersona(id) {
    return PERSONAS[id] ?? null;
}
}),
"[project]/src/engine/dates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/engine/engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-route] (ecmascript)");
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
        date: days === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])(asOf, days)
    };
}
// ---------- analysis of the transaction history ----------
function toTxns(persona) {
    return persona.transactions.filter((t)=>t.accountId === persona.wallatrack.spendingAccountId && t.status === 'POSTED').map((t)=>{
        const cents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(t.amount);
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
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
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
        const weeksSeen = new Set(list.map((t)=>Math.floor(((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date) - windowStartDay) / 7))).size;
        // A habit shows up in at least three weeks out of four.
        if (weeksSeen * 4 < weeks * 3) continue;
        const totalCents = -list.reduce((s, t)=>s + t.cents, 0);
        const dayCounts = new Array(7).fill(0);
        for (const t of list)dayCounts[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weekdayIndex"])(t.date)]++;
        const topDay = dayCounts.indexOf(Math.max(...dayCounts));
        const weekday = dayCounts[topDay] * 10 >= list.length * 7 ? topDay : null;
        const perWeek = Math.round(list.length / weeks);
        const label = weekday !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weekdayName"])(weekday)} ${merchant}` : perWeek > 1 ? `${merchant}, ${perWeek} times a week` : merchant;
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
    const firstDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(txns[0].date);
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
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start + len - 1)
    };
}
function analyse(persona) {
    const { wallatrack: wt } = persona;
    const txns = toTxns(persona);
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(persona.asOf);
    const windowStartDay = asOfDay - PACE_WINDOW_WEEKS * 7;
    const windowTxns = txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
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
        goalCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.goal.amount),
        targetDate: wt.goal.targetDate,
        savedCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(goalBalance.currentBalance),
        windowWeeks: PACE_WINDOW_WEEKS,
        windowStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDays"])(persona.asOf, -PACE_WINDOW_WEEKS * 7),
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
            netCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.peerBenchmark.weeklyNet),
            weeks: 1
        },
        peerLabel: wt.peerBenchmark.label,
        breakdown,
        txns,
        rerouteOptions: {
            sideHustle: {
                how: wt.rerouteOptions.sideHustle.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.sideHustle.weekly)
            },
            comfortable: {
                how: wt.rerouteOptions.comfortable.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.comfortable.weekly)
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
        `Over the last ${a.windowWeeks} weeks you kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(baseWeekly)} a week after spending.`
    ];
    if (state.boostCentsPerWeek > 0) {
        parts.push(`Your reroute adds ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(state.boostCentsPerWeek)} a week, so your pace is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(youWeekly)} a week.`);
    }
    if (state.spentCents > 0) {
        parts.push(`Approved purchases have taken ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(state.spentCents)} out of your goal savings.`);
    }
    const racers = [
        makeRacer(a, 'you', 'You', 'Your current pace', you, youSavedCents(a, state), parts.join(' '))
    ];
    if (a.topHabit) {
        const h = a.topHabit;
        const pace = withBoost(a.pace, 0);
        pace.netCents += h.totalCents;
        racers.push(makeRacer(a, 'ghost', 'Habit ghost', 'You without your top habit', pace, a.savedCents, `This is you without your top habit: ${h.label}, about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents)} a week. That would lift your pace to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(pace))} a week.`));
    }
    if (a.bestStretch) {
        const b = a.bestStretch;
        const bestWeekly = weeklyCents(b.pace);
        const compare = bestWeekly > baseWeekly ? 'That is faster than your current pace.' : 'Your current pace is ahead of it.';
        racers.push(makeRacer(a, 'best', 'Best you', 'Your best past stretch', b.pace, a.savedCents, `Your best earlier four weeks (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDayMonth"])(b.start)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(b.end)}) kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(bestWeekly)} a week. ${compare}`));
    }
    racers.push(makeRacer(a, 'peer', 'People like you', 'Illustrative peer pace', a.peerPace, a.savedCents, `${a.peerLabel} keep about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(a.peerPace))} a week. Illustrative only, not real customer data.`));
    return racers;
}
function progressAt(racer, goalCents, days) {
    const gained = Math.floor(Math.max(0, racer.pace.netCents) * days / (7 * racer.pace.weeks));
    const cents = Math.min(goalCents, Math.max(0, racer.savedCents + gained));
    return goalCents > 0 ? cents / goalCents : 1;
}
// ---------- the purchase check ----------
function countRecent(a, category) {
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(a.asOf);
    return a.txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
        return t.cents < 0 && t.category === category && d >= asOfDay - 7 && d < asOfDay;
    }).length;
}
function buildReroutes(a, remainingCents, afterDays) {
    const options = [];
    if (a.topHabit) {
        options.push({
            id: 'fastest',
            label: 'Fastest',
            how: `Pause your ${a.topHabit.label} (about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(a.topHabit.weeklyCents)} a week)`,
            boostCentsPerWeek: a.topHabit.weeklyCents
        });
    }
    options.push({
        id: 'side-hustle',
        label: 'Side hustle',
        how: `${a.rerouteOptions.sideHustle.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.sideHustle.weeklyCents)} a week)`,
        boostCentsPerWeek: a.rerouteOptions.sideHustle.weeklyCents
    });
    options.push({
        id: 'comfortable',
        label: 'Comfortable',
        how: `${a.rerouteOptions.comfortable.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.comfortable.weeklyCents)} a week)`,
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
"[project]/src/engine/money.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/navigator/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_TIMEOUT_MS",
    ()=>AI_TIMEOUT_MS,
    "NAVIGATOR_MODEL",
    ()=>NAVIGATOR_MODEL,
    "aiEnabled",
    ()=>aiEnabled,
    "aiLines",
    ()=>aiLines
]);
/**
 * Optional AI wording for the Navigator. The model only rephrases: it is given
 * the engine's facts and must reuse them verbatim. Whatever comes back is run
 * through the number guard before it is shown. Server-side only.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Anthropic__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@anthropic-ai/sdk/client.mjs [app-route] (ecmascript) <export Anthropic as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-route] (ecmascript)");
;
;
;
const NAVIGATOR_MODEL = 'claude-sonnet-5-5';
const AI_TIMEOUT_MS = 1800;
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
        impact: {
            type: 'string'
        },
        habit: {
            type: [
                'string',
                'null'
            ]
        },
        approve: {
            type: 'string'
        },
        decline: {
            type: 'string'
        }
    },
    required: [
        'impact',
        'habit',
        'approve',
        'decline'
    ],
    additionalProperties: false
};
let client = null;
function aiEnabled() {
    return !!process.env.ANTHROPIC_API_KEY;
}
function facts(check, mode) {
    return {
        mode: mode === 'what-if' ? 'what-if (nothing is being bought, the customer is only asking)' : 'purchase held at checkout',
        goal: check.goalName,
        purchase: {
            merchant: check.purchase.merchant,
            item: check.purchase.item ?? null,
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(check.purchase.amountCents),
            category: check.purchase.category
        },
        arrivalBefore: check.before.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(check.before.date) : null,
        arrivalAfter: check.after.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(check.after.date) : null,
        pushedBackBy: check.deltaDays > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDuration"])(check.deltaDays) : 'not at all'
    };
}
async function aiLines(check, mode, template) {
    client ??= new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Anthropic__as__default$3e$__["default"]({
        maxRetries: 0,
        timeout: AI_TIMEOUT_MS
    });
    const response = await client.beta.messages.create({
        model: NAVIGATOR_MODEL,
        max_tokens: 1024,
        // Short rewording task with a hard latency budget: no thinking, low effort.
        thinking: {
            type: 'between_tools'
        },
        output_config: {
            effort: 'low',
            format: {
                type: 'json_schema',
                schema: SCHEMA
            }
        },
        // If a safety classifier declines, let the API retry on its default fallback model.
        betas: [
            'server-side-fallback-2026-07-01'
        ],
        fallbacks: 'default',
        system: SYSTEM,
        messages: [
            {
                role: 'user',
                content: JSON.stringify({
                    facts: facts(check, mode),
                    templateLines: template
                }, null, 2)
            }
        ]
    }, {
        timeout: AI_TIMEOUT_MS,
        maxRetries: 0
    });
    if (response.stop_reason !== 'end_turn') throw new Error(`AI stopped with ${response.stop_reason}`);
    const text = response.content.find((b)=>b.type === 'text');
    if (!text || text.type !== 'text') throw new Error('AI returned no text');
    const parsed = JSON.parse(text.text);
    if (typeof parsed.impact !== 'string' || typeof parsed.approve !== 'string' || typeof parsed.decline !== 'string') {
        throw new Error('AI response is missing a line');
    }
    return {
        impact: parsed.impact.trim(),
        // The habit line only exists when the engine found a habit link.
        habit: template.habit === null ? null : typeof parsed.habit === 'string' && parsed.habit.trim() ? parsed.habit.trim() : template.habit,
        approve: parsed.approve.trim(),
        decline: parsed.decline.trim()
    };
}
}),
"[project]/src/navigator/guard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-route] (ecmascript)");
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
        if (iso) dates.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(iso));
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
    if (check.after.date && !lines.impact.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(check.after.date))) {
        problems.push('impact line does not state the new arrival date');
    }
    return {
        ok: problems.length === 0,
        numbersChecked: results.reduce((s, r)=>s + r.numbersChecked, 0),
        problems
    };
}
}),
"[project]/src/navigator/navigate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigate",
    ()=>navigate
]);
/**
 * Server-side Navigator: engine facts first, optional AI wording second,
 * number guard last. Any AI problem falls back to the pre-checked lines.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/templates.ts [app-route] (ecmascript)");
;
;
;
;
function withTimeout(promise, ms) {
    return new Promise((resolve, reject)=>{
        const timer = setTimeout(()=>reject(new Error(`AI took longer than ${ms}ms`)), ms);
        promise.then((v)=>{
            clearTimeout(timer);
            resolve(v);
        }, (e)=>{
            clearTimeout(timer);
            reject(e);
        });
    });
}
async function navigate(persona, req, options = {}) {
    const analysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyse"])(persona);
    const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkPurchase"])(analysis, req.state, req.purchase);
    const useAi = options.useAi ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiEnabled"])();
    if (!useAi) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["templateResponse"])(check, req.mode, 'Pre-checked lines (AI wording is off)');
    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["templateLines"])(check, req.mode);
    try {
        const lines = await withTimeout((options.wording ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiLines"])(check, req.mode, template), options.timeoutMs ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AI_TIMEOUT_MS"]);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkLines"])(lines, check);
        if (!result.ok) {
            console.warn('[WallaTrack] AI wording failed the number guard:', result.problems.join('; '));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["templateResponse"])(check, req.mode, 'Pre-checked lines (AI wording failed the number guard)');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildResponse"])(check, req.mode, lines, 'ai', {
            passed: true,
            numbersChecked: result.numbersChecked,
            note: 'AI wording, every figure confirmed by the engine'
        });
    } catch (err) {
        console.warn('[WallaTrack] AI wording unavailable:', err instanceof Error ? err.message : err);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["templateResponse"])(check, req.mode, 'Pre-checked lines (AI was slow or unavailable)');
    }
}
}),
"[project]/src/navigator/templates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/navigator/types.ts [app-route] (ecmascript)");
;
;
;
;
;
const fmt = (iso)=>iso ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(iso) : 'no date yet';
function templateLines(check, mode) {
    const goal = check.goalName.toLowerCase();
    const { before, after, deltaDays, habitLink } = check;
    const whatIf = mode === 'what-if';
    let impact;
    if (after.date === null) {
        impact = `At your current pace there is no arrival date for your ${goal} yet, so this purchase cannot be placed on the track.`;
    } else if (deltaDays > 0) {
        impact = `This ${whatIf ? 'would push' : 'pushes'} your ${goal} back ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)}, from ${fmt(before.date)} to ${fmt(after.date)}.`;
    } else {
        impact = `On its own this ${whatIf ? 'would not' : 'does not'} move your ${goal} date. It stays ${fmt(after.date)}.`;
    }
    let habit = null;
    if (habitLink) {
        const parts = [];
        if (habitLink.count > 1) parts.push(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ordinal"])(habitLink.count)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["categoryNoun"])(habitLink.category)} this week`);
        if (habitLink.habit) {
            const h = habitLink.habit;
            const when = h.weekday !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weekdayName"])(h.weekday)} ` : '';
            parts.push(`your ${when}${h.merchant} habit runs at about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents)} a week`);
        }
        if (parts.length > 0) {
            const text = parts.join(', and ');
            habit = text.charAt(0).toUpperCase() + text.slice(1) + '.';
        }
    }
    const approve = deltaDays > 0 ? `Purchase approved. You now arrive ${fmt(after.date)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)} later.` : `Purchase approved. Your arrival date stays ${fmt(after.date)}.`;
    const decline = deltaDays > 0 ? `Purchase cancelled. You stay on pace for ${fmt(before.date)}. That is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDuration"])(deltaDays)} saved.` : `Purchase cancelled. You stay on pace for ${fmt(before.date)} and keep ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(check.purchase.amountCents)} in your goal.`;
    return {
        impact,
        habit,
        approve,
        decline
    };
}
function rerouteLine(r) {
    if (r.arrivalDate === null) return 'No arrival date at this pace.';
    return r.daysRecovered > 0 ? `Arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDuration"])(r.daysRecovered)} sooner.` : `Arrive ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(r.arrivalDate)}.`;
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
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatMoney"])(check.purchase.amountCents),
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
        notice: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GENERAL_NOTICE"]
    };
}
function templateResponse(check, mode, note = 'Pre-checked lines') {
    const lines = templateLines(check, mode);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$navigator$2f$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkLines"])(lines, check);
    return buildResponse(check, mode, lines, 'template', {
        passed: result.ok,
        numbersChecked: result.numbersChecked,
        note: result.ok ? note : `${note}; guard flagged: ${result.problems.join('; ')}`
    });
}
}),
"[project]/src/navigator/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENERAL_NOTICE",
    ()=>GENERAL_NOTICE
]);
const GENERAL_NOTICE = 'General information only. WallaTrack shows factual information based on your transactions, not personal advice. The choice is yours.';
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1hq3ckekinl38._.js.map