import Results from '@/components/search/Results';
import SeriesSearch from '@/components/search/SeriesSearch';
import { useState } from 'react';

export default function Search() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className=" pt-[52px] max-sm:pt-[60px] bg-[#ebedec] h-[1000px]">
      <Results setKeyword={setKeyword} />
      <SeriesSearch keyword={keyword} />
    </div>
  );
}
