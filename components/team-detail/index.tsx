import Team from '../../data-types/team';

interface Props {
  team: Team;
}

const TeamDetailTable: React.FC<Props> = ({ team }) => {
  return (
    <>
      <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer w-80 px-4 py-1.5 sm:w-full">
        팀정보
      </p>
      <div className="bg-black p-5 flex flex-col gap-6">
        <p className="font32700white sm:font20700white">{team.name}</p>
        <div className="flex md:flex-col">
          <div className="w-[360px] flex justify-center border border-dark-gray md:w-full">
            <img src={team.file.tempUrl} className="w-[140px] py-5" alt="logo" />
          </div>
          <div className="flex-1 flex flex-col text-white justify-between">
            <div className="flex flex-1 sm:flex-col">
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">대표</p>
                <p className="font20700white sm:font1626700white">{team.chiefName}</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">부대표</p>
                <p className="font20700white sm:font1626700white">{team.viceChiefName}</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">감독</p>
                <p className="font20700white sm:font1626700white">{team.pd}</p>
              </div>
              <div className="border border-dark-gray flex-1 py-7 px-6">
                <p className="font14700gray">코치</p>
                <p className="font20700white sm:font1626700white">{team.coach}</p>
              </div>
            </div>
            <div className="flex flex-1 border border-dark-gray sm:flex-col">
              <div className="flex-1 py-7 px-6">
                <p className="font14700gray">대관장소</p>
                <p className="font20700white">{team.place}</p>
              </div>
              <div className="flex-1 py-7 px-6 border border-dark-gray">
                <p className="font14700gray">대관시간</p>
                <p className="font20700white">{team.borrowTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailTable;
