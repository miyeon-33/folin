import Gnb from '@/components/home/Gnb';
import Sidemenu from '@/components/home/Sidemenu';
import { useEffect, useRef, useState } from 'react';

import logo from '@/assets/images/logo.png';
import icon1 from '@/assets/images/icon/hamburger.png';
import icon2 from '@/assets/images/icon/closebutton.png';
import see from '@/assets/images/icon/seemorebutton.png';
import notSee from '@/assets/images/icon/closebutton.png';
import edit from '@/assets/images/icon/edit.png';
import { Link, useLocation } from 'react-router';

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [isSee, setIsSee] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setIsToggled(false);
  }, [location.pathname]);

  useEffect(() => {
    setIsSee(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isSee && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSee]);

  const handleToggle = () => setIsToggled(!isToggled);
  const SeeToggle = () => {
    setIsSee(!isSee);
    setInputValue('');
  };

  const handleEditClick = () => {
    setInputValue('');
  };

  return (
    <div
      className="fixed left-0 top-[4px] max-sm:top-[8px] w-full px-[24px] z-20 
    max-md:px-[8px] max-sm:px-[8px]"
    >
      <header
        className="max-w-[1200px] h-[48px] flex items-center bg-point1 
    p-[8px] rounded-[6px] mx-auto relative before:absolute before:top-[-4px]
    before:left-0 before:w-full
    before:h-[10px] before:-z-1 before:bg-[#ebedec]"
      >
        <button type="button" className="" onClick={handleToggle}>
          <img
            src={isToggled ? icon2 : icon1}
            alt="Toggle Icon"
            className="w-[32px] h-[32px] mr-[16px]"
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
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </button>
        <div className="flex items-center gap-[6px] absolute right-[6px]">
          <button
            className="btn text-[12px] font-bold text-[#fff] bg-[#111] rounded-[9px] 
        leading-[16px] py-[6px] px-[10px] border-0 max-sm:hidden block"
          >
            멤버십 구독
          </button>
          <Link to={'/login'}>
            <button
              className="btn text-[12px] font-bold text-[#111] bg-[#fff] rounded-[9px] 
        h-[28px] py-[6px] px-[10px] border-0"
            >
              로그인
            </button>
          </Link>
          <button
            type="button"
            className="w-[32px] h-[32px] relative"
            onClick={SeeToggle}
          >
            <img src={isSee ? notSee : see} className="" />
          </button>
          {isSee && (
            <div
              className="fixed left-0 top-[56px] w-full px-[24px] z-11
            max-md:px-[8px] max-sm:px-[8px] max-sm:top-[64px]"
            >
              <div
                className="max-w-[1200px] h-[103px] flex flex-col
                bg-point1 p-[4px] rounded-[6px] mx-auto"
              >
                <div
                  className="flex items-center gap-[8px] py-[4px] rounded-[6px]
            pr-[12px] pl-[6px] bg-[#f7f7f7] h-[40px]"
                >
                  <Link
                    className="w-[32px] h-[32px] flex items-center justify-center"
                    to={'/search'}
                  >
                    <img src={see} className="w-[24px] h-[24px]" />
                  </Link>
                  <input
                    type="text"
                    placeholder="성장의 경험을 찾습니다."
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-0 text-ellipsis whitespace-nowrap font-medium leading-[1.3]
                    caret-point1 placeholder:text-gray-500 w-full py-[1px] px-[2px]"
                  />
                  {inputValue && (
                    <button
                      className="w-[24px] h-[24px]"
                      onClick={handleEditClick}
                    >
                      <img src={edit} className="" />
                    </button>
                  )}
                </div>
                <div className="flex gap-[24px] p-[18px] flex-wrap justify-center">
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EA%B8%B0%ED%9A%8D'
                    }
                  >
                    기획
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EB%B8%8C%EB%9E%9C%EB%94%A9'
                    }
                  >
                    브랜딩
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EB%A7%88%EC%BC%80%ED%8C%85'
                    }
                  >
                    마케팅
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EB%94%94%EC%9E%90%EC%9D%B8'
                    }
                  >
                    디자인
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EC%BD%98%ED%85%90%EC%B8%A0'
                    }
                  >
                    콘텐츠
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={'https://www.folin.co/search?keyword=AI'}
                  >
                    AI
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EC%BB%A4%EB%A6%AC%EC%96%B4'
                    }
                  >
                    커리어
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EC%8B%A0%EC%88%98%EC%A0%95'
                    }
                  >
                    신수정
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EC%9D%B4%EC%A7%81'
                    }
                  >
                    이직
                  </Link>
                  <Link
                    className="text-gray-600 font-bold leading-[1.3]"
                    to={
                      'https://www.folin.co/search?keyword=%EC%B0%BD%EC%97%85'
                    }
                  >
                    창업
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
