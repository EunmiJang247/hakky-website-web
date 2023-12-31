import S3FileType from './s3-file';

interface Team {
  id: string;
  file: S3FileType;
  name: string;
  chiefName: string;
  viceChiefName: string;
  pd: string;
  coach: string;
  place: string;
  borrowTime: string;
}

export default Team;
