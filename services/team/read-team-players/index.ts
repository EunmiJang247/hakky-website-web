import axios from 'axios';
import Player from '../../../data-types/player';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadTeamPlayers = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<Player[]> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `jwt ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/team/players/${id}`,
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadTeamPlayers;
