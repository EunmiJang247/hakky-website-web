import Link from 'next/link';
import Tournament from '../../data-types/tournament';

interface Props {
  data: Tournament[] | undefined;
}

const TournamentPlan: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {data?.map(d => {
        if (d.awayTeamGoalCount > 0 || d.homeTeamGoalCount > 0) {
          return (
            <div className="" key={d.id}>
              <div className="bg-black px-8 sm:px-4 py-2 border-b border-dark-gray font1620700lightgray sm:font12700lightgray">
                {new Date(d.tournamentDate).toLocaleDateString()}
              </div>
              <div className="flex items-center justify-center bg-black text-white px-8 sm:px-2 sm:py-5 py-7 sm:flex-col md:gap-5 relative sm:static">
                <p className="font15500white flex absolute left-7 sm:static">
                  {d.time} <span className="font15500gray ml-2">{d.venuePlace}</span>
                </p>
                <div className="flex gap-5 items-center sm:gap-1">
                  <div className="flex gap-1.5 font16700white sm:font12700white items-center">
                    <Link href={`/team/${d.homeTeamId}`}>
                      <p>{d.homeTeamName}</p>
                    </Link>
                    <img src={d.homeTeamLogo.tempUrl} alt="logo" className="w-5 h-5" />
                  </div>
                  <div className="bg-dark-gray py-3 px-5 md:py-2 md:px-5 sm:py-1 sm:px-2 font1620700lightgray sm:font14700lightgray">
                    {d.homeTeamGoalCount}
                  </div>
                  <p className="font12700lightgray bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-transparent bg-clip-text">
                    VS
                  </p>
                  <div className="bg-dark-gray py-3 px-5 md:py-2 md:px-5 sm:py-1 sm:px-2 font1620700lightgray sm:font14700lightgray">
                    {d.awayTeamGoalCount}
                  </div>
                  <div className="flex gap-1.5 font16700white sm:font12700white">
                    <img src={d.awayTeamLogo.tempUrl} alt="logo" className="w-5 h-5" />
                    <Link href={`/team/${d.awayTeamId}`}>
                      <p>{d.awayTeamName}</p>
                    </Link>
                  </div>
                </div>
                <Link
                  type="button"
                  className="px-3 py-1 text-white border absolute right-7 sm:static"
                  href={`/tournament/${d.id}`}
                >
                  자세히보기
                </Link>
              </div>
            </div>
          );
        }
        return (
          <div className="" key={d.id}>
            <div className="bg-black px-8 sm:px-4 py-2 border-b border-dark-gray font1620700lightgray sm:font12700lightgray">
              {new Date(d.tournamentDate).toLocaleDateString()}
            </div>
            <div className="flex items-center justify-center bg-black text-white px-8 py-7 sm:flex-col md:gap-5 relative sm:static">
              <p className="font15500white absolute left-7 sm:static">
                {d.time} <span className="font15500gray ml-2">{d.venuePlace}</span>
              </p>
              <div className="flex gap-5 items-center">
                <div className="flex gap-1.5 font16700white sm:font12700white">
                  {d.homeTeamName} <img src={d.homeTeamLogo.tempUrl} alt="logo" className="w-5 h-5" />
                </div>
                <div className="bg-dark-gray py-3 px-16 md:py-2 md:px-5">{d.time}</div>
                <div className="flex gap-1.5 font16700white sm:font12700white">
                  <img src={d.awayTeamLogo.tempUrl} alt="logo" className="w-5 h-5" /> {d.awayTeamName}
                </div>
              </div>
              <Link
                type="button"
                className="px-3 py-1 text-white border absolute right-7 sm:static"
                href={`/tournament/${d.id}`}
              >
                자세히보기
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TournamentPlan;
