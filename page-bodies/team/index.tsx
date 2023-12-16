import { useState } from 'react';
import { useRouter } from 'next/router';
import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import TeamDetailTable from '../../components/team-detail';
import SelectBox from '../../components/select-box';
import DivisionTeamRankTable from '../../components/division-team-rank-table';
import TagSmall from '../../components/tag-small';
import DivisionsBtn from '../../components/division-btn';
import DivisionStrikerRankTable from '../../components/division-striker-rank-table';
import DivisionGoalieRankTable from '../../components/division-goalie-rank-table';
import Footer from '../../components/footer';
import TournamentPlan from '../../components/tournament-plan';

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
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1420px]">
          <div className="space100" />
          <TeamDetailTable />
          <div className="space60" />
          <div className="flex">
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
        </div>
      </div>
      <div className="space20" />
      <div className="w-full flex justify-center">
        <div className="w-[1420px]">
          <TagSmall title="2023 남부리그 DIV. 1 순위표" />
        </div>
      </div>
      <div className="space20" />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1420px] flex items-center gap-2">
          <DivisionTeamRankTable />
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
          <DivisionsBtn />
          <div className="space20" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
              <TagSmall title="공격수" />
              <div className="space20" />
              <DivisionStrikerRankTable />
            </div>
          </div>
          <div className="space20" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
              <TagSmall title="수비수" />
              <div className="space20" />
              <DivisionStrikerRankTable />
            </div>
          </div>
          <div className="space20" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
              <TagSmall title="골리" />
              <div className="space20" />
              <DivisionGoalieRankTable />
            </div>
          </div>
        </>
      )}
      {tabMenu === 'tournament' && (
        <>
          <div className="space20" />
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1420px] flex items-center gap-2 flex-col">
              <TournamentPlan />
            </div>
          </div>
        </>
      )}
      <div className="space100" />
      <Footer />
    </div>
  );
};

export default TeamDetail;
