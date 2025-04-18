import Results from '@/components/search/Results';
import SeriesSearch from '@/components/search/SeriesSearch';

export default function Search() {
  return (
    <div className=" pt-[52px] max-sm:pt-[60px] bg-[#ebedec] h-[1000px]">
      <Results />
      <SeriesSearch />
    </div>
  );
}
