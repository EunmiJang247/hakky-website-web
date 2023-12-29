import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
}

const TournamentScoreDetail: React.FC<Props> = ({ tournamentData }) => {
  return (
    <div className="p-5 bg-black sm:flex sm:flex-col items-center">
      <p className="font15500white sm:mb-6">
        {new Date(tournamentData.tournamentDate).toLocaleDateString()} {tournamentData.time}
        <span>{tournamentData.venuePlace}</span>
      </p>
      <div className="flex pt-1 pb-4 justify-center items-center gap-14 sm:gap-2">
        <div className="flex gap-6 items-center sm:flex-col sm:gap-1">
          <div className="flex gap-6 items-center sm:flex sm:gap-2">
            <p className="bg-dark-gray p-3 rounded font1624500white sm:font12500white sm:py-1 sm:px-2">홈</p>
            <p className="font32700white sm:font14600white">{tournamentData.homeTeamName}</p>
            <p className="w-16 h-16 sm:w-6 sm:h-6">
              <img src={`${tournamentData.homeTeamLogo.tempUrl}`} alt="" />
            </p>
          </div>
          <p className="font48700white sm:font32700white">{tournamentData.homeTeamGoalCount}</p>
        </div>
        <p className="font22700 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-transparent bg-clip-text">
          VS
        </p>
        <div className="flex gap-6 items-center sm:flex-col sm:gap-1">
          <p className="font48700white sm:font32700white">{tournamentData.awayTeamGoalCount}</p>
          <div className="flex gap-6 items-center sm:flex sm:gap-2">
            <p className="w-16 h-16 sm:w-6 sm:h-6">
              <img src="/logo140.png" alt="" />
            </p>
          </div>
          <p className="font32700white sm:font14600white">{tournamentData.awayTeamName}</p>
          <p className="bg-dark-gray p-3 rounded font1624500white sm:font12500white sm:py-1 sm:px-2">어웨이</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentScoreDetail;
