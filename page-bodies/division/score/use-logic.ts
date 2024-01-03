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

        const strikerListByRank = divisionFromServer.playerScore;
        strikerListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
          const before = a.score.P ?? 0;
          const after = b.score.P ?? 0;
          if (before > after) return -1;
          if (before < after) return 1;
          return 0;
        });
        setStrikers(strikerListByRank);

        const goalieListByRank = divisionFromServer.playerScore;
        goalieListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
          const before = a.score.PTS ?? 0;
          const after = b.score.PTS ?? 0;
          if (before > after) return -1;
          if (before < after) return 1;
          return 0;
        });
        setGolies(strikerListByRank);
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
