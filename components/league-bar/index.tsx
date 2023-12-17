import menu from '../../data/menu';

const LeagueBar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1420px] flex items-center md:ml-10 sm:ml-5">
        {menu.map(m => {
          if (m.name !== 'YOUTUBE') {
            return (
              <p key={m.name} className="py-5 px-7 font1624500white cursor-pointer sm:font14600white">
                {m.name}
              </p>
            );
          }
          return '';
        })}
      </div>
    </div>
  );
};

export default LeagueBar;
