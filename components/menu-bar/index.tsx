import Link from 'next/link';
import { useState } from 'react';
import menu from '../../data/menu';
import RightSlideMenu from '../menu-right-slide';

const MenuBar: React.FC = () => {
  const [subMenuOpen, setSubMenuOpen] = useState<number>(0);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState<number>(0);
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-24 flex justify-center items-center bg-black sm:h-16">
      <div className="w-full max-w-[1420px] flex justify-between h-full items-center md:p-10 sm:p-5">
        <div className="text-white">
          <img src="/logo.png" alt="logo" className="w-40 sm:w-32" />
        </div>
        <div className="flex h-full md:hidden">
          {menu.map((m, idx) => (
            <div
              key={m.name}
              className="flex flex-col relative  h-full"
              onMouseEnter={() => setSubMenuOpen(idx)}
              onMouseLeave={() => setSubMenuOpen(0)}
            >
              <Link href={m.href} className="leading-[100px] pr-12 flex items-center gap-3">
                <p className="font16700white h-full">{m.name}</p>
                {m.subMenu && <img src="/menubar/arrow.png" />}
              </Link>
              <div className="font16700white absolute top-[90px] bg-black">
                {m.subMenu &&
                  subMenuOpen === idx &&
                  m.subMenu.map((s, id) => (
                    <div
                      className="px-3 py-2.5 hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer relative w-32 flex justify-between items-center"
                      key={s.href}
                      onMouseEnter={() => setSubSubMenuOpen(id)}
                      onMouseLeave={() => setSubSubMenuOpen(0)}
                    >
                      <p>{s.name}</p>
                      {s.subMenu && <img src="/menubar/arrow.png" className="-rotate-90" />}
                      {s.subMenu && subSubMenuOpen === id && (
                        <div className="absolute left-full w-full top-0">
                          {s.subMenu.map(sub => (
                            <p
                              className="px-3 py-2.5 font16700white bg-black hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer"
                              key={sub.href}
                            >
                              {sub.name}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block text-white">
          <button onClick={() => setSideNavOpen(true)} type="button">
            <img src="/hamburger.png" className="cursor-pointer" />
          </button>
          <RightSlideMenu sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
