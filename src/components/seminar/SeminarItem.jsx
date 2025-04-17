import { Link } from 'react-router';

export default function SeminarItem({ seminar }) {
  const isCompleted = seminar.categories.some((category) =>
    ['완료', '신청마감'].includes(category)
  );
  const isReplay = seminar.categories.includes('다시보기');
  console.log(seminar.id);

  return (
    <li className="relative w-[calc(25%-20px)] h-[calc(25%-20px)] hover:text-[#00AA73] group cursor-pointer max-sm:h-[calc(50%-10px)] max-sm:w-[calc(50%-10px)] ">
      <Link to={`/seminar/${seminar.id}`}>
        {isReplay && (
          <div className="flex ">
            <img
              src="/images/bhj/i-vod.png"
              alt="다시보기"
              className="absolute z-1 top-[15px] left-[15px] h-[32px] w-[62px]"
            />
          </div>
        )}
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={seminar.image}
            alt={seminar.title}
            className="rounded-[10px] transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-wrap">
          <h2 className="text-[#000] text-[18px] font-extrabold m-[10px_0_10px_0] w-[600px] truncate">
            {seminar.title}
          </h2>
          <p className="text-[#000] mb-[20px] text-[12px] truncate w-[300px]">
            <strong className="font-bold mr-[10px]">{seminar.name}</strong>
            {seminar.subtitle}
            <br />
            <span className="block mt-[10px] min-h-[15px] ">
              {seminar.caption || ''}
            </span>
          </p>

          <button
            type="button"
            className={`btn w-[100%] max-w-[384px] h-[48px] border-0 text-[15px] rounded-[4px] ${
              isCompleted
                ? 'bg-white text-gray-400 font-bold'
                : 'bg-[#00D48D] font-bold'
            }`}
          >
            {seminar.buttonLabel}
          </button>
        </div>
      </Link>
    </li>
  );
}
