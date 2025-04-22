import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function SeminarSearch({ data }) {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 1025) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  const showAll = () => {
    setVisibleCount(data.length);
  };

  if (!data || data.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[8px] mb-[72px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="pr-[16px] mb-[32px] flex items-center justify-between">
          <div className="flex gap-[4px]">
            <h3 className="text-[24px] font-bold leading-[1.3]">세미나</h3>
            <h4 className="text-[24px] font-bold leading-[1.3] text-point1">
              {data.length}
            </h4>
          </div>
          {visibleCount < data.length && (
            <button
              className="text-[12px] font-normal leading-[1.3] underline"
              onClick={showAll}
            >
              세미나 더 보기
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-x-[24px] gap-y-[40px] max-md:gap-x-[8px]">
          {data.slice(0, visibleCount).map((seminar, index) => {
            const topicIdCount = data.filter(
              (item) => item.topicId === seminar.topicId
            ).length;
            return (
              <div
                className="[width:calc(25%-18px)] group overflow-hidden max-md:[width:calc(33.3333%-5.3333px)]"
                key={index}
              >
                <Link
                  key={index}
                  className="text-[18px] text-[#111] font-semibold block relative "
                >
                  <div className="">
                    <img
                      src={seminar.image}
                      alt={seminar.topic}
                      className="rounded-[6px] object-cover transform
                      group-hover:scale-[1.05] transition-transform duration-500"
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
                    <p
                      className="[margin-top:calc(11px)] px-[8px] min-h-[46px] mb-[8px] text-[18px]
                  line-clamp-2 break-words overflow-hidden
                  text-ellipsis whitespace-normal group-hover:text-point1"
                    >
                      {seminar.title}
                    </p>
                    <div
                      className="flex gap-[4px] mb-[4px] text-[12px] pl-[8px]
                    leading-[1.3] group-hover:text-point1"
                    >
                      <p className="font-bold">{seminar.name}</p>
                      <p className="font-medium">{seminar.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
