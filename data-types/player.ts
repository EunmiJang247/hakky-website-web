import S3FileType from './s3-file';

interface Player {
  teamName: string;
  teamId: string;
  id: string;
  name: string;
  file: S3FileType;
  position: string;
  backNumber: string;
}

export default Player;
