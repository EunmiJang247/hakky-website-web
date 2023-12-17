import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import Footer from '../../components/footer';
import Pagenation from '../../components/pagination';

const Youtube = () => {
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
      <div className="w-full flex justify-center items-center md:px-20 sm:px-5">
        <div className="w-full max-w-[1420px] flex justify-between h-full items-top gap-7 md:flex-col md:w-full">
          <div className="grid grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <img src="/youtube-screen.png" alt="" />
              <div className="flex flex-col items-start">
                <p className="font1624500white">그리즈에 유독 강한</p>
                <p className="font1218400gray">2023.01.01</p>
                <p className="font1218400gray">15Views | 2 Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space100" />
      <Pagenation count={50} pageCardCount={10} />
      <div className="space100" />
      <Footer />
    </div>
  );
};

export default Youtube;
