import { useEffect, useRef } from "react";
import { MotionConfig, motion } from "motion/react";
import { CircleCheck, CircleX, RotateCcw } from "lucide-react";
import { BottomNav, PhoneFrame, StatusBar, useIsCompact } from "@/components/Phone";
import { HabitSheet } from "@/components/HabitSheet";
import { WallabyMark } from "@/components/Wallaby";
import { cx } from "@/components/ui";
import { DEMO_PURCHASES } from "@/data/persona";
import { verifyDemoDates } from "@/engine/engine";
import { StoreProvider, useStore } from "@/state/store";
import { AccountScreen } from "@/screens/Account";
import { AnalysingScreen, GoalSetupScreen } from "@/screens/GoalSetup";
import { HomeScreen } from "@/screens/Home";
import { InsightsScreen } from "@/screens/Insights";
import { PayScreen, PurchaseSheet } from "@/screens/Pay";
import { TimelineScreen } from "@/screens/Timeline";

// Number guard: re-check every published demo date once at startup.
const ENGINE_CHECKS = verifyDemoDates();
if (ENGINE_CHECKS.some((c) => !c.ok))
  console.error("WallaTrack engine check failed", ENGINE_CHECKS);

export default function App() {
  return (
    <StoreProvider>
      <Root />
    </StoreProvider>
  );
}

function Root() {
  const { state } = useStore();
  const compact = useIsCompact();
  return (
    <MotionConfig reducedMotion={state.calm ? "always" : "user"}>
      {compact ? (
        <PhoneFrame>
          <AppShell />
        </PhoneFrame>
      ) : (
        <div className="flex min-h-screen items-center justify-center gap-16 bg-[radial-gradient(1100px_700px_at_65%_15%,#ffffff_0%,#eeedf4_45%,#e3e2ec_100%)] p-6">
          <PresenterPanel />
          <PhoneFrame>
            <AppShell />
          </PhoneFrame>
        </div>
      )}
    </MotionConfig>
  );
}

function AppShell() {
  const { state } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [state.navKey]);

  const goalView = !state.goal
    ? state.goalView === "analysing"
      ? "analysing"
      : "setup"
    : state.goalView;
  const screenKey = state.tab === "goal" ? `goal-${goalView}` : state.tab;
  const screen = {
    home: <HomeScreen />,
    account: <AccountScreen />,
    pay: <PayScreen />,
    goal: {
      setup: <GoalSetupScreen />,
      analysing: <AnalysingScreen />,
      insights: <InsightsScreen />,
      timeline: <TimelineScreen />,
    }[goalView],
  }[state.tab];

  return (
    <div className={cx("flex h-full flex-col bg-canvas", state.calm && "wt-calm")}>
      <StatusBar />
      <div className="relative min-h-0 flex-1">
        <div
          ref={scrollRef}
          className="scrollbar-none absolute inset-0 overflow-y-auto overscroll-contain"
        >
          <motion.main
            key={screenKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="min-h-full"
          >
            {screen}
          </motion.main>
        </div>
        <HabitSheet />
        <PurchaseSheet />
      </div>
      <BottomNav />
    </div>
  );
}

function PresenterPanel() {
  const { state, dispatch } = useStore();
  const pc = DEMO_PURCHASES[0];
  const passed = ENGINE_CHECKS.filter((c) => c.ok).length;

  const steps: { label: string; hint: string; active: boolean; go: () => void }[] = [
    {
      label: "Home",
      hint: "Goal and payments at a glance",
      active: state.tab === "home",
      go: () => dispatch({ type: "navigate", tab: "home" }),
    },
    {
      label: "Account history",
      hint: "Payments in and out",
      active: state.tab === "account",
      go: () => dispatch({ type: "navigate", tab: "account" }),
    },
    {
      label: "Set goal",
      hint: "Amount, end date and reason",
      active:
        state.tab === "goal" && (state.goalView === "setup" || state.goalView === "analysing"),
      go: () => dispatch({ type: "goalView", view: "setup" }),
    },
    {
      label: "Goal insights",
      hint: "Projection, summary and habits",
      active: state.tab === "goal" && state.goalView === "insights",
      go: () => {
        dispatch({ type: "ensureGoal" });
        dispatch({ type: "goalView", view: "insights" });
      },
    },
    {
      label: "Goal timeline",
      hint: "The wallaby race and plans",
      active: state.tab === "goal" && state.goalView === "timeline",
      go: () => {
        dispatch({ type: "ensureGoal" });
        dispatch({ type: "goalView", view: "timeline" });
      },
    },
    {
      label: "Purchase check",
      hint: `Tap to pay the $1,200 PC`,
      active: state.tab === "pay",
      go: () => {
        dispatch({ type: "ensureGoal" });
        dispatch({ type: "startCheck", purchase: pc });
      },
    },
  ];

  return (
    <aside className="hidden w-[290px] shrink-0 lg:block">
      <div className="flex items-center gap-2.5">
        <WallabyMark className="h-8 w-auto" />
        <span className="text-[22px] font-extrabold tracking-[-0.03em] text-navy">WallaTrack</span>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">
        An interactive prototype. Your savings goal shows up at the moment you pay, and four future
        versions of you race to the finish.
      </p>

      <nav className="mt-6" aria-label="Prototype screens">
        <p className="mb-2 text-[12px] font-semibold text-faint">Jump to</p>
        <ol className="space-y-1">
          {steps.map((s, i) => (
            <li key={s.label}>
              <button
                onClick={s.go}
                className={cx(
                  "group flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left transition-colors",
                  s.active ? "bg-white shadow-sm ring-1 ring-black/5" : "hover:bg-white/60",
                )}
              >
                <span
                  className={cx(
                    "grid size-7 shrink-0 place-items-center rounded-full text-[12px] font-bold tabular",
                    s.active ? "bg-hero text-white" : "bg-navy/[0.07] text-navy",
                  )}
                >
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-semibold text-ink">{s.label}</span>
                  <span className="block truncate text-[12px] text-muted">{s.hint}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-6 space-y-2.5">
        <label className="flex cursor-pointer items-center justify-between rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-black/5">
          <span>
            <span className="block text-[14px] font-semibold">Calm motion</span>
            <span className="block text-[12px] text-muted">Turns off hops and transitions</span>
          </span>
          <input
            type="checkbox"
            checked={state.calm}
            onChange={() => dispatch({ type: "toggleCalm" })}
            className="peer sr-only"
          />
          <span className="relative h-6 w-10 rounded-full bg-navy/20 transition-colors peer-checked:bg-success peer-focus-visible:ring-2 peer-focus-visible:ring-hero after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-4" />
        </label>

        <details className="group rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-black/5">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span>
              <span className="block text-[14px] font-semibold">Number guard</span>
              <span className="block text-[12px] text-muted">
                {passed}/{ENGINE_CHECKS.length} demo dates verified by the engine
              </span>
            </span>
            {passed === ENGINE_CHECKS.length ? (
              <CircleCheck className="size-5 text-success" />
            ) : (
              <CircleX className="size-5 text-danger" />
            )}
          </summary>
          <ul className="mt-3 space-y-1.5 border-t border-black/5 pt-3">
            {ENGINE_CHECKS.map((c) => (
              <li key={c.label} className="flex justify-between gap-2 text-[12px]">
                <span className="text-muted">{c.label}</span>
                <span className={cx("font-semibold tabular", c.ok ? "text-ink" : "text-danger")}>
                  {c.actual}
                </span>
              </li>
            ))}
          </ul>
        </details>

        <button
          onClick={() => {
            if (state.check) dispatch({ type: "closeResult" });
            dispatch({ type: "reset" });
          }}
          className="inline-flex items-center gap-2 px-1 text-[13px] font-semibold text-hero hover:underline"
        >
          <RotateCcw className="size-3.5" />
          Reset demo
        </button>
      </div>
    </aside>
  );
}
