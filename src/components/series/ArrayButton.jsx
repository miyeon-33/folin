// components / ArrayButton.jsx
import open from '@/assets/images/rhr/open.png';
import check from '@/assets/images/rhr/check.png';
import { useState } from 'react';

export default function ArrayButton({ setSortOrder, sortedData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [seletedOption, setSelectedOption] = useState('최신순');
  const [hasBorder, setHasBorder] = useState(false); // border 상태 추가

  function toggleDrop() {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
    setHasBorder(!isOpen); // open 상태에 따라 border 설정
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    setIsRotated(false);
    setHasBorder(false); // 선택 후 border 제거
  }

  return (
    <div className="relative max-sm:w-full">
      <button
        type="button"
        className={`btn w-[171px] h-[32px] bg-white rounded-[6px] px-[16px] flex justify-between 
          max-sm:w-full
          ${hasBorder ? 'border-point1 ' : 'border-0'}`}
        onClick={toggleDrop}
      >
        <span className="text-[12px] font-medium">{seletedOption}</span>
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
              className="leading-[32px] text-[12px] pl-[12px] text-[#111]
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
  );
}
