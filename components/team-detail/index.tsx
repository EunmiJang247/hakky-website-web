const TeamDetailTable: React.FC = () => {
  return (
    <>
      <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer w-80 px-4 py-1.5">
        팀정보
      </p>
      <div className="bg-black p-5 flex flex-col gap-6">
        <p className="font32700white">TEAM 1</p>
        <div className="flex">
          <div className="w-[360px] flex justify-center border border-dark-gray">
            <img src="/logo140.png" alt="logo" />
          </div>
          <div className="flex-1 flex flex-col text-white justify-between">
            <div className="flex flex-1">
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">대표</p>
                <p className="font20700white">김관엽</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">대표</p>
                <p className="font20700white">김관엽</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">대표</p>
                <p className="font20700white">김관엽</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">대표</p>
                <p className="font20700white">김관엽</p>
              </div>
            </div>
            <div className="flex flex-1 border border-dark-gray">
              <div className="flex-1 py-7 px-6">
                <p className="font14700gray">대관장소</p>
                <p className="font20700white">김관엽</p>
              </div>
              <div className="flex-1 py-7 px-6 border border-dark-gray">
                <p className="font14700gray">대관 시간</p>
                <p className="font20700white">김관엽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailTable;