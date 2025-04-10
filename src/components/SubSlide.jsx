import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import subButton1 from '@/assets/images/icon/subslidebutton1.png';
import subButton2 from '@/assets/images/icon/subslidebutton2.png';

const menus = [
  {
    path: '/2024interviewzip',
    menu: 'interview',
    img: '/images/ymy/subslide1.jpg',
  },
  { path: '/b2b', menu: 'B2B', img: '/images/ymy/subslide2.jpg' },
  {
    path: '/membership#app',
    menu: 'app',
    img: '/images/ymy/subslide3.jpg',
  },
  {
    path: '/mypage/notice/artidle:id',
    menu: 'notice',
    img: '/images/ymy/subslide4.jpg',
  },
];

export default function SubSlide() {
  const subSlide = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <div className=" px-[24px] max-sm:px-[8px] max-w-[1248px] mb-[104px] mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.subslide-custom-go',
          prevEl: '.subslide-custom-back',
        }}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className=""
      >
        {subSlide.map((subslide, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-[120px] rounded-[6px]">
              <Link key={menus[index].path} to={menus[index].path} className="">
                <img
                  src={menus[index].img}
                  alt={menus[index].menu}
                  className="object-cover w-full h-full rounded-[6px]  "
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="border absolute top-[10px] right-[10px] w-[95px] h-[24px] z-2
        rounded-[24px] bg-[#111] flex justify-center px-[8px] py-[3px]"
        >
          <button className="subslide-custom-back px-[6px] z-10">
            <img src={subButton1} className="w-[16px]" />
          </button>
          <button className="subslide-custom-go px-[6px] z-10">
            <img src={subButton2} className="w-[16px]" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
