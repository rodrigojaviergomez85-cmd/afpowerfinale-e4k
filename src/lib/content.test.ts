import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/content";
import { drawItems, type ContentItem } from "./content";

describe("hidden vocabulary cards", () => {
  it("uses lexical answers rather than sentence or grammar tasks", () => {
    for (const c of COURSES) for (const l of c.levels) for (const w of l.weeks) for (const d of w.days) {
      for (const line of d.lines.filter((line) => line.startsWith("H || "))) {
        const [, , prompt = "", answer = ""] = line.split(" || ");
        expect(prompt).not.toMatch(/Use |every day|suggested/);
        expect(answer).not.toMatch(/^(I |He |She |It is |There |A vet helps)/);
      }
    }
  });
  it("never pulls unrelated earlier-week hidden cards to fill a quota", () => {
    for (let n = 0; n < 30; n++) {
      const { items } = drawItems({ course: "Kids Super Intensivo", level: 1, week: 5, day: 1 }, 20, "mix");
      expect(items.filter((i) => i.hidden).every((i) => i.week === 5)).toBe(true);
      expect(new Set(items.map((i) => i.id)).size).toBe(items.length);
    }
  });
  it("never deals two cards with the same learner-facing prompt and payload", () => {
    const key = (i: ContentItem) =>
      [i.kind, i.prompt.toLowerCase().replace(/\s+/g, " ").trim(), i.emoji ?? "", (i.shapes ?? []).map((s) => `${s.color ?? ""}:${s.shape}:${s.count}`).join(",")].join("|");
    for (const sel of [
      { course: "Kids Super Intensivo", level: 3, week: 4, day: 5 },
      { course: "Kids Super Intensivo", level: 1, week: 5, day: 3 },
      { course: "Kids Super Intensivo", level: 5, week: 8, day: 4 },
      { course: "Kids Super Intensivo", level: 0, week: 2, day: 3 },
    ]) {
      for (let n = 0; n < 10; n++) {
        const { items } = drawItems(sel, 20, "mix");
        const keys = items.map(key);
        expect(new Set(keys).size).toBe(keys.length);
      }
    }
  });
  it("omits hidden cards when the current week has none", () => {
    const level = COURSES[0]?.levels.find((l) => l.level === 1);
    const week = level?.weeks.find((w) => w.week === 3);
    if (!week) throw new Error("Missing curriculum week");
    const original = week.days.map((d) => d.lines);
    try {
      week.days.forEach((d) => { d.lines = d.lines.filter((s) => !s.startsWith("H || ")); });
      const { items } = drawItems({ course: "Kids Super Intensivo", level: 1, week: 3, day: 3 }, 16, "mix");
      expect(items).toHaveLength(16);
      expect(items.some((i) => i.hidden)).toBe(false);
    } finally {
      week.days.forEach((d, i) => { d.lines = original[i] ?? []; });
    }
  });
});