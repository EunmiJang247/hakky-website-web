import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import Tournament from '../../data-types/tournament';
import useReadTournamentsCalendar from '../../services/tournament/calendar';
import { Youtube } from '../../data-types/youtube';
import MenuContext from '../../contexts/menus';
import Menu from '../../data-types/menu';
import Division, { PlayerScore, TeamScore } from '../../data-types/division';
import useReadDivision from '../../services/division/read';
import useReadYoutubesMain from '../../services/youtube/main';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  youtubeModalOpen: boolean;
  setYoutubeModalOpen: (value: boolean) => void;
  setYoutubeUrl: (value: string) => void;
  setCurrentDate: (value: Date) => void;
  tournaments: Tournament[];
  youtubes: Youtube[] | undefined;
  youtubeUrl: string;
  menuLis: Menu[] | undefined;
  highlightLeague: Menu | undefined;
  setHighlightLeague: (value: Menu) => void;
  highlightDivision: any;
  onDivisionBtnClick: (value: number) => void;
  teams: TeamScore[] | undefined;
  strikers: PlayerScore[] | undefined;
  strikersGoal: PlayerScore[] | undefined;
  strikersAssist: PlayerScore[] | undefined;
  golies: PlayerScore[] | undefined;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const menuLis = useContext(MenuContext);
  const router = useRouter();
  const readTournamentApi = useReadTournamentsCalendar();
  const readDivisionApi = useReadDivision();
  const readYoutubesMain = useReadYoutubesMain();
  const [youtubeModalOpen, setYoutubeModalOpen] = useState<boolean>(false);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [youtubes, setYoutubes] = useState<Youtube[]>();
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [highlightLeague, setHighlightLeague] = useState<Menu | undefined>();
  const [highlightDivision, setHighlightDivision] = useState<Division | undefined>();
  const [teams, setTeams] = useState<TeamScore[]>();
  const [strikers, setStrikers] = useState<PlayerScore[]>();
  const [strikersGoal, setStrikersGoal] = useState<PlayerScore[]>();
  const [strikersAssist, setStrikersAssist] = useState<PlayerScore[]>();
  const [golies, setGolies] = useState<PlayerScore[]>();

  const init = async () => {
    try {
      const tournamentsFromServer = await readTournamentApi({ startDate, endDate });
      setTournaments(tournamentsFromServer);
      const youtubeFromServe = await readYoutubesMain({ limit: 6, skip: 0 });
      setYoutubes(youtubeFromServe.result);
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  const readDivision = async (id: string) => {
    const divisionFromServer = await readDivisionApi({ id });
    if (divisionFromServer) {
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
        const before = a.score && a.score.PTS !== undefined ? a.score.PTS : 0;
        const after = b.score && b.score.PTS !== undefined ? b.score.PTS : 0;

        if (before < after) return 1; // before와 after를 반대로 비교
        if (before > after) return -1; // before와 after를 반대로 비교
        return 0;
      });
      strikerListByRank = strikerListByRank.filter(item => item !== null);
      const top10Strikers = strikerListByRank.slice(0, 10);
      setStrikers(top10Strikers);

      strikerListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
        // a와 b 중 하나라도 null이면 뒤로 보내기
        if (a === null || b === null) {
          return a === null ? 1 : -1;
        }

        // a와 b 모두 score.P 속성이 없으면 둘을 같은 것으로 처리
        const before = a.score && a.score.G !== undefined ? a.score.G : 0;
        const after = b.score && b.score.G !== undefined ? b.score.G : 0;

        if (before < after) return 1; // before와 after를 반대로 비교
        if (before > after) return -1; // before와 after를 반대로 비교
        return 0;
      });
      strikerListByRank = strikerListByRank.filter(item => item !== null);
      const top10StrikersGoal = strikerListByRank.slice(0, 10);
      setStrikersGoal(top10StrikersGoal);

      strikerListByRank.sort(function compare(a: PlayerScore, b: PlayerScore) {
        // a와 b 중 하나라도 null이면 뒤로 보내기
        if (a === null || b === null) {
          return a === null ? 1 : -1;
        }

        // a와 b 모두 score.P 속성이 없으면 둘을 같은 것으로 처리
        const before = a.score && a.score.A !== undefined ? a.score.A : 0;
        const after = b.score && b.score.A !== undefined ? b.score.A : 0;

        if (before < after) return 1; // before와 after를 반대로 비교
        if (before > after) return -1; // before와 after를 반대로 비교
        return 0;
      });
      strikerListByRank = strikerListByRank.filter(item => item !== null);
      const top10StrikersAssist = strikerListByRank.slice(0, 10);
      setStrikersAssist(top10StrikersAssist);

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
  };

  const onDivisionBtnClick = (idx: number) => {
    if (highlightLeague && highlightLeague?.divisions && highlightLeague?.divisions.length > 0) {
      readDivision(highlightLeague.divisions[idx].divisionId);
    } else {
      setHighlightDivision(undefined);
    }
  };

  useEffect(() => {
    if (highlightLeague && highlightLeague?.divisions && highlightLeague?.divisions.length > 0) {
      readDivision(highlightLeague.divisions[0].divisionId);
    } else {
      setHighlightDivision(undefined);
    }
  }, [highlightLeague]);

  useEffect(() => {
    if (menuLis !== undefined) {
      const middleMenubarMenus = menuLis.filter(m => m.leagueType === 'regular');
      setHighlightLeague(middleMenubarMenus[0]);
    }
  }, [menuLis]);

  useEffect(() => {
    init();
  }, [currentDate]);

  if (tournaments === undefined) {
    return {
      status: 'LOADING',
    };
  }

  return {
    status: 'LOADED',
    youtubeModalOpen,
    setYoutubeModalOpen,
    setYoutubeUrl,
    setCurrentDate,
    tournaments,
    youtubes,
    youtubeUrl,
    menuLis,
    highlightLeague,
    setHighlightLeague,
    highlightDivision,
    onDivisionBtnClick,
    teams,
    strikers,
    strikersGoal,
    strikersAssist,
    golies,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
