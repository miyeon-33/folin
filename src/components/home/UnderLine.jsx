import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import styles from './Slides.module.css';

const UnderLineItem = [
  {
    id: 1,
    path: '/seminar/1',
    color: '#A3CFFF',
    text: "'나는 이런 게 좋았다'고 계속 취향을 드러내요. 어떤 프로젝트가 있을 때 '안근태에게 잘 맞겠다'는 생각이 들도록요.",
    author: '정재민',
    job: '예문정앤파트너스 대표번호사',
  },
  {
    id: 2,
    path: '/seminar/2',
    color: '#A45EEB',
    text: '저 사람이 나를 선택하기도 했지만 내가 저 사람과 함께 하기로 결정한 것이니까요. 이 선택에 부끄럽지 않아야 한다고 생각해요.',
    author: '윤현준',
    job: '스튜디오 슬램 대표',
  },
  {
    id: 3,
    path: '/seminar/3',
    color: '#E5C58A',
    text: '매스미디어로 돈을 버는 건 미국에서 뉴옥타임스 하나뿐이에요. 아마존처럼 모든 걸 다루는 회사는 하나밖에 살아남을 수 없어요.',
    author: '김용주',
    job: '국립현대미술관 디자인기획관',
  },
  {
    id: 4,
    path: '/seminar/4',
    color: '#FF595F',
    text: "제 원동력은 '결핍'이에요. 우울, 분노, 열등감은 좋은 연료가 돼요. 절박한 만큼 열정을 붓고, 빠르게 성장할 수 있거든요.",
    author: '송길영',
    job: '마인드 마이너·『시대예보:핵개인의 시대』 저자',
  },
  {
    id: 5,
    path: '/seminar/5',
    color: '#A3CFFF',
    text: "빠르게 추진한 뒤에 그 일이 진행되기 시작하면, 그 다음에는 집요하게 파고들어 일이 '되게' 만듭니다.",
    author: '최명화',
    job: '블러썸미(Blossom Me) 대표',
  },
  {
    id: 6,
    path: '/seminar/6',
    color: '#A45EEB',
    text: "다만 물려받는 것 말고, '내것'을 하고 싶다는 꿈은 있었어요. 그냥 고깃집 아들로만 남고 싶지는 않았거든요.",
    author: '김동환',
    job: '삼프로TV 대표',
  },
  {
    id: 7,
    path: '/seminar/7',
    color: '#E5C58A',
    text: '중요한 건 의사결정을 빨리하는 게 아니라, 그 결정을 언제까지 내릴지를 먼저 정하는 거예요.',
    author: '유기숙',
    job: 'HSBC코리아 기업금융부 대표',
  },
  {
    id: 8,
    path: '/seminar/8',
    color: '#FF595F',
    text: '제 자신을 자본이라고 생각해요. 이 자본을 자산으로 만들지, 부채로 만들지는 제가 시간을 어떻게 쓰느냐에 따라 달라지겠죠.',
    author: '홍상우',
    job: '제일기획 디지털테크본부장',
  },
];

export default function UnderLine() {
  return (
    <div className="px-[24px] max-md:px-[8px] max-w-[1200px] mx-auto relative">
      <h1 className="text-[24px] font-bold mb-[36px]">폴인 밑줄</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1025: {
            slidesPerView: 4,
          },
        }}
        className={styles.underLine}
      >
        {UnderLineItem.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" rounded-[6px] hover:-translate-y-5 !transition-all duration-500 "
            style={{ backgroundColor: item.color }}
          >
            <div className="p-[16px] ">
              <Link
                to={`/articles/${item.id}`}
                className="flex flex-col justify-between h-full w-full "
                style={{ aspectRatio: '2 / 3' }}
              >
                <div className="text-gray-600 text-[24px] font-bold line-clamp-9 max-sm:text-[18px]">
                  {item.text}
                </div>
                <div className="text-gray-600 leading-[1.5]">
                  <div className="font-bold">{item.author}</div>
                  <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {item.job}
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
