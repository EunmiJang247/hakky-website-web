import useLogic from './use-logic';
import Loading from '../../../components/loading';
import Failed from '../../../components/failed';
import MenuBar from '../../../components/menu-bar';
import Footer from '../../../components/footer';
import TagSmall from '../../../components/tag-small';
import TagLarge from '../../../components/tag-large';
import TournamentPlan from '../../../components/tournament-plan';
import Pagenation from '../../../components/pagination';

const DivisionPlan = () => {
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
      <div className="md:px-10 sm:px-5">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1420px] flex flex-col justify-between h-full items-top gap-3 md:flex-col md:w-full">
            <TagSmall title="League Division 일정" />
            <TagLarge title="2023 남부리그 DIV. 2 일정" />
            <div className="space20 sm:space0" />
            <TournamentPlan />
          </div>
        </div>
      </div>
      <div className="space60 md:space30" />
      <Pagenation count={100} pageCardCount={10} />
      <div className="space60" />
      <Footer />
    </div>
  );
};

export default DivisionPlan;
