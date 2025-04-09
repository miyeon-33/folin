import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const menus = [
  {
    path: '/2024interviewzip',
    menu: 'interview',
    img: '/public/images/ymy/subslide1.jpg',
  },
  { path: '/b2b', menu: 'B2B', img: '/public/images/ymy/subslide2.jpg' },
  {
    path: '/membership#app',
    menu: 'app',
    img: '/public/images/ymy/subslide3.jpg',
  },
  {
    path: '/mypage/notice/artidle:id',
    menu: 'notice',
    img: '/public/images/ymy/subslide4.jpg',
  },
];

export default function SubSlide() {
  const subSlide = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <div className=" px-[24px] max-sm:px-[8px] max-w-[1248px] mb-[104px] mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.subslide-custom-go',
          prevEl: '.subslide-custom-back',
        }}
        spaceBetween={24}
        slidesPerView={1}
        className=""
      >
        {subSlide.map((subslide, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-[120px] rounded-[6px]">
              <Link key={menus[index].path} to={menus[index].path} className="">
                <img
                  src={menus[index].img}
                  alt={menus[index].menu}
                  className="object-cover w-full h-full rounded-[6px] "
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
