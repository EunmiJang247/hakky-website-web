import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Tournament, { OptionsGoal } from '../../data-types/tournament';
import useReadTournament from '../../services/tournament/read';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  tournamentData: Tournament;
  optionsGoalsHome: any;
  optionsGoalsAway: any;
  tabName: string;
  setTabName: (value: string) => void;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const router = useRouter();
  const readTournament = useReadTournament();
  const [tournamentData, setTournamentData] = useState<Tournament>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [optionsGoalsHome, setoptionsGoalsHome] = useState<any>();
  const [optionsGoalsAway, setoptionsGoalsAway] = useState<any>();
  const [tabName, setTabName] = useState<string>('home');

  const giveMeTeamResult = (data: OptionsGoal[]) => {
    const p1GoalCount = data.filter(d => d.p === 'P1' && d.goal !== '').length;
    const p2GoalCount = data.filter(d => d.p === 'P2' && d.goal !== '').length;
    const p3GoalCount = data.filter(d => d.p === 'P3' && d.goal !== '').length;
    const otGoalCount = data.filter(d => d.p === 'OT' && d.goal !== '').length;
    return [p1GoalCount, p2GoalCount, p3GoalCount, otGoalCount];
  };

  const init = async () => {
    try {
      const { id } = router.query;
      if (typeof id === 'string') {
        const divisionFromServer = await readTournament({ id: id.toString() });
        setTournamentData(divisionFromServer);
        console.log(tournamentData);
        const homeScore = giveMeTeamResult(divisionFromServer.optionsGoalsHome);
        const awayScore = giveMeTeamResult(divisionFromServer.optionsGoalsAway);
        setoptionsGoalsHome({ homeTeamName: divisionFromServer.homeTeamName, homeScore });
        setoptionsGoalsAway({ awayTeamName: divisionFromServer.awayTeamName, awayScore });
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
  }, [router.isReady]);

  if (tournamentData === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    tournamentData,
    optionsGoalsHome,
    optionsGoalsAway,
    tabName,
    setTabName,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
