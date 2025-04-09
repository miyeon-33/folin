// components / series / SeriesBox.jsx
import arrow from '@/assets/images/rhr/arrow.png';
import arrowG from '@/assets/images/rhr/arrow_g.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import Prev_g from '@/assets/images/rhr/slideOffL.png';
import Prev_b from '@/assets/images/rhr/SlideOnL.png';
import Next_g from '@/assets/images/rhr/slideOffR.png';
import Next_b from '@/assets/images/rhr/SlideOnR.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import styles from './SeriesBox.module.css';

export default function SeriesBox({ topic }) {
  const [isToggle, setIsToggle] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    topic?.sort(
      (a, b) => parseInt(b.tag.match(/\d+/)) - parseInt(a.tag.match(/\d+/))
    );
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);

      swiperRef.current.on('slideChange', () => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      });
    }
  }, []);

  return (
    <div className="mb-[104px]">
      <div className="flex items-center mb-[20px]">
        <Link
          className="flex items-center w-full text-[#111] hover:text-point1 hover:translate-x-[16px]
          transition-transform duration-400"
          onMouseEnter={() => setIsToggle(false)}
          onMouseLeave={() => setIsToggle(true)}
        >
          <h3 className="text-[24px]  font-bold">{topic[0].topic}</h3>
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
          spaceBetween={39}
          slidesPerView={3}
          autoplay={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.slider}
        >
          {topic.map((item) => (
            <SwiperSlide key={item.id}>
              <Link className="block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300">
                <div>
                  <img
                    src={newBtn}
                    alt="새로운게시물"
                    className="absolute z-2 top-[10px] left-[10px]"
                  />
                  <img
                    src={item.thumbnail}
                    alt="썸네일"
                    className="w-[calc(100% - 16px)] h-full object-cover rounded-[6px]"
                  />
                </div>
                <div className="relative w-[calc(100% - 16px)] h-[auto] p-[10px] top-[-15px] right-[-15px] bg-white rounded-[6px]">
                  <div className="flex items-center gap-[2px]">
                    <div
                      className="max-w-[calc(100% - 35px)] bg-[#F2EC72] border border-[#F2EC72] rounded-[6px] py-[6px] px-[8px]
                    text-[#111] text-[12px] font-bold"
                    >
                      {item.topic}
                    </div>
                    <div
                      className="inline-block bg-white border border-[#F2EC72] rounded-[6px] py-[6px] px-[8px]
                    text-[#111] text-[12px] font-bold"
                    >
                      {item.tag}
                    </div>
                  </div>
                  <p className="line-clamp-2 break-words overflow-ellipsis mt-[10px] mb-[16px] text-[18px] font-bold leading-[130%]">
                    {item.title}
                  </p>
                  <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
                    <span className=" text-[12px] font-bold leading-[150%] mr-[8px]">
                      {item.author}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button
            className="absolute -left-[55px] top-1/2"
            ref={prevRef}
            disabled={isBeginning}
          >
            <img
              src={isBeginning ? Prev_g : Prev_b}
              alt="prev"
              className="w-[24px] h-[24px]"
            />
          </button>
          <button
            className="absolute -right-[55px] top-1/2"
            ref={nextRef}
            disabled={isEnd}
          >
            <img
              src={isEnd ? Next_g : Next_b}
              alt="next"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
