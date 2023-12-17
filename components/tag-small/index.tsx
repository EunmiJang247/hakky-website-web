interface Props {
  title: string;
}

const TagSmall: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex w-full">
      <div className="w-1.5 bg-main-blue" />
      <div className="w-full bg-black font1630700white py-2 pl-3 md:font1420500white">{title}</div>
    </div>
  );
};

export default TagSmall;
