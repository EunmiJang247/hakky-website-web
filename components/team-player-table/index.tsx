import Link from 'next/link';
import { PlayerScoreResult } from '../../data-types/team-score';

interface Props {
  players: PlayerScoreResult[] | undefined;
}

const TeamPlayerTable: React.FC<Props> = ({ players }) => {
  console.log(players);
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[20%]">No</th>
          <th className="w-[20%]">선수명</th>
          <th className="w-[20%]">포지션</th>
          <th className="w-[20%]">GP</th>
          <th className="w-[20%]">G</th>
          <th className="w-[20%]">A</th>
          <th className="w-[20%]">P</th>
        </tr>
        {players?.map((p, idx: number) => {
          if (p.position === '공격수' || p.position === '수비수') {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
                key={p.playerId}
              >
                <td className="w-[20%]">{idx + 1}</td>
                <td className="w-[20%]">
                  <Link href={`/player/${p.playerId}`}>{p.name}</Link>
                </td>
                <td className="w-[20%]">{p.position ?? 0}</td>
                <td className="w-[20%]">{p.GP ?? 0}</td>
                <td className="w-[20%]">{p.G ?? 0}</td>
                <td className="w-[20%]">{p.A ?? 0}</td>
                <td className="w-[20%]">{p.PTS ?? 0}</td>
              </tr>
            );
          }
          return '';
        })}
      </tbody>
    </table>
  );
};

export default TeamPlayerTable;
