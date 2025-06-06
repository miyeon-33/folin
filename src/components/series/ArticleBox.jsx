// components /series /ArticleBox.jsx
import newBtn from '@/assets/images/icon/newBtn.svg';
import freeBtn from '@/assets/images/icon/freeBtn.svg';
import { Link } from 'react-router';

export default function ArticleBox({ art }) {
  return (
    <Link
      to={`/article/${art.id}`}
      className="block transition-all text-[#111] hover:text-point1 hover:-translate-y-[16px] duration-300"
    >
      <div className="w-[calc(100% - 16px)] h-full relative mr-[16px]">
        <div className="absolute flex z-2 top-[10px] left-[10px] gap-[2px]">
          {(new Date() - new Date(art.createdAt)) / (1000 * 60 * 60 * 24) <=
            7 && <img src={newBtn} alt="새로운게시물" className="mb-2" />}
          {art.free === 'Y' && (
            <img src={freeBtn} alt="무료" className="mb-2" />
          )}
        </div>
        <img
          src={art.thumbnail}
          alt="썸네일"
          className="w-full h-full object-cover rounded-[6px]"
        />
      </div>
      <div className="relative w-[calc(100%-16px)] h-[auto] p-[10px] -translate-y-[16px] ml-[16px] bg-white rounded-[6px]">
        <div className="flex items-center gap-[2px]">
          <div
            className=" max-w-[calc(100%-38px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold leading-[150%] overflow-hidden whitespace-nowrap break-all overflow-ellipsis"
            style={{
              backgroundColor: art.color,
              border: `1px solid ${art.color}`,
            }}
          >
            {art.topic}
          </div>
          <div
            className="inline-block min-w-[32px] bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold  leading-[150%] whitespace-nowrap"
            style={{
              backgroundColor: '#fff',
              border: `1px solid ${art.color}`,
            }}
          >
            {art.tag}
          </div>
        </div>
        <p className="line-clamp-2 break-words overflow-ellipsis mt-[10px] mb-[16px] text-[18px] font-bold leading-[130%]">
          {art.title}
        </p>
        <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
          <span className=" text-[12px] font-bold leading-[150%] mr-[8px]">
            {art.author}
          </span>
        </div>
      </div>
    </Link>
  );
}
