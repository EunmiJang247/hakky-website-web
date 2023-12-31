import axios from 'axios';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadTeam = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<any> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `jwt ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/team/${id}`,
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadTeam;
