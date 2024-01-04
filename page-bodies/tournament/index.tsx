import DivisionTitleBar from '../../components/division-title-bar';
import Failed from '../../components/failed';
import Footer from '../../components/footer';
import Loading from '../../components/loading';
import MenuBar from '../../components/menu-bar';
import MiddleBar from '../../components/middle-bar';
import TagSmall from '../../components/tag-small';
import TournamentGoalieRankTable from '../../components/tournament-goalie-rank-table';
import TournamentPenaltyRankTable from '../../components/tournament-penalty-rank-table';
import TournamentScoreDetail from '../../components/tournament-score-detail';
import TournamentScoreDetailReady from '../../components/tournament-score-detail-ready';
import TournamentStrikerRankTable from '../../components/tournament-striker-rank-table';
import TournamentTeamScore from '../../components/tournament-team-score';
import useLogic from './use-logic';

const Tournament = () => {
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
      {(logic.tournamentData.homeTeamGoalCount || logic.tournamentData.awayTeamGoalCount) && (
        <>
          <div className="space100 md:space80 sm:space60" />
          <div className="w-full flex justify-center items-center right-and-left-padding">
            <div className="w-full max-w-[1420px]">
              <DivisionTitleBar divisionTitle={logic.tournamentData.divisionName} year={logic.tournamentData.year} />
              <div className="space20" />
              <TournamentScoreDetail tournamentData={logic.tournamentData} />
              <div className="space60" />
              <TagSmall title="결과" />
              <div className="space20" />
              <TournamentTeamScore
                optionsGoalsHome={logic.optionsGoalsHome}
                optionsGoalsAway={logic.optionsGoalsAway}
                tournamentData={logic.tournamentData}
              />
              <div className="space20" />
              <MiddleBar
                setTabName={logic.setTabName}
                tabName={logic.tabName}
                homeTeamName={logic.tournamentData.homeTeamName}
                awayTeamName={logic.tournamentData.awayTeamName}
              />
              <div className="space20" />
              <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
                <TournamentStrikerRankTable tournamentData={logic.tournamentData} tabName={logic.tabName} />
                <div className="grid grid-rows-2 gap-5">
                  <TournamentPenaltyRankTable tournamentData={logic.tournamentData} tabName={logic.tabName} />
                  <TournamentGoalieRankTable tournamentData={logic.tournamentData} tabName={logic.tabName} />
                </div>
              </div>
              <div className="space100" />
            </div>
          </div>
        </>
      )}
      {!logic.tournamentData.homeTeamGoalCount && !logic.tournamentData.awayTeamGoalCount && (
        <>
          <div className="space100 md:space80 sm:space60" />
          <div className="w-full flex justify-center items-center right-and-left-padding">
            <div className="w-full max-w-[1420px]">
              <DivisionTitleBar divisionTitle={logic.tournamentData.divisionName} year={logic.tournamentData.year} />
              <div className="space20" />
              <TournamentScoreDetailReady tournamentData={logic.tournamentData} />
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
