import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Player from '../../data-types/player';
import Team from '../../data-types/team';
import TeamScore, { PlayerScoreEach } from '../../data-types/team-score';
import useReadTeam from '../../services/team/read';
import useReadTeamPlayers from '../../services/team/read-team-players';
import useReadTeamScoreApi from '../../services/team/read-yearly-score';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  team: Team;
  teamScore: TeamScore[];
  strikers: PlayerScoreEach[] | undefined;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [team, setTeam] = useState<Team>();
  const [strikers, setStrikers] = useState<PlayerScoreEach[]>();
  const [teamScore, setTeamScore] = useState<TeamScore[]>();

  const router = useRouter();
  const readTeamApi = useReadTeam();
  const readTeamPlayers = useReadTeamPlayers();
  const readTeamScoreApi = useReadTeamScoreApi();

  const mergeArr = (arr: PlayerScoreEach[]) => {
    const newArr: any[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      const ar = arr[i];
      const index = newArr.findIndex(newar => newar.playerId === ar.playerId && newar.year === ar.year);
      if (index === -1) {
        newArr.push({
          playerId: ar.playerId,
          year: ar.year,
          score: {
            GP: ar.score.GP,
            GA: ar.score.GA,
            G: ar.score.G,
            P: ar.score.P,
            A: ar.score.A,
            SA: ar.score.SA,
            SV: ar.score.SV,
            SVPercent: ar.score.SVPercent,
            PTS: ar.score.PTS,
            PIM: ar.score.PIM,
            TOI: ar.score.TOI,
          },
        });
      } else {
        newArr[index].score.GP += ar.score.GP;
        newArr[index].score.G += ar.score.G;
        newArr[index].score.A += ar.score.A;
        newArr[index].score.PTS += ar.score.PTS;
        newArr[index].score.PIM += ar.score.PIM;
        newArr[index].score.P += ar.score.P;
        newArr[index].score.GA += ar.score.GA;
        newArr[index].score.SA += ar.score.SA;
        newArr[index].score.SV += ar.score.SV;
        newArr[index].score.TOI += ar.score.TOI;
        newArr[index].score.SVPercent = Math.floor((1 - newArr[index].score.GA / newArr[index].score.SA) * 100);
      }
    }
    return newArr;
  };

  const showPlayerScoreYearly = (teamPlayer: Player[], yearlyTeamScroreFromServer: TeamScore[]) => {
    // teamPlayer : 팀에 속하는 선수 전체. yearlyTeamScroreFromServer: 리그별 선수의 점수들.
    const arr: PlayerScoreEach[] = [];
    yearlyTeamScroreFromServer?.map(score => {
      const scores = score?.playerScore;
      for (let i = 0; i < scores.length; i += 1) {
        const singleScore = scores[i];
        singleScore.year = score.leagueYear;
        arr.push(scores[i]); // division의 playerScore을 돌면서 년도를 주입한다.
      }
      return arr;
    });
    const notDuplicatePlayerRecords = mergeArr(arr);
    const finalPlayerResult = teamPlayer.map(t => {
      for (let k = 0; k < notDuplicatePlayerRecords.length; k += 1) {
        if (t.id === notDuplicatePlayerRecords[k].playerId) {
          notDuplicatePlayerRecords[k].playerName = t.name;
          notDuplicatePlayerRecords[k].position = t.position;
          return notDuplicatePlayerRecords[k];
        }
      }
      return '';
    });
    setStrikers(finalPlayerResult);
  };

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const teamFromServer = await readTeamApi({ id: router.query.id });
        setTeam(teamFromServer);
        const yearlyTeamScroreFromServer = await readTeamScoreApi({ id: router.query.id });
        setTeamScore(yearlyTeamScroreFromServer);
        const teamPlayers = await readTeamPlayers({ id: router.query.id });
        showPlayerScoreYearly(teamPlayers, yearlyTeamScroreFromServer);
      }
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    init();
  }, [router]);

  if (teamScore === undefined || team === undefined || strikers === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    team,
    teamScore,
    strikers,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
