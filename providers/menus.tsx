import { useEffect, useState } from 'react';
import SubCategoriesContext from '../contexts/menus';
import Menu from '../data-types/menu';
import useReadMainMenu from '../services/read-main-menus';

interface Props {
  children?: any;
}

const MenusProvider: React.FC<Props> = ({ children }) => {
  const readMainMenuApi = useReadMainMenu();
  const [menuLis, setMenuLis] = useState<Menu[]>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const init = async () => {
    try {
      const fromServer = await readMainMenuApi();
      setMenuLis(fromServer);
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <SubCategoriesContext.Provider value={menuLis}>{children}</SubCategoriesContext.Provider>;
};

export default MenusProvider;
