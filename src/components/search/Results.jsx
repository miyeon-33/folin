import search from '@/assets/images/icon/search.png';
import { useRef, useState } from 'react';

export default function Results({ keyword, setSearchParams }) {
  const [inputValue, setInputValue] = useState(keyword);
  const inputRef = useRef(null);

  function handleSearch() {
    setInputValue(inputRef.current.value);
    const params = new URLSearchParams();
    params.set('keyword', inputRef.current.value);
    setSearchParams(params);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[24px]">
      <div className=" max-w-[1200px] mx-auto">
        <div className="max-w-[588px] mt-[64px] mb-[48px] mx-auto">
          <div
            className="flex items-center gap-[8px] rounded-[6px]
            pr-[12px] pl-[16px] bg-[#f7f7f7] h-[56px]"
          >
            <button type="button" onClick={handleSearch}>
              <img src={search} className="w-[24px] h-[24px]" />
            </button>
            <input
              onKeyUp={handleEnter}
              ref={inputRef}
              defaultValue=""
              type="text"
              placeholder="성장의 경험을 찾습니다."
              className="border-0 text-ellipsis whitespace-nowrap font-medium text-[18px]
              leading-[1.3]caret-point1 placeholder:text-gray-500 w-full py-[1px] px-[2px]"
            />
          </div>
        </div>
        <h2
          className="font-bold leading-[1.3] text-center mb-[32px] text-[28px] flex
        justify-center gap-[7px]"
        >
          {inputValue && <p className="text-point1">{inputValue} </p>} 검색 결과
        </h2>
      </div>
    </div>
  );
}
