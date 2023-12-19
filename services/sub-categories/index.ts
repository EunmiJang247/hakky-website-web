import { useContext } from 'react';
import SubCategoriesContext from '../../contexts/menus';

const useSubCategories = () => {
  const categories = useContext(SubCategoriesContext);

  return categories;
};

export default useSubCategories;
