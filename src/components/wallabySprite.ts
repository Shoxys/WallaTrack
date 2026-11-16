/**
 * Pixel-art wallaby sprite sheet: two 16x16 frames (standing, mid-hop) laid
 * side by side. Each character is one pixel:
 *   . empty   b body   d dark fur   l light belly   e eye   n nose   s scarf
 */
export const SPRITE_SIZE = 16;

const STAND = [
  '...........d..d.',
  '...........b..b.',
  '...........bbbb.',
  '..........bbbebb',
  '..........bbbbbn',
  '..........bbbbb.',
  '.........ssss...',
  '.......bbbbbll..',
  '......bbbbbbllb.',
  '.....bbbbbbbll..',
  '....bbbbbbbbbl..',
  '...bbbbbbbbbb...',
  '..dbbbbbbbbb....',
  '.dd...bbb.bbb...',
  'dd....bb...bb...',
  'd.....dddd.dddd.',
];

const HOP = [
  '...........d..d.',
  '...........b..b.',
  '...........bbbb.',
  '..........bbbebb',
  '..........bbbbbn',
  '..........bbbbb.',
  '.........ssss...',
  'd......bbbbbll..',
  'dd....bbbbbbllb.',
  '.dd..bbbbbbbll..',
  '..dbbbbbbbbbbl..',
  '...bbbbbbbbbb...',
  '....bbbbbbbb....',
  '...bbb..bbb.....',
  '..ddd..ddd......',
  '................',
];

export const FRAMES = [STAND, HOP];

export interface WallabyPalette {
  b: string;
  d: string;
  l: string;
  e: string;
  n: string;
  s: string;
}

export const PALETTES: Record<'you' | 'ghost' | 'best' | 'peer' | 'navigator', WallabyPalette> = {
  you: { b: '#DA1710', d: '#99100B', l: '#FACCCB', e: '#1C1C1F', n: '#1C1C1F', s: '#1F1C4F' },
  ghost: { b: '#B9B4D6', d: '#8E88B8', l: '#E6E3F3', e: '#4B4670', n: '#4B4670', s: '#B9B4D6' },
  best: { b: '#E3A008', d: '#A16207', l: '#FDECC0', e: '#1C1C1F', n: '#1C1C1F', s: '#A16207' },
  peer: { b: '#5B7C99', d: '#3B5670', l: '#D5E1EC', e: '#1C1C1F', n: '#1C1C1F', s: '#3B5670' },
  navigator: { b: '#8A6A4F', d: '#5E4532', l: '#EBDCCB', e: '#1C1C1F', n: '#1C1C1F', s: '#DA1710' },
};

export interface Pixel {
  x: number;
  y: number;
  w: number;
  fill: string;
}

/** Sprite sheet as horizontal runs of same-coloured pixels (fewer rects than one per pixel). */
export function spritePixels(palette: WallabyPalette): Pixel[] {
  const out: Pixel[] = [];
  FRAMES.forEach((frame, f) => {
    frame.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        let w = 1;
        while (x + w < row.length && row[x + w] === ch) w++;
        if (ch !== '.') out.push({ x: f * SPRITE_SIZE + x, y, w, fill: palette[ch as keyof WallabyPalette] });
        x += w;
      }
    });
  });
  return out;
}
