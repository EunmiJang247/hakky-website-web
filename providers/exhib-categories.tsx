import { useEffect, useState } from 'react';
import ExhibCategoriesContext from '../contexts/exhib-categories';
import ExhibCategory from '../data-types/exhib-category';
import useReadExhibCategories from '../services/read-exhib-categories';

interface Props {
  children?: any;
}

const ExhibCategoriesProvider: React.FC<Props> = ({ children }) => {
  const readExhibCategories = useReadExhibCategories();
  const [categories, setCategories] = useState<ExhibCategory[] | undefined>(undefined);

  const init = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const categories_ = await readExhibCategories();
    setCategories(categories_);
  };

  useEffect(() => {
    init();
  }, []);

  return <ExhibCategoriesContext.Provider value={categories}>{children}</ExhibCategoriesContext.Provider>;
};

export default ExhibCategoriesProvider;
