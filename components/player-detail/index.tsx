import Player from '../../data-types/player';

interface Props {
  player: Player;
}

const PlayerDetailTable: React.FC<Props> = ({ player }) => {
  return (
    <>
      <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer w-80 px-4 py-1.5 sm:w-full">
        선수 정보
      </p>
      <div className="bg-black flex flex-col p-5">
        <p className="font32700white mb-5 sm:font20700white">{player.name}</p>
        <div className="flex sm:flex-col">
          <div className="flex-1 border border-dark-gray p-5">
            <p className="font14700gray">프로필 사진</p>
            <div className="flex justify-center sm:mt-4">
              <img src={player.file.tempUrl} alt="" className="w-24 sm:w-24" />
            </div>
          </div>
          <div className="flex-1 border border-dark-gray p-5 relative inset-x-[-1px]">
            <p className="font14700gray">현재팀</p>
            <p className="font20700white sm:font16700white">{player.teamName}</p>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1 border border-dark-gray p-7 sm:p-5">
            <p className="font14700gray">등번호</p>
            <p className="font20700white sm:font16700white">{player.backNumber}</p>
          </div>
          <div className="flex-1 border border-dark-gray p-7 relative inset-x-[-1px] sm:p-5">
            <p className="font14700gray">포지션</p>
            <p className="font20700white sm:font16700white">{player.position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDetailTable;
