import { LoadedLogic } from '../../use-logic';
import FiltersFragment from '../filters';
import SearchFragment from '../search';
import ExhibsFragment from '../exhibs';

interface Props {
  logic: LoadedLogic;
}

const ExhibsExplorerFragment: React.FC<Props> = ({ logic }) => {
  return (
    <div>
      <FiltersFragment logic={logic} />
      <div>
        <SearchFragment logic={logic} />
        <ExhibsFragment logic={logic} />
      </div>
    </div>
  );
};

export default ExhibsExplorerFragment;
