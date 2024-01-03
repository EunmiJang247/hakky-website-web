import Link from 'next/link';
import { PlayerScore } from '../../data-types/division';
import { PlayerScoreEach } from '../../data-types/team-score';

interface Props {
  golies: PlayerScore[] | undefined | PlayerScoreEach[];
  teamName?: string;
  currentYear?: number;
}

const DivisionGoalieRankTable: React.FC<Props> = ({ golies, teamName, currentYear }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[10%]">No</th>
          <th className="w-[15%]">선수</th>
          <th className="w-[15%]">팀</th>
          <th className="w-[10%]">GP</th>
          <th className="w-[10%]">SA</th>
          <th className="w-[10%]">GA</th>
          <th className="w-[10%]">SV</th>
          <th className="w-[10%]">SV%</th>
        </tr>
        {golies?.map((p, idx: number) => {
          if (p.position === '골리' && Number(p.year) === currentYear) {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
                key={p.playerId}
              >
                <td className="w-[10%]">{idx + 1}</td>
                <td className="w-[15%]">
                  <Link href={`/player/${p.playerId}`}>{p.playerName}</Link>
                </td>
                <td className="w-[15%]">{p.playerTeamName ? p.playerTeamName : teamName}</td>
                <td className="w-[10%]">{p.score.GP ?? 0}</td>
                <td className="w-[10%]">{p.score.SA ?? 0}</td>
                <td className="w-[10%]">{p.score.GA ?? 0}</td>
                <td className="w-[10%]">{p.score.SV ?? 0}</td>
                <td className="w-[10%]">{p.score.SVPercent ? p.score.SVPercent.toFixed(2) : 0}%</td>
              </tr>
            );
          }
          if (p.position === '골리' && !currentYear) {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
                key={p.playerId}
              >
                <td className="w-[10%]">{idx + 1}</td>
                <td className="w-[15%]">
                  <Link href={`/player/${p.playerId}`}>{p.playerName}</Link>
                </td>
                <td className="w-[15%]">{p.playerTeamName ? p.playerTeamName : teamName}</td>
                <td className="w-[10%]">{p.score.GP ?? 0}</td>
                <td className="w-[10%]">{p.score.SA ?? 0}</td>
                <td className="w-[10%]">{p.score.GA ?? 0}</td>
                <td className="w-[10%]">{p.score.SV ?? 0}</td>
                <td className="w-[10%]">{p.score.SVPercent ? p.score.SVPercent.toFixed(2) : 0}%</td>
              </tr>
            );
          }
          return '';
        })}
      </tbody>
    </table>
  );
};

export default DivisionGoalieRankTable;
