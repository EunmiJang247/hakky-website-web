import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Youtube } from '../../data-types/youtube';
import useReadYoutubes from '../../services/youtube/read-list';

type LoadingLogic = {
  status: 'LOADING';
};

type LoadedLogic = {
  status: 'LOADED';
  data: Youtube[] | undefined;
  count: number;
  youtubeModalOpen: boolean;
  setYoutubeModalOpen: (value: boolean) => void;
  setYoutubeUrl: (value: string) => void;
  youtubeUrl: string;
};

type FailedLogic = {
  status: 'FAILED';
};

type Logic = LoadingLogic | LoadedLogic | FailedLogic;

const useLogic = (): Logic => {
  const router = useRouter();
  const readApi = useReadYoutubes();
  const [youtubeModalOpen, setYoutubeModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<Youtube[] | undefined>();
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');

  const init = async (page: number) => {
    try {
      const fromServer = await readApi({ limit: 10, skip: page * 10 });
      setData(fromServer.result);
      setCount(fromServer.count);
    } catch (error) {
      setErrorMessage('로딩하는 도중 에러가 발생했습니다');
      console.error(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { page } = router.query;
      if (page == null) {
        init(0);
      }

      if (typeof page === 'object') {
        alert('잘못된 접근입니다');
        router.back();
      }

      if (typeof page === 'string') {
        init(parseInt(page, 10));
      }
    }
  }, [router]);

  return {
    status: 'LOADED',
    data,
    count,
    youtubeModalOpen,
    setYoutubeModalOpen,
    setYoutubeUrl,
    youtubeUrl,
  };
};

export default useLogic;
export type { Logic, LoadingLogic, LoadedLogic, FailedLogic };
