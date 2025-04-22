import ArticleSearch from '@/components/search/ArticleSearch';
import LinkerSearch from '@/components/search/LinkerSearch';
import Results from '@/components/search/Results';
import SeminarSearch from '@/components/search/SeminarSearch';
import SeriesSearch from '@/components/search/SeriesSearch';
import Tab from '@/components/search/Tab';
import VideoSearch from '@/components/search/VideoSearch';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  // Series 데이터 가져오기
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () =>
      fetch(`/search?keyword=${keyword}`).then((res) => res.json()),
  });
  // Seminar 데이터 가져오기
  const {
    isLoading: isLoadingSeminar,
    data: seminarData,
    isError: isErrorSeminar,
    error: seminarError,
  } = useQuery({
    queryKey: ['search-seminar', keyword],
    queryFn: () =>
      fetch(`/search-seminar?keyword=${keyword}`).then((res) => res.json()),
  });
  // Linker 데이터 가져오기
  const {
    isLoading: isLoadingLinker,
    data: linkerData,
    isError: isErrorLinker,
    error: LinkerError,
  } = useQuery({
    queryKey: ['search-linker', keyword],
    queryFn: () =>
      fetch(`/search-linker?keyword=${keyword}`).then((res) => res.json()),
  });

  return (
    <div className="pt-[52px] max-sm:pt-[60px] bg-[#ebedec] pb-[50px]">
      <Results
        data={data || []}
        setSearchParams={setSearchParams}
        keyword={keyword}
      />
      <Tab data={data} seminarData={seminarData} linkerData={linkerData} />
      {isLoading && <p>Loading series data...</p>}
      {isError && <p>{error.message}</p>}
      <SeriesSearch data={data || []} />
      <ArticleSearch data={data || []} />
      <VideoSearch data={data || []} />
      {isLoadingSeminar && <p>Loading seminar data...</p>}
      {isErrorSeminar && <p>{seminarError.message}</p>}
      <SeminarSearch data={seminarData || []} />
      {isLoadingLinker && <p>Loading linker data...</p>}
      {isErrorLinker && <p>{LinkerError.message}</p>}
      <LinkerSearch data={linkerData || []} />
    </div>
  );
}
