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
          GP: ar.score.GP,
          G: ar.score.G,
          A: ar.score.A,
          PTS: ar.score.PTS,
        });
      } else {
        newArr[index].GP += ar.score.GP;
        newArr[index].G += ar.score.G;
        newArr[index].A += ar.score.A;
        newArr[index].PTS += ar.score.PTS;
      }
    }
    return newArr;
  };

  const showPlayerScoreYearly = (teamPlayer: Player[], yearlyTeamScroreFromServer: TeamScore[]) => {
    const arr: PlayerScoreEach[] = [];
    yearlyTeamScroreFromServer?.map(score => {
      const scores = score?.playerScore;
      for (let i = 0; i < scores.length; i += 1) {
        const singleScore = scores[i];
        singleScore.year = score.leagueYear;
        arr.push(scores[i]); // 이 팀이 참석한 divisions중 발생할 골 모두의 array와 년도
      }
      return arr;
    });
    const notDuplicatePlayerRecords = mergeArr(arr);
    const finalPlayerResult = teamPlayer.map(t => {
      for (let k = 0; k < notDuplicatePlayerRecords.length; k += 1) {
        if (t.id === notDuplicatePlayerRecords[k].playerId) {
          notDuplicatePlayerRecords[k].playerName = t.name;
          notDuplicatePlayerRecords[k].position = t.position;
          notDuplicatePlayerRecords[k].score = {
            GP: notDuplicatePlayerRecords[k].GP,
            G: notDuplicatePlayerRecords[k].G,
            A: notDuplicatePlayerRecords[k].A,
            PTS: notDuplicatePlayerRecords[k].PTS,
          };
          return notDuplicatePlayerRecords[k];
        }
      }
      return {
        playerId: t.id,
        year: '',
        name: '',
        position: '',
        score: {
          GP: 0,
          G: 0,
          A: 0,
          PTS: 0,
        },
      };
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
