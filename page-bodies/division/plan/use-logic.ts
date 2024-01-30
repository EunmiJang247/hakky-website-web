import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Division from '../../../data-types/division';
import Tournament from '../../../data-types/tournament';
import useReadDivision from '../../../services/division/read';
import useReadTournaments from '../../../services/tournament/read-list';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  data: Tournament[] | undefined;
  division: Division;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const router = useRouter();
  const readApi = useReadTournaments();
  const readDivision = useReadDivision();
  const [data, setData] = useState<Tournament[] | undefined>(undefined);
  const [division, setDivision] = useState<Division>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const divisionFromServer = await readDivision({ id: router.query.id });
        setDivision(divisionFromServer);
        const fromServer = await readApi({ id: router.query.id });
        const { result } = fromServer;
        console.log(fromServer, "저에요")
        result.sort(function compare(a: Tournament, b: Tournament) {
          const before = a.tournamentDate ?? 0;
          const after = b.tournamentDate ?? 0;
          if (before < after) return -1;
          if (before > after) return 1;

          // If tournamentDate is the same, then sort by time
          const timeA = a.time ?? 0;
          const timeB = b.time ?? 0;

          if (timeA < timeB) return -1;
          if (timeA > timeB) return 1;

          return 0;
        });
        setData(result);
      }
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      init();
    }
  }, [router.isReady, router]);

  if (division === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    data,
    division,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
