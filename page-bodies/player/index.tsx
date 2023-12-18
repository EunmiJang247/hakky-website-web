import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import PlayerDetailTable from '../../components/player-detail';
import TagSmall from '../../components/tag-small';
import Footer from '../../components/footer';
import StrikerRankTable from '../../components/striker-rank-table';

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
        <div className="space100" />
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px]">
            <PlayerDetailTable />
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
            <StrikerRankTable />
          </div>
        </div>
      </div>
      <div className="space100" />
      <Footer />
    </div>
  );
};

export default PlayerDetailPage;
