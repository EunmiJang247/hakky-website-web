import { OptionsGoal } from '../../data-types/tournament';

interface Props {
  optionsGoalsHome: OptionsGoal;
  optionsGoalsAway: OptionsGoal;
}

const TournamentTeamScore: React.FC<Props> = ({ optionsGoalsHome, optionsGoalsAway }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue">
          <th className="w-[10%]">No</th>
          <th className="w-[15%] text-left pl-3">팀</th>
          <th className="flex-1">1ST</th>
          <th className="flex-1">2ND</th>
          <th className="flex-1">3RD</th>
          <th className="flex-1">OT</th>
        </tr>
        <tr className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white">
          <td className="w-[10%]">1</td>
          <td className="w-[15%] text-left pl-3">{optionsGoalsHome.homeTeamName}</td>
          <td className="flex-1">{optionsGoalsHome.homeScore[0]}</td>
          <td className="flex-1">{optionsGoalsHome.homeScore[1]}</td>
          <td className="flex-1">{optionsGoalsHome.homeScore[2]}</td>
          <td className="flex-1">{optionsGoalsHome.homeScore[3]}</td>
        </tr>
        <tr className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white">
          <td className="w-[10%]">2</td>
          <td className="w-[15%] text-left pl-3">{optionsGoalsAway.awayTeamName}</td>
          <td className="flex-1">{optionsGoalsAway.awayScore[0]}</td>
          <td className="flex-1">{optionsGoalsAway.awayScore[1]}</td>
          <td className="flex-1">{optionsGoalsAway.awayScore[2]}</td>
          <td className="flex-1">{optionsGoalsAway.awayScore[3]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TournamentTeamScore;
