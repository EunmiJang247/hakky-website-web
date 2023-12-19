import axios from 'axios';
import Menu from '../../data-types/menu';
import useApiAddr from '../api-addr';

const useReadMainMenu = () => {
  const apiAddr = useApiAddr();

  return async (): Promise<Menu[]> => {
    const axiosResult = await axios({
      method: 'get',
      url: `${apiAddr}/v1/main-menu`,
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadMainMenu;
