import axios from 'axios';
import TeamScore from '../../../data-types/team-score';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadTeamScoreApi = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<TeamScore[]> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `jwt ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/team/yearly-score/${id}`,
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadTeamScoreApi;
