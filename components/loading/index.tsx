import Footer from '../footer';
import MenuBar from '../menu-bar';

const Loading: React.FC = () => {
  return (
    <div className="bg-gradient bg-no-repeat bg-cover min-h-screen flex flex-col overflow-hidden">
      <MenuBar />
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-t-4 border-l-4 border-b-4 border-solid border-primary rounded-full animate-spin" />
      </div>
      <Footer />
    </div>
  );
};

export default Loading;
