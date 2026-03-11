import { Match } from "../src/Match";

describe("Match", () => {
  it("should create a match with home and away team names", () => {
    const match = new Match("Mexico", "Canada");

    expect(match.homeTeam).toBe("Mexico");
    expect(match.awayTeam).toBe("Canada");
  });

  it("should initialize score to 0 - 0", () => {
    const match = new Match("Mexico", "Canada");

    expect(match.homeScore).toBe(0);
    expect(match.awayScore).toBe(0);
  });

  it("should have a total score of 0 initially", () => {
    const match = new Match("Mexico", "Canada");

    expect(match.totalScore).toBe(0);
  });

  it("should throw if home team name is empty", () => {
    expect(() => new Match("", "Canada")).toThrow("Team names cannot be empty");
  });

  it("should throw if away team name is empty", () => {
    expect(() => new Match("Mexico", "")).toThrow("Team names cannot be empty");
  });

  it("should throw if both teams are the same", () => {
    expect(() => new Match("Mexico", "Mexico")).toThrow(
      "Home and away teams must be different"
    );
  });

  describe("updateScore", () => {
    it("should update the score", () => {
      const match = new Match("Mexico", "Canada");

      match.updateScore(2, 3);

      expect(match.homeScore).toBe(2);
      expect(match.awayScore).toBe(3);
    });

    it("should calculate total score after update", () => {
      const match = new Match("Mexico", "Canada");

      match.updateScore(2, 3);

      expect(match.totalScore).toBe(5);
    });

    it("should throw if home score is negative", () => {
      const match = new Match("Mexico", "Canada");

      expect(() => match.updateScore(-1, 0)).toThrow(
        "Scores cannot be negative"
      );
    });

    it("should throw if away score is negative", () => {
      const match = new Match("Mexico", "Canada");

      expect(() => match.updateScore(0, -1)).toThrow(
        "Scores cannot be negative"
      );
    });
  });
});
