import { Youtube } from '../data-types/youtube';

const youtubeParser = (r: Record<string, any>): Youtube => {
  return {
    id: r.id,
    createdAt: r.createdAt,
    title: r.title,
    link: r.link,
    thumbnail: r.thumbnail,
    viewCount: r.viewCount,
    publishedAt: r.publishedAt,
    likeCount: r.likeCount,
  };
};

export default youtubeParser;
