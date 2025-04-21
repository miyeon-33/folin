import Popup from '@/components/series/Popup';
import { useState } from 'react';
import { Link } from 'react-router';

export default function ArticleTitle({
  articleId,
  topicId,
  articleData,
  data,
  linkerData,
}) {
  // 팝업제어
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div>
      <div className="flex gap-[2px] mb-[10px]">
        <Link to={`/series/${topicId}`}>
          <div
            className="max-w-[calc(100% - 35px)] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
            style={{
              backgroundColor: articleData?.[0].color,
              border: `1px solid ${articleData?.[0].color}`,
            }}
          >
            {articleData[0].topic}
          </div>
        </Link>
        <div
          className="inline-block bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
          style={{
            backgroundColor: '#fff',
            border: `1px solid ${articleData[0].color}`,
          }}
        >
          {articleData[0].tag}
        </div>
      </div>
      <h1 className="text-[28px] font-bold leading-[103%]">
        신수정의 트레이닝 퇴사가 어려워진 40대에게
      </h1>
      <div className="flex mt-[26px] mb-[28px] justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link className="text-[12px] text-[#00aa73] font-medium leading-[130%]">
            {data[0].keyword[0]}
          </Link>
          <Link className="text-[12px] text-[#00aa73] font-medium leading-[130%]">
            {data[0].keyword[1]}
          </Link>
        </div>
        <div className="flex gap-[8px] items-center">
          <button
            className="group flex items-center h-[30px]"
            onClick={() => {
              window.scrollTo({ top: 1900, behavior: 'smooth' });
            }}
          >
            <svg
              className="w-[24px] h-[24px] file-[#111] group-hover:fill-point1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 5H5C4.45 5 4 5.45 4 6V16.335C4 16.885 4.45 17.335 5 17.335H10L12 20L14 17.335H19C19.55 17.335 20 16.885 20 16.335V6C20 5.45 19.55 5 19 5Z" />
              <path
                d="M11.8824 8.21252C11.9291 8.12292 12.0574 8.12292 12.1041 8.21252L12.9935 9.91784C13.0122 9.95375 13.0471 9.97836 13.0873 9.98387L15.0641 10.2557C15.1688 10.2701 15.2095 10.3998 15.1318 10.4714L13.7104 11.7826C13.679 11.8116 13.6645 11.8547 13.6722 11.8968L14.0089 13.7548C14.0273 13.856 13.9223 13.9348 13.8302 13.889L12.0489 13.0028C12.0139 12.9853 11.9726 12.9853 11.9376 13.0028L10.1562 13.889C10.0642 13.9348 9.95923 13.856 9.97757 13.7548L10.3143 11.8968C10.322 11.8547 10.3075 11.8116 10.2761 11.7826L8.85464 10.4714C8.77699 10.3998 8.8177 10.2701 8.92237 10.2557L10.8992 9.98387C10.9394 9.97836 10.9743 9.95375 10.993 9.91784L11.8824 8.21252Z"
                fill="white"
              />
            </svg>
            <span className="text-[#111] text-[13px] font-bold leading-[130%] group-hover:text-point1">
              {data[0].comment}
            </span>
          </button>
          <div className="group flex items-center">
            <button
              className="[background:url('@/assets/images/icon/favorite.png')_no-repeat_50%_50%/100%] group-hover:[background:url('@/assets/images/icon/favoriteG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"
              onClick={() => {
                window.location.href = '/login';
              }}
            ></button>
            <span className="text-[#111] text-[13px] font-bold leading-[130%] group-hover:text-point1">
              {data[0].favorite}
            </span>
          </div>
          <div className="flex">
            <button
              className="[background:url('@/assets/images/icon/save.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/saveG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"
              onClick={() => {
                window.location.href = '/login';
              }}
            ></button>
          </div>
          <div className="flex">
            <button
              className="[background:url('@/assets/images/icon/share.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/shareG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"
              onClick={() => {
                setPopupVisible(true);
              }}
            ></button>
            {isPopupVisible ? (
              <Popup
                isPopupVisible={isPopupVisible}
                setPopupVisible={setPopupVisible}
              />
            ) : null}
          </div>
          <div className="h-[16px] border-r border-[#111] border-1"></div>
          <div className="flex">
            <button
              className="[background:url('@/assets/images/icon/gift.png')_no-repeat_50%_50%/100%] hover:[background:url('@/assets/images/icon/giftG.png')_no-repeat_50%_50%/100%] w-[24px] h-[24px]"
              onClick={() => {
                window.location.href = '/login';
              }}
            ></button>
          </div>
        </div>
      </div>
      <div className="mb-[64px] ">
        <Link
          to={`/linker/${articleId}`}
          className="flex gap-[4px] items-center text-[#111]"
        >
          <img
            src={linkerData?.[0].photo}
            alt="프로필"
            className="w-[32px] h-[32px] rounded-[50%] object-cover"
          />
          <span className="font-bold">{linkerData?.[0].name}</span>
          <span className="font-medium">{linkerData?.[0].job}</span>
        </Link>
      </div>
    </div>
  );
}
