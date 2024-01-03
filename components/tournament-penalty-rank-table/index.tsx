/* eslint-disable no-nested-ternary */
import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
  tabName: string;
}

const TournamentPenaltyRankTable: React.FC<Props> = ({ tournamentData, tabName }) => {
  console.log(tournamentData.optionPaneltiesHome);
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue">
          <th className="w-12">No</th>
          <th className="w-1/5 text-left pl-3">이름</th>
          <th className="w-1/5 text-left pl-3">TIME</th>
          <th className="flex-1">P</th>
          <th className="flex-1">Penalty</th>
          <th className="flex-1">Duration</th>
        </tr>
        {tabName === 'home' &&
          tournamentData.optionPaneltiesHome.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
              key={d.time}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="w-1/5 text-left pl-3">{d.playerName}</td>
              <th className="w-1/5 text-left pl-3">{d.time}</th>
              <td className="flex-1">{d.p}</td>
              <td className="flex-1">{d.penalty}</td>
              <td className="flex-1">{d.min} Min</td>
            </tr>
          ))}
        {tabName === 'away' &&
          tournamentData.optionPaneltiesAway.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
              key={d.time}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="w-1/5 text-left pl-3">{d.playerName}</td>
              <th className="w-1/5 text-left pl-3">{d.time}</th>
              <td className="flex-1">{d.p}</td>
              <td className="flex-1">{d.penalty}</td>
              <td className="flex-1">{d.min} Min</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TournamentPenaltyRankTable;
