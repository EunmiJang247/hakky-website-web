import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  differenceInCalendarDays,
} from 'date-fns';
import Tournament from '../../data-types/tournament';
import useReadTournamentsCalendar from '../../services/tournament/calendar';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  youtubeModalOpen: boolean;
  setYoutubeModalOpen: (value: boolean) => void;
  setYoutubeUrl: (value: string) => void;
  setCurrentDate: (value: Date) => void;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const router = useRouter();
  const readTournamentApi = useReadTournamentsCalendar();
  const [youtubeModalOpen, setYoutubeModalOpen] = useState<boolean>(false);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const init = async () => {
    try {
      const fromServer = await readTournamentApi({ startDate, endDate });
      setTournaments(fromServer);
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
  }, [router.isReady]);

  return {
    status: 'LOADED',
    youtubeModalOpen,
    setYoutubeModalOpen,
    setYoutubeUrl,
    setCurrentDate,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
