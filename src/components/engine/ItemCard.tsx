import type { ContentItem } from "@/lib/content";
import { ItemPicture } from "./Picture";
import { cn } from "@/lib/utils";

export function ItemCard({ item, showAnswer, compact }: { item: ContentItem; showAnswer: boolean; compact?: boolean }) {
  const isT = item.kind === "T";
  return (
    <div className={cn("panel flex h-full animate-pop flex-col items-center justify-center gap-5 p-8 text-center", !compact && "min-h-80")}>
      <div className="rounded-full bg-primary px-6 py-2 text-3xl font-bold text-primary-foreground">
        {isT ? "Say it in English! 🇺🇸" : "Answer in a full sentence!"}
      </div>
      <ItemPicture item={item} />
      <div className="font-display text-[56px] font-bold leading-tight text-stroke xl:text-7xl">{item.prompt}</div>
      <div className={cn("min-h-16 text-4xl font-bold text-success transition-all duration-500", showAnswer ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
        {showAnswer && item.answers.map((a, i) => <div key={i}>💬 {a}</div>)}
      </div>
    </div>
  );
}
