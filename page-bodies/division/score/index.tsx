import Loading from '../../../components/loading';
import Failed from '../../../components/failed';
import MenuBar from '../../../components/menu-bar';
import Footer from '../../../components/footer';
import TagSmall from '../../../components/tag-small';
import DivisionTeamRankTable from '../../../components/division-team-rank-table';
import DivisionGoalieRankTable from '../../../components/division-goalie-rank-table';
import useLogic from './use-logic';
import DivisionStrikerRankTable from '../../../components/division-striker-rank-table';

const DivisionScore = () => {
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
      <div className="space60" />
      <div className="right-and-left-padding">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex flex-col justify-between h-full items-top md:flex-col md:w-full">
            <TagSmall title={`${logic.highlightDivision?.name} 팀 순위표`} />
            <div className="space20" />
            <DivisionTeamRankTable teams={logic.teams} />
            <div className="space60 sm:space20" />
            <div className="flex gap-5 md:flex-col md:gap-14">
              <div className="w-[580px] md:w-full">
                <TagSmall title={`${logic.highlightDivision?.name} 포인트 순위`} />
                <div className="space20" />
                <DivisionStrikerRankTable strikers={logic.strikers} />
              </div>
              <div className="flex-1">
                <TagSmall title={`${logic.highlightDivision?.name} 골리 포인트`} />
                <div className="space20" />
                <DivisionGoalieRankTable golies={logic.golies} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space60" />
      <Footer />
    </div>
  );
};

export default DivisionScore;
