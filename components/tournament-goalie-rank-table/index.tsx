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
          <th className="w-[25%] text-center pl-3">이름</th>
          <th className="flex-1">1P</th>
          <th className="flex-1">2P</th>
          <th className="flex-1">3P</th>
        </tr>
        {tabName === 'home' &&
          tournamentData.optionGoalieSavesHome.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white sm:py-1"
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            >
              <td className="w-12 flex items-center justify-center">{idx + 1}</td>
              <td className="w-[25%] text-left pl-3 flex flex gap-2 items-center">
                <p>{d.playerName}</p>
                <img src={d.playerImage} className="w-12 h-12 object-cover sm:w-6 sm:h-6" />
              </td>
              <td className="flex-1 flex items-center justify-center">{d.p1}</td>
              <td className="flex-1 flex items-center justify-center">{d.p2}</td>
              <td className="flex-1 flex items-center justify-center">{d.p3}</td>
            </tr>
          ))}
        {tabName === 'away' &&
          tournamentData.optionGoalieSavesAway.map((d, idx) => (
            <tr
              className="font1624500white flex justify-between py-4 border-b border-dark-gray sm:font12500white"
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            >
              <td className="w-12 flex items-center justify-center">{idx + 1}</td>
              <td className="w-[25%] text-left pl-3 flex flex gap-2 items-center">
                <p>{d.playerName}</p>
                <img src={d.playerImage} className="w-12 h-12 object-cover sm:w-6 sm:h-6" />
              </td>
              <td className="flex-1 flex items-center justify-center">{d.p1}</td>
              <td className="flex-1 flex items-center justify-center">{d.p2}</td>
              <td className="flex-1 flex items-center justify-center">{d.p3}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TournamentGoalieRankTable;
