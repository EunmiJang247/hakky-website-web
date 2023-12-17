const TournamentScoreDetailReady = () => {
  return (
    <div className="bg-gradient-to-r from-main-blue via-black to-black relative md:static md:p-5">
      <div className="md:flex md:flex-wrap md:justify-between sm:flex-col sm:items-center gap-6">
        <div className="absolute top-7 left-8 font15500white flex md:static sm:flex-col sm:items-center sm:gap-2">
          <span className="font20700white mr-4 sm:mr-0">Next</span>
          <p>2023년 11월 18일 (금) 14:00</p>
          <span className="font14700gray ml-4 sm:ml-0">안양</span>
        </div>
        <div className="absolute top-5 right-8 font15500white flex gap-1 items-center md:static">
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="font1624500white mr-1">일</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="font1624500white mr-1">시</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="font1624500white mr-1">분</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="bg-darker-gray p-2 rounded border border-light-gray sm:p-1">0</p>
          <p className="font1624500white mr-1">초</p>
        </div>
      </div>
      <div className="flex py-4 justify-center items-center gap-14 sm:gap-2">
        <div className="flex gap-6 items-center sm:gap-2">
          <p className="font1630700white">Team1</p>
          <p className="w-10 h-10">
            <img src="/logo140.png" alt="" />
          </p>
        </div>
        <p className="font1620500darkgray">VS</p>
        <div className="flex gap-6 items-center sm:gap-2">
          <p className="w-10 h-10">
            <img src="/logo140.png" alt="" />
          </p>
          <p className="font1630700white">Team2</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentScoreDetailReady;
