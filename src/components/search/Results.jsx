import search from '@/assets/images/icon/search.png';
import { useState } from 'react';

export default function Results() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[24px]">
      <div className=" max-w-[1200px] mx-auto">
        <div className="max-w-[588px] mt-[64px] mb-[48px] mx-auto">
          <div
            className="flex items-center gap-[8px] rounded-[6px]
            pr-[12px] pl-[16px] bg-[#f7f7f7] h-[56px]"
          >
            <img src={search} className="w-[24px] h-[24px]" />
            <input
              type="text"
              placeholder="성장의 경험을 찾습니다."
              className="border-0 text-ellipsis whitespace-nowrap font-medium leading-[1.3]
                    caret-point1 placeholder:text-gray-500 w-full py-[1px] px-[2px]"
            />
          </div>
        </div>
        <h2 className="font-bold leading-[1.3] text-center mb-[32px] text-[28px]">
          검색 결과
        </h2>
        <div className="h-[22px] mb-[64px]">
          <ul className="flex items-center font-medium">
            {['전체', '시리즈', '아티클', '비디오', '세미나', '링커'].map(
              (item, index) => (
                <li
                  key={index}
                  className={`pr-[12px] break-keep after:h-[16px] last:after:border-r-0 after:border-r after:ml-[12px]
          after:border-[#bfbfbf] ${
            index === activeItem ? 'text-point1' : 'text-gray-600 '
          }`}
                  onClick={() => handleClick(index)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        {/* <div className="pt-[73px] pb-[160px]">
          <h3 className="text-[24px] font-bold leading-[1.3] text-center">
            검색 결과가 없습니다.
          </h3>
        </div> */}
      </div>
    </div>
  );
}
