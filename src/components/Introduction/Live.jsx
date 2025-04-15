import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/components/home/Slides.module.css';
import live1 from '@/assets/images/ymy/liveimage1.png';
import live2 from '@/assets/images/ymy/liveimage2.png';
import live3 from '@/assets/images/ymy/liveimage3.png';
import live4 from '@/assets/images/ymy/liveimage4.png';
import live5 from '@/assets/images/ymy/liveimage5.png';
import live6 from '@/assets/images/ymy/liveimage6.png';
import live7 from '@/assets/images/ymy/liveimage7.png';
import live8 from '@/assets/images/ymy/liveimage8.png';
import live9 from '@/assets/images/ymy/liveimage9.png';

export default function Live() {
  const lives = [
    {
      id: 1,
      image: live1,
      title: '바이럴 마케팅 없이 MAU 1800만 달성 비결',
    },
    {
      id: 2,
      image: live2,
      title: 'BTS·배틀그라운드·갤럭시, 크리에이티브 기획법',
    },
    {
      id: 3,
      image: live3,
      title: "네이버 블로그, '제2 전성기' 부른 락인 전략",
    },
    {
      id: 4,
      image: live4,
      title: '"AI,데이터,관찰" 구글 디자이너의 생각법',
    },
    {
      id: 5,
      image: live5,
      title: '슈퍼말차 : 힙한 브랜딩의 비밀',
    },
    {
      id: 6,
      image: live6,
      title: '토스를 브랜딩하는 콘텐츠 기획자들',
    },
    {
      id: 7,
      image: live7,
      title: "팀 유퀴즈, 어떻게 '국민 예능'을 만들었나",
    },
    {
      id: 8,
      image: live8,
      title: '생각이 자본인 시대, 당신의 모든 것이 메시지다',
    },
    {
      id: 9,
      image: live9,
      title: '맹그로브는 어떻게 MZ 1인 가구를 사로잡았나',
    },
  ];

  return (
    <div className="w-full px-[24px] max-sm:px-[8px] ">
      <div>
        <h3 className="text-center text-[28px] font-bold leading-[36.4px]">
          매월 2회 열리는 폴인 세미나
        </h3>
        <p className="text-center mt-[16px] mb-[8px] text-[18px] font-medium leading-[27px] mb-[40px]">
          지금 가장 주목받는 브랜드와 전문가를 라이브로
          <br />
          만나는 시간. 매월 둘째 주, 넷째 주 목요일 저녁에
          <br />
          열립니다.
        </p>
        <Swiper
          modules={[Navigation]}
          navigation
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
          className={styles.liveslider}
          style={{ maxWidth: '1200px' }}
        >
          {lives.map((live) => (
            <SwiperSlide key={live.id} className="">
              <div>
                <img
                  src={live.image}
                  alt={live.title}
                  className="rounded-[6px]"
                />
                <strong
                  className="block mt-[11px] px-[8px] min-h-[46px] line-clamp-2 break-words overflow-hidden
                overflow-ellipsis whitespace-normal text-[18px] font-bold "
                >
                  {live.title}
                </strong>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
