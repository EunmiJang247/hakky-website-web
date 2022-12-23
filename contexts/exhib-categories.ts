import { createContext } from 'react';
import ExhibCategory from '../data-types/exhib-category';

// TODO 에러를 감지할 수 없는 undefined를 여기에서 쓰는게 맞을까?
const ExhibCategoriesContext = createContext<ExhibCategory[] | undefined>(undefined);

export default ExhibCategoriesContext;
