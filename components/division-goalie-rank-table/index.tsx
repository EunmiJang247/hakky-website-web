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
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-2"
                key={p.playerId}
              >
                <td className="w-[15%]">
                  <Link
                    href={`/player/${p.playerId}`}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-1"
                  >
                    <p>{p.playerName}</p>
                    <img src={p.playerImage} className="w-14 h-14" />
                  </Link>
                </td>
                <td className="w-[15%] flex justify-center items-center">
                  {p.playerTeamName ? p.playerTeamName : teamName}
                </td>
                <td className="w-[10%] flex justify-center items-center">{p.score.GP ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.SA ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.GA ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.SV ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">
                  {p.score.SVPercent ? p.score.SVPercent.toFixed(2) : 0}%
                </td>
              </tr>
            );
          }
          if (p.position === '골리' && !currentYear) {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-2"
                key={p.playerId}
              >
                <td className="w-[15%]">
                  <Link
                    href={`/player/${p.playerId}`}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-1"
                  >
                    <p>{p.playerName}</p>
                    <img src={p.playerImage} className="w-14 h-14" />
                  </Link>
                </td>
                <td className="w-[15%] flex justify-center items-center">
                  {p.playerTeamName ? p.playerTeamName : teamName}
                </td>
                <td className="w-[10%] flex justify-center items-center">{p.score.GP ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.SA ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.GA ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">{p.score.SV ?? 0}</td>
                <td className="w-[10%] flex justify-center items-center">
                  {p.score.SVPercent ? p.score.SVPercent.toFixed(2) : 0}%
                </td>
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
