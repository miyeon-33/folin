import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Best() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/series'],
    queryFn: () => fetch('/series').then((res) => res.json()),
  });

  const flattenedSeries = data?.data ? data.data.flat() : [];

  // 1화 데이터 추출 및 topicId 중복 제거
  const topSeries = flattenedSeries
    .sort((a, b) => b.favorit - a.favorit)
    .filter(
      (series, index, self) =>
        self.findIndex((s) => s.topicId === series.topicId) === index &&
        series.tag === '1화'
    )
    .slice(0, 3);

  // 2화 데이터 필터링 (topSeries의 topicId와 동일한 데이터만)
  // const secondLinkSeries = flattenedSeries.filter(
  //   (series) =>
  //     topSeries.some((top) => top.topicId === series.topicId) &&
  //     series.tag === '2화'
  // );

  // 2화와 3화 데이터를 topicId 기준으로 묶기
  const relatedSeriesByTopic = flattenedSeries.filter(
    (series) =>
      topSeries.some((top) => top.topicId === series.topicId) &&
      (series.tag === '2화' || series.tag === '3화')
  );

  // 3화 데이터 필터링
  // const thirdLinkSeries = flattenedSeries.filter(
  //   (series) =>
  //     topSeries.some((top) => top.topicId === series.topicId) &&
  //     series.tag === '3화'
  // );

  return (
    <div className="w-full px-[24px] max-sm:px-[8px]">
      <div className="pt-[160px] pb-[96px]">
        <h3 className="text-[28px] font-bold leading-[36.4px] text-center">
          폴인의 BEST 시리즈
        </h3>
        <p className="mt-[16px] mb-[40px] text-center text-[18px] font-medium leading-[27px]">
          브랜딩, 콘텐츠, 공간, 커리어 등 다양한 영역에서
          <br />
          트렌드를 이끄는 링커들의 인사이트
        </p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }}
          className="max-w-[1200px]"
        >
          {topSeries?.map((series) => (
            <SwiperSlide key={series.id} className="">
              <Link
                to={`/series/${series.id}`}
                className="text-[18px] text-[#111] font-semibold block relative"
              >
                <div className="">
                  <img
                    src={series.thumbnail}
                    alt={series.topic}
                    className="rounded-[6px] block w-full h-auto object-cover pr-[16px] "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[51px] h-[32px] absolute left-[10px] top-[10px] border border-[#00d48d] 
                rounded-[6px] bg-[#fff]"
                  >
                    <path
                      d="M18.532 11.204V20.132H16.948L12.244 13.496V20.132H10.804V11.204H12.388L17.092 17.864V11.204H18.532ZM26.261 11.204V12.452H21.353V14.912H25.637V16.16H21.353V18.884H26.261V20.132H19.913V11.204H26.261ZM39.3916 11.204L36.8356 20.132H35.5396L33.3316 13.472L31.2916 20.132H29.9836L27.0796 11.204H28.5916L30.6316 17.756L32.5516 11.216H34.0996L36.0796 17.756L37.8796 11.204H39.3916Z"
                      fill="#00D48D"
                    />
                  </svg>
                </div>
                <div className="bg-[#fff] rounded-[6px] p-[10px] -mt-[16px] relative ml-[16px]">
                  <div className="flex gap-[2.5px] items-center h-[32px]">
                    <div
                      className="rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px]"
                      style={{ backgroundColor: series.color }}
                    >
                      {series.topic}
                    </div>
                    <div
                      className="border border-[#f2ec72] text-[12px] py-[6px] px-[8px] rounded-[6px]"
                      style={{ border: `1px solid ${series.color}` }}
                    >
                      {series.tag}
                    </div>
                  </div>
                  <strong className="block mt-[10px] mb-[16px] text-[18px] font-bold break-words">
                    {series.title}
                  </strong>
                  <span className="text-[12px] block">{series.author}</span>
                </div>
              </Link>
              {/* 2화 */}
              {relatedSeriesByTopic
                .filter(
                  (rel) => rel.topicId === series.topicId && rel.tag === '2화'
                )
                .map((rel) => (
                  <Link key={rel.id} to={`/series/${rel.id}`}>
                    <div className="rounded-[6px] p-[10px] bg-[#fff] text-[18px] ml-[16px] mt-[4px]">
                      <div className="flex gap-[8px] items-center">
                        <div
                          className="rounded-[6px] py-[6px] px-[8px] text-[12px] text-gray-600 break-keep font-bold"
                          style={{ border: `1px solid ${rel.color}` }}
                        >
                          {rel.tag}
                        </div>
                        <div
                          className="text-[18px] font-bold text-gray-600 overflow-hidden whitespace-nowrap
                        overflow-ellipsis break-all"
                        >
                          {rel.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              {/* 3화 */}
              {relatedSeriesByTopic
                .filter(
                  (rel) => rel.topicId === series.topicId && rel.tag === '3화'
                )
                .map((rel) => (
                  <Link key={rel.id} to={`/series/${rel.id}`}>
                    <div className=" rounded-[6px] p-[10px] bg-[#fff] text-[18px] ml-[16px] mt-[4px]">
                      <div className="flex gap-[8px] items-center ">
                        <div
                          className="rounded-[6px] py-[6px] px-[8px] text-[12px] text-gray-600 break-keep font-bold"
                          style={{ border: `1px solid ${rel.color}` }}
                        >
                          {rel.tag}
                        </div>
                        <div
                          className="text-[18px] font-bold text-gray-600 overflow-hidden whitespace-nowrap
                        overflow-ellipsis break-all"
                        >
                          {rel.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
