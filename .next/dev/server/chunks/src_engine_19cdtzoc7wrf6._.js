module.exports = [
"[project]/src/engine/dates.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/engine/demoCheck.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/engine.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [instrumentation] (ecmascript)");
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
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["analyse"])(persona);
    const racers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["projectRacers"])(a, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["EMPTY_STATE"]);
    const racerDate = (id)=>racers.find((r)=>r.id === id)?.arrivalDate ?? null;
    const pc = persona.wallatrack.demoPurchases.find((p)=>p.id === 'pc');
    const check = pc ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["checkPurchase"])(a, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["EMPTY_STATE"], {
        merchant: pc.merchant,
        item: pc.item,
        amountCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(pc.amount),
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$engine$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["categoryForMcc"])(pc.merchantCategoryCode)
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
            expected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatDate"])(expected),
            actual: actual ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatDate"])(actual) : 'never',
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
"[project]/src/engine/engine.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/dates.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/money.ts [instrumentation] (ecmascript)");
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
        date: days === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["addDays"])(asOf, days)
    };
}
// ---------- analysis of the transaction history ----------
function toTxns(persona) {
    return persona.transactions.filter((t)=>t.accountId === persona.wallatrack.spendingAccountId && t.status === 'POSTED').map((t)=>{
        const cents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(t.amount);
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
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
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
        const weeksSeen = new Set(list.map((t)=>Math.floor(((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date) - windowStartDay) / 7))).size;
        // A habit shows up in at least three weeks out of four.
        if (weeksSeen * 4 < weeks * 3) continue;
        const totalCents = -list.reduce((s, t)=>s + t.cents, 0);
        const dayCounts = new Array(7).fill(0);
        for (const t of list)dayCounts[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["weekdayIndex"])(t.date)]++;
        const topDay = dayCounts.indexOf(Math.max(...dayCounts));
        const weekday = dayCounts[topDay] * 10 >= list.length * 7 ? topDay : null;
        const perWeek = Math.round(list.length / weeks);
        const label = weekday !== null ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["weekdayName"])(weekday)} ${merchant}` : perWeek > 1 ? `${merchant}, ${perWeek} times a week` : merchant;
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
    const firstDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(txns[0].date);
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
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["addDays"])('1970-01-01', best.start + len - 1)
    };
}
function analyse(persona) {
    const { wallatrack: wt } = persona;
    const txns = toTxns(persona);
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(persona.asOf);
    const windowStartDay = asOfDay - PACE_WINDOW_WEEKS * 7;
    const windowTxns = txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
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
        goalCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.goal.amount),
        targetDate: wt.goal.targetDate,
        savedCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(goalBalance.currentBalance),
        windowWeeks: PACE_WINDOW_WEEKS,
        windowStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["addDays"])(persona.asOf, -PACE_WINDOW_WEEKS * 7),
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
            netCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.peerBenchmark.weeklyNet),
            weeks: 1
        },
        peerLabel: wt.peerBenchmark.label,
        breakdown,
        txns,
        rerouteOptions: {
            sideHustle: {
                how: wt.rerouteOptions.sideHustle.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.sideHustle.weekly)
            },
            comfortable: {
                how: wt.rerouteOptions.comfortable.how,
                weeklyCents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["parseAmountToCents"])(wt.rerouteOptions.comfortable.weekly)
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
        `Over the last ${a.windowWeeks} weeks you kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(baseWeekly)} a week after spending.`
    ];
    if (state.boostCentsPerWeek > 0) {
        parts.push(`Your reroute adds ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(state.boostCentsPerWeek)} a week, so your pace is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(youWeekly)} a week.`);
    }
    if (state.spentCents > 0) {
        parts.push(`Approved purchases have taken ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(state.spentCents)} out of your goal savings.`);
    }
    const racers = [
        makeRacer(a, 'you', 'You', 'Your current pace', you, youSavedCents(a, state), parts.join(' '))
    ];
    if (a.topHabit) {
        const h = a.topHabit;
        const pace = withBoost(a.pace, 0);
        pace.netCents += h.totalCents;
        racers.push(makeRacer(a, 'ghost', 'Habit ghost', 'You without your top habit', pace, a.savedCents, `This is you without your top habit: ${h.label}, about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(h.weeklyCents)} a week. That would lift your pace to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(pace))} a week.`));
    }
    if (a.bestStretch) {
        const b = a.bestStretch;
        const bestWeekly = weeklyCents(b.pace);
        const compare = bestWeekly > baseWeekly ? 'That is faster than your current pace.' : 'Your current pace is ahead of it.';
        racers.push(makeRacer(a, 'best', 'Best you', 'Your best past stretch', b.pace, a.savedCents, `Your best earlier four weeks (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatDayMonth"])(b.start)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatDate"])(b.end)}) kept ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(bestWeekly)} a week. ${compare}`));
    }
    racers.push(makeRacer(a, 'peer', 'People like you', 'Illustrative peer pace', a.peerPace, a.savedCents, `${a.peerLabel} keep about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(weeklyCents(a.peerPace))} a week. Illustrative only, not real customer data.`));
    return racers;
}
function progressAt(racer, goalCents, days) {
    const gained = Math.floor(Math.max(0, racer.pace.netCents) * days / (7 * racer.pace.weeks));
    const cents = Math.min(goalCents, Math.max(0, racer.savedCents + gained));
    return goalCents > 0 ? cents / goalCents : 1;
}
// ---------- the purchase check ----------
function countRecent(a, category) {
    const asOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(a.asOf);
    return a.txns.filter((t)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$dates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["toEpochDay"])(t.date);
        return t.cents < 0 && t.category === category && d >= asOfDay - 7 && d < asOfDay;
    }).length;
}
function buildReroutes(a, remainingCents, afterDays) {
    const options = [];
    if (a.topHabit) {
        options.push({
            id: 'fastest',
            label: 'Fastest',
            how: `Pause your ${a.topHabit.label} (about ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(a.topHabit.weeklyCents)} a week)`,
            boostCentsPerWeek: a.topHabit.weeklyCents
        });
    }
    options.push({
        id: 'side-hustle',
        label: 'Side hustle',
        how: `${a.rerouteOptions.sideHustle.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.sideHustle.weeklyCents)} a week)`,
        boostCentsPerWeek: a.rerouteOptions.sideHustle.weeklyCents
    });
    options.push({
        id: 'comfortable',
        label: 'Comfortable',
        how: `${a.rerouteOptions.comfortable.how} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$money$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["formatMoney"])(a.rerouteOptions.comfortable.weeklyCents)} a week)`,
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
"[project]/src/engine/money.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=src_engine_19cdtzoc7wrf6._.js.map