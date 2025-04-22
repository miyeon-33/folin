import ArticleSearch from '@/components/search/ArticleSearch';
import Results from '@/components/search/Results';
import SeriesSearch from '@/components/search/SeriesSearch';
import Tab from '@/components/search/Tab';
import VideoSearch from '@/components/search/VideoSearch';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () =>
      fetch(`/search?keyword=${keyword}`).then((res) => res.json()),
  });
  console.log(data);

  return (
    <div className=" pt-[52px] max-sm:pt-[60px] bg-[#ebedec] h-[6000px]">
      <Results data={[]} setSearchParams={setSearchParams} keyword={keyword} />
      <Tab data={data} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>error.message</p>}
      <SeriesSearch data={data} />
      <ArticleSearch data={data} />
      <VideoSearch data={data} />
    </div>
  );
}
