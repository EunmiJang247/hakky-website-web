import Id from './id';
import S3FileType from './s3-file';

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
}

export default Tournament;
