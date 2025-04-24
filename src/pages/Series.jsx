//pages / Series.jsx
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import SeriesView from '@/components/series/SeriesView';
import SeriesBox from '@/components/series/SeriesBox';
import SeriesList from '@/components/series/SeriesList';
import SeriesPagination from '@/components/series/SeriesPagination';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Membership from '@/components/Membership';

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

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] w-full pt-[52px] px-[24px]  mx-auto h-auto mt-0 max-md:px-[8px] max-md:pt-[56px]">
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
                  <SeriesBox
                    key={topic[0]?.id}
                    topic={topic}
                    topicId={topic[topic.length - 1]?.topicId}
                  />
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
          <Membership />
        </div>
      </div>
    </main>
  );
}
