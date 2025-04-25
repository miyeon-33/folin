// components /series /ArticleComment.jsx
import star from '@/assets/images/rhr/star.png';
import starG from '@/assets/images/rhr/starG.png';
import person from '@/assets/images/rhr/person.png';
import { useState } from 'react';
import { Link } from 'react-router';

export default function ArticleComment({ data }) {
  // 별점매기기
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  // textarea내용유무
  const [text, setText] = useState('');

  return (
    <div>
      <div className="flex items-baseline gap-[7px]">
        <span className="font-bold">후기</span>
        <span className="font-medium">{data[0].comment || 0}개</span>
      </div>
      <div className="flex flex-col w-full pt-[16px] pb-[32px]">
        <div className="mb-[8px]">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={
                index <= (hoverIndex >= 0 ? hoverIndex : selectedIndex)
                  ? starG
                  : star
              }
              alt="별점"
              className="cursor-pointer transition-all w-[32px] h-[32px]"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div>
          <div className="w-full">
            <textarea
              type="textarea"
              placeholder="콘텐츠에 대한 의견을 남겨주세요."
              className="w-full h-[116px] bg-[#f7f7f7] py-[12px] px-[16px] text-[#111] rounded-[6px] font-medium leading-[150%] hover:outline hover:outline-point1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end items-center mt-[12px]">
            <Link
              to="/login"
              className={`h-[32px] py-[7px] px-[12px] rounded-[6px] text-[13px] font-medium ${
                text.trim() !== ''
                  ? 'bg-point1 text-white cursor-pointer'
                  : 'bg-[#ebedec] text-[#bfbfbf] cursor-default'
              }`}
            >
              확인
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">굿!! 좋아요~</p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">여은*</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">
            너무 기대되는 시리즈에요! 유익하게 읽고 또 다시 보러 오겠습니다!
          </p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">이기*</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">유익한 정보 감사해요^^</p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">도민*</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">
            지금 저에게 정말 꼭 필요한 메세지 였던것 같습니다. 좋은 메세지
            감사합니다
          </p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">도민*</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">
            너무 재밌네요ㅎㅎ 잘 기억하면서 활용해야겠어요!
          </p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">원채*</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full py-[24px] border-t-[1px] border-[#dcdfdd]">
          <div className="flex">
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={starG} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
            <img src={star} alt="별점" className="w-[32px] h-[32px]" />
          </div>
          <p className="w-full break-words">
            도움이 되는것 같아서 너무 좋습니다! 이해하기 쉽게 설명도 잘해주시고
            구체적으로 예시도 말해주셔서 재밌게 본것 같아요~!~!
          </p>
          <div className="max-w-[358px] flex items-center gap-[12px]">
            <img
              src={person}
              alt="계정기본사진"
              className="w-[26px] h-[26px] rounded-[50%]"
            />
            <span className="text-[13px] font-bold items-center">박형*</span>
          </div>
        </div>
      </div>
    </div>
  );
}
