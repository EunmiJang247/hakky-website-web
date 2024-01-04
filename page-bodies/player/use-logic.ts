import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Player from '../../data-types/player';
import { PlayerScoreEach } from '../../data-types/team-score';
import useReadPlayerScoreApi from '../../services/player/player-score';
import useReadPlayer from '../../services/player/read';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  player: Player;
  playerScore: PlayerScoreEach | undefined;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const readPlayerApi = useReadPlayer();
  const readPlayerScoreApi = useReadPlayerScoreApi();
  const router = useRouter();
  const [player, setPlayer] = useState<Player>();
  const [playerScore, setPlayerScore] = useState<PlayerScoreEach>();
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
          score: {
            GP: ar.score.GP ? Number(ar.score.GP) : 0,
            GA: ar.score.GA ? Number(ar.score.GA) : 0,
            G: ar.score.G ? Number(ar.score.G) : 0,
            P: ar.score.P ? Number(ar.score.P) : 0,
            A: ar.score.A ? Number(ar.score.A) : 0,
            SA: ar.score.SA ? Number(ar.score.SA) : 0,
            SV: ar.score.SV ? Number(ar.score.SV) : 0,
            SVPercent: ar.score.SVPercent ? Number(ar.score.SVPercent) : 0,
            PTS: ar.score.PTS ? Number(ar.score.PTS) : 0,
            PIM: ar.score.PIM ? Number(ar.score.PIM) : 0,
            TOI: ar.score.TOI ? Number(ar.score.TOI) : 0,
          },
        });
      } else {
        newArr[index].score.GP = (ar.score.GP ? Number(ar.score.GP) : 0) + (Number(newArr[index].score.GP) ?? 0);
        newArr[index].score.G = (ar.score.G ? Number(ar.score.G) : 0) + (Number(newArr[index].score.G) ?? 0);
        newArr[index].score.A = (ar.score.A ? Number(ar.score.A) : 0) + (Number(newArr[index].score.A) ?? 0);
        newArr[index].score.PTS = (ar.score.PTS ? Number(ar.score.PTS) : 0) + (Number(newArr[index].score.PTS) ?? 0);
        newArr[index].score.PIM = (ar.score.PIM ? Number(ar.score.PIM) : 0) + (Number(newArr[index].score.PIM) ?? 0);
        newArr[index].score.P = (ar.score.P ? Number(ar.score.P) : 0) + (Number(newArr[index].score.P) ?? 0);
        newArr[index].score.GA = (ar.score.GA ? Number(ar.score.GA) : 0) + (Number(newArr[index].score.GA) ?? 0);
        newArr[index].score.SA = (ar.score.SA ? Number(ar.score.SA) : 0) + (Number(newArr[index].score.SA) ?? 0);
        newArr[index].score.SV = (ar.score.SV ? Number(ar.score.SV) : 0) + (Number(newArr[index].score.SV) ?? 0);
        newArr[index].score.TOI = (ar.score.TOI ? Number(ar.score.TOI) : 0) + (Number(newArr[index].score.TOI) ?? 0);
        newArr[index].score.SVPercent = Math.floor(
          (1 - Number(newArr[index].score.GA) / Number(newArr[index].score.SA)) * 100
        );
      }
    }
    return newArr;
  };

  const showPlayerScoreYearly = (playerFromServer: Player, playerScoreFromServer: any[]) => {
    const arr: PlayerScoreEach[] = [];
    playerScoreFromServer?.map(score => {
      const scores = score?.playerScore;
      for (let i = 0; i < scores.length; i += 1) {
        const singleScore = scores[i];
        singleScore.year = score.leagueYear;
        arr.push(scores[i]); // 이 팀이 참석한 divisions중 발생할 골 모두의 array와 년도
      }
      return arr;
    });
    const notDuplicatePlayerRecords = mergeArr(arr);
    console.log(notDuplicatePlayerRecords);
    let result;
    for (let k = 0; k < notDuplicatePlayerRecords.length; k += 1) {
      if (playerFromServer.id === notDuplicatePlayerRecords[k].playerId) {
        notDuplicatePlayerRecords[k].playerName = playerFromServer.name;
        notDuplicatePlayerRecords[k].position = playerFromServer.position;
        result = notDuplicatePlayerRecords[k];
      }
    }
    return result;
  };

  const init = async () => {
    try {
      if (typeof router.query.id === 'string') {
        const playerFromServer = await readPlayerApi({ id: router.query.id });
        setPlayer(playerFromServer);
        const playerScoreFromServer = await readPlayerScoreApi({ id: router.query.id });
        const result = showPlayerScoreYearly(playerFromServer, playerScoreFromServer);
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
