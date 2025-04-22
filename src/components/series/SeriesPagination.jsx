// components /series /SeriesPagination.jsx
import { generatePagination } from '@/lib/utils';
import { useEffect, useState } from 'react';
import pageBtnL from '@/assets/images/rhr/left_arrow.4bede9f35a02ac4762468cd3c10d9e6d.svg';
import pageBtnLB from '@/assets/images/rhr/left_active_arrow.ae5e5ec93889f52e130213c1ba7df2ac.svg';
import pageBtnR from '@/assets/images/rhr/right_active_arrow.9ff5939b48b3f1ef976297a44bd0816c.svg';
import pageBtnRG from '@/assets/images/rhr/right_arrow.8a08b4052f4f9526c5c2c0d1e76702f5.svg';

export default function SeriesPagination({ page, totalPages, setPage }) {
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    const arr = generatePagination(page, totalPages);
    setPageArr(arr);
  }, [page, totalPages]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.history.pushState({}, '', `/series?page=${newPage}`); // URL 업데이트
    // 페이지 바꿀때마다 페이지 맨 위로 올라가기
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <div className="flex gap-x-[8px] justify-center mt-[104px] pb-[160px]">
      <button
        type="button"
        className={`p-[8px] ${
          page === 1 ? 'cursor-default' : 'cursor-pointer'
        }`}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <img
          src={page === 1 ? pageBtnL : pageBtnLB}
          alt="이전"
          className="w-[16px] h-[16px] object-cover"
        />
      </button>
      {pageArr.map((item, i) => {
        if (item === '...') {
          return <span key={i}>...</span>;
        } else {
          return (
            <button
              type="button"
              key={i}
              className={`btn border-0 rounded-[6px] font-bold min-w-[32px] h-[32px] px-[12px] py-[7px] leading-[130%] text-[12px] ${
                page === item ? 'bg-point1' : ''
              }`}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </button>
          );
        }
      })}
      <button
        type="button"
        className={`p-[8px] ${
          page === totalPages ? 'cursor-default' : 'cursor-pointer'
        }`}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <img
          src={page !== totalPages ? pageBtnR : pageBtnRG}
          alt="다음"
          className="w-[16px] h-[16px] object-cover"
        />
      </button>
    </div>
  );
}
