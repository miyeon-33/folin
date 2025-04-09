// components / series / SeriesBox.jsx
import arrow from '@/assets/images/rhr/arrow.png';
import arrowG from '@/assets/images/rhr/arrow_g.png';
import newBtn from '@/assets/images/icon/newBtn.svg';
import navigationPrev from '@/assets/images/rhr/slideOffL.png';
import navigationNext from '@/assets/images/rhr/slideOffR.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import styles from './SeriesBox.module.css';

export default function SeriesBox({ topic }) {
  const [isToggle, setIsToggle] = useState(true);
  useEffect(() => {
    topic?.sort(
      (a, b) => parseInt(b.tag.match(/\d+/)) - parseInt(a.tag.match(/\d+/))
    );
  }, [topic]);

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

      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={39}
          slidesPerView={3}
          navigation={true}
          autoplay={{}}
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
                    className="w-[calc(100% - 16px)] h-full aspect-w-4 aspect-h-3 object-cover rounded-[6px]"
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
      </div>
    </div>
  );
}
