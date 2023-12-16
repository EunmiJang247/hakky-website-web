import { useState } from 'react';
import Failed from '../../components/failed';
import Footer from '../../components/footer';
import Loading from '../../components/loading';
import MenuBar from '../../components/menu-bar';
import TagSmall from '../../components/tag-small';
import TournamentGoalieRankTable from '../../components/tournament-goalie-rank-table';
import TournamentScoreDetail from '../../components/tournament-score-detail';
import TournamentScoreDetailReady from '../../components/tournament-score-detail-ready';
import TournamentStrikerRankTable from '../../components/tournament-striker-rank-table';
import TournamentTeamScore from '../../components/tournament-team-score';
import useLogic from './use-logic';

const Tournament = () => {
  const [tournamentFinish, setTournamentFinish] = useState<boolean>(false);
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
          <div className="space100" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px]">
              <TournamentScoreDetail />
              <div className="space60" />
              <TagSmall title="결과" />
              <div className="space20" />
              <TournamentTeamScore />
              <div className="space40" />
              <div className="bg-black flex">
                <p className="py-5 px-28 font1626700white bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
                  Team1
                </p>
                <p className="py-5 px-28 font1626700white">Team2</p>
              </div>
              <div className="space60" />
              <div className="flex gap-5">
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
          <div className="space100" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px]">
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
