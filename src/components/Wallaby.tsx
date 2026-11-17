import { motion } from "motion/react";
import { useMemo } from "react";

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

const FUR: Palette = { B: "#B07A4A", S: "#8A5A33", L: "#EBCB9B", K: "#141414" };
const GHOST_FUR: Palette = { B: "#CEC5FF", S: "#A99DEB", L: "#F1EEFF", K: "#4B3F8F" };

export function RacerSprite({
  color,
  ghost = false,
  hopping = false,
  className = "h-9 w-auto",
  delay = 0,
}: {
  color: string;
  ghost?: boolean;
  hopping?: boolean;
  className?: string;
  /** Negative animation delay so racers hop out of sync */
  delay?: number;
}) {
  const palette = useMemo(() => ({ ...(ghost ? GHOST_FUR : FUR), C: color }), [color, ghost]);
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

export function Navigator({
  mood = "idle",
  className = "w-24",
}: {
  mood?: NavigatorMood;
  className?: string;
}) {
  const eyes =
    mood === "happy"
      ? EYE_HAPPY
      : mood === "worried" || mood === "knocked"
        ? EYE_WORRIED
        : mood === "thinking"
          ? EYE_UP
          : EYE_OPEN;
  const blinks = mood === "idle" || mood === "worried";

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
      aria-label={`Navigator wallaby, ${mood === "knocked" ? "knocked back" : mood}`}
    >
      <div className="wt-nav-body relative">
        <PixelGrid rows={BUST} palette={BUST_PALETTE} className="block h-auto w-full" />
        <PixelGrid
          rows={eyes}
          palette={BUST_PALETTE}
          className={`absolute inset-0 block h-auto w-full ${blinks ? "wt-eye-open" : ""}`}
        />
        {blinks && (
          <PixelGrid
            rows={EYE_CLOSED}
            palette={BUST_PALETTE}
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
