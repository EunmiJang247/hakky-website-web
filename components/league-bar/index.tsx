import Menu from '../../data-types/menu';

interface Props {
  menuLis: Menu[] | undefined;
  highlightLeague: Menu | undefined;
  setHighlightLeague: (value: Menu) => void;
}

const LeagueBar: React.FC<Props> = ({ menuLis, highlightLeague, setHighlightLeague }) => {
  const middleMenubarMenus = menuLis?.filter(m => m.leagueType === 'regular');
  return (
    <div className="w-full flex justify-center items-center bg-black overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1420px] flex items-center md:ml-10 sm:ml-5">
        {middleMenubarMenus?.map(m => {
          if (highlightLeague?.id === m.id) {
            return (
              <button
                key={m.name}
                className="py-5 px-7 font1624500white cursor-pointer sm:font14600white border-b-4 border-b-main-blue"
                onClick={() => setHighlightLeague(m)}
              >
                {m.name}
              </button>
            );
          }
          return (
            <button
              key={m.name}
              className="py-5 px-7 font1624500white cursor-pointer sm:font14600white"
              onClick={() => setHighlightLeague(m)}
            >
              {m.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LeagueBar;
