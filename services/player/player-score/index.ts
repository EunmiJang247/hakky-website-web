import axios from 'axios';
import { PlayerScore } from '../../../data-types/division';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadPlayerScoreApi = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<PlayerScore[]> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `jwt ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/player/score/${id}`,
    });
    const result = axiosResult.data;
    return result;
  };
};

export default useReadPlayerScoreApi;
