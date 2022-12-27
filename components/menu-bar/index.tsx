import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Categories from './categories';
import useSubCategories from '../../services/sub-categories';

interface MenuBarProps {
  category2Href: string;
  category3Href: string;
  category4Href: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ category2Href, category3Href, category4Href }) => {
  const [isCategoriesOpened, setIsCategoriesOpened] = useState<boolean>(false);
  const category1SubCategories = useSubCategories();

  const toggleIsCategoriesOpened = () => {
    setIsCategoriesOpened(!isCategoriesOpened);
  };

  let clickableCategories;
  if (category1SubCategories != null) {
    clickableCategories = category1SubCategories.map(category => ({
      ...category,
      url: `/category1?category=${category.slug}`,
    }));
  }

  return (
    <div className={styles.cont}>
      <div className={styles.body}>
        <span onClick={toggleIsCategoriesOpened}>카테고리1</span>
        <Link href={category2Href}>카테고리2</Link>
        <Link href={category3Href}>카테고리3</Link>
        <Link href={category4Href}>카테고리4</Link>
      </div>
      {isCategoriesOpened && (
        <div>
          {clickableCategories == null && <span>로딩중...</span>}
          {clickableCategories != null && <Categories categories={clickableCategories} />}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
