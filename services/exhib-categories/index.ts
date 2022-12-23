import { useContext } from 'react';
import ExhibCategoriesContext from '../../contexts/exhib-categories';

const useExhibCategories = () => {
  const categories = useContext(ExhibCategoriesContext);

  return categories;
};

export default useExhibCategories;
