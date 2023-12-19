import axios from 'axios';
import Tournament from '../../../data-types/tournament';
import useApiAddr from '../../api-addr';

type Params = {
  startDate: Date;
  endDate: Date;
};

const useReadTournamentsCalendar = () => {
  const apiAddr = useApiAddr();

  return async ({ startDate, endDate }: Params): Promise<Tournament[]> => {
    const axiosResult = await axios({
      method: 'get',
      url: `${apiAddr}/v1/tournament/calendar`,
      params: {
        startDate,
        endDate,
      },
    });

    const result = axiosResult.data;
    return result;
  };
};

export default useReadTournamentsCalendar;
