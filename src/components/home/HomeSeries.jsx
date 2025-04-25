import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Link } from 'react-router';
import arrow from '@/assets/images/icon/homearrow.png';
import harrow from '@/assets/images/icon/homearrowcolor.png';
import { useQuery } from '@tanstack/react-query';
import styles from './Slides.module.css';

const menus = [{ path: '/article/:articleId', menu: '아티클' }];
const arrowMenus = [{ path: '/article/18', menu: '시리즈' }];

export default function HomeSeries() {
  const [hovered, setHovered] = useState(false);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['series18'],
    queryFn: () => fetch('/series/18').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto relative">
      <div className="max-md:flex max-md:justify-between max-md:items-center">
        <Link
          to={arrowMenus[0].path}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-[4px] hover:translate-x-5 transition-transform duration-500 group"
        >
          <h1 className="text-[24px] text-gray-600 font-bold group-hover:text-[#00d48d]">
            토스팀에게 듣다: 토스 10주년 '10 to 100'
          </h1>
          <img src={hovered ? harrow : arrow} className="w-[52px] h-[24px]" />
        </Link>
      </div>
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
        {data.map((slide) => (
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
                      className=" rounded-[6px]  py-[6px] px-[8px] text-[#111] text-[12px] leading-[20px]"
                      style={{ backgroundColor: slide.color }}
                    >
                      {slide.topic}
                    </div>
                    <div
                      className="border text-[12px] py-[6px] px-[8px] rounded-[6px] leading-[20px]"
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
