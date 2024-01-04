import Tournament from '../../data-types/tournament';

interface Props {
  tournamentData: Tournament;
  tabName: string;
}

const TournamentGoalieRankTable: React.FC<Props> = ({ tournamentData, tabName }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue flex justify-between py-5 border-b border-dark-gray sm:font12500blue sm:py-1">
          <th className="w-12">No</th>
          <th className="w-1/5 text-left pl-3">이름</th>
          <th className="flex-1">1P</th>
          <th className="flex-1">2P</th>
          <th className="flex-1">3P</th>
        </tr>
        {tabName === 'home' &&
          tournamentData.optionGoalieSavesHome.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1"
              key={d.time}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="w-1/5 text-left pl-3">{d.playerName}</td>
              <td className="flex-1">{d.p1}</td>
              <td className="flex-1">{d.p2}</td>
              <td className="flex-1">{d.p3}</td>
            </tr>
          ))}
        {tabName === 'away' &&
          tournamentData.optionGoalieSavesAway.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
              key={d.time}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="w-1/5 text-left pl-3">{d.playerName}</td>
              <td className="flex-1">{d.p1}</td>
              <td className="flex-1">{d.p2}</td>
              <td className="flex-1">{d.p3}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TournamentGoalieRankTable;
