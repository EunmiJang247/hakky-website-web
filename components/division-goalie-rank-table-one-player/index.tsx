import Link from 'next/link';
import { PlayerScore } from '../../data-types/division';
import { PlayerScoreEach } from '../../data-types/team-score';

interface Props {
  golie: PlayerScore | undefined | PlayerScoreEach;
  teamName?: string;
  currentYear?: number;
}

const DivisionGoalieRankTableOnePlayer: React.FC<Props> = ({ golie, teamName, currentYear }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[10%]">Year</th>
          <th className="w-[10%]">GP</th>
          <th className="w-[10%]">SA</th>
          <th className="w-[10%]">GA</th>
          <th className="w-[10%]">SV</th>
          <th className="w-[10%]">SV%</th>
        </tr>
        <tr className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1">
          <td className="w-[10%]">{golie?.year}</td>
          <td className="w-[10%]">{golie?.score.GP ?? 0}</td>
          <td className="w-[10%]">{golie?.score.SA ?? 0}</td>
          <td className="w-[10%]">{golie?.score.GA ?? 0}</td>
          <td className="w-[10%]">{golie?.score.SV ?? 0}</td>
          <td className="w-[10%]">{golie?.score.SVPercent ? golie.score.SVPercent.toFixed(2) : 0}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DivisionGoalieRankTableOnePlayer;
