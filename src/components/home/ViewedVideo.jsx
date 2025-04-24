import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import styles from './Slides.module.css';

export default function ViewedVideo() {
  // 아티클데이터 가져오기
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['/articles'],
    queryFn: () => fetch('/articles').then((res) => res.json()),
  });
  const slides = data?.articles
    ? data.articles.filter((item) => item.video === 'Y')
    : [];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto relative">
      <h1 className="text-[24px] font-bold">최근 많이 본 비디오</h1>
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
            key={index}
            className="flex items-center justify-center pt-[36px]"
          >
            <div
              className="[width:calc(33.3333% - 16px)] mb-[104px] relative hover:-translate-y-5 transition-transform
        duration-500 group"
            >
              <Link
                key={slide.id}
                to={`/video/${slide.id}`}
                className="text-[18px] text-[#111] font-semibold block relative "
              >
                <div className="">
                  <img
                    src={slide.thumbnail}
                    alt={slide.topic}
                    className="rounded-[6px] block w-full h-auto object-cover"
                  />
                  <div className="absolute left-[10px] top-[10px] flex gap-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className=""
                    >
                      <g clipPath="url(#clip0_401_2421)">
                        <circle
                          cx="16"
                          cy="16"
                          r="15.5"
                          fill="white"
                          stroke="#00D48D"
                        />
                        <path
                          d="M22.4148 15.5904L13.7867 9.55071C13.4553 9.31874 13 9.55582 13 9.96033L13 22.0397C13 22.4442 13.4554 22.6812 13.7867 22.4493L22.4148 16.4096C22.6992 16.2106 22.6992 15.7894 22.4148 15.5904Z"
                          fill="#00D48D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_401_2421">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[51px] h-[32px] border border-[#00d48d] 
                rounded-[6px] bg-[#fff]"
                    >
                      <path
                        d="M18.532 11.204V20.132H16.948L12.244 13.496V20.132H10.804V11.204H12.388L17.092 17.864V11.204H18.532ZM26.261 11.204V12.452H21.353V14.912H25.637V16.16H21.353V18.884H26.261V20.132H19.913V11.204H26.261ZM39.3916 11.204L36.8356 20.132H35.5396L33.3316 13.472L31.2916 20.132H29.9836L27.0796 11.204H28.5916L30.6316 17.756L32.5516 11.216H34.0996L36.0796 17.756L37.8796 11.204H39.3916Z"
                        fill="#00D48D"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="[width:calc(100% - 16px)] h-auto bg-[#fff] rounded-[6px] p-[10px] absolute 
                left-[16px] -bottom-[103px]
              "
                >
                  <div className="flex gap-[2.5px] h-[32px] items-center ">
                    <div
                      className=" rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] leading-[20px]"
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
