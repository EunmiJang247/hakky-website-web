import { useState } from 'react';
import DivisionTitleBar from '../../components/division-title-bar';
import Failed from '../../components/failed';
import Footer from '../../components/footer';
import Loading from '../../components/loading';
import MenuBar from '../../components/menu-bar';
import MiddleBar from '../../components/middle-bar';
import TagSmall from '../../components/tag-small';
import TournamentGoalieRankTable from '../../components/tournament-goalie-rank-table';
import TournamentScoreDetail from '../../components/tournament-score-detail';
import TournamentScoreDetailReady from '../../components/tournament-score-detail-ready';
import TournamentStrikerRankTable from '../../components/tournament-striker-rank-table';
import TournamentTeamScore from '../../components/tournament-team-score';
import useLogic from './use-logic';

const Tournament = () => {
  const [tournamentFinish, setTournamentFinish] = useState<boolean>(true);
  const logic = useLogic();

  if (logic.status === 'LOADING') {
    return <Loading />;
  }

  if (logic.status === 'FAILED') {
    return <Failed logic={logic} />;
  }

  return (
    <div className="bg-gradient bg-no-repeat bg-cover min-h-screen flex flex-col overflow-hidden">
      <MenuBar />
      {tournamentFinish && (
        <>
          <div className="space100 md:space80 sm:space60" />
          <div className="w-full flex justify-center items-center md:px-10 sm:px-5">
            <div className="w-full max-w-[1420px]">
              <DivisionTitleBar />
              <div className="space20" />
              <TournamentScoreDetail />
              <div className="space60" />
              <TagSmall title="결과" />
              <div className="space20" />
              <TournamentTeamScore />
              <div className="space20" />
              <MiddleBar />
              <div className="space20" />
              <div className="flex gap-5 md:flex-col">
                <TournamentStrikerRankTable />
                <TournamentGoalieRankTable />
              </div>
              <div className="space100" />
            </div>
          </div>
        </>
      )}
      {!tournamentFinish && (
        <>
          <div className="space100 md:space80 sm:space60" />
          <div className="w-full flex justify-center items-center md:px-10 sm:px-5">
            <div className="w-full max-w-[1420px]">
              <DivisionTitleBar />
              <div className="space20" />
              <TournamentScoreDetailReady />
              <div className="space100" />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Tournament;
