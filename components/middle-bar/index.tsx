interface Props {
  setTabName: (value: string) => void;
  homeTeamName: string;
  awayTeamName: string;
}

const MiddleBar: React.FC<Props> = ({ setTabName, homeTeamName, awayTeamName }) => {
  return (
    <div className="bg-black flex">
      <button
        className="py-5 sm:py-3 px-28 font1626700white bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end md:flex-1 md:flex md:justify-center cursor-pointer md:px-0 sm:font1420500white"
        onClick={() => setTabName('home')}
      >
        {homeTeamName}
      </button>
      <button
        className="py-5 sm:py-3 px-28 font1626700white md:flex-1 md:flex md:justify-center cursor-pointer md:px-0 sm:font1420500white"
        onClick={() => setTabName('away')}
      >
        {awayTeamName}
      </button>
    </div>
  );
};

export default MiddleBar;
