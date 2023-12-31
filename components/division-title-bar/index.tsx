interface Props {
  divisionTitle: string;
  year: string;
}

const DivisionTitleBar: React.FC<Props> = ({ divisionTitle, year }) => {
  return (
    <div className="bg-black flex justify-center relative sm:justify-start gap-4 items-center px-2">
      <p className="px-3 py-2 bg-dark-gray left-0 absolute top-5 left-5 rounded-md font1624500white sm:px-2 sm:py-1 sm:font12500white sm:static">
        시즌 {year}
      </p>
      <p className="font2736700white py-5 sm:font20700white">{divisionTitle}</p>
    </div>
  );
};

export default DivisionTitleBar;
