interface Props {
  title: string;
}

const TagSmall: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex w-full">
      <div className="w-1.5 bg-main-blue" />
      <div className="w-full bg-black font1630700white py-2 pl-3">{title}</div>
    </div>
  );
};

export default TagSmall;
