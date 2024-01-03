import Link from 'next/link';
import { useContext, useState } from 'react';
import MenuContext from '../../contexts/menus';
import RightSlideMenu from '../menu-right-slide';

const MenuBar: React.FC = () => {
  const menuLis = useContext(MenuContext);
  const [subMenuOpen, setSubMenuOpen] = useState<number>(-1);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState<number>(-1);
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-24 flex justify-center items-center bg-black sm:h-16 z-50">
      <div className="w-full max-w-[1420px] flex justify-between h-full items-center md:p-10 sm:p-5">
        <div className="text-white">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="w-40 sm:w-32" />
          </Link>
        </div>
        <div className="flex h-full md:hidden">
          <div className="flex flex-col relative h-full">
            <Link href="/youtube" className="leading-[100px] pr-12 flex items-center gap-3">
              <p className="font16700white h-full">YOUTUBE</p>
            </Link>
          </div>
          {menuLis?.map((m, idx) => (
            <div
              key={m.name}
              className="flex flex-col relative  h-full"
              onMouseEnter={() => setSubMenuOpen(idx)}
              onMouseLeave={() => setSubMenuOpen(-1)}
            >
              <div className="leading-[100px] pr-12 flex items-center gap-3">
                <p className="font16700white h-full cursor-default">{m.name}</p>
                {m.divisions && <img src="/menubar/arrow.png" />}
              </div>
              <div className="font16700white absolute top-[90px] bg-black">
                {m.divisions && subMenuOpen === idx && (
                  <div className="px-3 py-2.5 hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer relative w-32 flex justify-between items-center">
                    <Link href={`/regulation/${m.id}`} className="w-full h-full">
                      규정
                    </Link>
                  </div>
                )}
                {m.divisions &&
                  subMenuOpen === idx &&
                  m.divisions.map((s, id) => (
                    <div
                      className="px-3 py-2.5 hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer relative w-32 flex justify-between items-center"
                      key={s.divisionId}
                      onMouseEnter={() => setSubSubMenuOpen(id)}
                      onMouseLeave={() => setSubSubMenuOpen(-1)}
                    >
                      <Link href={`/division/plan/${s.divisionId}`}>
                        <p className="w-full h-full">{s.divisionName}</p>
                      </Link>
                      <img src="/menubar/arrow.png" className="-rotate-90" />
                      {subSubMenuOpen === id && (
                        <div className="absolute left-full w-full top-0">
                          <Link
                            className="px-3 py-2.5 font16700white bg-black hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer block"
                            key="plan"
                            href={`/division/plan/${s.divisionId}`}
                          >
                            일정
                          </Link>
                          <Link
                            className="px-3 py-2.5 font16700white bg-black hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer block"
                            key="score"
                            href={`/division/score/${s.divisionId}`}
                          >
                            스코어
                          </Link>
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
          <RightSlideMenu sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
