import Id from './id';

type Youtube = {
  id: Id;
  createdAt: Date;
  link: string;
  thumbnail: string;
  title: string;
  viewCount: number;
  publishedAt: Date;
  likeCount: number;
};

interface Youtubes {
  count: number;
  result: Youtube[];
}

export type { Youtube };
export default Youtubes;
