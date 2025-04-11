import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import SeriesView from '@/components/series/SeriesView';
import SeriesBox from '@/components/series/SeriesBox';
import SeriesPagination from '@/components/series/SeriesPagination';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function Series() {
  // URL에서 페이지 파라미터 가져오기
  const getCurrentPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    return pageParam ? parseInt(pageParam, 10) : 1;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  // URL 변경 감지를 위한 이벤트 리스너
  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPage(getCurrentPage());
    };

    // popstate 이벤트는 브라우저의 뒤로가기/앞으로가기 버튼 클릭 시 발생
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ['series', currentPage],
    queryFn: () =>
      fetch(`/series?page=${currentPage}`).then((res) => res.json()),
  });

  // 응답에서 데이터와 페이지 정보 추출
  const data = response?.data || [];
  const pagination = response?.pagination || { currentPage: 1, totalPages: 1 };

  // 날짜별 정렬
  useEffect(() => {
    if (data.length > 0) {
      data.forEach((topicGroup) => {
        if (Array.isArray(topicGroup)) {
          topicGroup.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        }
      });
    }
  }, [data]);

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

  console.log(
    '현재 페이지:',
    pagination.currentPage,
    '전체 페이지:',
    pagination.totalPages,
    '최대 ID:',
    maxId
  );

  if (isLoading) return <div className="text-center py-10">로딩 중...</div>;
  if (isError)
    return <div className="text-center py-10">에러 발생: {error.message}</div>;

  return (
    <main className="bg-[#ebedec]">
      <div className="max-w-[1248px] w-full pt-[52px] px-[24px] bg-[#ebedec] mx-auto h-auto mt-0">
        <div className="w-full max-w-[1200px] border border-amber-500">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px]">
            <div>
              <TopMenu />
            </div>
            <div className="flex justify-between mt-0">
              <div>
                <ArrayButton />
              </div>
              <div>
                <SeriesView />
              </div>
            </div>
          </div>
          <div className="pt-[64px]">
            {data.map((topic) => (
              <SeriesBox
                key={topic[0]?.id || Math.random()}
                topic={topic}
                maxId={maxId}
              />
            ))}
          </div>

          {/* 페이지네이션 컴포넌트는 이제 page와 totalPage만 전달받음 */}
          <SeriesPagination
            page={pagination.currentPage}
            totalPage={pagination.totalPages}
          />
        </div>
      </div>
    </main>
  );
}
