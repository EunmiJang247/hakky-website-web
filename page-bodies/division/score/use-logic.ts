import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Division, { PlayerScore, TeamScore } from '../../../data-types/division';
import useReadDivision from '../../../services/division/read';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  highlightDivision: Division;
  teams: TeamScore[] | undefined;
  strikers: PlayerScore[] | undefined;
  golies: PlayerScore[] | undefined;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [highlightDivision, setHighlightDivision] = useState<Division | undefined>();
  const [teams, setTeams] = useState<TeamScore[]>();
  const [strikers, setStrikers] = useState<PlayerScore[]>();
  const [golies, setGolies] = useState<PlayerScore[]>();

  const router = useRouter();
  const readDivisionApi = useReadDivision();

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const divisionFromServer = await readDivisionApi({ id: router.query.id });
        setHighlightDivision(divisionFromServer);
        const teamListByRank = divisionFromServer.teamScore;
        teamListByRank.sort((a: TeamScore, b: TeamScore) => b.score.PTS - a.score.PTS);
        setTeams(teamListByRank);

        let strikerListByRank = divisionFromServer.playerScore;
        strikerListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
          // a와 b 중 하나라도 null이면 뒤로 보내기
          if (a === null || b === null) {
            return a === null ? 1 : -1;
          }

          // a와 b 모두 score.P 속성이 없으면 둘을 같은 것으로 처리
          const before = a.score && a.score.P !== undefined ? a.score.P : 0;
          const after = b.score && b.score.P !== undefined ? b.score.P : 0;

          if (before > after) return 1; // before와 after를 반대로 비교
          if (before < after) return -1; // before와 after를 반대로 비교
          return 0;
        });
        strikerListByRank = strikerListByRank.filter(item => item !== null);
        setStrikers(strikerListByRank);

        let goalieListByRank = divisionFromServer.playerScore;
        goalieListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
          if (a === null || b === null) {
            return a === null ? 1 : -1;
          }
          const before = a.score && a.score.SVPercent !== undefined ? a.score.SVPercent : 0;
          const after = b.score && b.score.SVPercent !== undefined ? b.score.SVPercent : 0;
          if (before > after) return -1;
          if (before < after) return 1;
          return 0;
        });
        goalieListByRank = goalieListByRank.filter(item => item !== null);
        setGolies(goalieListByRank);
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
  }, [router]);

  if (highlightDivision === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    highlightDivision,
    teams,
    strikers,
    golies,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
