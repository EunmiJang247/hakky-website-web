import Link from 'next/link';
import { TeamScore } from '../../data-types/division';

interface Props {
  teams: TeamScore[] | undefined;
}

const DivisionTeamRankTable: React.FC<Props> = ({ teams }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-12">No</th>
          <th className="w-1/5 text-left pl-3">팀</th>
          <th className="flex-1">GP</th>
          <th className="flex-1">W</th>
          <th className="flex-1">L</th>
          <th className="flex-1">OTW</th>
          <th className="flex-1">OTL</th>
          <th className="flex-1">GF</th>
          <th className="flex-1">GA</th>
          <th className="flex-1">GD</th>
          <th className="flex-1">PTS</th>
        </tr>
        {teams?.map((d, idx: number) => (
          <tr
            className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
            key={d.teamId}
          >
            <td className="w-12">{idx + 1}</td>
            <td className="w-1/5 text-left pl-3">
              <Link href={`/team/${d.teamId}`}>{d.teamName}</Link>
            </td>
            <td className="flex-1">{d.score.GP ?? 0}</td>
            <td className="flex-1">{d.score.W ?? 0}</td>
            <td className="flex-1">{d.score.L ?? 0}</td>
            <td className="flex-1">{d.score.OTW ?? 0}</td>
            <td className="flex-1">{d.score.OTL ?? 0}</td>
            <td className="flex-1">{d.score.GF ?? 0}</td>
            <td className="flex-1">{d.score.GA ?? 0}</td>
            <td className="flex-1">{d.score.GD ?? 0}</td>
            <td className="flex-1">{d.score.PTS ?? 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DivisionTeamRankTable;
