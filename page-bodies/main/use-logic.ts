import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import Tournament from '../../data-types/tournament';
import useReadTournamentsCalendar from '../../services/tournament/calendar';
import useReadYoutubes from '../../services/youtube/read-list';
import { Youtube } from '../../data-types/youtube';
import MenuContext from '../../contexts/menus';
import Menu from '../../data-types/menu';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  youtubeModalOpen: boolean;
  setYoutubeModalOpen: (value: boolean) => void;
  setYoutubeUrl: (value: string) => void;
  setCurrentDate: (value: Date) => void;
  tournaments: Tournament[];
  youtubes: Youtube[] | undefined;
  youtubeUrl: string;
  menuLis: Menu[] | undefined;
  highlightLeague: Menu | undefined;
  setHighlightLeague: (value: Menu) => void;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const menuLis = useContext(MenuContext);
  const router = useRouter();
  const readTournamentApi = useReadTournamentsCalendar();
  const readYoutubes = useReadYoutubes();
  const [youtubeModalOpen, setYoutubeModalOpen] = useState<boolean>(false);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [youtubes, setYoutubes] = useState<Youtube[]>();
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [highlightLeague, setHighlightLeague] = useState<Menu | undefined>();

  const init = async () => {
    try {
      const tournamentsFromServer = await readTournamentApi({ startDate, endDate });
      const youtubeFromServe = await readYoutubes({ limit: 6, skip: 0 });
      setTournaments(tournamentsFromServer);
      setYoutubes(youtubeFromServe.result);
      if (menuLis !== undefined) {
        setHighlightLeague(menuLis[0]);
      }
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { division, tournament } = router.query;
      if (division === undefined || tournament === undefined) {
        init();
      }

      if (typeof division === 'object' || tournament === 'object') {
        alert('잘못된 접근입니다');
        router.back();
      }

      if (typeof division === 'string' && tournament === 'string') {
        init();
      }
    }
  }, [router.isReady, currentDate, menuLis]);

  return {
    status: 'LOADED',
    youtubeModalOpen,
    setYoutubeModalOpen,
    setYoutubeUrl,
    setCurrentDate,
    tournaments,
    youtubes,
    youtubeUrl,
    menuLis,
    highlightLeague,
    setHighlightLeague,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
