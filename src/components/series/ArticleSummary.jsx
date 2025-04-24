// components /series /ArticleSummary.jsx
export default function ArticleSummary({ data }) {
  const isDataNull = !data || !data[0]?.summation; // 데이터 유효성 검사

  if (isDataNull) {
    return null; // null을 반환하여 컴포넌트를 렌더링하지 않음
  }
  return (
    <div className="py-[24px]">
      <h3 className="mb-[8px] text-[13px] font-bold">3줄 요약</h3>
      <ul className="w-full flex flex-col gap-[12px]">
        <li className=" flex gap-[12px]">
          <span className="text-[20px] align-text-top leading-5">•</span>
          <p className="font-medium leading-[150%]">{data[0].summation[0]}</p>
        </li>
        <li className=" flex gap-[12px]">
          <span className="text-[20px] align-text-top leading-5">•</span>
          <p className="font-medium leading-[150%]">{data[0].summation[1]}</p>
        </li>
        <li className=" flex gap-[12px]">
          <span className="text-[20px] align-text-top leading-5">•</span>
          <p className="font-medium leading-[150%]">{data[0].summation[2]}</p>
        </li>
      </ul>
    </div>
  );
}
