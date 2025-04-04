// components / Series.jsx
import { useUser } from '@/hooks/useUser';
import { Link } from 'react-router';
import open from '@/assets/images/rhr/open.png';
import menu1_g from '@/assets/images/rhr/menu1_g.png';
import menu1_b from '@/assets/images/rhr/menu1_b.png';
import menu2_g from '@/assets/images/rhr/menu2_g.png';
import menu2_b from '@/assets/images/rhr/menu2_b.png';
import check from '@/assets/images/rhr/check.png';
import { useState } from 'react';

export default function Series() {
  const { isLoading, data, isError, error } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [seletedOption, setSelectedOption] = useState('최신순');
  const [isBoxView, setIsBoxView] = useState(true);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.meeage}</>;

  function toggleDrop() {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function handleBoxView() {
    setIsBoxView(true);
  }

  function handleListView() {
    setIsBoxView(false);
  }

  return (
    <div className=" bg-[#ebedec] border">
      <main className=" max-w-[1248px]  w-full pt-[52px] px-[24px] mx-auto  h-[1500px] mt-0">
        <div className="w-full max-w-[1200px] border border-amber-500">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px] border">
            <div className=" flex gap-[4px]">
              <Link
                to="/series"
                className="btn w-[180px] h-[48px] bg-white border-point1 rounded-[6px] 
              text-[15px] text-center"
              >
                시리즈로 보기
              </Link>
              <Link
                to="/article"
                className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-center"
              >
                아티클만 보기
              </Link>
              <Link
                to="/video"
                className="btn w-[180px] h-[48px] bg-white border-0 rounded-[6px] 
              text-[15px] text-center"
              >
                비디오만 보기
              </Link>
            </div>
            <div className="flex justify-between mt-0">
              <div className="relative">
                <button
                  type="button"
                  className="btn w-[171px] h-[32px] bg-white border-point1 
                  rounded-[6px] px-[16px] flex justify-between"
                  onClick={toggleDrop}
                >
                  <p className="text-[12px]">{seletedOption}</p>
                  <img
                    src={open}
                    alt="최신순.인기순"
                    className={`w-[16px] ${isRotated ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <ul className="h-auto w-[100%] top-[34px] bg-white border border-point1 rounded-[6px] absolute">
                    {['최신순', '인기순'].map((option) => (
                      <li
                        key={option}
                        className="leading-[32px] text-[12px] pl-[12px] text-gray-600
                          flex items-center hover:bg-[#f7f7f7] rounded-[6px] cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {seletedOption === option && (
                          <img
                            src={check}
                            alt="check"
                            className="w-[16px] h-[16px] bg-center mr-[3px]"
                          />
                        )}
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex items-center w-[88px] h-[32px]">
                <button
                  type="button"
                  className="pr-[8px] pl-[16px]"
                  onClick={handleBoxView}
                >
                  <img
                    src={isBoxView ? menu1_g : menu1_b}
                    alt="박스로보기"
                    className="w-[32px] align-top"
                  />
                </button>
                <button type="button" onClick={handleListView}>
                  <img
                    src={isBoxView ? menu2_b : menu2_g}
                    alt="줄로보기"
                    className="w-[32px] align-top"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>시리즈로 보기</div>
        </div>
      </main>
    </div>
  );
}
