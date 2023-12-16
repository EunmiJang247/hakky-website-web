import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import Banner from '../../components/banner';
import MenuBar from '../../components/menu-bar';
import Footer from '../../components/footer';
import Calendar from '../../components/calendar';
import Youtube from '../../components/youtube';
import LeagueBar from '../../components/league-bar';
import DivisionsBtn from '../../components/division-btn';
import TagSmall from '../../components/tag-small';
import DivisionTeamRankTable from '../../components/division-team-rank-table';
import DivisionStrikerRankTable from '../../components/division-striker-rank-table';
import DivisionGoalieRankTable from '../../components/division-goalie-rank-table';

const MainPage = () => {
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
      <Banner />
      <div className="space60" />
      <div className="md:px-10 sm:px-5">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex justify-between h-full items-top gap-7 md:flex-col md:w-full">
            <Calendar />
            <Youtube />
          </div>
        </div>
        <div className="space60" />
        <LeagueBar />
        <div className="space20" />
        <DivisionsBtn />
        <div className="space20" />
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
        <div className="space20" />
        <div className="space20" />
        <div className="w-full flex justify-center">
          <div className="flex w-[1420px] gap-4 m:w-[940px] md:flex-col">
            <div className="w-[580px] md:w-full">
              <TagSmall title="2023 남부리그 DIV. 1 순위표" />
              <div className="space20" />
              <DivisionStrikerRankTable />
            </div>
            <div className="flex-1">
              <TagSmall title="2023 남부리그 DIV. 1 순위표" />
              <div className="space20" />
              <DivisionGoalieRankTable />
            </div>
          </div>
        </div>
        <div className="space120" />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
