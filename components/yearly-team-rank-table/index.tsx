import TeamScore from '../../data-types/team-score';

interface Props {
  teamScore: TeamScore[];
}

const YearlyTeamRankTable: React.FC<Props> = ({ teamScore }) => {
  return (
    <table className="w-full">
      <tbody className="bg-black">
        <tr className="font16500blue sm:font12500blue flex justify-between py-5 border-b border-dark-gray sm:py-1">
          <th className="w-12">년도</th>
          <th className="w-1/5 text-left pl-3">리그</th>
          <th className="flex-1">GP</th>
          <th className="flex-1">W</th>
          <th className="flex-1">L</th>
          <th className="flex-1">OTW</th>
          <th className="flex-1">OTL</th>
          <th className="flex-1">GF</th>
          <th className="flex-1">GA</th>
          <th className="flex-1">PTS</th>
        </tr>
        {teamScore?.map((d, idx: number) => (
          <tr
            className="font1624500white sm:font12500white flex justify-between py-4 border-b border-dark-gray sm:py-1"
            key={d.leagueId}
          >
            <td className="w-12">{d.leagueYear}</td>
            <td className="w-1/5 text-left pl-3">{d.leagueName}</td>
            <td className="flex-1">{d.teamScore.score.GP ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.W ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.L ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.OTW ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.OTL ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.GF ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.GA ?? 0}</td>
            <td className="flex-1">{d.teamScore.score.PTS ?? 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default YearlyTeamRankTable;
