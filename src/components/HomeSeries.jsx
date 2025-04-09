import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import offAll from '@/assets/images/icon/prevgray.png';
import off from '@/assets/images/icon/prevblack.png';
import on from '@/assets/images/icon/nextblack.png';
import onAll from '@/assets/images/icon/nextgray.png';
import { useState } from 'react';
import { Link } from 'react-router';
import arrow from '@/assets/images/icon/homearrow.png';
import harrow from '@/assets/images/icon/homearrowcolor.png';

const menus = [{ path: '/article/:articleId', menu: '아티클' }];
const arrowMenus = [{ path: '/series/:articleId', menu: '시리즈' }];

export default function HomeSeries() {
  const [hovered, setHovered] = useState(false);

  const homeSeriesArticle = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];

  const [offButtonImg, setOffButtonImg] = useState(offAll);
  const [onButtonImg, setOnButtonImg] = useState(on);

  const handleOnSlide = (swiper) => {
    const startIndex = swiper.activeIndex;
    const endIndex = startIndex + swiper.params.slidesPerView;

    if (startIndex <= 0) {
      setOffButtonImg(offAll);
    } else {
      setOffButtonImg(off);
    }

    if (endIndex >= homeSeriesArticle.length) {
      setOnButtonImg(onAll);
    } else {
      setOnButtonImg(on);
    }
  };

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] mx-auto relative">
      <Link
        to={arrowMenus[0].path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-[4px] hover:translate-x-5 transition-transform duration-500 group"
      >
        <h1 className="text-[24px] text-gray-600 font-bold group-hover:text-[#00d48d]">
          시리즈 | 나의 풋풋한 창업기
        </h1>
        <img src={hovered ? harrow : arrow} className="w-[52px] h-[24px]" />
      </Link>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.homeseries-custom-go',
          prevEl: '.homeseries-custom-back',
        }}
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
        onSlideChange={handleOnSlide}
        className="z-10"
      >
        {homeSeriesArticle.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center pt-[36px]"
          >
            <div
              className="[width:calc(33.3333% - 16px)] mb-[104px] relative hover:-translate-y-5 transition-transform
        duration-500 group"
            >
              {menus.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[18px] text-[#111] font-semibold block relative "
                >
                  <div className="">
                    <img
                      src="/public/images/ymy/viewedarticle.jpg"
                      className="rounded-[6px] block w-full h-auto object-cover"
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
                    className="[width:calc(100% - 16px)] h-auto bg-[#fff] rounded-[6px] p-[10px] absolute 
                left-[16px] -bottom-[103px]
              "
                  >
                    <div className="flex gap-[2.5px] h-[32px] items-center ">
                      <div className=" rounded-[6px] bg-[#a3cfff]  py-[6px] px-[8px] text-[#111] text-[12px] leading-[20px]">
                        폴인이 고른책
                      </div>
                      <div className="border border-[#a3cfff] text-[12px] py-[6px] px-[8px] rounded-[6px] leading-[20px]">
                        1화
                      </div>
                    </div>
                    <strong className="group-hover:text-[#00d48d] block mt-[10px] mb-[16px] text-[18px] font-bold break-keep">
                      신수정의 트레이닝① 퇴사가 어려워진 40대에게
                    </strong>
                    <span className="group-hover:text-[#00d48d] text-[12px]">
                      신수정
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-md:absolute max-md:top-0 max-md:right-[20px]">
        <button className="homeseries-custom-back w-[36px] h-[36px] px-[6px] absolute left-[-24px] top-1/2 translate-y-1/2 max-md:static">
          <img src={offButtonImg} />
        </button>
        <button className="homeseries-custom-go w-[36px] h-[36px] px-[6px] absolute right-[-24px] top-1/2 translate-y-1/2 max-md:static">
          <img src={onButtonImg} />
        </button>
      </div>
    </div>
  );
}
