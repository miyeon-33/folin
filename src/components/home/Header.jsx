import Gnb from '@/components/home/Gnb';
import Sidemenu from '@/components/home/Sidemenu';
import { useEffect, useRef, useState } from 'react';

import logo from '@/assets/images/logo.png';
import icon1 from '@/assets/images/icon/hamburger.png';
import icon2 from '@/assets/images/icon/closebutton.png';
import see from '@/assets/images/icon/seemorebutton.png';
import notSee from '@/assets/images/icon/closebutton.png';
import edit from '@/assets/images/icon/edit.png';
import { Link, useLocation, useNavigate } from 'react-router';

const keywords = [
  '마케팅',
  '기획',
  '브랜딩',
  '디자인',
  '콘텐츠',
  '신수정',
  '커리어',
  'AI',
  '이직',
  '트렌드',
];

export default function Header({ keyword, setSearchParams }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isSee, setIsSee] = useState(false);
  const [inputValue, setInputValue] = useState(keyword || '');
  const inputRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      setInputValue(keyword);
      const params = new URLSearchParams();
      params.set('keyword', keyword);
      setSearchParams(params);
    }
  }, [keyword, setSearchParams]);

  function handleInputChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);

    const params = new URLSearchParams();
    params.set('keyword', newValue);
    setSearchParams(params);
  }

  function handleSearch() {
    const searchValue = inputRef.current.value;
    setInputValue(searchValue);

    const params = new URLSearchParams();
    params.set('keyword', searchValue);
    setSearchParams(params);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

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

  function handleSearch() {
    const searchValue = inputRef.current.value;
    setInputValue(searchValue);

    navigate(`/search?keyword=${searchValue}`);
    setIsSee(false);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div
      className="fixed left-0 top-[4px] max-sm:top-[8px] px-[24px] z-20 
    max-md:px-[8px] max-sm:px-[8px] w-full"
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
          <Link to={'/introduction'}>
            <button
              className="btn text-[12px] font-bold text-[#fff] bg-[#111] rounded-[9px] 
        leading-[16px] py-[6px] px-[10px] border-0 max-sm:hidden block"
            >
              멤버십 구독
            </button>
          </Link>
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
                className="max-w-[1200px] flex flex-col
                bg-point1 p-[4px] rounded-[6px] mx-auto"
              >
                <div
                  className="flex items-center gap-[8px] py-[4px] rounded-[6px]
            pr-[12px] pl-[6px] bg-[#f7f7f7] h-[40px]"
                >
                  <button
                    className="w-[32px] h-[32px] flex items-center justify-center"
                    onClick={handleSearch}
                  >
                    <img src={see} className="w-[24px] h-[24px]" />
                  </button>
                  <input
                    onKeyUp={handleEnter}
                    type="text"
                    placeholder="성장의 경험을 찾습니다."
                    ref={inputRef}
                    defaultValue={inputValue}
                    onChange={handleInputChange}
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
                <div
                  className="flex items-center gap-x-[16px] gap-y-[24px]
                justify-center flex-wrap p-[18px]"
                >
                  {keywords.map((keyword, index) => (
                    <Link
                      className="text-gray-600 font-bold leading-[1.3]"
                      to={`/search?keyword=${keyword}`}
                      key={index}
                      onClick={() => setIsSee(false)}
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
