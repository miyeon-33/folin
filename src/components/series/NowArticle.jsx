// components /series /NowArticle.jsx
import arrow from '@/assets/images/rhr/arrow.png';
import arrowG from '@/assets/images/rhr/arrow_g.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import videoBtn from '@/assets/images/icon/play.svg';
import freeBtn from '@/assets/images/icon/freeBtn.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { Link } from 'react-router';
import styles from './SeriesBox.module.css';

export default function NowArticle({ seriesData, articleId }) {
  const [isToggle, setIsToggle] = useState(true);

  // seriesData.data가 배열인지 확인하고 정렬
  console.log(seriesData, '---');
  seriesData?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="pb-[104px] max-sm:pb-[64px]">
      <div className="flex items-center mb-[20px]">
        <Link
          to={`/series/${seriesData?.[0].topicId}`}
          className="flex items-center w-full text-[#111] px-[8px] hover:text-point1 hover:translate-x-[16px]
          transition-transform duration-400 max-md:w-[calc(100%-60px)] gap-[4px]"
          onMouseEnter={() => setIsToggle(false)}
          onMouseLeave={() => setIsToggle(true)}
        >
          <h3 className="text-[24px] font-bold overflow-hidden overflow-ellipsis break-all whitespace-nowrap">
            {seriesData?.[0].topic}
          </h3>
          <img
            src={isToggle ? arrow : arrowG}
            alt="showSeriesDetails"
            className="w-[52px] h-[24px] object-cover"
          />
        </Link>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView="auto"
          autoplay={false}
          navigation
          breakpoints={{
            768: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
          // SeriesBox.module.css
          className={styles.slider}
        >
          {seriesData?.map((item) => (
            <SwiperSlide key={item.id} className="max-sm:!w-[calc(80%)]">
              {String(item.id) === articleId && (
                <div
                  className="mb-[8px] inline-block bg-white rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%]"
                  style={{ border: `1px solid ${item.color}` }}
                >
                  지금 읽고 있는 콘텐츠
                </div>
              )}
              <Link
                to={
                  item.video === 'N'
                    ? `/article/${item.id}`
                    : `/video/${item.id}`
                }
                className={
                  String(item.id) === articleId
                    ? 'block transition-all text-[#111] cursor-default'
                    : 'block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300'
                }
              >
                <div className="w-[calc(100% - 16px)] h-full relative mr-[16px]">
                  <div className="absolute flex z-2 top-[10px] left-[10px] gap-[2px]">
                    {item.video === 'Y' && (
                      <img src={videoBtn} alt="동영상" className="mb-2" />
                    )}
                    {(new Date() - new Date(item.createdAt)) /
                      (1000 * 60 * 60 * 24) <=
                      7 && (
                      <img src={newBtn} alt="새로운게시물" className="mb-2" />
                    )}
                    {item.free === 'Y' && (
                      <img src={freeBtn} alt="무료" className="mb-2" />
                    )}
                  </div>
                  <img
                    src={item.thumbnail}
                    alt="썸네일"
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </div>
                <div className="relative w-[calc(100% - 16px)] h-[auto] p-[10px] -translate-y-[16px] ml-[16px] bg-white rounded-[6px]">
                  <div className="flex items-center gap-[2px]">
                    <div
                      className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%] overflow-hidden overflow-ellipsis break-all whitespace-nowrap"
                      style={{
                        backgroundColor: item.color,
                        border: `1px solid ${item.color}`,
                      }}
                    >
                      {item.topic}
                    </div>
                    <div
                      className="inline-block bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%] whitespace-nowrap"
                      style={{
                        backgroundColor: '#fff',
                        border: `1px solid ${item.color}`,
                      }}
                    >
                      {item.tag}
                    </div>
                  </div>
                  <p className="line-clamp-2 break-words overflow-ellipsis mt-[10px] mb-[16px] text-[18px] font-bold leading-[130%]">
                    {item.title}
                  </p>
                  <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
                    <span className=" text-[12px] font-bold leading-[150%] mr-[8px]">
                      {item.member}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
