import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/content";
import { drawItems, drawMistakes } from "./content";

const level = COURSES.find((c) => c.name === "Kids Super Intensivo")?.levels.find((l) => l.level === 10);

describe("uploaded Level 10 curriculum", () => {

  it("contains eight weeks of five days, with 20 general cards and two separate mistakes each", () => {
    expect(level?.weeks.map((w) => w.week)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(level?.vocab.map((v) => v.week)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    for (const week of level?.weeks ?? []) {
      expect(week.days.map((d) => d.day)).toEqual([1, 2, 3, 4, 5]);
      for (const day of week.days) {
        expect(day.lines).toHaveLength(20);
        expect(day.mistakes).toHaveLength(2);
        expect(day.lines.every((line) => !line.startsWith("M || "))).toBe(true);
        for (const line of day.lines.filter((line) => line.startsWith("F || "))) {
          expect(line.split(" || ")[3]?.split(" / ")).toHaveLength(2);
        }
        for (const line of day.mistakes ?? []) {
          expect(line.split(" || ")[1]).toMatch(/\[[^\]]+\]/);
          expect(line.split(" || ")[2]?.split(" / ").filter((option) => option.endsWith("*"))).toHaveLength(1);
        }
      }
    }
  });

  it("deals Level 10 general cards separately from six Detective clues", () => {
    const selection = { course: "Kids Super Intensivo", level: 10, week: 1, day: 1 };
    const general = drawItems(selection, 20, "mix").items;
    expect(general).toHaveLength(20);
    expect(general.every((item) => item.kind !== "M")).toBe(true);
    expect(general.find((item) => item.prompt === "I ____ off my bike yesterday.")?.options?.slice().sort()).toEqual(["fall", "falled", "fell"]);
    const mistakes = drawMistakes(selection, 6).items;
    expect(mistakes).toHaveLength(6);
    expect(mistakes.every((item) => item.kind === "M")).toBe(true);
  });
});