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
import DivisionGoalieRankTable from '../../components/division-goalie-rank-table';
import YoutubeModal from '../../modal-bodies/youtube';
import DivisionStrikerRankTable from '../../components/division-striker-rank-table';

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
      <div className="right-and-left-padding">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex justify-between h-full items-top gap-7 md:flex-col md:w-full">
            <Calendar logic={logic} />
            <Youtube
              setYoutubeUrl={logic.setYoutubeUrl}
              setYoutubeModalOpen={logic.setYoutubeModalOpen}
              youtubes={logic.youtubes}
            />
          </div>
        </div>
        <div className="space60" />
      </div>
      <LeagueBar
        menuLis={logic.menuLis}
        highlightLeague={logic.highlightLeague}
        setHighlightLeague={logic.setHighlightLeague}
      />
      {logic.highlightDivision && (
        <div className="right-and-left-padding">
          <div className="space20" />
          <DivisionsBtn
            highlightLeague={logic.highlightLeague}
            onDivisionBtnClick={logic.onDivisionBtnClick}
            highlightDivision={logic.highlightDivision}
          />
          {logic.highlightDivision.teamScore.length > 0 && (
            <>
              <div className="space20" />
              <div className="space20" />
              <div className="w-full flex justify-center">
                <div className="w-[1420px]">
                  <TagSmall title={`${logic.highlightDivision?.name}순위표`} />
                </div>
              </div>
              <div className="space20" />
              <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[1420px] flex items-center gap-2">
                  <DivisionTeamRankTable teams={logic.teams} />
                </div>
              </div>
            </>
          )}
          {logic.highlightDivision.teamScore.length > 0 && (
            <>
              <div className="space20" />
              <div className="w-full flex justify-center">
                <div className="flex w-[1420px] gap-4 m:w-[940px] md:flex-col">
                  <div className="w-[580px] md:w-full">
                    <TagSmall title={`${logic.highlightDivision?.name} 포인트 순위`} />
                    <div className="space20" />
                    <DivisionStrikerRankTable strikers={logic.strikers} />
                  </div>
                  <div className="w-[580px] md:w-full">
                    <TagSmall title={`${logic.highlightDivision?.name} 골 순위`} />
                    <div className="space20" />
                    <DivisionStrikerRankTable strikers={logic.strikersGoal} />
                  </div>
                  <div className="w-[580px] md:w-full">
                    <TagSmall title={`${logic.highlightDivision?.name} 어시스트 순위`} />
                    <div className="space20" />
                    <DivisionStrikerRankTable strikers={logic.strikersAssist} />
                  </div>
                </div>
              </div>

              <div className="space20" />
              <div className="w-full flex justify-center">
                <div className="flex w-[1420px] gap-4 m:w-[940px] md:flex-col">
                  <div className="flex-1">
                      <TagSmall title={`${logic.highlightDivision?.name} 골리 포인트`} />
                      <div className="space20" />
                      <DivisionGoalieRankTable golies={logic.golies} />
                    </div>
                </div>
              </div>
            </>
          )}
          <div className="space120 sm:space60" />
        </div>
      )}
      {!logic.highlightDivision && <div className="space100 sm:space60" />}
      <Footer />
      {logic.youtubeModalOpen && (
        <YoutubeModal setYoutubeModalOpen={logic.setYoutubeModalOpen} youtubeUrl={logic.youtubeUrl} />
      )}
    </div>
  );
};

export default MainPage;
