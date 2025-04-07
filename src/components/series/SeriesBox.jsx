// components / series / SeriesBox.jsx
import arrow from '@/assets/images/rhr/arrow.png';
import arrowG from '@/assets/images/rhr/arrow_g.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import img1 from '@/assets/images/rhr/1743333644564_a_id-m2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Link } from 'react-router';

export default function SeriesBox() {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <div className="mb-[104px]">
      <div className="flex items-center mb-[20px]">
        <Link
          className="flex items-center w-full text-[#111] hover:text-point1 hover:translate-x-[16px]
          transition-transform duration-400"
          onMouseEnter={() => setIsToggle(false)}
          onMouseLeave={() => setIsToggle(true)}
        >
          <h3 className="text-[24px]  font-bold">신수정의 트레이닝</h3>
          <img
            src={isToggle ? arrow : arrowG}
            alt="showSeriesDetails"
            className="w-[52px] h-[24px] object-cover"
          />
        </Link>
      </div>

      <div className="pt-[16px] w-[calc(33.3333% - 16px)]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className=""
        >
          <SwiperSlide className="">
            <Link className="">
              <div className="hover:translate-y-[-16px] transition-transform duration-300">
                <div className="h-[auto] w-[calc(100% - 16px)] aspect-4/3 border">
                  <div className="absolute z-2 top-[10px] left-[10px]">
                    <img
                      src={newBtn}
                      alt="새로운게시물"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative min-w-[120px] h-full">
                    <div className="absolute w-full h-full">
                      <img
                        src={img1}
                        alt="이미지1"
                        className="w-full h-full object-cover rounded-[6px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-[calc(100% - 16px)] h-[auto] p-[10px] top-[-15px] right-[-15px] bg-white rounded-[6px]">
                  <div className="flex items-center gap-[2px]">
                    <div
                      className="max-w-[calc(100% - 35px)] bg-[#F2EC72] border border-[#F2EC72] rounded-[6px] py-[6px] px-[8px]
                    text-[#111] text-[12px] font-bold"
                    >
                      1등 브랜드의 비밀
                    </div>
                    <div
                      className="inline-block bg-white border border-[#F2EC72] rounded-[6px] py-[6px] px-[8px]
                    text-[#111] text-[12px] font-bold"
                    >
                      2화
                    </div>
                  </div>
                  <p className="line-clamp-2 break-words overflow-ellipsis mt-[10px] mb-[16px] text-[18px] font-bold text-[#111] leading-[130%]">
                    동서식품② 시장점유율 90%, 맥심이 45년간 정상을 지킨 법
                  </p>
                  <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
                    <span className=" text-[12px] font-bold text-[#111] leading-[150%] mr-[8px]">
                      하치수
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
