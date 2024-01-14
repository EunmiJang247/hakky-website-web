import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-black mt-auto md:px-10 py-10 sm:py-6">
        <div className="w-full max-w-[1420px] flex justify-between h-full items-center sm:flex-col gap-8 sm:items-start">
          <div className="text-white">
            <p className="font22700white">HOCKEY TV</p>
            <div className="space20" />
            <div className="flex flex-col gap-2">
              <p className="font14400lightgray">대표자명: 임이삭</p>
              <p className="font14400lightgray">주소: 기도 과천시 관문로 92, 101동 2020호(힐스테이트 과천중앙) </p>
              <p className="font14400lightgray">이메일: hockeytvkorea@gmail.com</p>
            </div>
          </div>
          <div className="text-white font22700white">
            <p>
              OUR
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-transparent bg-clip-text">
                YOUTUBE
              </span>
            </p>
            <div className="flex mt-6 itmes-center">
              <Link
                href="https://www.youtube.com/@Hockeytv_"
                type="button"
                className="text-white bg-dark-gray px-4 min-w-[296px] text-left font12400gray sm:min-w-[200px] flex items-center"
              >
                https://www.youtube.com/@Hockeytv_
              </Link>
              <img src="/footer/footer-youtube-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-11 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end font20700white">
        HOCKEY TV
      </div>
      {/* <div className="w-full flex justify-center items-center h-11 bg-black underline font1620500darkgray">
        <Link href="https://accesshomepage.com" className="font-light">
          Made By 여의도개발자들
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
