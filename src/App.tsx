import { useEffect, useRef } from "react";
import { MotionConfig, motion } from "motion/react";
import { CircleCheck, CircleX, RotateCcw } from "lucide-react";
import { AppHeader, BottomNav, PhoneFrame, StatusBar, useIsCompact } from "@/components/Phone";
import { WestpacLogo } from "@/components/Brand";
import { HabitSheet } from "@/components/HabitSheet";
import { cx } from "@/components/ui";
import { PENDING_PURCHASES } from "@/data/persona";
import { verifyDemoDates } from "@/engine/engine";
import { StoreProvider, useStore } from "@/state/store";
import { AccountScreen } from "@/screens/Account";
import { AnalysingScreen, GoalSetupScreen } from "@/screens/GoalSetup";
import { HomeScreen } from "@/screens/Home";
import { InsightsScreen } from "@/screens/Insights";
import { PayScreen, PurchaseSheet } from "@/screens/Pay";
import { TimelineScreen } from "@/screens/Timeline";
import { CustomiseScreen } from "@/screens/Customise";
import { JourneyScreen } from "@/screens/Journey";

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
        <div className="flex min-h-screen items-center justify-center gap-16 bg-canvas p-6">
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

  // Customise needs no goal; every other goal view does.
  const goalView =
    state.goal || state.goalView === "analysing" || state.goalView === "customise"
      ? state.goalView
      : "setup";
  const standalone = state.tab === "goal" && (goalView === "customise" || goalView === "journey");
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
      customise: <CustomiseScreen />,
      journey: <JourneyScreen />,
    }[goalView],
  }[state.tab];

  return (
    <div className={cx("flex h-full flex-col bg-canvas", state.calm && "wt-calm")}>
      <StatusBar />
      <AppHeader />
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
      {!standalone && <BottomNav />}
    </div>
  );
}

function PresenterPanel() {
  const { state, dispatch } = useStore();
  const pc = PENDING_PURCHASES[0];
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
      label: "Customise wallaby",
      hint: "Fur, outfit and accessories",
      active: state.tab === "goal" && state.goalView === "customise",
      go: () => dispatch({ type: "goalView", view: "customise" }),
    },
    {
      label: "Your journey",
      hint: "Savings milestones",
      active: state.tab === "goal" && state.goalView === "journey",
      go: () => {
        dispatch({ type: "ensureGoal" });
        dispatch({ type: "goalView", view: "journey" });
      },
    },
    {
      label: "Pending payment",
      hint: "Review the $1,200 PC",
      active: state.tab === "pay",
      go: () => {
        dispatch({ type: "ensureGoal" });
        if (state.resolvedPending.includes(pc.id)) dispatch({ type: "restorePending" });
        dispatch({ type: "startCheck", purchase: pc });
      },
    },
  ];

  return (
    <aside className="hidden w-[290px] shrink-0 lg:block">
      <div className="flex items-center gap-3.5">
        <WestpacLogo className="h-[30px] w-auto" />
        <span className="h-8 w-px bg-line-strong/50" aria-hidden="true" />
        <span className="font-brand text-[26px] leading-none text-navy">WallaTrack</span>
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-muted">
        An interactive prototype. Your savings goal shows up at the moment you pay, and four future
        versions of you race to the finish.
      </p>

      <nav className="mt-6" aria-label="Prototype screens">
        <p className="mb-2 text-[13px] font-bold text-navy">Jump to</p>
        <ol className="space-y-1">
          {steps.map((s, i) => (
            <li key={s.label}>
              <button
                onClick={s.go}
                className={cx(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                  s.active
                    ? "border border-line bg-white"
                    : "border border-transparent hover:bg-white/60",
                )}
              >
                <span
                  className={cx(
                    "grid size-7 shrink-0 place-items-center rounded-full text-[12px] font-bold tabular",
                    s.active ? "bg-hero text-white" : "bg-navy-faint text-navy",
                  )}
                >
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-bold text-ink">{s.label}</span>
                  <span className="block truncate text-[12px] text-muted">{s.hint}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-6 rounded-lg border border-line bg-white px-4 py-3">
        <p className="text-[14px] font-bold">Preview savings milestones</p>
        <p className="text-[12px] text-muted">Demo-only balance. Live projections update.</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {[20, 25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              onClick={() => dispatch({ type: "previewMilestone", percent })}
              aria-pressed={state.demoMilestone === percent}
              className={cx(
                "h-8 rounded-[4px] border px-2.5 text-[13px] font-medium tabular transition-colors",
                state.demoMilestone === percent
                  ? "border-navy bg-navy text-white"
                  : "border-line-strong bg-white text-ink hover:bg-navy-faint",
              )}
            >
              {percent}%
            </button>
          ))}
          <button
            onClick={() => dispatch({ type: "previewMilestone", percent: null })}
            className="h-8 px-1.5 text-[13px] text-hero hover:underline"
          >
            Actual
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-line bg-white px-4 py-3">
          <span>
            <span className="block text-[14px] font-bold">Calm motion</span>
            <span className="block text-[12px] text-muted">Turns off hops and transitions</span>
          </span>
          <input
            type="checkbox"
            checked={state.calm}
            onChange={() => dispatch({ type: "toggleCalm" })}
            className="peer sr-only"
          />
          <span className="relative box-content h-7 w-12 shrink-0 rounded-full border border-line-strong bg-white transition-colors duration-300 peer-checked:border-navy peer-checked:bg-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-focus after:absolute after:top-0 after:left-0 after:size-7 after:rounded-full after:border after:border-white after:bg-muted after:transition-all after:duration-300 peer-checked:after:left-full peer-checked:after:-translate-x-full peer-checked:after:border-navy peer-checked:after:bg-white" />
        </label>

        <details className="group rounded-lg border border-line bg-white px-4 py-3">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span>
              <span className="block text-[14px] font-bold">Number guard</span>
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
          <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
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
          className="inline-flex items-center gap-2 px-1 text-[14px] text-hero hover:underline"
        >
          <RotateCcw className="size-3.5" />
          Reset demo
        </button>
      </div>
    </aside>
  );
}
