import Id from './id';

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
}

export default Tournament;
