// components /series /RecommendArticle.jsx
import newBtn from '@/assets/images/icon/newBtn.svg';
import videoBtn from '@/assets/images/icon/play.svg';
import freeBtn from '@/assets/images/icon/freeBtn.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import styles from './SeriesBox.module.css';

export default function RecommendArticle({ recommendData }) {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    // 1부터 69까지의 숫자 중에서 랜덤으로 10개의 숫자를 선택하는 함수
    const getRandomNumbers = () => {
      // 1부터 69까지의 숫자 배열 생성
      const numbers = Array.from({ length: 69 }, (_, i) => i + 1);

      // Fisher-Yates 알고리즘을 사용하여 랜덤 셔플
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }

      // 앞에서부터 10개만 선택 (또는 데이터 개수보다 적을 경우 그만큼만)
      return numbers.slice(0, 10);
    };

    // 랜덤 ID 생성
    const randomIds = getRandomNumbers();

    // 랜덤 ID와 일치하는 데이터만 필터링
    if (recommendData && recommendData.length > 0) {
      const filtered = recommendData.filter((item) =>
        randomIds.includes(Number(item.id))
      );

      // 데이터가 충분하지 않을 경우를 대비해 필터링된 결과가 없거나 적으면 원본 데이터에서 일부 사용
      if (filtered.length < Math.min(5, recommendData.length)) {
        // 원본 데이터를 셔플하여 일부만 사용
        const shuffled = [...recommendData].sort(() => 0.5 - Math.random());
        setRandomArticles(
          shuffled.slice(0, Math.min(10, recommendData.length))
        );
      } else {
        setRandomArticles(filtered);
      }
    }
  }, [recommendData]);

  if (!randomArticles || randomArticles.length === 0) {
    return <div>추천 콘텐츠가 없습니다.</div>;
  }

  return (
    <div className="pb-[104px] max-sm:pd-[64px]">
      <div className="flex items-center mb-[20px]">
        <div className="flex items-center w-full text-[#111] px-[8px]">
          <h3 className="text-[24px] font-bold">추천 콘텐츠</h3>
        </div>
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
          {randomArticles?.map((item) => (
            <SwiperSlide key={item.id} className="max-sm:!w-[calc(80%)]">
              <Link
                to={
                  item.video === 'N'
                    ? `/article/${item.id}`
                    : `/video/${item.id}`
                }
                className="block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300"
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
