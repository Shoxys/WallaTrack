/**
 * Persona files are shaped like Consumer Data Right (CDR) banking payloads:
 * accounts, balances and transactions use CDR field names and decimal-string
 * amounts. The `wallatrack` block holds app-only settings (goal, demo script).
 */

export interface CdrAccount {
  accountId: string;
  displayName: string;
  maskedNumber: string;
  productCategory: string;
  productName: string;
  openStatus: 'OPEN' | 'CLOSED';
  isOwned: boolean;
}

export interface CdrBalance {
  accountId: string;
  currentBalance: string;
  availableBalance: string;
  currency: string;
}

export interface CdrTransaction {
  accountId: string;
  transactionId: string;
  isDetailAvailable: boolean;
  type: string;
  status: 'POSTED' | 'PENDING';
  description: string;
  postingDateTime: string;
  /** Signed decimal string. Negative = money out. */
  amount: string;
  currency: string;
  reference: string;
  merchantName?: string;
  merchantCategoryCode?: string;
}

export interface DemoPurchase {
  id: string;
  merchant: string;
  item: string;
  amount: string;
  merchantCategoryCode: string;
}

export interface Persona {
  personaId: string;
  notice: string;
  /** Fixed "today" for every projection, so the demo never drifts with the wall clock. */
  asOf: string;
  customer: { customerUType: 'person'; person: { firstName: string; lastName: string } };
  accounts: CdrAccount[];
  balances: CdrBalance[];
  transactions: CdrTransaction[];
  wallatrack: {
    spendingAccountId: string;
    goal: { name: string; amount: string; targetDate: string; accountId: string };
    peerBenchmark: { weeklyNet: string; label: string };
    rerouteOptions: {
      sideHustle: { how: string; weekly: string };
      comfortable: { how: string; weekly: string };
    };
    demoPurchases: DemoPurchase[];
  };
}

/** Net cents saved over a number of weeks. Kept as a ratio so no rounding creeps in. */
export interface Pace {
  netCents: number;
  weeks: number;
}

export interface Habit {
  merchant: string;
  category: string;
  /** Total spent at this merchant in the pace window, in cents. */
  totalCents: number;
  weeks: number;
  /** Rounded to whole cents, for display. */
  weeklyCents: number;
  occurrences: number;
  weeksSeen: number;
  /** Day of week (0 = Sunday) when most purchases land, if there is a clear one. */
  weekday: number | null;
  label: string;
}

export interface CategorySpend {
  category: string;
  totalCents: number;
  weeklyCents: number;
  essential: boolean;
}

export interface Txn {
  id: string;
  date: string;
  cents: number;
  merchant: string;
  category: string;
}

export interface Analysis {
  personaId: string;
  firstName: string;
  asOf: string;
  goalName: string;
  goalCents: number;
  targetDate: string;
  savedCents: number;
  windowWeeks: number;
  windowStart: string;
  incomeCents: number;
  spendCents: number;
  pace: Pace;
  habits: Habit[];
  topHabit: Habit | null;
  bestStretch: { pace: Pace; start: string; end: string } | null;
  peerPace: Pace;
  peerLabel: string;
  breakdown: CategorySpend[];
  txns: Txn[];
  rerouteOptions: { sideHustle: { how: string; weeklyCents: number }; comfortable: { how: string; weeklyCents: number } };
}

/** What the customer has done in this session (persisted in local storage). */
export interface TrackState {
  /** Total of approved purchases, in cents. Comes out of the goal savings. */
  spentCents: number;
  /** Extra cents per week from the chosen reroute (0 if none). */
  boostCentsPerWeek: number;
  /** Approved purchases this session, by category — feeds the habit line. */
  approvedByCategory: Record<string, number>;
}

export type RacerId = 'you' | 'ghost' | 'best' | 'peer';

export interface Racer {
  id: RacerId;
  name: string;
  tagline: string;
  pace: Pace;
  weeklyCents: number;
  savedCents: number;
  remainingCents: number;
  days: number | null;
  arrivalDate: string | null;
  reason: string;
}

export interface PurchaseInput {
  merchant: string;
  item?: string;
  amountCents: number;
  category: string;
}

export type RerouteId = 'fastest' | 'side-hustle' | 'comfortable';

export interface Reroute {
  id: RerouteId;
  label: string;
  how: string;
  boostCentsPerWeek: number;
  days: number | null;
  arrivalDate: string | null;
  /** Days won back compared with the arrival date after the purchase. */
  daysRecovered: number;
}

export interface HabitLink {
  /** e.g. 3 for "3rd takeaway this week" */
  count: number;
  category: string;
  /** Set when the merchant is one of the customer's repeat habits. */
  habit: Habit | null;
}

export interface PurchaseCheck {
  purchase: PurchaseInput;
  goalName: string;
  before: { days: number | null; date: string | null };
  after: { days: number | null; date: string | null };
  /** Days the purchase adds to the arrival date (0 if it does not move). */
  deltaDays: number;
  habitLink: HabitLink | null;
  reroutes: Reroute[];
}
