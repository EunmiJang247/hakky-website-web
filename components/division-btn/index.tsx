import Menu from '../../data-types/menu';

interface Props {
  highlightLeague: Menu | undefined;
}

const DivisionsBtn: React.FC<Props> = ({ highlightLeague }) => {
  return (
    <div className="w-full flex justify-center items-center overflow-x-auto no-scrollbar">
      <div className="w-full max-w-[1420px] flex items-center gap-2">
        {highlightLeague &&
          highlightLeague.divisions?.map(m => {
            return (
              <p key={m.divisionId} className="py-2 px-4 font1420500white border border-gray-9292 cursor-pointer">
                {m.divisionName}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default DivisionsBtn;
