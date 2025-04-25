import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import styles from './Slides.module.css';

export default function ViewedArticles() {
  // 아티클데이터 가져오기
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['/articles'],
    queryFn: () => fetch('/articles').then((res) => res.json()),
  });

  const slides = data?.articles
    ? data.articles.sort((a, b) => b.favorit - a.favorit).slice(0, 15)
    : [];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto relative">
      <h1 className="text-[24px] font-bold">최근 많이 본 아티클</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
        }}
        className={styles.articleslider}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center justify-center pt-[36px]"
          >
            <div
              className="[width:calc(33.3333% - 16px)] mb-[104px] relative hover:-translate-y-5 transition-transform
        duration-500 group"
            >
              <Link
                key={slide.id}
                to={`/article/${slide.id}`}
                className="text-[18px] text-[#111] font-semibold block relative "
              >
                <div className="">
                  <img
                    src={slide.thumbnail}
                    alt={slide.topic}
                    className="rounded-[6px] block w-full h-auto object-cover"
                  />
                </div>
                <div
                  className="[width:calc(100% - 16px)] h-auto bg-[#fff] rounded-[6px] p-[10px] absolute 
                left-[16px] -bottom-[103px]
              "
                >
                  <div className="flex gap-[2.5px] h-[32px] items-center ">
                    <div
                      className=" rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] leading-[1.5]"
                      style={{ backgroundColor: slide.color }}
                    >
                      {slide.topic}
                    </div>
                    <div
                      className="text-[12px] py-[6px] px-[8px] rounded-[6px] leading-[1.5]"
                      style={{ border: `1px solid ${slide.color}` }}
                    >
                      {slide.tag}
                    </div>
                  </div>
                  <strong className="group-hover:text-[#00d48d] block mt-[10px] mb-[16px] text-[18px] font-bold break-keep">
                    {slide.title}
                  </strong>
                  <span className="group-hover:text-[#00d48d] text-[12px]">
                    {slide.author}
                  </span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
