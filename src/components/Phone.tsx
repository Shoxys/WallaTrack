import { CircleDollarSign, House, Target, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { useStore, type Tab } from "@/state/store";
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
        "relative z-30 flex h-[54px] shrink-0 items-center justify-between px-8 pt-1.5",
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

const NAV: { tab: Tab; label: string; icon: typeof House }[] = [
  { tab: "home", label: "Home", icon: House },
  { tab: "account", label: "Account", icon: Wallet },
  { tab: "pay", label: "Pay", icon: CircleDollarSign },
  { tab: "goal", label: "Goal", icon: Target },
];

export function BottomNav() {
  const { state, dispatch } = useStore();
  return (
    <nav
      className="relative z-30 shrink-0 border-t border-black/[0.06] bg-white/95 pb-[22px] backdrop-blur"
      aria-label="Main"
    >
      <ul className="grid grid-cols-4">
        {NAV.map(({ tab, label, icon: Icon }) => {
          const active = state.tab === tab;
          return (
            <li key={tab}>
              <button
                onClick={() => dispatch({ type: "navigate", tab })}
                className={cx(
                  "relative flex h-[58px] w-full flex-col items-center justify-center gap-1 text-[11.5px] font-semibold transition-colors",
                  active ? "text-hero" : "text-muted hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute top-0 h-[3px] w-8 rounded-b-full bg-hero"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <Icon className="size-[22px]" strokeWidth={active ? 2.3 : 1.9} />
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
