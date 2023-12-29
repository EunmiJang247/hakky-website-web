/* eslint-disable no-nested-ternary */
import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
}

const TournamentStrikerRankTable: React.FC<Props> = ({ tournamentData }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue">
          <th className="w-12">No</th>
          <th className="w-1/5 text-left pl-3">이름</th>
          <th className="w-1/5 text-left pl-3">TIME</th>
          <th className="flex-1">P</th>
          <th className="flex-1">G</th>
          <th className="flex-1">A1</th>
          <th className="flex-1">A2</th>
        </tr>
        {tournamentData.optionsGoalsHome.map((d, idx) => (
          <tr
            className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
            key={d.time}
          >
            <td className="w-12">{idx + 1}</td>
            <td className="w-1/5 text-left pl-3">
              {d.goalPlayerName ? d.goalPlayerName : d.a1PlayerName ? d.a1PlayerName : d.a2PlayerName}
            </td>
            <th className="w-1/5 text-left pl-3">{d.time}</th>
            <td className="flex-1">{d.p}</td>
            <td className="flex-1">{d.goal ? '1' : 0}</td>
            <td className="flex-1">{d.a1 ? '1' : 0}</td>
            <td className="flex-1">{d.a2 ? '1' : 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TournamentStrikerRankTable;
