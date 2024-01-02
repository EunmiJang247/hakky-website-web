import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PlayerScore } from '../../data-types/division';
import Player from '../../data-types/player';
import TeamScore, { PlayerScoreEach } from '../../data-types/team-score';
import useReadPlayer from '../../services/player/read';
import useReadTeamScoreApi from '../../services/team/read-yearly-score';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  player: Player;
  playerScore: PlayerScoreEach[] | undefined;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const readPlayerApi = useReadPlayer();
  const readTeamScoreApi = useReadTeamScoreApi();
  const router = useRouter();
  const [player, setPlayer] = useState<Player>();
  const [playerScore, setPlayerScore] = useState<PlayerScoreEach[]>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

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

  const showPlayerScoreYearly = (playerFromServer: Player, yearlyTeamScroreFromServer: TeamScore[]) => {
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
    const result = [];
    for (let k = 0; k < notDuplicatePlayerRecords.length; k += 1) {
      if (playerFromServer.id === notDuplicatePlayerRecords[k].playerId) {
        notDuplicatePlayerRecords[k].playerName = playerFromServer.name;
        notDuplicatePlayerRecords[k].position = playerFromServer.position;
        notDuplicatePlayerRecords[k].score = {
          GP: notDuplicatePlayerRecords[k].GP,
          G: notDuplicatePlayerRecords[k].G,
          A: notDuplicatePlayerRecords[k].A,
          PTS: notDuplicatePlayerRecords[k].PTS,
        };
        result.push(notDuplicatePlayerRecords[k]);
      }
    }
    return result;
  };

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const playerFromServer = await readPlayerApi({ id: router.query.id });
        setPlayer(playerFromServer);
        const yearlyTeamScroreFromServer = await readTeamScoreApi({ id: playerFromServer.teamId });
        const result = showPlayerScoreYearly(playerFromServer, yearlyTeamScroreFromServer);
        setPlayerScore(result);
      }
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    init();
  }, [router]);

  if (player === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    player,
    playerScore,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
