/**
 * Generates src/data/personas/alex.json: a fictional customer in a
 * CDR-shaped payload. Deterministic (no randomness, no wall clock), so
 * re-running it always produces the same file.
 *
 *   npm run gen:persona
 *
 * Weekly spending totals are chosen so the engine, working only from the
 * transactions, lands on the demo dates in LEAD-SPEC.md. The engine does the
 * maths; this script only writes believable history.
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { addDays } from '../src/engine/dates';
import { formatMoney } from '../src/engine/money';
import type { CdrTransaction, Persona } from '../src/engine/types';

const HISTORY_START = '2026-06-01'; // a Monday, 24 weeks before the as-of date
const AS_OF = '2026-11-16';
const ACC = 'acc-alex-everyday';
const GOAL_ACC = 'acc-alex-goal';

/** Total spending per week, in cents. Weeks 0-11 are older history, 12-23 the current pace window. */
const WEEK_SPEND = [
  84210, 81560, 86030, 82900, // older
  77890, 78650, 77320, 78040, // best earlier stretch
  83370, 80480, 85120, 81940, // older
  76850, 78120, 75990, 79240, 77410, 76080, 78860, 77230, 75640, 79010, 77190, 77180, // last 12 weeks
];

/** Friday Uber Eats order per week, in cents. The last 12 average $62. */
const UBER_EATS = [
  6340, 5980, 6710, 6120, 5890, 6050, 5760, 6230, 6480, 6010, 6590, 6170,
  5890, 6420, 6100, 6650, 5980, 6240, 6310, 5760, 6480, 6090, 6330, 6150,
];

const GROCERIES = [11840, 10390, 12260, 10970, 11520, 10680, 12010, 11150];
const CORNER_HOTEL = [4600, 4200, 5100, 3900, 4800, 4400];
/** Extra takeaway on top of the Friday habit: week index -> [day offset, cents]. */
const EXTRA_TAKEAWAY: Record<number, [number, number]> = { 5: [2, 2450], 16: [6, 3180], 23: [6, 2850] };

const MISC = [
  { merchantName: 'Northside Cinemas', description: 'NORTHSIDE CINEMAS', mcc: '7832' },
  { merchantName: 'Thread & Co', description: 'THREAD AND CO', mcc: '5651' },
  { merchantName: 'Lantern Noodle Bar', description: 'LANTERN NOODLE BAR', mcc: '5812' },
  { merchantName: 'Page Turner Books', description: 'PAGE TURNER BOOKS', mcc: '5942' },
  { merchantName: 'Harbour Bistro', description: 'HARBOUR BISTRO', mcc: '5812' },
];

const txns: CdrTransaction[] = [];
let seq = 0;

function dec(cents: number): string {
  const abs = Math.abs(cents);
  return `${cents < 0 ? '-' : ''}${Math.floor(abs / 100)}.${String(abs % 100).padStart(2, '0')}`;
}

function add(date: string, cents: number, description: string, merchantName: string | undefined, mcc: string | undefined, type: string) {
  seq += 1;
  txns.push({
    accountId: ACC,
    transactionId: `txn-alex-${String(seq).padStart(4, '0')}`,
    isDetailAvailable: false,
    type,
    status: 'POSTED',
    description,
    postingDateTime: `${date}T09:00:00+10:00`,
    amount: dec(cents),
    currency: 'AUD',
    reference: '',
    ...(merchantName ? { merchantName } : {}),
    ...(mcc ? { merchantCategoryCode: mcc } : {}),
  });
}

for (let w = 0; w < WEEK_SPEND.length; w++) {
  const monday = addDays(HISTORY_START, w * 7);
  const day = (offset: number) => addDays(monday, offset);
  let spent = 0;
  const spend = (offset: number, cents: number, description: string, merchantName: string, mcc: string, type = 'PAYMENT') => {
    add(day(offset), -cents, description, merchantName, mcc, type);
    spent += cents;
  };

  // Paid $1,850 every second Thursday.
  if (w % 2 === 0) add(day(3), 185000, 'SALARY BRIGHTSIDE RETAIL PTY LTD', undefined, undefined, 'TRANSFER_INCOMING');

  spend(0, 39000, 'HARBOUR REALTY RENT', 'Harbour Realty', '6513', 'DIRECT_DEBIT');
  for (let d = 0; d < 5; d++) spend(d, 550, 'BEAN SCENE ESPRESSO', 'Bean Scene Espresso', '5499');
  spend(1, GROCERIES[w % GROCERIES.length], 'FRESHWAY SUPERMARKET', 'Freshway Supermarket', '5411');
  spend(2, 4000, 'METRO TRANSIT TOP UP', 'Metro Transit', '4111');
  spend(4, UBER_EATS[w], 'UBER EATS', 'Uber Eats', '5814');
  spend(5, CORNER_HOTEL[w % CORNER_HOTEL.length], 'THE CORNER HOTEL', 'The Corner Hotel', '5813');
  if (w % 4 === 1) spend(3, 4500, 'SOUTHERN MOBILE', 'Southern Mobile', '4814', 'DIRECT_DEBIT');
  if (w % 4 === 3) spend(3, 1899, 'STREAMBOX', 'Streambox', '4899', 'DIRECT_DEBIT');
  if (w % 12 === 3) spend(1, 6400, 'CITY POWER AND GAS', 'City Power & Gas', '4900', 'DIRECT_DEBIT');
  const extra = EXTRA_TAKEAWAY[w];
  if (extra) spend(extra[0], extra[1], 'THAI GARDEN TAKEAWAY', 'Thai Garden Takeaway', '5814');

  // Whatever is left of the week's total goes on one varied, one-off purchase.
  const rest = WEEK_SPEND[w] - spent;
  if (rest <= 0) throw new Error(`Week ${w} is over its total by ${formatMoney(-rest)}`);
  const m = MISC[w % MISC.length];
  spend(6, rest, m.description, m.merchantName, m.mcc);
}

txns.sort((a, b) => (a.postingDateTime < b.postingDateTime ? -1 : a.postingDateTime > b.postingDateTime ? 1 : 0));

const persona: Persona = {
  personaId: 'alex',
  notice: 'Fictional demo data. Alex Sample is not a real person and no real banking data is used.',
  asOf: AS_OF,
  customer: { customerUType: 'person', person: { firstName: 'Alex', lastName: 'Sample' } },
  accounts: [
    {
      accountId: ACC,
      displayName: 'Everyday',
      maskedNumber: 'xxxx xxxx 4821',
      productCategory: 'TRANS_AND_SAVINGS_ACCOUNTS',
      productName: 'Everyday Account',
      openStatus: 'OPEN',
      isOwned: true,
    },
    {
      accountId: GOAL_ACC,
      displayName: 'First home starter',
      maskedNumber: 'xxxx xxxx 7730',
      productCategory: 'TRANS_AND_SAVINGS_ACCOUNTS',
      productName: 'Goal Saver',
      openStatus: 'OPEN',
      isOwned: true,
    },
  ],
  balances: [
    { accountId: ACC, currentBalance: '1312.40', availableBalance: '1312.40', currency: 'AUD' },
    { accountId: GOAL_ACC, currentBalance: '4200.00', availableBalance: '4200.00', currency: 'AUD' },
  ],
  transactions: txns,
  wallatrack: {
    spendingAccountId: ACC,
    goal: { name: 'First home starter', amount: '15000.00', targetDate: '2028-06-30', accountId: GOAL_ACC },
    peerBenchmark: { weeklyNet: '92.00', label: 'Renters on a similar income' },
    rerouteOptions: {
      sideHustle: { how: 'Add a small weekend side hustle', weekly: '29.00' },
      comfortable: { how: 'Pick up your Friday takeaway instead of delivery', weekly: '17.50' },
    },
    demoPurchases: [
      { id: 'pc', merchant: 'TechHub Online', item: 'Gaming PC', amount: '1200.00', merchantCategoryCode: '5732' },
      { id: 'uber-eats', merchant: 'Uber Eats', item: 'Dinner delivery', amount: '62.00', merchantCategoryCode: '5814' },
      { id: 'coffee', merchant: 'Bean Scene Espresso', item: 'Flat white', amount: '5.50', merchantCategoryCode: '5499' },
    ],
  },
};

const out = path.join(__dirname, '..', 'src', 'data', 'personas', 'alex.json');
writeFileSync(out, JSON.stringify(persona, null, 2) + '\n');
console.log(`Wrote ${txns.length} transactions to ${out}`);
