interface Props {
  title: string;
}

const TagLarge: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex">
      <div className="w-1.5 bg-main-blue" />
      <div className="w-full bg-black font2736700white py-2 pl-3">{title}</div>
    </div>
  );
};

export default TagLarge;
