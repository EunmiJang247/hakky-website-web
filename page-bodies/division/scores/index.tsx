import useLogic from '../plan/use-logic';
import Loading from '../../../components/loading';
import Failed from '../../../components/failed';
import MenuBar from '../../../components/menu-bar';
import Footer from '../../../components/footer';
import TagSmall from '../../../components/tag-small';
import TagLarge from '../../../components/tag-large';
import DivisionTeamRankTable from '../../../components/division-team-rank-table';
import MiddleBar from '../../../components/middle-bar';

const DivisionScores = () => {
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
            {/* <TagSmall title="League Division 일정" />
            <div className="space20" />
            <TagLarge title="2023 남부리그" />
            <div className="space40" />
            <MiddleBar />
            <div className="space40" />
            <TagSmall title="디비전1" />
            <div className="space20" />
            <DivisionTeamRankTable />
            <div className="space40 sm:space20" />
            <TagSmall title="디비전1" />
            <div className="space20" />
            <DivisionTeamRankTable />
            <div className="space40 sm:space20" />
            <TagSmall title="디비전1" />
            <div className="space20" />
            <DivisionTeamRankTable />
            <div className="space40 sm:space20" />
            <TagSmall title="디비전1" />
            <div className="space20" />
            <DivisionTeamRankTable /> */}
          </div>
        </div>
      </div>
      <div className="space60" />
      <Footer />
    </div>
  );
};

export default DivisionScores;
