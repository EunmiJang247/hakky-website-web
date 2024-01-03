import axios from 'axios';
import useApiAddr from '../../api-addr';

type Params = {
  id: string;
};

const useReadRegulation = () => {
  const apiAddr = useApiAddr();

  return async ({ id }: Params): Promise<any> => {
    const accessToken = window.localStorage.getItem('token');
    const axiosResult = await axios({
      headers: {
        Authorization: `jwt ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'get',
      url: `${apiAddr}/v1/league/regulation/${id}`,
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadRegulation;
