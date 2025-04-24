import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function LinkerSearch({ data, setShowLinker, showLinker }) {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 1025) {
        setVisibleCount(3);
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
    if (showLinker) {
      setVisibleCount(data?.length);
    }
  }, [showLinker]);

  const handleClick = () => {
    setShowLinker(true);
  };

  if (!data || data.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }
  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[8px] pb-[104px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="pr-[16px] mb-[32px] flex items-center justify-between">
          <div className="flex gap-[4px]">
            <h3 className="text-[24px] font-bold leading-[1.3]">링커</h3>
            <h4 className="text-[24px] font-bold leading-[1.3] text-point1">
              {data.length}
            </h4>
          </div>
          {visibleCount < data.length && (
            <button
              className="text-[12px] font-normal leading-[1.3] underline"
              onClick={handleClick}
            >
              링커 더 보기
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-x-[24px] gap-y-[40px] max-md:gap-x-[8px]">
          {data.slice(0, visibleCount).map((linker, index) => {
            const topicIdCount = data.filter(
              (item) => item.topicId === linker.topicId
            ).length;
            return (
              <div
                className="[width:calc(16.6667%-20px)] max-md:[width:calc(33.3333%-5.3333px)]"
                key={index}
              >
                <Link className="flex flex-col items-center" key={index}>
                  <div className="w-[96px] h-[96px] rounded-[50%] bg-[#808080]">
                    <img
                      src={linker.photo}
                      alt={linker.topic}
                      className="rounded-[50%] object-cover mx-auto"
                    />
                  </div>
                  <div className="mt-[16px] text-center text-gray-600">
                    <p className="font-bold text-[16px]">{linker.name}</p>
                    <p className="text-[12px]">{linker.job}</p>
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
