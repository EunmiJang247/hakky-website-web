import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuContext from '../../contexts/menus';
import Menu from '../../data-types/menu';
import styles from './index.module.scss';

interface Props {
  sideNavOpen: boolean;
  setSideNavOpen: (value: boolean) => void;
}

const RightSlideMenu: React.FC<Props> = ({ sideNavOpen, setSideNavOpen }) => {
  const menuLis = useContext(MenuContext);
  const router = useRouter();

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
          <img src="/logo.png" alt="logo" width={106} height={24} className={styles.logo} />
          <button onClick={() => setSideNavOpen(false)} type="button">
            <img src="/hamburger.png" />
          </button>
        </div>
        <div className="flex flex-col">
          {menuLis?.map(m => (
            <div key={m.id}>
              <button
                onClick={() => handleMenuClick(m.id)}
                className={`text-white p-5 border-solid border-b bottom-0.5 ${openMenu === m.id ? 'bg-gray-800' : ''}`}
              >
                {m.name}
              </button>
              {openMenu === m.id &&
                m.divisions?.map(d => (
                  <div key={d.divisionId}>
                    <button
                      onClick={() => handleSubMenuClick(d.divisionId)}
                      className={`text-white p-5 border-solid border-b bottom-0.5 ${
                        activeSubMenu === d.divisionId ? 'bg-gray-800' : ''
                      }`}
                    >
                      {d.divisionName}
                    </button>
                    {activeSubMenu === d.divisionId && (
                      <div className="ml-4">
                        {/* 여기에 스코어, 일정 메뉴 추가 */}
                        <Link href="/score">
                          <button
                            onClick={() => setSideNavOpen(false)}
                            className="text-white p-3 block hover:bg-gray-800"
                          >
                            스코어
                          </button>
                        </Link>
                        <Link href="/schedule">
                          <button
                            onClick={() => setSideNavOpen(false)}
                            className="text-white p-3 block hover:bg-gray-800"
                          >
                            일정
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSlideMenu;
