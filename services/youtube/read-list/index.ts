import axios from 'axios';
import Youtubes from '../../../data-types/youtube';
import youtubeParser from '../../../parser/youtube';
import useApiAddr from '../../api-addr';

type Params = {
  limit: number;
  skip: number;
};

const useReadYoutubes = () => {
  const apiAddr = useApiAddr();

  return async ({ limit, skip }: Params): Promise<Youtubes> => {
    const axiosResult = await axios({
      method: 'get',
      url: `${apiAddr}/v1/youtube/`,
      params: {
        limit,
        skip,
      },
    });

    const { count } = axiosResult.data;
    return { result: axiosResult.data.result, count };
  };
};

export default useReadYoutubes;
