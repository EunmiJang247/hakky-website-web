type PlayerScore = {
  playerId: string;
  playerName: string;
  playerTeamName: string;
  position: string;
  year?: string;
  playerImage: string;
  score: {
    G: number;
    A: number;
    P: number;
    GP: number;
    GA: number;
    SV: number;
    SVPercent: number;
    PTS: number;
    SA?: number;
    PIM?: number;
  };
};

type TeamScore = {
  teamLogo: string | undefined;
  teamId: string;
  teamName: string;
  year?: string;
  score: {
    T: number;
    GD: number;
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
