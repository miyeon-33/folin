//pages / Series.jsx
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import SeriesView from '@/components/series/SeriesView';
import SeriesBox from '@/components/series/SeriesBox';
import SeriesList from '@/components/series/SeriesList';
import SeriesPagination from '@/components/series/SeriesPagination'; // 새로운 pagination 컴포넌트 import
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Series() {
  // 현재 페이지 상태 추가
  const [page, setPage] = useState(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return parseInt(queryParams.get('page'), 10) || 1; // URL에서 페이지 번호 추출
  });

  const [sortOrder, setSortOrder] = useState('최신순');
  // 뷰 타입 상태 추가 (박스뷰: true, 리스트뷰: false)
  const [isBoxView, setIsBoxView] = useState(true);

  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    // 페이지 정보를 쿼리 키에 포함
    queryKey: ['series', page],
    // 페이지 파라미터 전달
    queryFn: () => fetch(`/series?page=${page}`).then((res) => res.json()),
  });

  // 응답에서 데이터와 페이지 정보 추출
  const data = response?.data || [];
  const pagination = response?.pagination || { currentPage: 1, totalPages: 1 };

  // 스와이프 각 날짜별, 인기별 정렬
  const sortedData = data.sort((a, b) => {
    return sortOrder === '최신순'
      ? new Date(b[b.length - 1].createdAt) -
          new Date(a[a.length - 1].createdAt)
      : b.reduce((acc, item) => acc + item.favorit, 0) -
          a.reduce((acc, item) => acc + item.favorit, 0);
  });

  // maxId 계산 - 페이지가 1일 때만 계산
  let maxId = 0;
  if (pagination.currentPage === 1 && data.length > 0) {
    // 각 토픽 그룹의 첫 번째 아이템에서 topicId 추출
    const topicIds = data
      .map((group) => group[0]?.topicId)
      .filter((id) => id !== undefined);
    if (topicIds.length > 0) {
      maxId = Math.max(...topicIds);
    }
  }

  // console.log(
  //   '현재 페이지:',
  //   pagination.currentPage,
  //   '전체 페이지:',
  //   pagination.totalPages,
  //   '최대 ID:',
  //   maxId
  // );

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] w-full pt-[52px] px-[24px] bg-[#ebedec] mx-auto h-auto mt-0 max-md:px-[8px] max-sm:pt-[56px]">
        <div className="w-full max-w-[1200px]">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px] max-sm:block">
            <div>
              <TopMenu />
            </div>
            <div className="flex justify-between mt-0 max-sm:pt-[4px] max-sm:w-full">
              <ArrayButton setSortOrder={setSortOrder} />
              <SeriesView isBoxView={isBoxView} setIsBoxView={setIsBoxView} />
            </div>
          </div>
          <div className="pt-[64px]">
            {isBoxView
              ? sortedData.map((topic) => (
                  <SeriesBox key={topic[0]?.id} topic={topic} maxId={maxId} />
                ))
              : sortedData.map((topic) => (
                  <SeriesList key={topic[0]?.id} topic={topic} />
                ))}
          </div>
          <div>
            <SeriesPagination
              page={pagination.currentPage}
              totalPages={pagination.totalPages}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
