interface Props {
  title: string | undefined;
}

const TagSmall: React.FC<Props> = ({ title }) => {
  if (title) {
    return (
      <div className="flex w-full">
        <div className="w-1.5 bg-main-blue" />
        <div className="w-full bg-black font1630700white py-2 pl-3 md:font1420500white">{title}</div>
      </div>
    );
  }
  return <div />;
};

export default TagSmall;
