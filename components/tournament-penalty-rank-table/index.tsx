/* eslint-disable no-nested-ternary */
import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
  tabName: string;
}

const TournamentPenaltyRankTable: React.FC<Props> = ({ tournamentData, tabName }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue sm:py-1">
          <th className="w-[10%]">No</th>
          <th className="w-[20%] text-left pl-3">이름</th>
          <th className="w-[20%] flex items-center justify-center">TIME</th>
          <th className="w-[10%]">P</th>
          <th className="w-[20%]">Penalty</th>
          <th className="w-[20%]">Duration</th>
        </tr>
        {tabName === 'home' &&
          tournamentData.optionPaneltiesHome.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1"
              key={d.time}
            >
              <td className="w-[10%] flex items-center justify-center">{idx + 1}</td>
              <td className="w-[20%] text-left pl-3 flex gap-1 flex items-center">
                <p>{d.playerName}</p>
                <img src={d.playerImage} className="w-6 h-6" />
              </td>
              <th className="w-[20%] flex items-center justify-center">{d.time}</th>
              <td className="w-[10%] flex items-center justify-center">{d.p}</td>
              <td className="w-[20%] flex items-center justify-center">{d.penalty}</td>
              <td className="w-[20%] flex items-center justify-center">{d.min} Min</td>
            </tr>
          ))}
        {tabName === 'away' &&
          tournamentData.optionPaneltiesAway.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
              key={d.time}
            >
              <td className="w-[10%] flex items-center justify-center">{idx + 1}</td>
              <td className="w-[20%] text-left pl-3 flex gap-1 lex items-center">
                <p>{d.playerName}</p>
                <img src={d.playerImage} className="w-6 h-6" />
              </td>
              <th className="w-[20%] flex items-center justify-center">{d.time}</th>
              <td className="w-[10%] flex items-center justify-center">{d.p}</td>
              <td className="w-[20%] flex items-center justify-center">{d.penalty}</td>
              <td className="w-[20%] flex items-center justify-center">{d.min} Min</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TournamentPenaltyRankTable;
