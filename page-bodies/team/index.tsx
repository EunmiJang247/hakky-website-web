import { useState } from 'react';
import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import TeamDetailTable from '../../components/team-detail';
import Footer from '../../components/footer';
import TournamentPlan from '../../components/tournament-plan';
import YearlyTeamRankTable from '../../components/yearly-team-rank-table';
import TeamPlayerTable from '../../components/team-player-table';

const TeamDetail = () => {
  const [tabMenu, setTabMenu] = useState<string>('player');
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
      <div className="right-and-left-padding">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px]">
            <div className="space100" />
            <TeamDetailTable team={logic.team} />
          </div>
        </div>
        <div className="space20" />
        <div className="space20" />
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex items-center gap-2">
            <YearlyTeamRankTable teamScore={logic.teamScore} />
          </div>
        </div>
        <div className="space60" />
        <div className="w-full flex justify-center items-center bg-black">
          <div className="w-full max-w-[1420px] flex items-center ">
            <button className="py-5 px-7 text-white cursor-pointer" type="button" onClick={() => setTabMenu('player')}>
              선수
            </button>
            <button
              className="py-5 px-7 text-white cursor-pointer"
              type="button"
              onClick={() => setTabMenu('tournament')}
            >
              경기
            </button>
          </div>
        </div>
        {tabMenu === 'player' && (
          <>
            <div className="space20" />
            <div className="space20" />
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
                <TeamPlayerTable players={logic.players} />
              </div>
            </div>
            <div className="space20" />
          </>
        )}
        {/* {tabMenu === 'tournament' && (
          <>
            <div className="space20" />
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
                <TournamentPlan />
              </div>
            </div>
          </>
        )} */}
        <div className="space100" />
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetail;
