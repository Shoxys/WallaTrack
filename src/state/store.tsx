import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import {
  projectRacers,
  purchaseImpact,
  youArrivalDay,
  type Goal,
  type PlanId,
  type RacerId,
} from "@/engine/engine";
import {
  PENDING_PURCHASES,
  PERSONA,
  TRANSACTIONS,
  type HabitId,
  type Purchase,
  type Txn,
} from "@/data/persona";

export type Tab = "home" | "account" | "pay" | "goal";
export type GoalView = "setup" | "analysing" | "insights" | "timeline";

export interface Decision {
  id: string;
  purchase: Purchase;
  outcome: "approved" | "declined";
  whatIf: boolean;
  /** Null when no goal was set at decision time */
  beforeDay: number | null;
  afterDay: number | null;
  /** You's start position before the decision, used for the knock-back animation */
  savedBefore: number;
  /** Reroute picked from the confirmation screen */
  reroute: PlanId | null;
}

export interface CheckState {
  purchase: Purchase;
  open: boolean;
  decisionId: string | null;
}

export interface State {
  tab: Tab;
  goalView: GoalView;
  savedCents: number;
  goal: Goal | null;
  planId: PlanId | null;
  addedTxns: Txn[];
  decisions: Decision[];
  /** Pending online purchases that have been approved (settled) or declined (cancelled) */
  resolvedPending: string[];
  check: CheckState | null;
  calm: boolean;
  openHabit: HabitId | null;
  focusRacer: RacerId;
  /** Decision whose race-track effect has not yet been shown on the timeline */
  unseenDecisionId: string | null;
  /** Bumps whenever a screen should scroll to top */
  navKey: number;
}

type Action =
  | { type: "navigate"; tab: Tab; goalView?: GoalView }
  | { type: "goalView"; view: GoalView }
  | { type: "setGoal"; goal: Omit<Goal, "startSavedCents"> }
  | { type: "startCheck"; purchase: Purchase }
  | { type: "reopenCheck" }
  | { type: "restorePending" }
  | { type: "dismissCheck" }
  | { type: "decide"; outcome: "approved" | "declined" }
  | { type: "closeResult" }
  | { type: "applyPlan"; planId: PlanId | null; fromReroute?: boolean }
  | { type: "openHabit"; id: HabitId | null }
  | { type: "focusRacer"; id: RacerId }
  | { type: "markDecisionSeen" }
  | { type: "toggleCalm" }
  | { type: "reset" }
  | { type: "ensureGoal" };

export const DEFAULT_GOAL = {
  amountCents: 1_500_000,
  /** 31 Jan 2028 */
  targetDay: 440,
  reason: "First home starter",
};

const STORAGE_KEY = "wallatrack:v1";

const initialState: State = {
  tab: "home",
  goalView: "setup",
  savedCents: PERSONA.startingBalanceCents,
  goal: null,
  planId: null,
  addedTxns: [],
  decisions: [],
  resolvedPending: [],
  check: null,
  calm: false,
  openHabit: null,
  focusRacer: "you",
  unseenDecisionId: null,
  navKey: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "navigate": {
      let goalView = action.goalView ?? state.goalView;
      if (action.tab === "goal" && !action.goalView) {
        goalView = state.goal
          ? state.goalView === "setup"
            ? "insights"
            : state.goalView
          : "setup";
      }
      return {
        ...state,
        tab: action.tab,
        goalView,
        openHabit: null,
        // Leaving via the nav closes any purchase sheet; pending items stay pending.
        check: null,
        navKey: state.navKey + 1,
      };
    }
    case "goalView":
      return {
        ...state,
        tab: "goal",
        goalView: action.view,
        check: null,
        navKey: state.navKey + 1,
      };
    case "setGoal":
      return {
        ...state,
        goal: { ...action.goal, startSavedCents: state.savedCents },
        planId: null,
        tab: "goal",
        goalView: "analysing",
        navKey: state.navKey + 1,
      };
    case "ensureGoal":
      if (state.goal) return state;
      return { ...state, goal: { ...DEFAULT_GOAL, startSavedCents: state.savedCents } };
    case "startCheck":
      return {
        ...state,
        tab: "pay",
        check: { purchase: action.purchase, open: true, decisionId: null },
        navKey: state.navKey + 1,
      };
    case "reopenCheck":
      return state.check ? { ...state, tab: "pay", check: { ...state.check, open: true } } : state;
    case "dismissCheck":
      // Dismissing leaves a pending purchase pending until it is approved or declined.
      return { ...state, check: null };
    case "restorePending":
      return { ...state, resolvedPending: [] };
    case "decide": {
      if (!state.check) return state;
      const { purchase } = state.check;
      const whatIf = !!purchase.whatIf;
      const impact = state.goal
        ? purchaseImpact(state.goal, state.savedCents, state.planId, purchase.amountCents)
        : null;
      const decision: Decision = {
        id: `d${Date.now()}`,
        purchase,
        outcome: action.outcome,
        whatIf,
        beforeDay: impact?.beforeDay ?? null,
        afterDay: impact?.afterDay ?? null,
        savedBefore: state.savedCents,
        reroute: null,
      };
      const charged = action.outcome === "approved" && !whatIf;
      const isPending = !whatIf && PENDING_PURCHASES.some((p) => p.id === purchase.id);
      return {
        ...state,
        resolvedPending: isPending
          ? [...new Set([...state.resolvedPending, purchase.id])]
          : state.resolvedPending,
        savedCents: charged ? state.savedCents - purchase.amountCents : state.savedCents,
        addedTxns: charged
          ? [
              {
                id: `x${Date.now()}`,
                day: 0,
                merchant: purchase.merchant,
                category: purchase.category,
                amountCents: -purchase.amountCents,
              },
              ...state.addedTxns,
            ]
          : state.addedTxns,
        decisions: [decision, ...state.decisions],
        check: { ...state.check, open: true, decisionId: decision.id },
        unseenDecisionId: whatIf || !state.goal ? state.unseenDecisionId : decision.id,
        focusRacer: "you",
      };
    }
    case "closeResult":
      return { ...state, check: null };
    case "applyPlan": {
      let decisions = state.decisions;
      if (action.fromReroute && state.check?.decisionId) {
        decisions = decisions.map((d) =>
          d.id === state.check!.decisionId ? { ...d, reroute: action.planId } : d,
        );
      }
      return { ...state, planId: action.planId, decisions, focusRacer: "you" };
    }
    case "openHabit":
      return { ...state, openHabit: action.id };
    case "focusRacer":
      return { ...state, focusRacer: action.id };
    case "markDecisionSeen":
      return { ...state, unseenDecisionId: null };
    case "toggleCalm":
      return { ...state, calm: !state.calm };
    case "reset":
      return { ...initialState, calm: state.calm, navKey: state.navKey + 1 };
  }
}

function loadState(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const saved = JSON.parse(raw) as Partial<State>;
    // Transient UI state (open sheets, analysing) never survives a reload.
    const goalView = saved.goalView === "analysing" ? "insights" : saved.goalView;
    return {
      ...initialState,
      ...saved,
      goalView: goalView ?? "setup",
      check: null,
      openHabit: null,
    };
  } catch {
    return initialState;
  }
}

const StoreContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(() => {
    const { check: _check, openHabit: _openHabit, navKey: _navKey, ...persist } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persist));
  }, [state]);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

/** Engine-derived projections for the current state. */
export function useProjection() {
  const { state } = useStore();
  return useMemo(() => {
    const { goal, savedCents, planId } = state;
    if (!goal) return null;
    const racers = projectRacers(goal, savedCents, planId);
    const youDay = youArrivalDay(goal, savedCents, planId);
    const baseDay = youArrivalDay(goal, savedCents, null);
    return {
      goal,
      racers,
      youDay,
      /** You without any active plan */
      baseDay,
      /** Positive = behind target */
      vsTargetDays: youDay - goal.targetDay,
      progress: Math.max(0, Math.min(1, savedCents / goal.amountCents)),
    };
  }, [state.goal, state.savedCents, state.planId]);
}

export function useTransactions(): Txn[] {
  const { state } = useStore();
  return useMemo(() => [...state.addedTxns, ...TRANSACTIONS], [state.addedTxns]);
}

/** Online purchases still awaiting approval. */
export function usePending(): Purchase[] {
  const { state } = useStore();
  return useMemo(
    () => PENDING_PURCHASES.filter((p) => !state.resolvedPending.includes(p.id)),
    [state.resolvedPending],
  );
}
