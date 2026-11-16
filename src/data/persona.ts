import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Bus,
  Coffee,
  Film,
  House,
  Monitor,
  PiggyBank,
  ShoppingBag,
  UtensilsCrossed,
  Zap,
  ShoppingBasket,
} from "lucide-react";

export type Category =
  | "income"
  | "housing"
  | "groceries"
  | "takeaway"
  | "coffee"
  | "transport"
  | "shopping"
  | "bills"
  | "fun"
  | "electronics";

export const CATEGORIES: Record<
  Category,
  { label: string; color: string; tint: string; icon: LucideIcon }
> = {
  income: { label: "Income", color: "#008A23", tint: "#E3F4E7", icon: Briefcase },
  housing: { label: "Rent", color: "#1F1C4F", tint: "#E6E5F0", icon: House },
  groceries: { label: "Groceries", color: "#2F8F5B", tint: "#E4F2EA", icon: ShoppingBasket },
  takeaway: { label: "Takeaway", color: "#D9480F", tint: "#FCE9DE", icon: UtensilsCrossed },
  coffee: { label: "Coffee", color: "#8A5A33", tint: "#F3E9DF", icon: Coffee },
  transport: { label: "Transport", color: "#1C6FD1", tint: "#E1EDFB", icon: Bus },
  shopping: { label: "Shopping", color: "#7A3FB8", tint: "#EFE6F8", icon: ShoppingBag },
  bills: { label: "Bills", color: "#0E7C86", tint: "#DFF1F2", icon: Zap },
  fun: { label: "Entertainment", color: "#7A3FB8", tint: "#EFE6F8", icon: Film },
  electronics: { label: "Electronics", color: "#7A3FB8", tint: "#EFE6F8", icon: Monitor },
};

export interface Txn {
  id: string;
  /** Day offset from TODAY (0 = today, -1 = yesterday) */
  day: number;
  merchant: string;
  category: Category;
  amountCents: number;
}

export const PERSONA = {
  name: "Alex Sample",
  firstName: "Alex",
  initials: "AS",
  account: { name: "Westpac Choice", bsb: "000-123", number: "9876 5432", card: "4821" },
  startingBalanceCents: 420_000,
  payCents: 185_000,
  rentCents: 39_000,
};

export const TRANSACTIONS: Txn[] = [
  { id: "t1", day: 0, merchant: "Bean There Café", category: "coffee", amountCents: -580 },
  { id: "t2", day: -1, merchant: "Coles Surry Hills", category: "groceries", amountCents: -4215 },
  { id: "t3", day: -1, merchant: "Opal Travel", category: "transport", amountCents: -750 },
  { id: "t4", day: -1, merchant: "Bean There Café", category: "coffee", amountCents: -580 },
  { id: "t5", day: -2, merchant: "Spotify", category: "bills", amountCents: -1399 },
  { id: "t6", day: -3, merchant: "Hoyts Broadway", category: "fun", amountCents: -2500 },
  { id: "t7", day: -4, merchant: "Uber Eats", category: "takeaway", amountCents: -5840 },
  { id: "t8", day: -4, merchant: "Acme Co — Salary", category: "income", amountCents: 185_000 },
  { id: "t9", day: -4, merchant: "Bean There Café", category: "coffee", amountCents: -580 },
  { id: "t10", day: -5, merchant: "Opal Travel", category: "transport", amountCents: -750 },
  { id: "t11", day: -5, merchant: "Bean There Café", category: "coffee", amountCents: -580 },
  {
    id: "t12",
    day: -6,
    merchant: "Harbour Realty — Rent",
    category: "housing",
    amountCents: -39_000,
  },
  { id: "t13", day: -7, merchant: "Woolworths Metro", category: "groceries", amountCents: -6830 },
  { id: "t14", day: -7, merchant: "Bean There Café", category: "coffee", amountCents: -580 },
  { id: "t15", day: -8, merchant: "Origin Energy", category: "bills", amountCents: -11_240 },
  { id: "t16", day: -8, merchant: "Opal Travel", category: "transport", amountCents: -750 },
  { id: "t17", day: -11, merchant: "Uber Eats", category: "takeaway", amountCents: -7120 },
  { id: "t18", day: -11, merchant: "Kmart Broadway", category: "shopping", amountCents: -3400 },
  {
    id: "t19",
    day: -13,
    merchant: "Harbour Realty — Rent",
    category: "housing",
    amountCents: -39_000,
  },
];

/** Last 12 weeks, whole cents. Kept = $1,814.40 = $151.20/week. */
export const SUMMARY = {
  weeks: 12,
  inCents: 1_110_000,
  outCents: 928_560,
  keptCents: 181_440,
  breakdown: [
    { category: "housing" as Category, cents: 468_000 },
    { category: "groceries" as Category, cents: 132_000 },
    { category: "bills" as Category, cents: 96_000 },
    { category: "shopping" as Category, cents: 75_840 },
    { category: "takeaway" as Category, cents: 74_880 },
    { category: "transport" as Category, cents: 54_000 },
    { category: "coffee" as Category, cents: 27_840 },
  ],
};

export type HabitId = "ubereats" | "coffee" | "payday";

export interface Habit {
  id: HabitId;
  tone: "good" | "watch";
  top?: boolean;
  title: string;
  short: string;
  stat: string;
  statLabel: string;
  detail: string;
  barsLabel: string;
  bars: number[];
  facts: { label: string; value: string }[];
  icon: LucideIcon;
}

export const HABITS: Habit[] = [
  {
    id: "ubereats",
    tone: "watch",
    top: true,
    title: "Friday Uber Eats",
    short: "Uber Eats",
    stat: "$62.40",
    statLabel: "a week",
    detail:
      "Ordered on 11 of the last 12 Fridays, usually after 7pm. Spend is up 18% on the 12 weeks before.",
    barsLabel: "Weekly takeaway, last 12 weeks",
    bars: [5520, 6390, 7140, 0, 5840, 6610, 6180, 7420, 5930, 6890, 7120, 9840],
    facts: [
      { label: "Fridays ordered", value: "11 / 12" },
      { label: "12-week total", value: "$748.80" },
      { label: "Average order", value: "$34.04" },
    ],
    icon: UtensilsCrossed,
  },
  {
    id: "coffee",
    tone: "watch",
    title: "Weekday coffee",
    short: "Coffee",
    stat: "$23.20",
    statLabel: "a week",
    detail: "Four oat flat whites a week at Bean There Café, $5.80 each, almost always before 9am.",
    barsLabel: "Weekly coffee, last 12 weeks",
    bars: [1740, 2320, 2900, 2320, 1740, 2320, 2900, 2320, 2320, 2320, 2320, 2320],
    facts: [
      { label: "Coffees a week", value: "4" },
      { label: "12-week total", value: "$278.40" },
      { label: "Per cup", value: "$5.80" },
    ],
    icon: Coffee,
  },
  {
    id: "payday",
    tone: "good",
    title: "Payday saver",
    short: "Payday",
    stat: "6 / 6",
    statLabel: "paydays",
    detail: "Your balance grew every payday this quarter, keeping $302.40 a fortnight on average.",
    barsLabel: "Kept each fortnight, last 12 weeks",
    bars: [28_810, 31_560, 29_640, 30_120, 32_270, 29_040],
    facts: [
      { label: "Paydays kept", value: "6 / 6" },
      { label: "12-week total", value: "$1,814.40" },
      { label: "Per fortnight", value: "$302.40" },
    ],
    icon: PiggyBank,
  },
];

export const habitById = (id: HabitId) => HABITS.find((h) => h.id === id)!;

export interface Purchase {
  id: string;
  merchant: string;
  item: string;
  category: Category;
  amountCents: number;
  /** Habit link line, e.g. "3rd takeaway this week" */
  habitLink?: string;
  habitId?: HabitId;
  whatIf?: boolean;
}

export const DEMO_PURCHASES: Purchase[] = [
  {
    id: "pc",
    merchant: "Pixel Forge",
    item: "Gaming PC",
    category: "electronics",
    amountCents: 120_000,
  },
  {
    id: "ubereats",
    merchant: "Uber Eats",
    item: "Thai Palace · 2 items",
    category: "takeaway",
    amountCents: 3860,
    habitLink: "3rd takeaway this week",
    habitId: "ubereats",
  },
  {
    id: "coffee",
    merchant: "Bean There Café",
    item: "Oat flat white",
    category: "coffee",
    amountCents: 580,
    habitLink: "3rd coffee this week",
    habitId: "coffee",
  },
];

export const RACER_META = {
  you: {
    color: "#FF4D42",
    tag: "Current pace",
    summary:
      "Your real pace from the last 12 weeks of income and spending, including any plan you pick. This is the only racer your purchases move.",
  },
  ghost: {
    color: "#B8A9FF",
    tag: "Without top habit",
    summary:
      "You, minus Friday Uber Eats. Same income, same rent, same everything else — just $62.40 a week that stays in your account.",
  },
  best: {
    color: "#F5B83D",
    tag: "Best recent month",
    summary:
      "Your best stretch: August 2026, when you kept $762 over the month. If every month looked like that, this is where you finish.",
  },
  peers: {
    color: "#3CC9B4",
    tag: "Illustrative",
    summary:
      "An illustrative pace for savers aged 25–34 on a similar income and rent. A reference point, not a target.",
  },
} as const;
