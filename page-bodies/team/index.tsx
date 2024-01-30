import { useState } from 'react';
import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import TeamDetailTable from '../../components/team-detail';
import Footer from '../../components/footer';
import YearlyTeamRankTable from '../../components/yearly-team-rank-table';
import DivisionGoalieRankTable from '../../components/division-goalie-rank-table';
import TagSmall from '../../components/tag-small';
import SelectBox from '../../components/select-box';
import DivisionStrikerRankTable from '../../components/division-striker-rank-table';

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
            <button
              className={
                tabMenu === 'player'
                  ? 'py-5 px-7 text-white cursor-pointer border-b-4 border-b-main-blue'
                  : 'py-5 px-7 text-white cursor-pointer'
              }
              type="button"
              onClick={() => setTabMenu('player')}
            >
              선수
            </button>
            {/* <button
              className={
                tabMenu === 'tournament'
                  ? 'py-5 px-7 text-white cursor-pointer border-b-4 border-b-main-blue'
                  : 'py-5 px-7 text-white cursor-pointer'
              }
              type="button"
              onClick={() => setTabMenu('tournament')}
            >
              경기
            </button> */}
          </div>
        </div>
        {tabMenu === 'player' && (
          <>
            <div className="space20" />
            <div className="space20" />
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
                <SelectBox currentYear={logic.currentYear} setCurrentYear={logic.setCurrentYear} />
                <div className="space20" />
                <TagSmall title="포인트 순위" />
                <div className="space20" />
                <DivisionStrikerRankTable
                  strikers={logic.strikers}
                  teamName={logic.team.name}
                  currentYear={logic.currentYear}
                />
                <div className="space20" />
                <TagSmall title="골리 순위표" />
                <div className="space20" />
                <DivisionGoalieRankTable
                  golies={logic.strikers}
                  teamName={logic.team.name}
                  currentYear={logic.currentYear}
                />
              </div>
            </div>
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
