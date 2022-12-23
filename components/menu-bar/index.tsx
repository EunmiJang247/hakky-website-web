import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Categories from './categories';
import useExhibCategories from '../../services/exhib-categories';

interface MenuBarProps {
  exhibsHref: string;
  companiesHref: string;
  productsHref: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ exhibsHref, companiesHref, productsHref }) => {
  const [isCategoriesOpened, setIsCategoriesOpened] = useState<boolean>(false);
  const exhibCategories = useExhibCategories();

  const toggleIsCategoriesOpened = () => {
    setIsCategoriesOpened(!isCategoriesOpened);
  };

  let clickableCategories;
  if (exhibCategories != null) {
    clickableCategories = exhibCategories.map(category => ({
      ...category,
      url: `/exhibitions?category=${category.slug}`,
    }));
  }

  return (
    <div className={styles.cont}>
      <div className={styles.body}>
        <span onClick={toggleIsCategoriesOpened}>카테고리</span>
        <Link href={exhibsHref}>전시회</Link>
        <Link href={companiesHref}>참가기업</Link>
        <Link href={productsHref}>등록제품</Link>
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
