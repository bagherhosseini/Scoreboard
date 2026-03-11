import { Scoreboard } from "../src/Scoreboard";

describe("Scoreboard", () => {
  let scoreboard: Scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  describe("startMatch", () => {
    it("should start a match and add it to the scoreboard", () => {
      scoreboard.startMatch("Mexico", "Canada");

      const summary = scoreboard.getSummary();
      expect(summary).toHaveLength(1);
      expect(summary[0]!.homeTeam).toBe("Mexico");
      expect(summary[0]!.awayTeam).toBe("Canada");
    });

    it("should start a match with initial score 0 - 0", () => {
      scoreboard.startMatch("Mexico", "Canada");

      const summary = scoreboard.getSummary();
      expect(summary[0]!.homeScore).toBe(0);
      expect(summary[0]!.awayScore).toBe(0);
    });

    it("should throw if a match between the same teams is already in progress", () => {
      scoreboard.startMatch("Mexico", "Canada");

      expect(() => scoreboard.startMatch("Mexico", "Canada")).toThrow(
        "Match already in progress"
      );
    });
  });

  describe("finishMatch", () => {
    it("should remove a match from the scoreboard", () => {
      scoreboard.startMatch("Mexico", "Canada");

      scoreboard.finishMatch("Mexico", "Canada");

      expect(scoreboard.getSummary()).toHaveLength(0);
    });

    it("should throw if match is not found", () => {
      expect(() => scoreboard.finishMatch("Mexico", "Canada")).toThrow(
        "Match not found"
      );
    });
  });

  describe("updateScore", () => {
    it("should update the score of a match", () => {
      scoreboard.startMatch("Mexico", "Canada");

      scoreboard.updateScore("Mexico", "Canada", 0, 5);

      const summary = scoreboard.getSummary();
      expect(summary[0]!.homeScore).toBe(0);
      expect(summary[0]!.awayScore).toBe(5);
    });

    it("should throw if match is not found", () => {
      expect(() => scoreboard.updateScore("Mexico", "Canada", 1, 0)).toThrow(
        "Match not found"
      );
    });
  });
});
