import Link from 'next/link';
import { PlayerScore } from '../../data-types/division';
import { PlayerScoreEach } from '../../data-types/team-score';

interface Props {
  strikers: PlayerScore[] | undefined | PlayerScoreEach[];
  teamName?: string;
  currentYear?: number;
}

const DivisionStrikerRankTable: React.FC<Props> = ({ strikers, teamName, currentYear }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[20%]">선수</th>
          <th className="w-[20%]">팀</th>
          <th className="w-[13%]">GP</th>
          <th className="w-[13%]">G</th>
          <th className="w-[13%]">A</th>
          <th className="w-[13%]">P</th>
          <th className="w-[13%]">PIM</th>
        </tr>
        {strikers?.map((p, idx: number) => {
          if (
            (p.position === '공격수' && Number(p.year) === currentYear) ||
            (p.position === '수비수' && Number(p.year) === currentYear)
          ) {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-2"
                key={p.playerId}
              >
                <td className="w-[20%]">
                  <Link
                    href={`/player/${p.playerId}`}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-1"
                  >
                    <p>{p.playerName}</p>
                    <div className="relative">
                      <img src={p.playerImage} className="w-14 h-14 relative" />
                      <p className="absolute top-0 left-0 w-5 h-5 bg-black text-white border-solid border-white border text-xs">
                        {idx + 1}
                      </p>
                    </div>
                  </Link>
                </td>
                <td className="w-[20%] flex justify-center items-center">
                  {p.playerTeamName ? p.playerTeamName : teamName}
                </td>
                <td className="w-[13%] flex justify-center items-center">{p.score.GP ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.G ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.A ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.PTS ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.PIM ?? 0}</td>
              </tr>
            );
          }
          if ((p.position === '공격수' && !currentYear) || (p.position === '수비수' && !currentYear)) {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-2"
                key={p.playerId}
              >
                <td className="w-[20%]">
                  <Link
                    href={`/player/${p.playerId}`}
                    className="flex flex-col items-center justify-center gap-2 sm:gap-1"
                  >
                    <p>{p.playerName}</p>
                    <div className="relative">
                      <img src={p.playerImage} className="w-14 h-14 relative" />
                      <p className="absolute top-0 left-0 w-5 h-5 bg-black text-white border-solid border-white border text-xs">
                        {idx + 1}
                      </p>
                    </div>
                  </Link>
                </td>
                <td className="w-[20%] flex justify-center items-center">
                  {p.playerTeamName ? p.playerTeamName : teamName}
                </td>
                <th className="w-[13%] flex justify-center items-center">{p.score.GP ?? 0}</th>
                <td className="w-[13%] flex justify-center items-center">{p.score.G ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.A ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.PTS ?? 0}</td>
                <td className="w-[13%] flex justify-center items-center">{p.score.PIM ?? 0}</td>
              </tr>
            );
          }
          return '';
        })}
      </tbody>
    </table>
  );
};

export default DivisionStrikerRankTable;
