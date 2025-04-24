import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function SeriesSearch({ data, total, setShowMore, showMore }) {
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    if (showMore) {
      setVisibleCount(data?.length);
    }
  }, [showMore]);

  const handleClick = () => {
    setShowMore(true);
  };

  if (!data || data?.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[8px] mb-[72px]">
      <div className=" max-w-[1200px] mx-auto">
        <div className="pr-[16px] mb-[32px] flex items-center justify-between">
          <div className="flex gap-[4px]">
            <h3 className="text-[24px] font-bold leading-[1.3]">시리즈</h3>
            <h4 className="text-[24px] font-bold leading-[1.3] text-point1">
              {data?.length}
            </h4>
          </div>
          {visibleCount < data?.length && (
            <button
              className="text-[12px] font-normal leading-[1.3] underline"
              onClick={handleClick}
            >
              시리즈 더 보기
            </button>
          )}
        </div>
        <div className="mb-[104px]">
          {data?.slice(0, visibleCount).map((series, index) => (
            <Link key={index} className="group">
              <div className="mb-[4px] flex items-center flex-nowrap gap-[4px]">
                <div
                  className="
                h-[40px] rounded-[6px] py-[8px] px-[12px] transition-transform duration-300
                text-gray-600 font-bold flex items-center group-hover:translate-y-[-15px]"
                  style={{ backgroundColor: series.color }}
                >
                  {series.title}
                </div>
                <div
                  className="h-[40px] border bg-[#fff] transition-transform duration-300
                    rounded-[6px] py-[8px] px-[12px] break-keep group-hover:translate-y-[-15px]"
                  style={{ border: `1px solid ${series.color}` }}
                >
                  {total?.[index] > 0 ? `${total?.[index]}화` : '0화'}
                </div>
              </div>
              <p
                className="h-[56px] text-[18px] bg-[#fff] rounded-[6px] px-[16px] font-medium
            whitespace-nowrap overflow-hidden text-ellipsis leading-[56px]
            text-gray-600 mb-[48px] group-hover:text-point1 group-hover:translate-y-[-15px]
            transition-transform duration-300"
              >
                {series.introduce}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
