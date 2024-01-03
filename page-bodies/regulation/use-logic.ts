import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import Tournament from '../../data-types/tournament';
import useReadTournamentsCalendar from '../../services/tournament/calendar';
import useReadYoutubes from '../../services/youtube/read-list';
import { Youtube } from '../../data-types/youtube';
import MenuContext from '../../contexts/menus';
import Menu from '../../data-types/menu';
import Division, { PlayerScore, TeamScore } from '../../data-types/division';
import useReadDivision from '../../services/division/read';
import useReadRegulation from '../../services/regulation/read';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  regulation: string;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const menuLis = useContext(MenuContext);
  const router = useRouter();
  const readRegulationApi = useReadRegulation();
  const [regulation, setRegulation] = useState<string>('');

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const tournamentsFromServer = await readRegulationApi({ id: router.query.id });
        setRegulation(tournamentsFromServer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    init();
  }, [router]);

  if (regulation === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    regulation,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
