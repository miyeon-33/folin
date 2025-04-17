import b2bbg from '@/assets/images/ymy/b2b-bg1.png';
import b2bbg2 from '@/assets/images/ymy/b2b-bg2.png';
import b2bbg3 from '@/assets/images/ymy/b2b-bg3.png';
import b2blogo from '@/assets/images/icon/b2b.png';
import linkerarrow from '@/assets/images/icon/linkerarrow.png';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function B2b() {
  const [backgroundImage, setBackgroundImage] = useState(b2bbg);

  useEffect(() => {
    const handleRize = () => {
      const width = window.innerWidth;

      if (width <= 800) {
        setBackgroundImage(b2bbg3);
      } else if (width <= 1025) {
        setBackgroundImage(b2bbg2);
      } else {
        setBackgroundImage(b2bbg);
      }
    };
    handleRize();
    window.addEventListener('resize', handleRize);
    return () => {
      window.removeEventListener('resize', handleRize);
    };
  }, []);
  return (
    <div className="px-[24px] max-sm:px-[8px] mt-[160px] pb-[160px]">
      {' '}
      <div
        className="mx-auto max-w-[1200px] h-[282px] bg-contain bg-no-repeat
  flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img src={b2blogo} className="w-[78px]" />
        <p className="mt-[8px] mx-auto mb-[24px] text-[18px] font-medium leading-[1.5]">
          단체 구독 특별가 및 기업 교육은 별도 문의해주세요.
        </p>
        <Link
          to={'/b2b'}
          className="flex items-center justify-center gap-[2px]"
        >
          <p className="font-bold text-gray-600">더 보기</p>
          <img src={linkerarrow} className="w-[52px]" />
        </Link>
      </div>
    </div>
  );
}
