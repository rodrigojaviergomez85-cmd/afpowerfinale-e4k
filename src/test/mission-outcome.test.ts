import { describe, expect, it } from "vitest";
import { missionOutcome } from "@/lib/mission-outcome";

describe("mission endings", () => {
  it("loses the bomb mission on timeout but never explodes after defusing it", () => {
    expect(missionOutcome("mission", [0, 0], 3, 10, false, true)).toMatchObject({
      failed: true,
      celebrate: false,
      title: "BOOM! Time's up!",
    });
    expect(missionOutcome("mission", [0, 0], 10, 10, false, true)).toMatchObject({
      failed: false,
      complete: true,
    });
    expect(missionOutcome("mission", [0, 0], 3, 10, true, false)).toMatchObject({
      failed: false,
      celebrate: false,
    });
  });
  it("announces the actual team leader, including when the coach ends early", () => {
    expect(missionOutcome("rocket", [4, 6], 5, 10, false)).toMatchObject({
      winner: 1,
      celebrate: true,
    });
    expect(missionOutcome("rocket", [4, 0], 2, 10, true)).toMatchObject({
      winner: 0,
      celebrate: false,
      label: "FLIGHT ENDED EARLY",
    });
  });
  it("shows a tie and does not invent success with zero points", () => {
    expect(missionOutcome("rocket", [4, 4], 4, 10, false)).toMatchObject({
      winner: null,
      complete: true,
    });
    expect(missionOutcome("rocket", [0, 0], 0, 10, false)).toMatchObject({
      winner: null,
      complete: false,
      celebrate: false,
    });
  });
  it.each(["spotlight", "detective", "sentence", "mission"] as const)(
    "%s earns the mission payoff only after achieving its goal",
    (game) => {
      expect(missionOutcome(game, [0, 0], 10, 10, false)).toMatchObject({
        complete: true,
        celebrate: true,
        label: "MISSION COMPLETE",
      });
      expect(missionOutcome(game, [0, 0], 9, 10, false)).toMatchObject({
        complete: false,
        celebrate: false,
        label: "MISSION FAILED",
      });
      expect(missionOutcome(game, [0, 0], 0, 10, true)).toMatchObject({
        complete: false,
        celebrate: false,
        label: "MISSION ENDED EARLY",
      });
    },
  );
});
