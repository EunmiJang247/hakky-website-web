import { Youtube } from '../../data-types/youtube';
import TagLarge from '../tag-large';

interface Props {
  setYoutubeUrl: (value: string) => void;
  setYoutubeModalOpen: (value: boolean) => void;
  youtubes: Youtube[] | undefined;
}

const Youtube: React.FC<Props> = ({ setYoutubeUrl, setYoutubeModalOpen, youtubes }) => {
  return (
    <div className="flex-1">
      <TagLarge title="Youtube" />
      <div className="space20" />
      <div className="flex flex-col md:flex md:flex-row md:flex-wrap">
        {youtubes?.map(y => (
          <div
            className="flex flex-col bg-black p-1 md:w-6/12 sm:w-full cursor-pointer"
            onClick={() => {
              setYoutubeUrl(y.link);
              setYoutubeModalOpen(true);
            }}
            key={y.id}
          >
            <div className="flex">
              <img src={y.thumbnail} className="w-[140px]" />
              <div className="p-2 text-white">
                <p className="font1420500white">{y.title}</p>
                <p className="font1218400gray mt-1">{new Date(y.publishedAt).toDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
