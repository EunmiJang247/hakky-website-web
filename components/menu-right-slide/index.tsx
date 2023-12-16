import Link from 'next/link';
import { useState } from 'react';
import Menu from '../../data-types/menu';
import styles from './index.module.scss';

interface Props {
  sideNavOpen: boolean;
  setSideNavOpen: (value: boolean) => void;
  menu: Menu[];
}

const RightSlideMenu: React.FC<Props> = ({ sideNavOpen, setSideNavOpen, menu }) => {
  return (
    <>
      {sideNavOpen && <div className="backdrop" onClick={() => setSideNavOpen(false)} />}
      <div className="mb-menu-wrapper" style={sideNavOpen ? { right: '0' } : { right: '-318px' }}>
        <div className="flex justify-between items-center h-15">
          <img src="/logo.png" alt="logo" width={106} height={24} className={styles.logo} />
          <button onClick={() => setSideNavOpen(false)} type="button">
            <img src="/close.png" />
          </button>
        </div>
        <div className="flex flex-col">
          {menu.map(m => (
            <Link href={m.href} className="text-black" key={m.name}>
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSlideMenu;
