import Failed from '../../components/failed';
import Footer from '../../components/footer';
import Loading from '../../components/loading';
import MenuBar from '../../components/menu-bar';
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
      <div className="space100" />
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1420px]">
          <div className="bg-black flex justify-center relative">
            <p className="px-3 py-2 bg-dark-gray left-0 absolute top-5 left-5 rounded-md font1624500white">시즌 2023</p>
            <p className="font2736700white py-5">경기남부 디비전 2</p>
          </div>
          <div className="space20" />
          <div className="p-5 bg-black">
            <p className="font15500white">
              2023년 11월 18일 (금) 14:00 <span>안양</span>
            </p>
            <div className="flex">
              <div className="flex">
                <p>홈</p>
                <p>로고</p>
                <p>00</p>
              </div>
              <p>VS</p>
              <div className="flex">
                <p>로고</p>
                <p>00</p>
                <p>어웨이</p>
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

export default Tournament;
