import { describe, expect, it } from "vitest";
import { missionProgress } from "@/lib/mission-progress";

describe("visible mission progress", () => {
  it("uses completed objectives independently from the clock's remaining energy", () => {
    const before = missionProgress(3, 10, 120, 180);
    const after = missionProgress(3, 10, 110, 180);
    expect(after.progress).toBe(before.progress);
    expect(after.energy).toBeLessThan(before.energy);
    expect(missionProgress(4, 10, 110, 180).progress).toBe(0.4);
  });
  it("distinguishes falling behind, urgent danger, and a completed mission", () => {
    expect(missionProgress(0, 10, 180, 180).status).toBe("on-track");
    expect(missionProgress(1, 10, 80, 180).status).toBe("behind");
    expect(missionProgress(9, 10, 20, 180).status).toBe("critical");
    expect(missionProgress(10, 10, 20, 180).status).toBe("complete");
  });
});
