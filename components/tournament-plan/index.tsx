const TournamentPlan = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="">
        <div className="bg-black px-8 sm:px-4 py-2 border-b border-dark-gray font1620700lightgray sm:font12700lightgray">
          2023년 11월 18일 (금)
        </div>
        <div className="flex items-center justify-between bg-black text-white px-8 py-7 sm:flex-col md:gap-5">
          <p className="font15500white">
            14:00 <span className="font15500gray ml-2">안양</span>
          </p>
          <div className="flex gap-5 items-center">
            <div className="flex gap-1.5 font16700white sm:font12700white">
              TEAM <img src="/small-logo.png" alt="logo" />
            </div>
            <div className="bg-dark-gray py-3 px-16 md:py-2 md:px-5">00:00</div>
            <div className="flex gap-1.5 font16700white sm:font12700white">
              <img src="/small-logo.png" alt="logo" /> TEAM
            </div>
          </div>
          <button type="button" className="px-3 py-1 text-white border">
            자세히보기
          </button>
        </div>
      </div>
      <div className="">
        <div className="bg-black px-8 sm:px-4 py-2 border-b border-dark-gray font1620700lightgray sm:font12700lightgray">
          2023년 11월 18일 (금)
        </div>
        <div className="flex items-center justify-between bg-black text-white px-8 sm:px-2 sm:py-5 py-7 sm:flex-col md:gap-5">
          <p className="font15500white flex">
            14:00 <span className="font15500gray ml-2">안양</span>
          </p>
          <div className="flex gap-5 items-center sm:gap-1">
            <div className="flex gap-1.5 font16700white sm:font12700white">
              TEAM <img src="/small-logo.png" alt="logo" />
            </div>
            <div className="bg-dark-gray py-3 px-5 md:py-2 md:px-5 sm:py-1 sm:px-2 font1620700lightgray sm:font14700lightgray">
              105
            </div>
            <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-transparent bg-clip-text">
              VS
            </p>
            <div className="bg-dark-gray py-3 px-5 md:py-2 md:px-5 sm:py-1 sm:px-2 font1620700lightgray sm:font14700lightgray">
              105
            </div>
            <div className="flex gap-1.5 font16700white sm:font12700white">
              <img src="/small-logo.png" alt="logo" /> TEAM
            </div>
          </div>
          <button type="button" className="px-3 py-1 text-white border">
            자세히보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentPlan;
