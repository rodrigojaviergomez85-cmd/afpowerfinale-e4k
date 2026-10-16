import { drawMistakes } from "@/lib/content";

const sel = (level: number, week: number, day: number) => ({ course: "Kids Super Intensivo", level, week, day });
for (const [lv, wk, dy] of [[0, 1, 1], [0, 1, 2], [0, 1, 3], [0, 1, 4], [3, 1, 1], [5, 1, 1], [2, 4, 1]] as const) {
  const r = drawMistakes(sel(lv, wk, dy), 10);
  const fromDay = r.items.filter((i) => i.week === wk && i.day === dy && i.id.startsWith(`l${lv}`)).length;
  console.log(`L${lv} W${wk} D${dy} -> ${r.items.length} cards (target 10) | fresh from this day: ${fromDay} | unique ids: ${new Set(r.items.map((i) => i.id)).size} | review: ${r.review}`);
}
const first = drawMistakes(sel(0, 1, 1), 8);
console.log("sample:", first.items.map((i) => i.prompt).join(" | "));
