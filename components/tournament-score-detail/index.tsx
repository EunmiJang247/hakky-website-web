const TournamentScoreDetail = () => {
  return (
    <>
      <div className="bg-black flex justify-center relative">
        <p className="px-3 py-2 bg-dark-gray left-0 absolute top-5 left-5 rounded-md font1624500white">시즌 2023</p>
        <p className="font2736700white py-5">경기남부 디비전 2</p>
      </div>
      <div className="space20" />
      <div className="p-5 bg-black">
        <p className="font15500white">
          2023년 11월 18일 (금) 14:00 <span>안양</span>
        </p>
        <div className="flex pt-1 pb-4 justify-center items-center gap-14">
          <div className="flex gap-6 items-center">
            <p className="bg-dark-gray p-3 rounded font1624500white">홈</p>
            <p className="font32700white">Team1</p>
            <p className="w-16 h-16">
              <img src="/logo140.png" alt="" />
            </p>
            <p className="font48700white">00</p>
          </div>
          <p className="font22700 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-transparent bg-clip-text">
            VS
          </p>
          <div className="flex gap-6 items-center">
            <p className="w-16 h-16">
              <img src="/logo140.png" alt="" />
            </p>
            <p className="font48700white">00</p>
            <p className="bg-dark-gray p-3 rounded font1624500white">어웨이</p>
          </div>
        </div>
      </div>
      <div className="space10" />
      <div className="bg-gradient-to-r from-main-blue via-black to-black relative">
        <p className="absolute top-7 left-8 font15500white">
          <span className="font20700white mr-4">Next</span>2023년 11월 18일 (금) 14:00
          <span className="font14700gray ml-4">안양</span>
        </p>
        <div className="flex py-4 justify-center items-center gap-14">
          <div className="flex gap-6 items-center">
            <p className="font1630700white">Team1</p>
            <p className="w-10 h-10">
              <img src="/logo140.png" alt="" />
            </p>
          </div>
          <p className="font1620500darkgray">VS</p>
          <div className="flex gap-6 items-center">
            <p className="w-10 h-10">
              <img src="/logo140.png" alt="" />
            </p>
            <p className="font1630700white">Team2</p>
          </div>
        </div>
        <div className="absolute top-5 right-8 font15500white flex gap-1 items-center">
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="font1624500white mr-1">일</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="font1624500white mr-1">시</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="font1624500white mr-1">분</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray">0</p>
          <p className="font1624500white mr-1">초</p>
        </div>
      </div>
    </>
  );
};

export default TournamentScoreDetail;
