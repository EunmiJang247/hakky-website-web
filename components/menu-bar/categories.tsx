import Link from 'next/link';
import SubCategory from '../../data-types/sub-category';
import combineClassNames from '../../utils/combine-class-names';
import styles from './categories.module.scss';

interface ClickableSubCategory extends SubCategory {
  url: string;
}

interface Props {
  className?: string | undefined;
  categories: ClickableSubCategory[];
}

const Categories: React.FC<Props> = ({ className, categories }) => (
  <div className={combineClassNames(styles.cont, className)}>
    {categories.map((category: ClickableSubCategory) => (
      <Link key={category.id} href={category.url}>
        {category.name}
      </Link>
    ))}
  </div>
);

export default Categories;
