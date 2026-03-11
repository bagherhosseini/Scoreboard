export class Match {
  public readonly homeTeam: string;
  public readonly awayTeam: string;
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
}
