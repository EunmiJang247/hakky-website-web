type PlayerScore = {
  playerId: string;
  playerName: string;
  playerTeamName: string;
  score: {
    G: number;
    A: number;
    P: number;
    GP: number;
    GA: number;
    SV: number;
    SVPercent: number;
    PTS: number;
  };
};

type TeamScore = {
  teamId: string;
  teamName: string;
  score: {
    GP: number;
    W: number;
    L: number;
    OTW: number;
    OTL: number;
    GF: number;
    GA: number;
    PTS: number;
  };
};

interface Division {
  id: string;
  leagueId: string;
  leagueName: string;
  name: string;
  playerScore: PlayerScore[];
  teamScore: TeamScore[];
}

export type { PlayerScore, TeamScore };
export default Division;