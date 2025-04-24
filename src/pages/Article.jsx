// components /Article.jsx
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import ArticleBox from '@/components/series/ArticleBox';
import SeriesPagination from '@/components/series/SeriesPagination';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Membership from '@/components/Membership';

export default function Article() {
  // 현재 페이지 상태 추가
  const [page, setPage] = useState(() => {
    const queryParams = new URLSearchParams(window.location.search);
    return parseInt(queryParams.get('page'), 10) || 1; // URL에서 페이지 번호 추출
  });

  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    // 페이지 정보를 쿼리 키에 포함
    queryKey: ['article', page],
    // 페이지 파라미터 전달
    queryFn: () => fetch(`/article?page=${page}`).then((res) => res.json()),
  });

  // 응답에서 데이터와 페이지 정보 추출
  const data = response?.data || [];
  const pagination = response?.pagination || { currentPage: 1, totalPages: 1 };
  console.log(data, '111');

  const [sortOrder, setSortOrder] = useState('최신순');

  // 스와이프 각 날짜별, 인기별 정렬
  const sortedData = data.sort((a, b) => {
    return sortOrder === '최신순'
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : b.favorit - a.favorit;
  });

  return (
    <main className="bg-[#ebedec] ">
      <div className="max-w-[1248px]  w-full pt-[52px] px-[24px] mx-auto  h-auto mt-0 max-md:px-[8px] max-sm:pt-[56px]">
        <div className="w-full max-w-[1200px]">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px] max-sm:block">
            <div>
              <TopMenu />
            </div>
            <div className="flex justify-between mt-0 max-sm:pt-[4px] max-sm:w-full">
              <ArrayButton setSortOrder={setSortOrder} />
            </div>
          </div>
          <div className="pt-[64px]">
            <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1">
              {sortedData?.map((art) => (
                <li key={art.id}>
                  <ArticleBox art={art} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SeriesPagination
              page={pagination.currentPage}
              totalPages={pagination.totalPages}
              setPage={setPage}
            />
          </div>
        </div>
        <Membership />
      </div>
    </main>
  );
}
