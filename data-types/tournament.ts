import Id from './id';
import S3FileType from './s3-file';

type OptionsGoal = {
  homeTeamName: string;
  awayTeamName: string;
  homeScore: string[];
  awayScore: string[];
  goalPlayerName: any;
  a1PlayerName: any;
  a2PlayerName: any;
  p: Id;
  time: string;
  goal: string;
  a1: string;
  a2: string;
};

interface Tournament {
  id: Id;
  createdAt: Date;
  link: string;
  thumbnail: string;
  title: string;
  viewCount: number;
  publishedAt: Date;
  likeCount: number;
  tournamentDate: string;
  homeTeamName: string;
  awayTeamName: string;
  awayTeamGoalCount: number;
  homeTeamGoalCount: number;
  time: string;
  venuePlace: string;
  homeTeamLogo: S3FileType;
  awayTeamLogo: S3FileType;
  divisionName: string;
  divisionId: Id;
  optionsGoalsHome: OptionsGoal[];
  optionGoalieSavesHome: {
    p1: string;
    p2: string;
    p3: string;
    goalie: string;
    total: number;
    playerName: string;
    time: string;
  }[];
  optionPaneltiesHome: {
    p: string;
    time: string;
    penalty: number;
    playerName: string;
    min: number;
    no: string;
  }[];
  optionGoalieSavesAway: {
    p1: string;
    p2: string;
    p3: number;
    goalie: string;
    playerName: string;
    total: number;
  }[];
  optionPaneltiesAway: {
    p: string;
    time: string;
    penalty: number;
    min: number;
    no: string;
    playerName: string;
  }[];
  optionsGoalsAway: {
    p: string;
    time: string;
    goal: string;
    a1: string;
    a2: string;
    goalPlayerName: string;
    a1PlayerName: string;
    a2PlayerName: string;
  }[];
  optionsPlayersHome: {
    position: string;
    playerId: string;
    playerName: string;
    playerNumber: string;
  }[];
  optionsPlayersAway: {
    position: string;
    playerId: string;
    playerNumber: string;
    playerName: string;
  }[];
}

export type { OptionsGoal };
export default Tournament;
