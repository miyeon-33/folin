import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prevAll from '@/assets/images/icon/prevgray.png';
import next from '@/assets/images/icon/nextblack.png';
import prev from '@/assets/images/icon/prevblack.png';
import nextAll from '@/assets/images/icon/nextgray.png';
import { useState } from 'react';

export default function Shorts() {
  const shorts = [
    { id: 1, videoSrc: 'path-to-video1.mp4' },
    { id: 2, videoSrc: 'path-to-video2.mp4' },
    { id: 3, videoSrc: 'path-to-video3.mp4' },
    { id: 4, videoSrc: 'path-to-video4.mp4' },
    { id: 5, videoSrc: 'path-to-video5.mp4' },
    { id: 6, videoSrc: 'path-to-video6.mp4' },
    { id: 7, videoSrc: 'path-to-video7.mp4' },
    { id: 8, videoSrc: 'path-to-video8.mp4' },
  ];

  const [prevButtonImg, setPrevButtonImg] = useState(prevAll);
  const [nextButtonImg, setNextButtonImg] = useState(next);

  const handleSlideChange = (swiper) => {
    const startIndex = swiper.activeIndex;
    const endIndex = startIndex + swiper.params.slidesPerView;

    if (startIndex <= 0) {
      setPrevButtonImg(prevAll);
    } else {
      setPrevButtonImg(prev);
    }

    if (endIndex >= shorts.length) {
      setNextButtonImg(nextAll);
    } else {
      setNextButtonImg(next);
    }
  };

  return (
    <div className="px-[24px] max-sm:px-[8px] max-w-[1200px] mb-[104px] relative mx-auto">
      <h1 className="h-[36px] text-[24px] font-bold mb-[40px]">폴인 쇼츠</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={handleSlideChange}
        className="z-10"
      >
        {shorts.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center max-w-[282px]"
          >
            <video
              src={slide.videoSrc}
              controls
              className="h-[451px] rounded-[6px]"
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-md:absolute max-md:top-0 max-md:right-[20px]">
        <button className="custom-prev w-[36px] h-[36px] px-[6px] absolute left-[-24px] top-1/2 translate-y-1/2 max-md:static">
          <img src={prevButtonImg} />
        </button>
        <button className="custom-next w-[36px] h-[36px] px-[6px] absolute right-[-24px] top-1/2 translate-y-1/2 max-md:static">
          <img src={nextButtonImg} />
        </button>
      </div>
    </div>
  );
}
