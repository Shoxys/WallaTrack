import { motion } from "motion/react";
import { useMemo } from "react";
import {
  useStore,
  type Accessory,
  type FurColour,
  type KangarooProfile,
  type Outfit,
} from "@/state/store";

type Palette = Record<string, string>;

/** Renders a pixel grid as an SVG, merging horizontal runs of the same colour. */
function PixelGrid({
  rows,
  palette,
  className,
}: {
  rows: string[];
  palette: Palette;
  className?: string;
}) {
  const width = Math.max(...rows.map((r) => r.length));
  const rects = useMemo(() => {
    const out: { x: number; y: number; w: number; fill: string }[] = [];
    rows.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        const fill = palette[ch];
        if (!fill) {
          x++;
          continue;
        }
        let run = 1;
        while (row[x + run] === ch) run++;
        out.push({ x, y, w: run, fill });
        x += run;
      }
    });
    return out;
  }, [rows, palette]);

  return (
    <svg
      viewBox={`0 0 ${width} ${rows.length}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}

/* ---------- Look (fur, outfit, accessory, joey) ---------- */

/** Fur colours. `line` is the outline the Navigator bust draws around the fur. */
export const FUR_SWATCHES: Record<
  FurColour,
  { name: string; body: string; dark: string; light: string; line: string }
> = {
  caramel: { name: "Caramel", body: "#B98052", dark: "#895430", light: "#F4D5A4", line: "#5A3A22" },
  sand: { name: "Sand", body: "#E8C8A2", dark: "#BC946F", light: "#FFF0D8", line: "#7A5B3E" },
  silver: { name: "Silver", body: "#B9B9C2", dark: "#888894", light: "#ECECF1", line: "#55555F" },
  blush: { name: "Blush", body: "#EEB1BD", dark: "#C78798", light: "#FFE4E8", line: "#85505F" },
  cream: { name: "Cream", body: "#F1DFC2", dark: "#C5A981", light: "#FFF2DE", line: "#7E6646" },
  lilac: { name: "Lilac", body: "#C9B5E9", dark: "#9C84CA", light: "#F0E9FA", line: "#5E4A8A" },
};

/** One overlay layer: a fill and a path in sprite-grid units. */
type Shape = [fill: string, d: string];

/** Everything a look can draw over the fur. The "cap" outfit and "cap" accessory share a part. */
type Part = Exclude<Outfit | Accessory, "none"> | "baby";

/**
 * Paint order: clothes, then what's worn over them, then the joey peeking out in front. The cap
 * goes after the glasses so its crown sits over the frame on the racer's small head.
 */
const PART_ORDER: Part[] = [
  "hoodie",
  "tee",
  "overalls",
  "backpack",
  "scarf",
  "glasses",
  "cap",
  "baby",
];

function lookParts(outfit: Outfit, accessory: Accessory, baby: boolean): Part[] {
  return PART_ORDER.filter((p) => p === outfit || p === accessory || (p === "baby" && baby));
}

function LookOverlay({
  parts,
  shapes,
  viewBox,
  className,
}: {
  parts: Part[];
  shapes: Record<Part, Shape[]>;
  viewBox: string;
  className?: string;
}) {
  if (parts.length === 0) return null;
  return (
    <svg viewBox={viewBox} className={className} shapeRendering="crispEdges" aria-hidden="true">
      {parts.flatMap((part) =>
        shapes[part].map(([fill, d], i) => <path key={`${part}-${i}`} fill={fill} d={d} />),
      )}
    </svg>
  );
}

/* ---------- Racer (full body) ---------- */

const RACER_GROUND = [
  "............B.B...",
  "............B.B...",
  "...........BBBB...",
  "...........BBBBB..",
  "...........BBKBBBB",
  "...........BBBBBBK",
  "............BBBB..",
  "...........CCCB...",
  "..........BBBLLB..",
  ".........BBBBLLBB.",
  "........BBBBBLLB.B",
  ".......BBBBBBBLB..",
  "......SBBBBBBBBB..",
  "....SSSBBBBBBBB...",
  "..SSS...BBBBBBBBB.",
  "SSS......SSSSSSSSS",
];

const RACER_AIR = [
  "............B.B...",
  "............B.B...",
  "...........BBBB...",
  "...........BBBBB..",
  "...........BBKBBBB",
  "...........BBBBBBK",
  "............BBBB..",
  "...........CCCB...",
  "..........BBBLLB..",
  ".........BBBBLLBB.",
  "........BBBBBLLB.B",
  ".......BBBBBBBLB..",
  ".....SSBBBBBBBB...",
  "..SSSS.BBBBBBB....",
  "SSS...BBBBBB......",
  ".....SSSSS........",
];

/**
 * Look overlays on the 18x16 racer grid, drawn once over both hop frames. The frames share rows
 * 0-11 and differ only along the tail, haunch and feet below that, so every part stays on cells
 * that look the same in the ground and air frames. Eye (13,4) and nose (17,5) stay uncovered.
 */
const RACER_PARTS: Record<Part, Shape[]> = {
  // Hood bunched behind the neck, body over the torso to the hips, pocket and drawstring.
  hoodie: [
    [
      "#8970CE",
      "M12 8h3v1h-3zM10 9h2v3h-2zM13 9h3v1h-3zM9 10h1v3h-1zM13 10h2v2h-2zM8 11h1v1h-1zM12 11h1v1h-1zM10 12h1v1h-1zM13 12h1v1h-1z",
    ],
    ["#6F56B7", "M10 7h1v2h-1zM11 8h1v1h-1zM9 9h1v1h-1zM8 10h1v1h-1zM7 11h1v2h-1zM8 12h1v1h-1z"],
    ["#C4B4EE", "M12 9h1v2h-1zM11 12h2v1h-2z"],
  ],
  // Crew neck under the collar, short sleeve over the arm at (16,9).
  tee: [
    ["#6B83C5", "M11 8h5v4h-5zM9 9h2v3h-2zM8 11h1v1h-1z"],
    ["#4B639E", "M16 9h1v1h-1zM8 10h1v1h-1zM7 11h1v1h-1z"],
  ],
  // Strap over the shoulder and down the back, buttoned bib on the chest, trousers on the hips.
  overalls: [
    [
      "#667593",
      "M12 8h1v1h-1zM11 9h1v1h-1zM14 9h2v2h-2zM10 10h1v4h-1zM13 10h1v4h-1zM7 11h3v3h-3zM11 11h2v3h-2zM14 11h1v2h-1z",
    ],
    ["#A5B2CD", "M13 9h1v1h-1z"],
  ],
  // Pack on the upper back, poking out behind it, with a top handle and a pocket.
  backpack: [
    ["#4B5173", "M11 8h1v1h-1zM7 9h4v2h-4zM7 11h1v2h-1zM10 11h1v2h-1zM8 12h2v1h-2z"],
    ["#99A0BE", "M8 8h2v1h-2zM8 11h2v1h-2z"],
  ],
  // Wrapped over the collar, one end trailing behind and one hanging down the chest.
  scarf: [["#A688EC", "M10 7h5v1h-5zM9 8h1v1h-1zM13 8h1v2h-1z"]],
  // Frame round the eye at (13,4), arm back towards the ear, glint in front of the pupil.
  glasses: [
    ["#24213A", "M13 3h2v1h-2zM11 4h2v1h-2zM15 4h1v1h-1zM13 5h2v1h-2z"],
    ["#F2EBFF", "M14 4h1v1h-1z"],
  ],
  // Crown on the head below the ear tips, brim forward above the eye, button on top.
  cap: [
    ["#598354", "M11 2h4v2h-4z"],
    ["#355C39", "M15 3h3v1h-3z"],
    ["#FCE5A5", "M13 1h1v1h-1z"],
  ],
  // Joey in the belly pouch: ears, light face and eye above the pouch lip on row 11.
  baby: [
    ["#A77348", "M13 8h1v4h-1zM15 8h1v1h-1zM12 11h1v1h-1zM14 11h2v1h-2z"],
    ["#EDD19F", "M14 9h2v1h-2zM15 10h1v1h-1z"],
    ["#262032", "M14 10h1v1h-1z"],
  ],
};

const FUR: Palette = { B: "#B07A4A", S: "#8A5A33", L: "#EBCB9B", K: "#141414" };
const GHOST_FUR: Palette = { B: "#CEC5FF", S: "#A99DEB", L: "#F1EEFF", K: "#4B3F8F" };

export function RacerSprite({
  color,
  ghost = false,
  hopping = false,
  className = "h-9 w-auto",
  delay = 0,
  fur = "caramel",
  outfit = "none",
  accessory = "none",
  baby = false,
}: {
  color: string;
  ghost?: boolean;
  hopping?: boolean;
  className?: string;
  /** Negative animation delay so racers hop out of sync */
  delay?: number;
  fur?: FurColour;
  outfit?: Outfit;
  accessory?: Accessory;
  baby?: boolean;
}) {
  const swatch = FUR_SWATCHES[fur] ?? FUR_SWATCHES.caramel;
  const palette = useMemo(
    () => ({
      ...(ghost ? GHOST_FUR : { ...FUR, B: swatch.body, S: swatch.dark, L: swatch.light }),
      C: color,
    }),
    [color, ghost, swatch],
  );
  const parts = ghost ? [] : lookParts(outfit, accessory, baby);
  const style = { animationDelay: `${delay}ms` };
  return (
    <span
      className={`wt-racer relative inline-block ${hopping ? "is-hopping" : ""} ${ghost ? "opacity-80" : ""}`}
      style={style}
    >
      <PixelGrid
        rows={RACER_GROUND}
        palette={palette}
        className={`wt-frame-a block ${className}`}
      />
      <PixelGrid
        rows={RACER_AIR}
        palette={palette}
        className={`wt-frame-b absolute inset-0 block ${className}`}
      />
      <LookOverlay
        parts={parts}
        shapes={RACER_PARTS}
        viewBox="0 0 18 16"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      />
    </span>
  );
}

/* ---------- Navigator (bust) ---------- */

const BUST = [
  "...DD...DD.............",
  "..DLD..DLLD............",
  "..DLBD.DLLBD...........",
  "..DLBD.DLLBD...........",
  "..DBBD.DBLBD...........",
  "..DBBBDDBBBD...........",
  "..DBBBBBBBBBDDD........",
  ".DBBBBBBBBBBBBBDDD.....",
  ".DBBBBBBBBBBBBBBBBDD...",
  ".DBBBBBBBBBBBBBBBBBBKK.",
  ".DBBBBBBBBBBBBBBBBBBKK.",
  ".DSBBBBBBBBBBBBBBBBDD..",
  "..DSBBBBBLLLLLLLLDD....",
  "...DSBBBBBLLLLDDD......",
  "....DSBBBBDDDD.........",
  "....DSBBBBD............",
];

/**
 * Look overlays on the 23x16 bust grid. They leave the eye cells (11,8)-(11,9) uncovered and are
 * drawn under the eye layers, so moods and blinks always show.
 */
const BUST_PARTS: Record<Part, Shape[]> = {
  // Hood bunched behind the neck, hoodie across the shoulders with two drawstrings.
  hoodie: [
    ["#8970CE", "M4 14h9v1h-9zM2 15h6v1h-6zM9 15h1v1h-1zM11 15h4v1h-4z"],
    ["#6F56B7", "M0 11h2v5h-2zM2 12h1v3h-1zM3 13h1v2h-1z"],
    ["#C4B4EE", "M8 15h1v1h-1zM10 15h1v1h-1z"],
  ],
  // Crew collar round the neck, tee across the shoulders.
  tee: [
    ["#6B83C5", "M2 15h13v1h-13z"],
    ["#4B639E", "M4 14h6v1h-6z"],
  ],
  // Strap over the shoulder to a button, bib in front of the chest.
  overalls: [
    ["#667593", "M6 13h1v2h-1zM9 14h5v2h-5zM7 15h2v1h-2z"],
    ["#A5B2CD", "M6 15h1v1h-1zM14 15h1v1h-1z"],
  ],
  // Pack behind the shoulders, strap and buckle over the near one.
  backpack: [
    ["#4B5173", "M0 11h1v5h-1zM1 12h1v4h-1zM2 13h1v3h-1zM3 14h1v2h-1zM6 14h1v2h-1zM5 15h1v1h-1z"],
    ["#99A0BE", "M5 14h1v1h-1z"],
  ],
  // Wrapped round the neck with one end trailing behind.
  scarf: [["#A688EC", "M1 13h13v1h-13zM0 14h2v1h-2zM4 14h9v1h-9zM0 15h1v1h-1z"]],
  // Ring round the eye, arm back towards the ear, glint at the top front of the lens.
  glasses: [
    ["#24213A", "M10 7h3v1h-3zM5 8h4v1h-4zM13 8h1v2h-1zM9 9h1v1h-1zM10 10h3v1h-3z"],
    ["#F2EBFF", "M12 8h1v1h-1z"],
  ],
  // Crown in front of the near ear, brim forward above the eye. Leaves (10,6), (11,6), (11,7) and (12,7) clear for the worried brows and the look-up eye.
  cap: [
    ["#598354", "M11 4h3v2h-3zM10 5h1v1h-1zM14 5h2v2h-2zM12 6h2v1h-2zM16 6h1v1h-1z"],
    ["#355C39", "M13 7h8v1h-8z"],
    ["#FCE5A5", "M12 3h1v1h-1z"],
  ],
  // Joey peeking up under the snout, ears against the jaw.
  baby: [
    [
      "#A77348",
      "M14 12h1v4h-1zM16 12h1v2h-1zM15 13h1v3h-1zM17 13h1v3h-1zM13 14h1v2h-1zM16 15h1v1h-1z",
    ],
    ["#EDD19F", "M18 14h1v2h-1zM19 15h1v1h-1z"],
    ["#262032", "M16 14h1v1h-1z"],
  ],
};

const BUST_PALETTE: Palette = {
  D: "#5A3A22",
  B: "#B07A4A",
  S: "#8A5A33",
  L: "#EBCB9B",
  K: "#141414",
  P: "#E58A7A",
  E: "#141414",
};

function overlay(points: [number, number][], ch = "E"): string[] {
  const grid = BUST.map((r) => r.replace(/./g, ".").split(""));
  points.forEach(([x, y]) => {
    grid[y][x] = ch;
  });
  return grid.map((r) => r.join(""));
}

function merge(...layers: string[][]): string[] {
  return layers[0].map((_, y) =>
    layers[0][y]
      .split("")
      .map((_, x) => {
        for (let i = layers.length - 1; i >= 0; i--) {
          if (layers[i][y][x] !== ".") return layers[i][y][x];
        }
        return ".";
      })
      .join(""),
  );
}

const EYE_OPEN = overlay([
  [11, 8],
  [11, 9],
]);
const EYE_CLOSED = overlay([
  [10, 9],
  [11, 9],
  [12, 9],
]);
const EYE_UP = overlay([
  [11, 7],
  [11, 8],
]);
const EYE_HAPPY = merge(
  overlay([
    [10, 9],
    [11, 8],
    [12, 9],
  ]),
  overlay(
    [
      [13, 11],
      [14, 11],
    ],
    "P",
  ),
);
const EYE_WORRIED = merge(
  EYE_OPEN,
  overlay(
    [
      [10, 6],
      [11, 6],
      [12, 7],
    ],
    "D",
  ),
);

export type NavigatorMood = "idle" | "thinking" | "happy" | "worried" | "knocked";

/**
 * The Navigator bust. Look props override the customer's saved wallaby; any left out fall back
 * to `state.kangaroo`, so plain `<Navigator mood=… />` always shows their own wallaby.
 */
export function Navigator({
  mood = "idle",
  className = "w-24",
  fur,
  outfit,
  accessory,
  baby,
}: {
  mood?: NavigatorMood;
  className?: string;
  fur?: FurColour;
  outfit?: Outfit;
  accessory?: Accessory;
  baby?: boolean;
}) {
  // Typed loosely so profiles saved before `baby` existed still read cleanly.
  const saved: KangarooProfile & { baby?: boolean } = useStore().state.kangaroo;
  const swatch = FUR_SWATCHES[fur ?? saved.fur] ?? FUR_SWATCHES.caramel;
  const palette = useMemo(
    () => ({ ...BUST_PALETTE, D: swatch.line, B: swatch.body, S: swatch.dark, L: swatch.light }),
    [swatch],
  );
  const parts = lookParts(
    outfit ?? saved.outfit,
    accessory ?? saved.accessory,
    baby ?? saved.baby ?? false,
  );
  const name = saved.name?.trim();

  const eyes =
    mood === "happy"
      ? EYE_HAPPY
      : mood === "worried" || mood === "knocked"
        ? EYE_WORRIED
        : mood === "thinking"
          ? EYE_UP
          : EYE_OPEN;
  const blinks = mood === "idle" || mood === "worried";
  const moodLabel = mood === "knocked" ? "knocked back" : mood;

  return (
    <motion.div
      key={mood}
      className={`wt-nav wt-nav--${mood} relative ${className}`}
      initial={mood === "knocked" ? { x: 0, rotate: 0 } : false}
      animate={
        mood === "knocked"
          ? { x: [0, -18, -10, -12], rotate: [0, -16, 4, 0], y: [0, -6, 0, 0] }
          : undefined
      }
      transition={mood === "knocked" ? { duration: 0.9, times: [0, 0.35, 0.7, 1] } : undefined}
      role="img"
      aria-label={`${name ? `${name}, your` : "Your"} Navigator wallaby, ${moodLabel}`}
    >
      <div className="wt-nav-body relative">
        <PixelGrid rows={BUST} palette={palette} className="block h-auto w-full" />
        <LookOverlay
          parts={parts}
          shapes={BUST_PARTS}
          viewBox="0 0 23 16"
          className="absolute inset-0 block h-auto w-full"
        />
        <PixelGrid
          rows={eyes}
          palette={palette}
          className={`absolute inset-0 block h-auto w-full ${blinks ? "wt-eye-open" : ""}`}
        />
        {blinks && (
          <PixelGrid
            rows={EYE_CLOSED}
            palette={palette}
            className="wt-eye-closed absolute inset-0 block h-auto w-full"
          />
        )}
      </div>
      {mood === "thinking" && (
        <span className="absolute -top-1 right-0 flex gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm border border-line">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="wt-dot block size-1.5 rounded-full bg-[#1F1C4F]"
              style={{ animationDelay: `${i * 160}ms` }}
            />
          ))}
        </span>
      )}
    </motion.div>
  );
}

/** Small racer head used as a brand mark. */
export function WallabyMark({ className = "h-6 w-auto" }: { className?: string }) {
  return <PixelGrid rows={merge(BUST, EYE_OPEN)} palette={BUST_PALETTE} className={className} />;
}
