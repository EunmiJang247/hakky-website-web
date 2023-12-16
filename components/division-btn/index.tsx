import menu from '../../data/menu';

const DivisionsBtn = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1420px] flex items-center gap-2">
        {menu[1].subMenu &&
          menu[1].subMenu?.map(m => {
            if (m.name !== '규정') {
              return (
                <p key={m.name} className="py-2 px-4 font1420500white border cursor-pointer">
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

export default DivisionsBtn;
