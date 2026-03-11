export class Match {
  private static orderCounter: number = 0;

  public readonly homeTeam: string;
  public readonly awayTeam: string;
  public readonly createdOrder: number;
  private _homeScore: number = 0;
  private _awayScore: number = 0;

  constructor(homeTeam: string, awayTeam: string) {
    if (!homeTeam.trim() || !awayTeam.trim()) {
      throw new Error("Team names cannot be empty");
    }
    if (homeTeam === awayTeam) {
      throw new Error("Home and away teams must be different");
    }

    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.createdOrder = Match.orderCounter++;
  }

  get homeScore(): number {
    return this._homeScore;
  }

  get awayScore(): number {
    return this._awayScore;
  }

  get totalScore(): number {
    return this._homeScore + this._awayScore;
  }

  updateScore(homeScore: number, awayScore: number): void {
    if (homeScore < 0 || awayScore < 0) {
      throw new Error("Scores cannot be negative");
    }

    this._homeScore = homeScore;
    this._awayScore = awayScore;
  }
}
