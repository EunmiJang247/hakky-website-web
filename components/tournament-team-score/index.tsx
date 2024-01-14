import Link from 'next/link';
import Tournament, { OptionsGoal } from '../../data-types/tournament';

interface Props {
  optionsGoalsHome: OptionsGoal;
  optionsGoalsAway: OptionsGoal;
  tournamentData: Tournament;
}

const TournamentTeamScore: React.FC<Props> = ({ optionsGoalsHome, optionsGoalsAway, tournamentData }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blu sm:py-1 sm:font12500blue">
          <th className="w-[30%] text-left pl-3">팀</th>
          <th className="w-[10%]">1ST</th>
          <th className="w-[10%]">2ND</th>
          <th className="w-[10%]">3RD</th>
          <th className="w-[10%]">OT</th>
        </tr>
        <tr className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1">
          <td className="w-[30%] text-left pl-3">
            <Link href={`/team/${tournamentData.homeTeamId}`} className="flex gap-1 flex items-center">
              <p>{optionsGoalsHome.homeTeamName}</p>
              <img src={tournamentData.homeTeamLogo.tempUrl} className="w-5" />
            </Link>
          </td>
          <td className="w-[10%]">{optionsGoalsHome.homeScore[0]}</td>
          <td className="w-[10%]">{optionsGoalsHome.homeScore[1]}</td>
          <td className="w-[10%]">{optionsGoalsHome.homeScore[2]}</td>
          <td className="w-[10%]">{optionsGoalsHome.homeScore[3]}</td>
        </tr>
        <tr className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1">
          <td className="w-[30%] text-left pl-3">
            <Link href={`/team/${tournamentData.awayTeamId}`} className="flex gap-1 flex items-center">
              {optionsGoalsAway.awayTeamName}
              <img src={tournamentData.awayTeamLogo.tempUrl} className="w-5" />
            </Link>
          </td>
          <td className="w-[10%]">{optionsGoalsAway.awayScore[0]}</td>
          <td className="w-[10%]">{optionsGoalsAway.awayScore[1]}</td>
          <td className="w-[10%]">{optionsGoalsAway.awayScore[2]}</td>
          <td className="w-[10%]">{optionsGoalsAway.awayScore[3]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TournamentTeamScore;
