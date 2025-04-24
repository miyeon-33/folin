import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function ArticleSearch({
  data,
  total,
  setShowArticle,
  showArticle,
}) {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 1025) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    if (showArticle) {
      setVisibleCount(data?.length);
    }
  }, [showArticle]);

  const handleClick = () => {
    setShowArticle(true);
  };

  if (!data || data?.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[8px] mb-[88px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="pr-[16px] mb-[32px] flex items-center justify-between">
          <div className="flex gap-[4px]">
            <h3 className="text-[24px] font-bold leading-[1.3]">아티클</h3>
            <h4 className="text-[24px] font-bold leading-[1.3] text-point1">
              {data?.length}
            </h4>
          </div>
          {visibleCount < data?.length && (
            <button
              className="text-[12px] font-normal leading-[1.3] underline"
              onClick={handleClick}
            >
              아티클 더 보기
            </button>
          )}
        </div>
        <div
          className="flex flex-wrap gap-x-[24px] gap-y-[40px]
        max-md:gap-x-[8px]"
        >
          {data?.slice(0, visibleCount).map((series, index) => (
            <div
              className="[width:calc(33.3333%-16px)] mb-[88px] relative hover:-translate-y-5 transition-transform
            duration-500 group max-md:[width:calc(50%-4px)]"
              key={index}
            >
              <Link className="text-[18px] text-[#111] font-semibold block relative ">
                <div className="min-w-[120px]">
                  <img
                    src={series.thumbnail}
                    alt={series.topic}
                    className="[width:calc(100%-16px)] rounded-[6px] object-cover"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[51px] h-[32px]  absolute left-[10px] top-[10px] border border-[#00d48d] 
                rounded-[6px] bg-[#fff]"
                  >
                    <path
                      d="M18.532 11.204V20.132H16.948L12.244 13.496V20.132H10.804V11.204H12.388L17.092 17.864V11.204H18.532ZM26.261 11.204V12.452H21.353V14.912H25.637V16.16H21.353V18.884H26.261V20.132H19.913V11.204H26.261ZM39.3916 11.204L36.8356 20.132H35.5396L33.3316 13.472L31.2916 20.132H29.9836L27.0796 11.204H28.5916L30.6316 17.756L32.5516 11.216H34.0996L36.0796 17.756L37.8796 11.204H39.3916Z"
                      fill="#00D48D"
                    />
                  </svg>
                </div>
                <div
                  className="[width:calc(100%-16px)] bg-[#fff] rounded-[6px] p-[10px] absolute 
                left-[16px] -bottom-[103px]"
                >
                  <div className="flex gap-[2.5px] items-center h-[32px]">
                    <div
                      className=" rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px]"
                      style={{ backgroundColor: series.color }}
                    >
                      {series.topic}
                    </div>
                    <div
                      className="border border-[#f2ec72] break-keep text-[12px] py-[6px] px-[8px] rounded-[6px]"
                      style={{ border: `1px solid ${series.color}` }}
                    >
                      {total?.[index] > 0 ? `${total?.[index]}화` : '0화'}
                    </div>
                  </div>
                  <strong className="group-hover:text-[#00d48d] block mt-[10px] mb-[16px] text-[18px] font-bold break-keep">
                    {series.title}
                  </strong>
                  <span className="group-hover:text-[#00d48d] text-[12px] block">
                    {series.author}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
