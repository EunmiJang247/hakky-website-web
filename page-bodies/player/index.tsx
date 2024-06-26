import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import PlayerDetailTable from '../../components/player-detail';
import TagSmall from '../../components/tag-small';
import Footer from '../../components/footer';
import DivisionStrikerRankTableOnePlayer from '../../components/division-striker-rank-table-one-player';
import DivisionGoalieRankTableOnePlayer from '../../components/division-goalie-rank-table-one-player';

const PlayerDetailPage = () => {
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
        <div className="space100 md:space80 sm:space60" />
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px]">
            <PlayerDetailTable player={logic.player} />
          </div>
        </div>
        <div className="space20" />
        <div className="w-full flex justify-center">
          <div className="w-[1420px]">
            <TagSmall title="플레이어" />
          </div>
        </div>
        <div className="space20" />
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex items-center gap-2">
            {(logic.player.position === '공격수' || logic.player.position === '수비수') && (
              <DivisionStrikerRankTableOnePlayer striker={logic.playerScore} teamName={logic.player.teamName} />
            )}
            {logic.player.position === '골리' && (
              <DivisionGoalieRankTableOnePlayer golie={logic.playerScore} teamName={logic.player.teamName} />
            )}
          </div>
        </div>
      </div>
      <div className="space100" />
      <Footer />
    </div>
  );
};

export default PlayerDetailPage;
