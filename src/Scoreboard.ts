import { Match } from "./Match";

export class Scoreboard {
  private matches: Match[] = [];

  startMatch(homeTeam: string, awayTeam: string): void {
    if (this.findMatch(homeTeam, awayTeam)) {
      throw new Error("Match already in progress");
    }

    const match = new Match(homeTeam, awayTeam);
    this.matches.push(match);
  }

  finishMatch(homeTeam: string, awayTeam: string): void {
    const index = this.findMatchIndex(homeTeam, awayTeam);

    if (index === -1) {
      throw new Error("Match not found");
    }

    this.matches.splice(index, 1);
  }

  getSummary(): Match[] {
    return [...this.matches];
  }

  private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
    return this.matches.find(
      (m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam
    );
  }

  private findMatchIndex(homeTeam: string, awayTeam: string): number {
    return this.matches.findIndex(
      (m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam
    );
  }
}
