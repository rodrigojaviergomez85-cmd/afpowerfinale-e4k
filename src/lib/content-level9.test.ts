import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/content";
import { drawItems, drawMistakes } from "./content";

const level = COURSES.find((c) => c.name === "Kids Super Intensivo")?.levels.find((l) => l.level === 9);

describe("uploaded Level 9 curriculum", () => {
  it("preserves all supplied records, literal strings and order exactly", () => {
    expect(createHash("sha256").update(JSON.stringify(level)).digest("hex")).toBe("2a17edf19f4e5d6651ac4ab732bff615d8ae59e23f8be4b20ce0f71f74474c28");
  });

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

  it("deals Level 9 general cards separately from six Detective clues", () => {
    const selection = { course: "Kids Super Intensivo", level: 9, week: 1, day: 1 };
    const general = drawItems(selection, 20, "mix").items;
    expect(general).toHaveLength(20);
    expect(general.every((item) => item.kind !== "M")).toBe(true);
    expect(general.find((item) => item.prompt === "If you touch fire, you ____ hurt.")?.options?.slice().sort()).toEqual(["get", "gets", "got"]);
    const mistakes = drawMistakes(selection, 6).items;
    expect(mistakes).toHaveLength(6);
    expect(mistakes.every((item) => item.kind === "M")).toBe(true);
  });
});