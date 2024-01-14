import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuContext from '../../contexts/menus';

interface Props {
  sideNavOpen: boolean;
  setSideNavOpen: (value: boolean) => void;
}

const RightSlideMenu: React.FC<Props> = ({ sideNavOpen, setSideNavOpen }) => {
  const menuLis = useContext(MenuContext);

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMenuClick = (menuId: string) => {
    setOpenMenu(prevOpenMenu => (prevOpenMenu === menuId ? null : menuId));
    // 대메뉴를 클릭하면 서브메뉴 초기화
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (submenuId: string) => {
    setActiveSubMenu(prevActiveSubMenu => (prevActiveSubMenu === submenuId ? null : submenuId));
  };

  return (
    <>
      {sideNavOpen && <div className="modal-wrap" onClick={() => setSideNavOpen(false)} />}
      <div className="mb-menu-wrapper bg-black" style={sideNavOpen ? { right: '0' } : { right: '-318px' }}>
        <div className="flex justify-between items-center h-15">
          <img src="/logo.png" alt="logo" width={106} height={24} />
          <button onClick={() => setSideNavOpen(false)} type="button">
            <img src="/hamburger.png" />
          </button>
        </div>
        <div className="flex flex-col">
          <Link
            href="/youtube"
            className="w-full text-white p-5 border-solid border-b border-b-main-blue flex justify-center"
          >
            유튜브
          </Link>
          {menuLis?.map(m => {
            if (m.leagueType === 'student' && m.tournamentId) {
              return (
                <Link
                  href={`/tournament/${m.tournamentId}`}
                  className="w-full text-white p-5 border-solid border-b border-b-main-blue flex justify-center"
                  key={m.id}
                >
                  {m.name}
                </Link>
              );
            }
            if (m.leagueType === 'student' && !m.tournamentId) {
              return (
                <button
                  className="w-full text-white p-5 border-solid border-b border-b-main-blue flex justify-center"
                  key={m.id}
                  onClick={() => alert('대회가 등록되지 않았습니다')}
                >
                  {m.name}
                </button>
              );
            }
            if (m.leagueType === 'regular') {
              return (
                <div key={m.id}>
                  <button
                    onClick={() => handleMenuClick(m.id)}
                    className={`w-full text-white p-5 border-solid border-b border-b-main-blue ${
                      openMenu === m.id ? 'bg-gray-800' : ''
                    }`}
                  >
                    {m.name}
                  </button>
                  {openMenu === m.id &&
                    m.divisions?.map(d => (
                      <div key={d.divisionId}>
                        <button
                          onClick={() => handleSubMenuClick(d.divisionId)}
                          className={`w-full text-white p-5 border-solid border-b bottom-0.5 ${
                            activeSubMenu === d.divisionId ? 'bg-gray-800' : ''
                          }`}
                        >
                          {d.divisionName}
                        </button>
                        {activeSubMenu === d.divisionId && (
                          <div className="ml-4">
                            <Link href={`/division/plan/${d.divisionId}`}>
                              <button
                                onClick={() => setSideNavOpen(false)}
                                className="text-white p-3 block hover:bg-gray-800 w-full"
                              >
                                일정
                              </button>
                            </Link>
                            <Link href={`/division/score/${d.divisionId}`}>
                              <button
                                onClick={() => setSideNavOpen(false)}
                                className="text-white p-3 block hover:bg-gray-800 w-full"
                              >
                                랭킹
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              );
            }
            return '';
          })}
        </div>
      </div>
    </>
  );
};

export default RightSlideMenu;
