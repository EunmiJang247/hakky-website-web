/* eslint-disable no-nested-ternary */
import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
  tabName: string;
}

const TournamentStrikerRankTable: React.FC<Props> = ({ tournamentData, tabName }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue sm:py-1">
          <th className="w-[10%]">No</th>
          <th className="w-[25%] text-center pl-3">이름</th>
          <th className="w-[15%] flex items-center justify-center">TIME</th>
          <th className="w-[12%] flex items-center justify-center">P</th>
          <th className="w-[12%] flex items-center justify-center">G</th>
          <th className="w-[12%] flex items-center justify-center">A1</th>
          <th className="w-[12%] flex items-center justify-center">A2</th>
        </tr>
        {tabName === 'home' &&
          tournamentData.optionsGoalsHome.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1"
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            >
              <td className="w-[10%] flex items-center justify-center">{idx + 1}</td>
              <td className="w-[25%] text-left pl-3 flex flex gap-2 items-center">
                <p>{d.goalPlayerName ? d.goalPlayerName : d.a1PlayerName ? d.a1PlayerName : d.a2PlayerName}</p>
                <img
                  src={d.goalPlayerImage ? d.goalPlayerImage : d.a1PlayerImage ? d.a1PlayerImage : d.a2PlayerImage}
                  className="w-12 h-12 object-cover sm:w-6 sm:h-6"
                  alt="player"
                />
              </td>
              <th className="w-[15%] flex items-center justify-center">{d.time}</th>
              <td className="w-[12%] flex items-center justify-center">{d.p}</td>
              <td className="w-[12%] flex items-center justify-center">{d.goal ? '1' : 0}</td>
              <td className="w-[12%] flex items-center justify-center">{d.a1 ? '1' : 0}</td>
              <td className="w-[12%] flex items-center justify-center">{d.a2 ? '1' : 0}</td>
            </tr>
          ))}
        {tabName === 'away' &&
          tournamentData.optionsGoalsAway.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1"
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            >
              <td className="w-[10%] flex items-center justify-center">{idx + 1}</td>
              <td className="w-[25%] text-left pl-3 flex flex gap-2 items-center">
                <p>{d.goalPlayerName ? d.goalPlayerName : d.a1PlayerName ? d.a1PlayerName : d.a2PlayerName}</p>
                <img
                  src={d.goalPlayerImage ? d.goalPlayerImage : d.a1PlayerImage ? d.a1PlayerImage : d.a2PlayerImage}
                  className="w-12 h-12 object-cover sm:w-6 sm:h-6"
                  alt="player"
                />
              </td>
              <th className="w-[15%] flex items-center justify-center">{d.time}</th>
              <td className="w-[12%] flex items-center justify-center">{d.p}</td>
              <td className="w-[12%] flex items-center justify-center">{d.goal ? '1' : 0}</td>
              <td className="w-[12%] flex items-center justify-center">{d.a1 ? '1' : 0}</td>
              <td className="w-[12%] flex items-center justify-center">{d.a2 ? '1' : 0}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TournamentStrikerRankTable;
