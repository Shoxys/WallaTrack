import { Check, ChevronLeft, ChevronRight, Flag, Gift, Trophy } from "lucide-react";
import { RacerSprite } from "@/components/Wallaby";
import { RACER_META } from "@/data/persona";
import { fmtMoney } from "@/engine/engine";
import { useProjection, useStore } from "@/state/store";

// Milestones celebrate progress only. Every outfit and accessory is already free in Customise.
const MILESTONES: { percent: number; title: string; icon: string }[] = [
  { percent: 25, title: "First steps", icon: "👣" },
  { percent: 50, title: "Halfway there", icon: "⛰️" },
  { percent: 75, title: "Nearly home", icon: "🏡" },
  { percent: 100, title: "Goal achieved", icon: "🏆" },
];

export function JourneyScreen() {
  const { state, dispatch } = useStore();
  const p = useProjection();
  const percent = Math.round((p?.progress ?? 0) * 100);
  const back = () => dispatch({ type: "navigate", tab: "home" });
  return (
    <div className="min-h-full px-5 pb-7">
      <header className="relative flex items-center justify-center pt-2">
        <button
          onClick={back}
          className="absolute left-0 grid size-9 place-items-center rounded-full hover:bg-navy/5"
          aria-label="Back to home"
        >
          <ChevronLeft className="size-5" />
        </button>
        <h1 className="font-brand text-[22px] text-navy">Your journey</h1>
      </header>
      <div className="wt-journey-scene relative mt-5 h-[210px] overflow-hidden rounded-[22px]">
        <span className="absolute left-5 top-5 text-[27px] opacity-90">☁️</span>
        <span className="absolute right-6 top-7 text-[21px] opacity-80">☁️</span>
        <div className="absolute right-4 top-4 max-w-[146px] rounded-[20px] bg-white/95 p-3 text-center shadow-sm">
          <p className="text-[12px] leading-snug font-extrabold">
            {percent >= 100 ? "We did it, Alex!" : "You're doing great, Alex!"}
          </p>
          <span className="absolute right-5 -bottom-3 text-[#EC6A81]">♥</span>
        </div>
        <div className="absolute bottom-[17px] left-[28px]">
          <RacerSprite
            color={RACER_META.you.color}
            fur={state.kangaroo.fur}
            outfit={state.kangaroo.outfit}
            accessory={state.kangaroo.accessory}
            baby={state.kangaroo.baby}
            className="h-[135px] w-auto"
          />
        </div>
        <div className="absolute right-5 bottom-3 text-[18px]">🌷 ✿ 🌼</div>
        <div className="wt-grass absolute inset-x-0 bottom-0 h-[18px]" />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-navy">Milestones</h2>
        <span className="rounded-full bg-[#EBE8F5] px-2.5 py-1 text-[11px] font-bold text-navy">
          {percent}% saved
        </span>
      </div>
      <div className="relative mt-3">
        <div className="absolute top-7 bottom-9 left-[18px] w-[2px] bg-[#DFE1EB]" />
        {MILESTONES.map((item) => {
          const reached = percent >= item.percent;
          return (
            <div
              key={item.percent}
              className="relative flex min-h-[83px] items-center gap-3.5 border-b border-black/[0.05] py-3 last:border-0"
            >
              <div
                className={`z-10 grid size-9 shrink-0 place-items-center rounded-full border-2 bg-white ${reached ? "border-[#69BE83] text-[#399E5A]" : "border-[#DBDDEA] text-muted"}`}
              >
                {reached ? (
                  item.percent === 100 ? (
                    <Trophy className="size-5 text-[#DDA63B]" />
                  ) : (
                    <Check className="size-5" />
                  )
                ) : (
                  <Flag className="size-4" />
                )}
              </div>
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-xl text-[24px] ${reached ? "bg-[#F4EDFF]" : "bg-[#F2F2F5] grayscale opacity-55"}`}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-extrabold">
                  {item.percent}% · {item.title}
                </p>
                <p className="text-[11px] text-muted">
                  {reached ? "Reached at" : "At"}{" "}
                  {fmtMoney(Math.round(((p?.goal.amountCents ?? 0) * item.percent) / 100), {
                    cents: false,
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 ring-1 ring-black/5">
        <Gift className="size-6 shrink-0 text-navy" />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold">
            {percent >= 100 ? "All milestones reached" : "Next milestone"}
          </p>
          <p className="text-[11px] leading-snug text-muted">
            {percent >= 100
              ? "Well done! Dress your wallaby up to celebrate."
              : `${MILESTONES.find((m) => m.percent > percent)?.title} at ${MILESTONES.find((m) => m.percent > percent)?.percent}%`}
          </p>
        </div>
        <button
          onClick={() => dispatch({ type: "goalView", view: "customise" })}
          className="inline-flex shrink-0 items-center gap-1 text-[13px] text-hero hover:underline"
        >
          Customise <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
