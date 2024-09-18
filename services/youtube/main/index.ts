import axios from 'axios';
import Youtubes from '../../../data-types/youtube';
import useApiAddr from '../../api-addr';

type Params = {
  limit: number;
  skip: number;
};

const useReadYoutubesMain = () => {
  const apiAddr = useApiAddr();

  return async ({ limit, skip }: Params): Promise<Youtubes> => {
    const axiosResult = await axios({
      method: 'get',
      url: `${apiAddr}/v1/youtube/main`,
      params: {
        limit,
        skip,
      },
    });

    const { count } = axiosResult.data;
    return { result: axiosResult.data.result, count };
  };
};

export default useReadYoutubesMain;
