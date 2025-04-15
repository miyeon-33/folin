import linkerbg from '@/assets/images/ymy/linker-bg.png';
import linkerbg2 from '@/assets/images/ymy/linker-bg2.png';
import linkerbg3 from '@/assets/images/ymy/linker-bg3.png';
import linkerlogo from '@/assets/images/icon/linker.png';
import linkerarrow from '@/assets/images/icon/linkerarrow.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Linker() {
  const [backgroundImage, setBackgroundImage] = useState(linkerbg);

  useEffect(() => {
    const handleRize = () => {
      const width = window.innerWidth;

      if (width <= 800) {
        setBackgroundImage(linkerbg3);
      } else if (width <= 1025) {
        setBackgroundImage(linkerbg2);
      } else {
        setBackgroundImage(linkerbg);
      }
    };
    handleRize();
    window.addEventListener('resize', handleRize);
    return () => {
      window.removeEventListener('resize', handleRize);
    };
  }, []);

  return (
    <div className="px-[24px] max-sm:px-[8px] mt-[160px]">
      <div
        className="mx-auto max-w-[1200px] h-[282px] bg-contain bg-no-repeat
        flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img src={linkerlogo} className="w-[126px]" />
        <p className="mt-[8px] mx-auto mb-[24px] text-[18px] font-medium leading-[27px]">
          폴인이 만난 1,000여 명의 현업 전문가, 링커를 소개합니다.
        </p>
        <Link
          to={'/linker'}
          className="flex items-center justify-center gap-[2px]"
        >
          <p className="font-bold text-gray-600">더 보기</p>
          <img src={linkerarrow} className="w-[52px]" />
        </Link>
      </div>
    </div>
  );
}
