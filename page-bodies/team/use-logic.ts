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
  currentYear: number;
  setCurrentYear: (value: number) => void;
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
  const [currentYear, setCurrentYear] = useState<number>(2023);

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
    finalPlayerResult.sort(function compare(a: PlayerScoreEach, b: PlayerScoreEach) {
      const beforePTS = a.score?.PTS ?? 0;
      const afterPTS = b.score?.PTS ?? 0;
      if (beforePTS > afterPTS) return -1;
      if (beforePTS < afterPTS) return 1;

      // PTS가 같으면 SVPercent로 정렬
      const beforeSVPercent = a.score?.SVPercent ?? 0;
      const afterSVPercent = b.score?.SVPercent ?? 0;
      if (beforeSVPercent > afterSVPercent) return -1;
      if (beforeSVPercent < afterSVPercent) return 1;

      return 0;
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
    currentYear,
    setCurrentYear,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
