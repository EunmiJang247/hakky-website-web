import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';

interface Props {
  setYoutubeModalOpen: (value: boolean) => void;
}

const YoutubeModal: React.FC<Props> = ({ setYoutubeModalOpen }) => {
  const logic = useLogic();

  if (logic.status === 'LOADING') {
    return <Loading />;
  }

  if (logic.status === 'FAILED') {
    return <Failed logic={logic} />;
  }

  return (
    <div id="myModal" className="modal-wrap" onClick={() => setYoutubeModalOpen(false)}>
      <div className="modal-cont w-4/5 h-2/5">
        <iframe
          title="video"
          className="w-full h-full"
          src="https://www.youtube.com/embed/YwC0m0XaD2E?autoplay=1&mute=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YoutubeModal;
