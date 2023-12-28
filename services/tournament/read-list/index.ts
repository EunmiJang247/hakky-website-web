import axios from 'axios';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadTournaments = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<any> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/tournament`,
      params: {
        divisionId: id,
      },
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadTournaments;
