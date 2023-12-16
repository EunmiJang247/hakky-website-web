import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Props {
  count: number;
  pageCardCount: number;
}

const Pagenation: React.FC<Props> = ({ count, pageCardCount }) => {
  const router = useRouter();
  const [navigators, setNavigators] = useState<number[]>([1]);

  useEffect(() => {
    const { page } = router.query;
    if (typeof page === 'string') {
      // query에는 0이여도 사용자한테는 1페이지
      const currentPage = parseInt(page, 10) + 1;
      const newNavigators = [];
      for (let i = currentPage - 2; i < count / pageCardCount + 1; i++) {
        if (i > 0) {
          newNavigators.push(i);
        }
        if (newNavigators.length >= 5) break;
      }
      setNavigators(newNavigators);
    }
    if (typeof page === 'undefined') {
      const newNavigators = [];
      for (let i = 1; i < count / pageCardCount + 1; i++) {
        newNavigators.push(i);
        if (i === 5) break;
      }
      setNavigators(newNavigators);
    }
  }, [router.query, count]);

  const onPrevPage = () => {
    const { page } = router.query;
    if (typeof page === 'string') {
      if (parseInt(page, 10) > 0) {
        // 페이지가 없고, 1이하일때는 안되야하니까
        router.push({ query: { ...router.query, page: parseInt(page, 10) - 1 } });
      }
    }
  };

  const onNextPage = () => {
    const { page } = router.query;
    if (typeof page === 'string') {
      // ( 전체갯수 / 페이지 뷰 ) => 몫 이 더 크면 현재 페이지(인덱스 + 1)
      if (count / pageCardCount > parseInt(page, 10) + 1) {
        router.push({ query: { ...router.query, page: parseInt(page, 10) + 1 } });
      }
    }
    // 처음 페이지에 들어오면 undefined (1페이지)니까 2페이지로 이동시켜줌 (전체 갯수가 한페이지에 보이는 뷰보다 작거나 같지 않을때만)
    if (typeof page === 'undefined' && count > pageCardCount) {
      router.push({ query: { ...router.query, page: 1 } });
    }
  };

  /* 전체 길이가 한페이지에 보여줘야할 길이보다 작거나 같으면 안보여줄거임  */
  if (count <= pageCardCount) {
    return <div />;
  }

  return (
    <div className="flex justify-center">
      <ul className="flex items-center gap-2">
        <li
          role="presentation"
          onClick={onPrevPage}
          className="cursor-pointer bg-black w-8 h-8 flex items-center justify-center rounded-sm"
        >
          <img src="/pagination-prev.png" alt="prev-button" />
        </li>
        {navigators.map(page => {
          const queryPage = router.query.page === undefined ? '0' : router.query.page;
          return (
            <li
              key={page}
              role="presentation"
              className={
                queryPage === String(page - 1)
                  ? 'bg-white text-white w-8 h-8 flex items-center justify-center rounded-sm bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end cursor-pointer'
                  : 'text-white bg-black w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer'
              }
              onClick={() => router.push({ query: { ...router.query, page: page - 1 } })}
            >
              {page}
            </li>
          );
        })}
        <li
          role="presentation"
          onClick={onNextPage}
          className="cursor-pointer bg-black w-8 h-8 flex items-center justify-center rounded-sm"
        >
          <img src="/pagination-next.png" alt="next-button" />
        </li>
      </ul>
    </div>
  );
};

export default Pagenation;
