import { useMemo } from "react";
import type { ContentItem, ShapeSpec } from "@/lib/content";
import { SHAPE_COLORS, shuffle } from "@/lib/content";

const STAR = "50,5 61,38 96,38 68,59 78,93 50,72 22,93 32,59 4,38 39,38";
const HEART =
  "M50 88 C20 66 5 48 5 30 C5 15 17 5 30 5 C40 5 47 11 50 18 C53 11 60 5 70 5 C83 5 95 15 95 30 C95 48 80 66 50 88 Z";

function Shape({ shape, color, size }: { shape: string; color: string; size: number }) {
  const fill = `var(--shape-${color})`;
  const common = {
    fill,
    stroke: "var(--shape-outline)",
    strokeWidth: 6,
    strokeLinejoin: "round" as const,
  };
  let vb = "0 0 100 100";
  let w = size;
  let el: React.ReactNode;
  switch (shape) {
    case "circle":
      el = <circle cx="50" cy="50" r="44" {...common} />;
      break;
    case "square":
      el = <rect x="6" y="6" width="88" height="88" rx="4" {...common} />;
      break;
    case "rectangle":
      vb = "0 0 180 100";
      w = size * 1.8;
      el = <rect x="6" y="14" width="168" height="72" rx="4" {...common} />;
      break;
    case "oval":
      vb = "0 0 180 100";
      w = size * 1.8;
      el = <ellipse cx="90" cy="50" rx="84" ry="40" {...common} />;
      break;
    case "triangle":
      el = <polygon points="50,6 95,92 5,92" {...common} />;
      break;
    case "star":
      el = <polygon points={STAR} {...common} />;
      break;
    case "heart":
      el = <path d={HEART} {...common} />;
      break;
    default:
      el = <circle cx="50" cy="50" r="44" {...common} />;
  }
  return (
    <svg viewBox={vb} width={w} height={size} aria-label={`${color} ${shape}`}>
      {el}
    </svg>
  );
}

export function ShapePicture({ specs, seed }: { specs: ShapeSpec[]; seed: string }) {
  const list = useMemo(() => {
    const palette = shuffle(SHAPE_COLORS);
    let k = 0;
    return specs.flatMap((s) =>
      Array.from({ length: s.count }, () => ({
        shape: s.shape,
        color: s.color ?? palette[k++ % palette.length]!,
      })),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed]);
  const size = list.length > 6 ? 84 : list.length > 3 ? 100 : 130;
  return (
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-5">
      {list.map((s, i) => (
        <Shape key={i} shape={s.shape} color={s.color} size={size} />
      ))}
    </div>
  );
}

export function ItemPicture({ item }: { item: ContentItem }) {
  if (item.pictureChoices?.length)
    return (
      <div className="profession-choices" role="group" aria-label="Profession ideas">
        {item.pictureChoices.map((choice) => (
          <div className="profession-choice" key={choice.label}>
            <span aria-hidden="true">{choice.emoji}</span>
            <b>{choice.label}</b>
          </div>
        ))}
      </div>
    );
  if (item.shapes) return <ShapePicture specs={item.shapes} seed={item.id} />;
  if (item.emoji)
    return (
      <div className="leading-none" style={{ fontSize: 160 }}>
        {item.emoji}
      </div>
    );
  return null;
}
