import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router';

export default function SeriesSearch() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/series'],
    queryFn: () => fetch('/series').then((res) => res.json()),
  });

  const flattenedData =
    data &&
    Object.values(data)
      .flatMap((innerObj) => Object.values(innerObj))
      .flat();

  const planningCount =
    flattenedData?.filter((item) => item.introduce?.includes('기획')).length ||
    0;

  const filteredData = flattenedData?.filter((item) =>
    item.introduce?.includes('기획')
  );

  const topicIdCounts = filteredData?.reduce((acc, item) => {
    if (item.topicId) {
      acc[item.topicId] = (acc[item.topicId] || 0) + 1;
    }
    return acc;
  }, {});
  console.log(topicIdCounts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-sm:top-[8px] px-[24px] max-md:px-[24px] mb-[72px]">
      <div className=" max-w-[1200px] mx-auto">
        <div className="pr-[16px] mb-[32px] flex items-center justify-between">
          <div className="flex gap-[4px]">
            <h3 className="text-[24px] font-bold leading-[1.3]">시리즈</h3>
            <h4 className="text-[24px] font-bold leading-[1.3] text-point1">
              {planningCount}
            </h4>
          </div>
          <button className="text-[12px] font-normal leading-[1.3] underline">
            시리즈 더 보기
          </button>
        </div>
        <div className="mb-[48px]">
          {filteredData?.map((item, index) => (
            <Link key={item.topic} to={`/series/${item.topicId || index}`}>
              <div className="mb-[4px] flex items-center flex-nowrap gap-[4px]">
                <div
                  className="
                h-[40px] rounded-[6px] py-[8px] px-[12px]
                text-gray-600 font-bold flex items-center"
                  style={{ backgroundColor: item.color }}
                >
                  {item.topic || 'null'}
                </div>
                {topicIdCounts &&
                  Object.entries(topicIdCounts).map(([topicId, count]) => (
                    <div
                      className="h-[40px] border 
                    rounded-[6px] py-[8px] px-[12px] break-keep"
                    >
                      {topicIdCounts?.[item.topicId]
                        ? `${topicIdCounts[item.topicId]}화`
                        : ''}
                    </div>
                  ))}
              </div>
              <p
                className="h-[56px] text-[18px] bg-[#fff] rounded-[6px] px-[16px] font-medium
            whitespace-nowrap overflow-hidden text-ellipsis leading-[56px] text-gray-600 mb-[48px]"
              >
                {item.introduce}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
