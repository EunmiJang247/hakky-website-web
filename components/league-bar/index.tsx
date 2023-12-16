import menu from '../../data/menu';

const LeagueBar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black">
      <div className="w-full max-w-[1420px] flex items-center ">
        {menu.map(m => {
          if (m.name !== 'YOUTUBE') {
            return (
              <p key={m.name} className="py-5 px-7 text-white cursor-pointer">
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
