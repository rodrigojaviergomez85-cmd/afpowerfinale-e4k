import { useEffect, useRef, useState } from "react";
import { splitHint, type ContentItem } from "@/lib/content";
import { FlagText, ItemPicture } from "./Picture";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** Helper pill per task type; null when the question speaks for itself. */
function banner(item: ContentItem): string | null {
  if (item.kind === "T") return "Say it in English";
  if (item.kind === "H") return null; // the category prompt sits above the cover instead
  if (item.kind === "F") return null; // the gapped sentence is the instruction
  if (item.kind === "M") return "🔍 Find the mistake!";
  // Q/S/E: a hint the coach wrote into the question is shown up here; spelling,
  // letters and greetings need no helper; everything else asks for English.
  const { hint } = splitHint(item.prompt);
  if (hint) return hint;
  if (/¿|spell|letter|good (morning|afternoon|evening|night)|what is your name|where are you from|how old are you/i.test(item.prompt)) return null;
  return "Answer in English";
}

const ES_GUESS: Record<string, string> = { letra: "letter", color: "color", comida: "food", fruta: "fruit" };

/** Short "Guess the …!" title for picture-guess cards (curriculum text stays untouched). */
export function guessTitle(prompt: string): string {
  const es = prompt.match(/Encuentra (?:la|el) (\w+)/i);
  if (es) return `Guess the ${ES_GUESS[es[1]!.toLowerCase()] ?? "word"}!`;
  const what = prompt.match(/^What (.+?) is hidden\?$/i);
  if (what) return `Guess the ${what[1]}!`;
  return prompt.replace(/\bhidden\s+/i, "");
}

/** Picture-guess card: the picture is fully visible so turns stay fast. */
export function HiddenPicture({ item }: { item: ContentItem; showAll?: boolean; onReveal?: unknown; auto?: boolean; paused?: boolean }) {
  return (
    <div className="hidden-picture flex flex-col items-center gap-3">
      <div className="banner-pill rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground"><FlagText text={guessTitle(item.prompt)} /></div>
      <div className="item-picture pic-wrap"><ItemPicture item={item} big /></div>
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
      {banner(item) && <div className="banner-pill rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground"><FlagText text={banner(item)!} /></div>}
      {item.hidden ? <HiddenPicture item={item} /> : <div className="item-picture pic-wrap"><ItemPicture item={item} /></div>}
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
