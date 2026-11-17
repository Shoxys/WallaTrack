import { useState } from "react";
import { ChevronLeft, Check, Sparkles } from "lucide-react";
import { Navigator, RacerSprite, FUR_SWATCHES } from "@/components/Wallaby";
import { Button, cx } from "@/components/ui";
import { RACER_META } from "@/data/persona";
import { useStore, type Accessory, type FurColour, type Outfit } from "@/state/store";

// Every option is free: nothing is gated by savings progress.
const OUTFITS: { id: Outfit; label: string }[] = [
  { id: "hoodie", label: "Hoodie" },
  { id: "tee", label: "T-shirt" },
  { id: "overalls", label: "Overalls" },
  { id: "cap", label: "Cap" },
];
const ACCESSORIES: { id: Accessory; label: string }[] = [
  { id: "glasses", label: "Glasses" },
  { id: "backpack", label: "Backpack" },
  { id: "cap", label: "Cap" },
  { id: "scarf", label: "Scarf" },
];
const COLLAR = RACER_META.you.color;

export function CustomiseScreen() {
  const { state, dispatch } = useStore();
  const [name, setName] = useState(state.kangaroo.name);
  const [fur, setFur] = useState(state.kangaroo.fur);
  const [outfit, setOutfit] = useState(state.kangaroo.outfit);
  const [accessory, setAccessory] = useState(state.kangaroo.accessory);
  const [baby, setBaby] = useState(state.kangaroo.baby);
  const goBack = () => dispatch({ type: "navigate", tab: "home" });
  const save = () => {
    dispatch({
      type: "setKangaroo",
      profile: { name: name.trim() || "Milo", fur, outfit, accessory, baby },
    });
    goBack();
  };

  return (
    <div className="flex min-h-full flex-col px-5 pb-7">
      <header className="flex items-center justify-center pt-2">
        <button
          onClick={goBack}
          className="absolute left-5 grid size-9 place-items-center rounded-full hover:bg-navy/5"
          aria-label="Back to home"
        >
          <ChevronLeft className="size-5" />
        </button>
        <h1 className="font-brand text-[22px] text-navy">Customise wallaby</h1>
      </header>
      <div className="relative mt-4 flex h-[175px] items-center justify-center overflow-hidden rounded-[23px] bg-[radial-gradient(circle_at_50%_60%,#f0ebff_0%,#f5f5fc_50%,transparent_80%)]">
        <span className="absolute top-9 left-10 text-[#F3C375]">✦</span>
        <Sparkles className="absolute top-12 right-12 size-4 text-[#E4AA64]" />
        <RacerSprite
          color={COLLAR}
          fur={fur}
          outfit={outfit}
          accessory={accessory}
          baby={baby}
          className="h-[150px] w-auto"
        />
        <div className="absolute right-3 bottom-3 flex flex-col items-center rounded-xl bg-white/80 px-2 pt-1.5 pb-1 ring-1 ring-black/5">
          <Navigator fur={fur} outfit={outfit} accessory={accessory} baby={baby} className="w-14" />
          <span className="mt-0.5 text-[10px] font-semibold text-muted">In checks</span>
        </div>
      </div>
      <label className="mt-2 text-[14px] font-extrabold" htmlFor="roo-name">
        Name your wallaby
      </label>
      <div className="relative mt-2">
        <input
          id="roo-name"
          type="text"
          maxLength={12}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 w-full rounded-[5px] border border-line-strong bg-white px-3.5 pr-12 text-[16px] text-ink"
        />
        <span className="absolute right-3 top-3.5 text-[11px] font-medium text-muted">
          {name.length}/12
        </span>
      </div>
      <div className="mt-5">
        <h2 className="text-[14px] font-extrabold">Fur colour</h2>
        <div className="mt-3 flex flex-wrap justify-between gap-2">
          {(Object.keys(FUR_SWATCHES) as FurColour[]).map((id) => (
            <button
              key={id}
              onClick={() => setFur(id)}
              title={FUR_SWATCHES[id].name}
              aria-label={`${FUR_SWATCHES[id].name} fur`}
              aria-pressed={fur === id}
              className={cx(
                "grid size-9 place-items-center rounded-full border-[3px] border-white shadow-[0_1px_4px_#1F1C4F33]",
                fur === id && "outline-2 outline-offset-1 outline-[#312660]",
              )}
              style={{ background: FUR_SWATCHES[id].body }}
            >
              {fur === id && <Check className="size-4 text-white drop-shadow-[0_1px_1px_#333]" />}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[14px] font-extrabold">Outfit</h2>
          <button
            onClick={() => setOutfit("none")}
            className="text-[13px] text-hero hover:underline"
          >
            No outfit
          </button>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {OUTFITS.map((option) => (
            <WardrobeTile
              key={option.id}
              selected={outfit === option.id}
              label={option.label}
              onClick={() => setOutfit(option.id)}
            >
              <RacerSprite
                color={COLLAR}
                fur={fur}
                outfit={option.id}
                className="h-[46px] w-auto"
              />
            </WardrobeTile>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[14px] font-extrabold">Accessories</h2>
          <button
            onClick={() => setAccessory("none")}
            className="text-[13px] text-hero hover:underline"
          >
            Remove
          </button>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {ACCESSORIES.map((option) => (
            <WardrobeTile
              key={option.id}
              selected={accessory === option.id}
              label={option.label}
              onClick={() => setAccessory(option.id)}
            >
              <RacerSprite
                color={COLLAR}
                fur={fur}
                accessory={option.id}
                className="h-[46px] w-auto"
              />
            </WardrobeTile>
          ))}
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-2.5">
        <RacerSprite color={COLLAR} fur={fur} baby className="h-[40px] w-auto shrink-0" />
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-bold">Joey in the pouch</span>
          <span className="block text-[12px] text-muted">A little one along for the race</span>
        </span>
        <input
          type="checkbox"
          checked={baby}
          onChange={() => setBaby((b) => !b)}
          className="peer sr-only"
        />
        <span className="relative box-content h-7 w-12 shrink-0 rounded-full border border-line-strong bg-white transition-colors duration-300 peer-checked:border-navy peer-checked:bg-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-focus after:absolute after:top-0 after:left-0 after:size-7 after:rounded-full after:border after:border-white after:bg-muted after:transition-all after:duration-300 peer-checked:after:left-full peer-checked:after:-translate-x-full peer-checked:after:border-navy peer-checked:after:bg-white" />
      </label>
      <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
        <Button variant="heroSoft" size="lg" onClick={goBack}>
          Cancel
        </Button>
        <Button variant="primary" size="lg" onClick={save}>
          Save
        </Button>
      </div>
    </div>
  );
}

function WardrobeTile({
  children,
  label,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-pressed={selected}
      className={cx(
        "relative flex min-w-0 flex-col items-center justify-center rounded-xl border bg-white px-1 py-2 transition-colors",
        selected
          ? "border-navy bg-navy-faint ring-1 ring-navy ring-inset"
          : "border-line hover:border-navy",
      )}
    >
      {children}
      <span className="mt-1 text-[10px] font-semibold leading-tight">{label}</span>
    </button>
  );
}
