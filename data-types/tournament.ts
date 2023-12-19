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
}

export default Tournament;
