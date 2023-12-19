import { createContext } from 'react';
import Menu from '../data-types/menu';

// TODO 에러를 감지할 수 없는 undefined를 여기에서 쓰는게 맞을까?
const MenuContext = createContext<Menu[] | undefined>(undefined);

export default MenuContext;
