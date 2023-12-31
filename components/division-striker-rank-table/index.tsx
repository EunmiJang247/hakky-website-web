import { PlayerScore } from '../../data-types/division';

interface Props {
  strikers: PlayerScore[] | undefined;
}

const DivisionStrikerRankTable: React.FC<Props> = ({ strikers }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-[10%]">No</th>
          <th className="w-[20%]">선수</th>
          <th className="w-[20%]">포지션</th>
          <th className="w-[20%]">팀</th>
          <th className="w-[13%]">G</th>
          <th className="w-[13%]">A</th>
          <th className="w-[13%]">P</th>
        </tr>
        {strikers?.map((p, idx: number) => {
          if (p.position === '공격수' || p.position === '수비수') {
            return (
              <tr
                className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
                key={p.playerId}
              >
                <td className="w-[10%]">{idx + 1}</td>
                <td className="w-[20%]">{p.playerName}</td>
                <td className="w-[20%]">{p.position ?? ''}</td>
                <td className="w-[20%]">{p.playerTeamName}</td>
                <td className="w-[13%]">{p.score.G ?? 0}</td>
                <td className="w-[13%]">{p.score.A ?? 0}</td>
                <td className="w-[13%]">{p.score.P ?? 0}</td>
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
