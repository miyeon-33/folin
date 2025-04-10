import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prevAll from '@/assets/images/icon/prevgray.png';
import next from '@/assets/images/icon/nextblack.png';
import prev from '@/assets/images/icon/prevblack.png';
import nextAll from '@/assets/images/icon/nextgray.png';
import { useState, useRef } from 'react';

export default function Shorts() {
  const shorts = [
    { id: 1, videoSrc: '/videos/example.mp4' },
    { id: 2, videoSrc: '/videos/example.mp4' },
    { id: 3, videoSrc: '/videos/example.mp4' },
    { id: 4, videoSrc: '/videos/example.mp4' },
    { id: 5, videoSrc: '/videos/example.mp4' },
    { id: 6, videoSrc: '/videos/example.mp4' },
    { id: 7, videoSrc: '/videos/example.mp4' },
    { id: 8, videoSrc: '/videos/example.mp4' },
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

  const handleMouseEnter = (videoRef) => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          // Automatic playback started!
          videoRef.current.play();
        })
        .catch(function (error) {});
    }
  };
  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
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
        {shorts.map((slide, index) => {
          const videoRef = useRef(null);
          return (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center max-w-[282px]"
            >
              <div
                className=""
                onMouseEnter={() => handleMouseEnter(videoRef)}
                onMouseLeave={() => handleMouseLeave(videoRef)}
              >
                <video
                  ref={videoRef}
                  src={slide.videoSrc}
                  controls
                  muted
                  className="h-[451px] rounded-[6px] object-cover w-full"
                ></video>
              </div>
            </SwiperSlide>
          );
        })}
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
