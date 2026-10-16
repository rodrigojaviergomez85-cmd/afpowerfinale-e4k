import { useEffect, useRef, useState } from "react";
import type { ContentItem } from "@/lib/content";
import { ItemPicture } from "./Picture";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const HIDDEN_TILES = 12;

/** Points for a hidden-picture item: fewer boxes opened = more points. */
export const hiddenPoints = (opened: number) => (opened <= 3 ? 3 : opened <= 6 ? 2 : 1);

function banner(item: ContentItem) {
  if (item.kind === "T") return "Say it in English! 🇺🇸";
  if (item.kind === "H") return "What's hidden? 🔍 Open a box!";
  if (item.kind === "F") return "Choose the right word! ✏️";
  if (item.kind === "M") return "🔍 Find the mistake!";
  return "Answer in a full sentence!";
}

export function HiddenPicture({ item, showAll, onReveal, auto = false, paused = false }: { item: ContentItem; showAll: boolean; onReveal?: ((opened: number) => void) | undefined; auto?: boolean | undefined; paused?: boolean | undefined }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const openRef = useRef(open);
  openRef.current = open;
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;
  const reveal = (i: number) => {
    if (open.has(i) || showAll) return;
    const n = new Set(open).add(i);
    setOpen(n);
    onReveal?.(n.size);
  };
  // Mission mode: one box opens by itself every 2 seconds.
  useEffect(() => {
    if (!auto || showAll || paused) return;
    const id = setInterval(() => {
      const closed = Array.from({ length: HIDDEN_TILES }, (_, i) => i).filter((i) => !openRef.current.has(i));
      if (!closed.length) return;
      const pick = closed[Math.floor(Math.random() * closed.length)];
      if (pick === undefined) return;
      const n = new Set(openRef.current).add(pick);
      setOpen(n);
      onRevealRef.current?.(n.size);
    }, 2000);
    return () => clearInterval(id);
  }, [auto, showAll, paused]);
  return (
    <div className="hidden-picture flex flex-col items-center gap-2">
      <div className="hidden-board relative h-[230px] w-[580px] overflow-hidden rounded-3xl bg-card">
        {/* One stable picture filling the board */}
        <div className="pic-wrap absolute inset-0 grid place-items-center">
          <ItemPicture item={item} big />
        </div>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
          {Array.from({ length: HIDDEN_TILES }, (_, i) => {
            const isOpen = showAll || open.has(i);
            if (isOpen) return <div key={i} aria-hidden className="pointer-events-none" />;
            return (
              <div key={i} className="bg-card p-1">
                <Button
                  onClick={() => reveal(i)}
                  className="h-full w-full rounded-xl border-4 border-border bg-primary font-display text-4xl font-bold text-primary-foreground hover:brightness-110"
                >
                  {i + 1}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-xl font-bold text-muted-foreground">{open.size} / {HIDDEN_TILES} boxes opened{auto && !showAll && " · opening by itself…"}</div>
    </div>
  );
}

function MistakeOptions({ item, showAnswer }: { item: ContentItem; showAnswer: boolean }) {
  return (
    <div className="item-options flex flex-wrap justify-center gap-4">
      {item.options?.map((o, i) => (
        <div key={o + i} className={cn("rounded-2xl border-4 border-border bg-secondary px-8 py-3 text-4xl font-bold transition-colors", showAnswer && o === item.blank && "bg-success text-primary-foreground")}>
          {"ABC"[i]}) {o}
        </div>
      ))}
    </div>
  );
}

function FillBlank({ item, showAnswer }: { item: ContentItem; showAnswer: boolean }) {
  const [chosen, setChosen] = useState<string | null>(null);
  useEffect(() => { if (!showAnswer) setChosen(null); }, [showAnswer]);
  const reveal = showAnswer || chosen !== null;
  return (
    <div className="item-options flex flex-wrap justify-center gap-4">
      {item.options?.map((o, i) => {
        const right = o === item.blank;
        return (
          <Button
            key={o}
            variant="secondary"
            onClick={() => setChosen(o)}
            className={cn(
              "rounded-2xl border-4 border-border bg-secondary px-8 py-3 text-4xl font-bold transition-colors",
              reveal && right && "bg-success text-primary-foreground",
              chosen === o && !right && "bg-destructive text-primary-foreground",
            )}
          >
            {"abc"[i]}) {o}
          </Button>
        );
      })}
    </div>
  );
}

export function ItemCard({ item, showAnswer, compact, onReveal, autoReveal, paused, hint = false }: { item: ContentItem; showAnswer: boolean; compact?: boolean; onReveal?: (opened: number) => void; autoReveal?: boolean; paused?: boolean; hint?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    let frame = 0;
    const fit = () => {
      cancelAnimationFrame(frame);
      card.style.setProperty("--card-content-scale", "1");
      let scale = 1;
      const measure = () => {
        const bounds = card.getBoundingClientRect();
        const children = Array.from(card.children).filter((child) => child.getBoundingClientRect().height > 0);
        const overflow = children.some((child) => {
          const rect = child.getBoundingClientRect();
          return rect.top < bounds.top + 4 || rect.bottom > bounds.bottom - 4 || rect.left < bounds.left + 4 || rect.right > bounds.right - 4;
        });
        if (overflow && scale > .4) {
          scale = Math.max(.4, scale * .92);
          card.style.setProperty("--card-content-scale", String(scale));
          frame = requestAnimationFrame(measure);
        }
      };
      frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(fit);
    observer.observe(card);
    fit();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [item, showAnswer, hint]);
  return (
    <div ref={cardRef} data-kind={item.kind} className={cn("fit-card panel flex h-full w-full min-h-0 animate-pop flex-col items-center justify-center gap-5 p-8 text-center", compact ? "p-6" : "min-h-80")}>
      <div className="banner-pill rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground">{autoReveal && item.kind === "H" ? "What's hidden? 🔍 Say the word!" : banner(item)}</div>
      {item.hidden ? <HiddenPicture item={item} showAll={showAnswer} onReveal={onReveal} auto={autoReveal} paused={paused} /> : <div className="item-picture pic-wrap"><ItemPicture item={item} /></div>}
      {!item.hidden && <div className="item-prompt font-display text-[56px] font-bold leading-tight text-stroke xl:text-7xl">
        {item.parts ? item.parts.map((p, i) => (p.wrong ? <span key={i} className="mistake-word" data-hint={hint || showAnswer}>{p.text}</span> : <span key={i}>{p.text}</span>)) : item.prompt}
      </div>}
      {item.kind === "M" ? <MistakeOptions item={item} showAnswer={showAnswer} /> : item.options && <FillBlank item={item} showAnswer={showAnswer} />}
      <div className={cn("item-answer min-h-16 text-4xl font-bold text-success transition-all duration-500", showAnswer ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
        {showAnswer && item.answers.map((a, i) => <div key={i}>💬 {a}</div>)}
      </div>
    </div>
  );
}
