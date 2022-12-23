import Link from 'next/link';
import ExhibCategory from '../../data-types/exhib-category';
import combineClassNames from '../../utils/combine-class-names';
import styles from './categories.module.scss';

interface ClickableExhibCategory extends ExhibCategory {
  url: string;
}

interface Props {
  className?: string | undefined;
  categories: ClickableExhibCategory[];
}

const Categories: React.FC<Props> = ({ className, categories }) => (
  <div className={combineClassNames(styles.cont, className)}>
    {categories.map((category: ClickableExhibCategory) => (
      <Link key={category.id} href={category.url}>
        {category.name}
      </Link>
    ))}
  </div>
);

export default Categories;
