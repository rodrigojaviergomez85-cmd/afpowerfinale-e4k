import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/content";
import { drawItems, drawMistakes } from "./content";

const level = COURSES.find((c) => c.name === "Kids Super Intensivo")?.levels.find((l) => l.level === 8);

describe("uploaded Level 8 curriculum", () => {
  it("preserves every supplied day, ordered card, answer and vocabulary entry exactly", () => {
    expect(createHash("sha256").update(JSON.stringify(level)).digest("hex")).toBe("d1657f3584e5cc9851a3bd228d08e9c25c38cf561cafb4da4f373d5e16a9dc91");
  });

  it("contains eight weeks with five days of 20 general cards and two separate mistakes", () => {
    expect(level?.weeks.map((w) => w.week)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    for (const week of level?.weeks ?? []) {
      expect(week.days.map((d) => d.day)).toEqual([1, 2, 3, 4, 5]);
      for (const day of week.days) {
        expect(day.lines).toHaveLength(20);
        expect(day.mistakes).toHaveLength(2);
        expect(day.lines.some((line) => line.startsWith("M || "))).toBe(false);
      }
    }
    expect(level?.vocab.map((v) => v.week)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("deals Level 8 general cards and reaches six Detective clues without mixing mistake cards into other games", () => {
    const selection = { course: "Kids Super Intensivo", level: 8, week: 1, day: 1 };
    const general = drawItems(selection, 20, "mix").items;
    expect(general).toHaveLength(20);
    expect(general.every((item) => item.kind !== "M")).toBe(true);
    expect(general.find((item) => item.prompt === "My dad is ____ than my mom.")?.options?.slice().sort()).toEqual(["more tall", "tall", "taller"]);
    const mistakes = drawMistakes(selection, 6).items;
    expect(mistakes).toHaveLength(6);
    expect(mistakes.every((item) => item.kind === "M")).toBe(true);
  });
});