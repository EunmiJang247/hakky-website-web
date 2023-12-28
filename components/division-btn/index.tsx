import Menu from '../../data-types/menu';

interface Props {
  highlightLeague: Menu | undefined;
  onDivisionBtnClick: (value: number) => void;
  highlightDivision: any;
}

const DivisionsBtn: React.FC<Props> = ({ highlightLeague, onDivisionBtnClick, highlightDivision }) => {
  return (
    <div className="w-full flex justify-center items-center overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1420px] flex items-center gap-2">
        {highlightLeague &&
          highlightLeague.divisions?.map((m, idx) => {
            if (highlightDivision?.id === m.divisionId) {
              return (
                <button
                  key={m.divisionId}
                  className="py-2 px-4 font1420500white border border-main-blue cursor-pointer"
                  onClick={() => onDivisionBtnClick(idx)}
                >
                  {m.divisionName}
                </button>
              );
            }
            return (
              <button
                key={m.divisionId}
                className="py-2 px-4 font1420500white border border-gray-9292 cursor-pointer"
                onClick={() => onDivisionBtnClick(idx)}
              >
                {m.divisionName}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default DivisionsBtn;
