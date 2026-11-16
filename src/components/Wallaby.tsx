import { PALETTES, SPRITE_SIZE, spritePixels } from './wallabySprite';

interface Props {
  variant: keyof typeof PALETTES;
  /** Size of one sprite pixel in CSS pixels. */
  scale?: number;
  hopping?: boolean;
}

/** One frame of the two-frame sprite sheet is visible; CSS steps between them. */
export function Wallaby({ variant, scale = 2, hopping = false }: Props) {
  const size = SPRITE_SIZE * scale;
  return (
    <span className={`sprite${hopping ? ' hopping' : ''}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size * 2} height={size} viewBox={`0 0 ${SPRITE_SIZE * 2} ${SPRITE_SIZE}`} shapeRendering="crispEdges">
        {spritePixels(PALETTES[variant]).map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width={p.w} height={1} fill={p.fill} />
        ))}
      </svg>
    </span>
  );
}
