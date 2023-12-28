import { PlayerScore } from '../../data-types/division';

interface Props {
  golies: PlayerScore[] | undefined;
}

const DivisionGoalieRankTable: React.FC<Props> = ({ golies }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[10%]">No</th>
          <th className="w-[15%]">선수</th>
          <th className="w-[15%]">팀</th>
          <th className="w-[10%]">GP</th>
          <th className="w-[10%]">GA</th>
          <th className="w-[10%]">SV</th>
          <th className="w-[10%]">SV%</th>
          <th className="w-[10%]">GA</th>
          <th className="w-[10%]">PTS</th>
        </tr>
        {golies?.map((p, idx: number) => (
          <tr
            className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
            key={p.playerId}
          >
            <td className="w-[10%]">{idx + 1}</td>
            <td className="w-[15%]">{p.playerName}</td>
            <td className="w-[15%]">{p.playerTeamName}</td>
            <td className="w-[10%]">{p.score.GP ?? 0}</td>
            <td className="w-[10%]">{p.score.GA ?? 0}</td>
            <td className="w-[10%]">{p.score.SV ?? 0}</td>
            <td className="w-[10%]">{p.score.SVPercent ?? 0}</td>
            <td className="w-[10%]">{p.score.GA ?? 0}</td>
            <td className="w-[10%]">{p.score.PTS ?? 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DivisionGoalieRankTable;
