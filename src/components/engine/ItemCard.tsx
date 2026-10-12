import { useEffect, useState } from "react";
import type { ContentItem } from "@/lib/content";
import { ItemPicture } from "./Picture";
import { cn } from "@/lib/utils";

export const HIDDEN_TILES = 12;

/** Points for a hidden-picture item: fewer boxes opened = more points. */
export const hiddenPoints = (opened: number) => (opened <= 3 ? 3 : opened <= 6 ? 2 : 1);

function banner(item: ContentItem) {
  if (item.kind === "T") return "Say it in English! 🇺🇸";
  if (item.kind === "H") return "What's hidden? 🔍 Open a box!";
  if (item.kind === "F") return "Choose the right word! ✏️";
  return "Answer in a full sentence!";
}

export function HiddenPicture({ item, showAll, onReveal }: { item: ContentItem; showAll: boolean; onReveal?: ((opened: number) => void) | undefined }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const reveal = (i: number) => {
    if (open.has(i) || showAll) return;
    const n = new Set(open).add(i);
    setOpen(n);
    onReveal?.(n.size);
  };
  return (
    <div className="relative grid min-h-[260px] min-w-[460px] place-items-center rounded-3xl bg-card p-4">
      <ItemPicture item={item} />
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
        {Array.from({ length: HIDDEN_TILES }, (_, i) => {
          const isOpen = showAll || open.has(i);
          return (
            <div
              key={i}
              className={cn(
                // Opaque cell: hides the picture fully, gaps included, until opened
                "bg-card p-1.5 transition-opacity duration-300",
                isOpen && "pointer-events-none opacity-0",
              )}
            >
              <button
                onClick={() => reveal(i)}
                className="h-full w-full rounded-xl border-4 border-border bg-primary font-display text-4xl font-bold text-primary-foreground transition-all duration-300 hover:brightness-110"
              >
                {i + 1}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FillBlank({ item, showAnswer }: { item: ContentItem; showAnswer: boolean }) {
  const [chosen, setChosen] = useState<string | null>(null);
  useEffect(() => { if (!showAnswer) setChosen(null); }, [showAnswer]);
  const reveal = showAnswer || chosen !== null;
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {item.options!.map((o, i) => {
        const right = o === item.blank;
        return (
          <button
            key={o}
            onClick={() => setChosen(o)}
            className={cn(
              "rounded-2xl border-4 border-border bg-secondary px-8 py-3 text-4xl font-bold transition-colors",
              reveal && right && "bg-success text-primary-foreground",
              chosen === o && !right && "bg-destructive text-primary-foreground",
            )}
          >
            {"abc"[i]}) {o}
          </button>
        );
      })}
    </div>
  );
}

export function ItemCard({ item, showAnswer, compact, onReveal }: { item: ContentItem; showAnswer: boolean; compact?: boolean; onReveal?: (opened: number) => void }) {
  return (
    <div className={cn("panel flex h-full animate-pop flex-col items-center justify-center gap-5 p-8 text-center", compact ? "p-6" : "min-h-80")}>
      <div className="rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground">{banner(item)}</div>
      {item.hidden ? <HiddenPicture item={item} showAll={showAnswer} onReveal={onReveal} /> : <ItemPicture item={item} />}
      <div className="font-display text-[56px] font-bold leading-tight text-stroke xl:text-7xl">{item.prompt}</div>
      {item.options && <FillBlank item={item} showAnswer={showAnswer} />}
      <div className={cn("min-h-16 text-4xl font-bold text-success transition-all duration-500", showAnswer ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
        {showAnswer && item.answers.map((a, i) => <div key={i}>💬 {a}</div>)}
      </div>
    </div>
  );
}
