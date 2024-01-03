import Link from 'next/link';
import { PlayerScore } from '../../data-types/division';
import { PlayerScoreEach } from '../../data-types/team-score';

interface Props {
  striker: PlayerScore | undefined | PlayerScoreEach;
  teamName?: string;
  currentYear?: number;
}

const DivisionStrikerRankTableOnePlayer: React.FC<Props> = ({ striker }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[10%]">년도</th>
          <th className="w-[20%]">선수</th>
          <th className="w-[13%]">GP</th>
          <th className="w-[13%]">G</th>
          <th className="w-[13%]">A</th>
          <th className="w-[13%]">P</th>
          <th className="w-[13%]">PIM</th>
        </tr>
        {striker?.position === '공격수' && (
          <tr className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1">
            <td className="w-[10%]">{striker.year}</td>
            <td className="w-[20%]">
              <Link href={`/player/${striker.playerId}`}>{striker.playerName}</Link>
            </td>
            <td className="w-[13%]">{striker.score.GP ?? 0}</td>
            <td className="w-[13%]">{striker.score.G ?? 0}</td>
            <td className="w-[13%]">{striker.score.A ?? 0}</td>
            <td className="w-[13%]">{striker.score.PTS ?? 0}</td>
            <td className="w-[13%]">{striker.score.PIM ?? 0}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DivisionStrikerRankTableOnePlayer;
