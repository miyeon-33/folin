import { useEffect, useState } from 'react';
import { generatePagination } from '@/lib/utils';

export default function Pagination({ page, totalPage, setPage }) {
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[8px] justify-center items-center m-[72px_0_0] p-[0_0_160px]">
      <button
        type="button"
        className="btn w-[20px] h-[20px] text-[13px] px-[2px] bg-[#eee] border-0 "
        onClick={() => setPage(1)}
      >
        <img
          src={
            page > 1
              ? 'src/assets/images/bhj/L-active-arrow.svg'
              : 'src/assets/images/bhj/L-arrow.svg'
          }
          alt="이전"
        />
      </button>

      {pageArr.map((item, i) => {
        if (item === '...') {
          return (
            <span
              key={i}
              className="w-[34px] h-[32px] text-[12px] font-bold p-[7px_12px] bg-[#00D48D] leading-[28px] text-center "
            >
              ...
            </span>
          );
        } else {
          return (
            <button
              type="button"
              key={i}
              className={`btn w-[34px] h-[32px] text-[12px] font-bold p-[7px_12px] rounded-[6px] border-0 ${
                page === item ? 'text-black bg-[#00D48D]' : 'bg-[#eee]'
              }`}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        }
      })}
      <button
        type="button"
        className="btn w-[20px] h-[20px] text-[13px] px-[2px] bg-[#eee] border-0 "
        onClick={() => setPage(totalPage)}
      >
        <img
          src={
            page < totalPage
              ? 'src/assets/images/bhj/R-active-arrow.svg'
              : 'src/assets/images/bhj/R-arrow.svg'
          }
          alt="다음"
        />
      </button>
    </div>
  );
}
