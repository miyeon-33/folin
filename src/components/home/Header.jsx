import Gnb from '@/components/home/Gnb';
import Sidemenu from '@/components/Sidemenu';
import { useState } from 'react';

const logo = 'src/assets/images/logo.png';
const icon1 = '/src/assets/images/icon/hamburger.png';
const icon2 = '/src/assets/images/icon/closebutton.png';
const see = '/src/assets/images/icon/seemorebutton.png';
const notSee = '/src/assets/images/icon/closebutton.png';

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [isSee, setIsSee] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const SeeToggle = () => setIsSee(!isSee);

  return (
    <header
      className="fixed w-full h-[48px] flex items-center mt-[4px] 
    mx-auto max-w-[1200px] bg-point1 p-[8px] rounded-[6px]"
    >
      <button type="button" className="" onClick={handleToggle}>
        <img
          src={isToggled ? icon2 : icon1}
          alt="Toggle Icon"
          className="w-[32px] h-[32px] mr-[16px]"
        />
      </button>
      <Gnb />
      <button
        type="button"
        className="w-[86px] h-[28px] absolute left-1/2 top-1/2
        transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src={logo} alt="logo" />
      </button>
      <div className="flex items-center gap-[6px] absolute right-[6px]">
        <button
          className="btn text-[12px] font-bold text-[#fff] bg-[#111] rounded-[9px] 
        h-[28px] py-[6px] px-[10px] border-0"
        >
          멤버십 구독
        </button>
        <button
          className="btn text-[12px] font-bold text-[#111] bg-[#fff] rounded-[9px] 
        h-[28px] py-[6px] px-[10px] border-0"
        >
          로그인
        </button>
        <button type="button" className="w-[32px] h-[32px]" onClick={SeeToggle}>
          <img src={isSee ? notSee : see} />
        </button>
      </div>
    </header>
  );
}
