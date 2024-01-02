import Id from './id';

type PlayerScoreResult = {
  playerId: Id;
  year: string;
  G: number;
  A: number;
  PTS: number;
  GP: number;
  name?: string;
  position?: string;
};

type PlayerScoreEach = {
  year: any;
  playerId: Id;
  playerName?: string;
  position?: string;
  playerTeamName?: string;
  score: {
    G?: number;
    A?: number;
    PTS?: number;
    GP?: number;
    GD?: number;
    L?: number;
    OTL?: number;
    T?: number;
    OTW?: number;
    GA?: number;
    SV: number;
    SVPercent: number;
    SA?: number;
    PIM?: number;
  };
};

type TeamScoreEach = {
  teamId: Id;
  score: {
    GP: number;
    GF: number;
    GA: number;
    W: number;
    GD: number;
    L: number;
    OTL: number;
    PTS: number;
    T: number;
    OTW: number;
  };
};

interface TeamScore {
  leagueId: string;
  leagueName: string;
  leagueYear: string;
  name: string;
  playerScore: PlayerScoreEach[];
  teamScore: TeamScoreEach[];
}

export type { PlayerScoreEach, TeamScoreEach, PlayerScoreResult };
export default TeamScore;
