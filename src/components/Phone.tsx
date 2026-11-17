import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { usePending, useStore, type Tab } from "@/state/store";
import {
  HouseFilledIcon,
  HouseIcon,
  PayFilledIcon,
  PayIcon,
  TargetFilledIcon,
  TargetIcon,
  WalletFilledIcon,
  NotificationIcon,
  WalletIcon,
  type IconComponent,
} from "./GelIcons";
import { WestpacLogo } from "./Brand";
import { PERSONA } from "@/data/persona";
import { cx } from "./ui";

export const PHONE_W = 390;
export const PHONE_H = 844;

export function useIsCompact() {
  const query = "(max-width: 640px)";
  const [compact, setCompact] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setCompact(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return compact;
}

function useFitScale(height: number, margin = 48) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(Math.min(1, (window.innerHeight - margin) / height));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [height, margin]);
  return scale;
}

/** Presents the app in a 390px phone frame on larger screens, full-bleed on phones. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  const compact = useIsCompact();
  const frameH = PHONE_H + 24;
  const scale = useFitScale(frameH);

  if (compact) {
    return <div className="relative h-dvh w-full overflow-hidden bg-canvas">{children}</div>;
  }

  return (
    <div style={{ width: (PHONE_W + 24) * scale, height: frameH * scale }} className="shrink-0">
      <div
        className="relative origin-top-left rounded-[64px] bg-[#0c0b17] p-3 shadow-[0_40px_80px_-20px_rgb(13_11_38/0.45),0_0_0_1px_rgb(255_255_255/0.06)_inset]"
        style={{ width: PHONE_W + 24, height: frameH, transform: `scale(${scale})` }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[52px] bg-canvas"
          style={{ width: PHONE_W, height: PHONE_H }}
        >
          {/* Dynamic island */}
          <div className="pointer-events-none absolute top-[11px] left-1/2 z-50 h-[34px] w-[118px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-ink" : "text-white";
  return (
    <div
      className={cx(
        "relative z-30 flex h-[54px] shrink-0 items-center justify-between bg-white px-8 pt-1.5",
        color,
      )}
    >
      <span className="text-[15px] font-semibold tabular">9:41</span>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="6" rx="1" />
          <rect x="10" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="15" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M8 2.2c2.2 0 4.2.9 5.7 2.3l1.1-1.1A9.6 9.6 0 0 0 8 .6 9.6 9.6 0 0 0 1.2 3.4l1.1 1.1A8 8 0 0 1 8 2.2Zm0 3.2c1.3 0 2.5.5 3.4 1.3l1.1-1.1A6.4 6.4 0 0 0 8 3.8c-1.7 0-3.3.7-4.5 1.8l1.1 1.1A4.8 4.8 0 0 1 8 5.4Zm0 3.1c.5 0 .9.2 1.2.5L8 10.2 6.8 9c.3-.3.7-.5 1.2-.5Z" />
        </svg>
        <span className="relative ml-0.5 h-[12px] w-[25px] rounded-[4px] border border-current/40 p-[1.5px]">
          <span className="block h-full w-[78%] rounded-[2px] bg-current" />
          <span className="absolute top-1/2 -right-[3.5px] h-1 w-[1.5px] -translate-y-1/2 rounded-r bg-current/50" />
        </span>
      </span>
    </div>
  );
}

/** GEL Header: white bar, muted-soft bottom rule, Westpac logo left. */
export function AppHeader() {
  const { dispatch } = useStore();
  const pending = usePending().length;
  return (
    <header className="relative z-30 flex h-[50px] shrink-0 items-center justify-between border-b border-line bg-white px-5">
      <button
        onClick={() => dispatch({ type: "navigate", tab: "home" })}
        className="flex items-center gap-3 rounded-sm"
        aria-label="Westpac WallaTrack home"
      >
        <WestpacLogo className="h-[21px] w-auto" title={null} />
        <span className="h-5 w-px bg-line" aria-hidden="true" />
        <span className="font-brand text-[16px] text-navy">WallaTrack</span>
      </button>
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch({ type: "navigate", tab: "pay" })}
          className="relative grid size-9 place-items-center rounded-full text-navy hover:bg-navy-faint"
          aria-label={
            pending ? `Notifications: ${pending} payments awaiting approval` : "Notifications"
          }
        >
          <NotificationIcon className="size-[22px]" />
          {pending > 0 && (
            <span className="absolute top-1.5 right-1.5 size-2.5 rounded-full border-2 border-white bg-hero" />
          )}
        </button>
        <span
          className="grid size-8 place-items-center rounded-full bg-navy text-[12px] font-bold text-white"
          aria-label={PERSONA.name}
        >
          {PERSONA.initials}
        </span>
      </div>
    </header>
  );
}

const NAV: { tab: Tab; label: string; icon: IconComponent; active: IconComponent }[] = [
  { tab: "home", label: "Home", icon: HouseIcon, active: HouseFilledIcon },
  { tab: "account", label: "Account", icon: WalletIcon, active: WalletFilledIcon },
  { tab: "pay", label: "Pay", icon: PayIcon, active: PayFilledIcon },
  { tab: "goal", label: "Goal", icon: TargetIcon, active: TargetFilledIcon },
];

export function BottomNav() {
  const { state, dispatch } = useStore();
  const pending = usePending().length;
  return (
    <nav
      className="relative z-30 shrink-0 border-t border-line bg-white pb-[22px]"
      aria-label="Main"
    >
      <ul className="grid grid-cols-4">
        {NAV.map(({ tab, label, icon, active: activeIcon }) => {
          const active = state.tab === tab;
          const Icon = active ? activeIcon : icon;
          const badge = tab === "pay" && pending > 0 ? pending : 0;
          return (
            <li key={tab}>
              <button
                onClick={() => dispatch({ type: "navigate", tab })}
                className={cx(
                  "relative flex h-[58px] w-full flex-col items-center justify-center gap-1 text-[12px] transition-colors",
                  active ? "text-hero" : "text-muted hover:text-navy",
                )}
                aria-current={active ? "page" : undefined}
                aria-label={badge ? `${label}, ${badge} pending` : undefined}
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute top-0 h-[3px] w-10 bg-hero"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative">
                  <Icon className="size-6" />
                  {badge > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 grid h-[18px] min-w-[18px] place-items-center rounded-full border-2 border-white bg-hero px-1 text-[10.5px] leading-none font-bold text-white tabular">
                      {badge}
                    </span>
                  )}
                </span>
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-ink" />
    </nav>
  );
}
