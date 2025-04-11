import Gnb from '@/components/home/Gnb';
import Sidemenu from '@/components/home/Sidemenu';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import icon1 from '@/assets/images/icon/hamburger.png';
import icon2 from '@/assets/images/icon/closebutton.png';
import see from '@/assets/images/icon/seemorebutton.png';
import notSee from '@/assets/images/icon/closebutton.png';

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [isSee, setIsSee] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const SeeToggle = () => setIsSee(!isSee);

  return (
    <div className="fixed left-0 top-[4px] max-sm:top-[8px] w-full px-[24px] z-20 max-sm:px-[8px]">
      <header
        className="max-w-[1200px] h-[48px] flex items-center bg-point1 
    p-[8px] rounded-[6px] mx-auto relative before:absolute before:top-[-4px] before:left-0 before:w-full
    before:h-[10px] before:-z-1 before:bg-[#ebedec]"
      >
        <button type="button" className="" onClick={handleToggle}>
          <img
            src={isToggled ? icon2 : icon1}
            alt="Toggle Icon"
            className="w-[32px] h-[32px] mr-[16px] "
          />
        </button>
        {isToggled ? (
          <Sidemenu />
        ) : (
          <div className="max-sm:hidden block">
            <Gnb />
          </div>
        )}
        <button
          type="button"
          className="w-[86px] h-[28px] absolute left-1/2 max-sm:top-1/2
        -translate-x-1/2 max-sm:-translate-y-1/2 max-sm:left-[90px] "
        >
          <img src={logo} alt="logo" />
        </button>
        <div className="flex items-center gap-[6px] absolute right-[6px]">
          <button
            className="btn text-[12px] font-bold text-[#fff] bg-[#111] rounded-[9px] 
        leading-[16px] py-[6px] px-[10px] border-0 max-sm:hidden block"
          >
            멤버십 구독
          </button>
          <button
            className="btn text-[12px] font-bold text-[#111] bg-[#fff] rounded-[9px] 
        h-[28px] py-[6px] px-[10px] border-0"
          >
            로그인
          </button>
          <button
            type="button"
            className="w-[32px] h-[32px]"
            onClick={SeeToggle}
          >
            <img src={isSee ? notSee : see} />
          </button>
        </div>
      </header>
    </div>
  );
}
