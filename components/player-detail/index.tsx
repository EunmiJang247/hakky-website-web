const PlayerDetailTable: React.FC = () => {
  return (
    <>
      <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer w-80 px-4 py-1.5 sm:w-full">
        선수 정보
      </p>
      <div className="bg-black flex flex-col p-5">
        <p className="font32700white mb-5 sm:font20700white">정문광</p>
        <div className="flex sm:flex-col">
          <div className="flex-1 border border-dark-gray p-5">
            <p className="font14700gray">프로필 사진</p>
            <div className="flex justify-center sm:mt-4">
              <img src="/profile-img.png" alt="" className="sm:w-24" />
            </div>
          </div>
          <div className="flex-1 border border-dark-gray p-5 relative inset-x-[-1px]">
            <p className="font14700gray">팀 로고</p>
            <div className="flex justify-center">
              <img src="/logo140.png" alt="" className="w-[207px] sm:w-28" />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1 border border-dark-gray p-5">
            <p className="font14700gray">이름</p>
            <p className="font20700white sm:font16700white">정문광</p>
          </div>
          <div className="flex-1 border border-dark-gray p-5 relative inset-x-[-1px]">
            <p className="font14700gray">현재팀</p>
            <p className="font20700white sm:font16700white">바이킹스</p>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1 border border-dark-gray p-7 sm:p-5">
            <p className="font14700gray">국적</p>
            <p className="font20700white sm:font16700white">대한민국</p>
          </div>
          <div className="flex-1 border border-dark-gray p-7 relative inset-x-[-1px] sm:p-5">
            <p className="font14700gray">포지션</p>
            <p className="font20700white sm:font16700white">공격수</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDetailTable;
