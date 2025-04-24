import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { useRef } from 'react';
import videoDetails from '@/mocks/videodetails.json';
import { useNavigate } from 'react-router';

export default function VideoDetails() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [isRate, setIsRate] = useState(false);

  function handleRate() {
    setIsRate((prevState) => !prevState);
  }

  // 토픽아이디이동
  function handleNavigation() {
    navigate(`/series/${data.topicId}`);
  }

  // 북마크이동
  const commentRef = useRef(null);
  function scrollToComments() {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // 별점
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  // const { isLoading: postIsLoading, data: postData } = useQuery({
  //   queryKey: ['post', articleId],
  //   queryFn: () => fetch(`/post/${articleId}`).then((res) => res.json()),
  // });

  //비디오 디테일 핸들러 요청
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['videoDetails', articleId],
    queryFn: () =>
      fetch(`/videoDetails/${articleId}`).then((res) => res.json()),
  });

  if (isLoading)
    return (
      <div className="h-[1300px] w-[100%] bg-[#ebedec] flex justify-center items-center">
        <p className="font-bold">Loading...</p>
      </div>
    );
  if (isError)
    return (
      <div className="h-[1300px] w-[100%] bg-[#ebedec] flex justify-center items-center">
        <p className="font-bold">Error: {error.message}</p>
      </div>
    );

  // 확인을 위해 끌어오는 방식으로 가져옴
  // const data = videoDetails.find((item) => item.id === Number(articleId));

  if (!data) {
    return (
      <div className="h-[1300px] w-[100%] bg-[#ebedec] flex justify-center items-center">
        <p className="font-bold">Error: Video not found</p>
      </div>
    );
  }

  return (
    <>
      <main className=" p-[112px_24px_160px_24px]">
        <div className="flex flex-col justify-center items-center m-auto max-w-[1200px] h-[100%] pt-[64px]">
          <div className="">
            <iframe
              width="750"
              height="450"
              src={`https://www.youtube.com/embed/${articleId}`}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[6px]"
            ></iframe>
          </div>
        </div>

        <div className="flex m-auto flex-col pt-[64px] max-w-[588px]">
          <div className="mb-[10px]">
            <button
              type="button"
              onClick={handleNavigation}
              className="flex items-center gap-[2px]"
            >
              <div
                className="max-w-[calc(100%-38px)] h-[32px] rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold overflow-hidden whitespace-nowrap text-ellipsis"
                style={{
                  backgroundColor: data.color,
                  border: `1px solid ${data.color}`,
                }}
              >
                {data.topic}
              </div>
              <div
                className="inline-block min-w-[32px] h-[32px] bg-white border rounded-[6px] py-[6px] px-[8px] text-[#111] text-[12px] font-bold"
                style={{
                  backgroundColor: '#fff',
                  border: `1px solid ${data.color}`,
                }}
              >
                {data.tag}
              </div>
            </button>
          </div>

          <div className="">
            <h3 className="font-bold text-[28px]">{data.title}</h3>
          </div>
          <div className="flex justify-between gap-4 m-[26px_0_28px]">
            <p className="text-[#00aa73] text-[12px] font-bold leading-[30px]">
              {data.key.map((keyItem, index) => (
                <span
                  key={index}
                  className="mr-[10px] cursor-pointer no-underline"
                  onClick={() => navigate(`/search?keyword=${keyItem}`)}
                >
                  {keyItem}
                </span>
              ))}
            </p>

            <div className="flex justify-center ml-[10px]">
              <div className="flex justify-end ml-[10px]">
                <button
                  onClick={scrollToComments}
                  type="button"
                  className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/review.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/review-on.png)]"
                >
                  <span className="sr-only">댓글</span>
                </button>

                <Link
                  to="/Login"
                  type="button"
                  className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/i-heart.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/i-heart-on.png)]"
                >
                  <span className="sr-only">좋아요</span>
                </Link>

                <Link
                  to="/Login"
                  type="button"
                  className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/i-mark.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/i-mark-on.png)]"
                >
                  <span className="sr-only ">북마크</span>
                </Link>

                <Link
                  to="/Login"
                  type="button"
                  className="btn border-0 w-[32px] h-[30px] [background:url(/images/bhj/i-share-icon.png)_no-repeat_center_center/31px] hover:bg-[url(/images/bhj/i-share-on-icon.png)]"
                >
                  <span className="sr-only">공유하기</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center h-[30px] gap-[8px] mb-[40px]">
            <Link
              to={`/linker/${data.linkerId}`}
              className="flex gap-[10px] leading-[30px]"
            >
              <img
                src={data.proplie}
                alt={data.name}
                className="rounded-[50%] w-[32px] h-[32px] flex"
              />
              <div className="flex flex-col">
                <strong className="font-bold mr-[3px] flex">{data.name}</strong>
              </div>
              <div className="flex">
                <p>{data.job}</p>
              </div>
            </Link>
          </div>

          <span className="border-t-[1px] border-[#00d48d] w-[100%]"></span>

          <div className="p-[64px_8px_0]">
            <h3 className="font-bold text-[24px]">{data.title}</h3>

            <p className="text-[18px] mt-[60px] leading-[180%]">
              <strong className="font-bold text-[18px] mb-[5px]">
                Q. 링커들의 노하우와 비결은 뭘까요?
              </strong>
            </p>

            <div className="text-[18px] mt-[20px] leading-[180%]">
              <p>
                A. 그건 바로
                <strong className="font-bold">지속적인 능력</strong>이죠.
              </p>
              <p>
                단순히 기술을 익히는 것이 아니라, 변화를 받아들이고 계속해서
                적응하는 태도가 중요해요.
              </p>
              <p>
                상황에 따라 새로운 방식으로 접근할 줄 아는 유연함도 필수예요.
                결국,
                <strong className="font-bold">끊임없는 배움과 실천</strong>
                이야말로 진짜 비결이죠.
              </p>
            </div>

            <div className="mt-[60px] leading-[180%]">
              <p className="text-[18px] mb-[20px]">
                <strong className="font-bold text-[18px] mb-[5px]">
                  Q. 노하우는 어떻게 쌓아오는 걸까요?
                </strong>
              </p>
              <p className="text-[18px]">
                A. 노하우는 쌓으려고 쌓는게 아니에요. 숨쉬듯 만들어가는거죠.
                사실 만들려고 의도했다기 보단 문제점을 파악하고 고쳐나가는게
                가장 중요했어요.
              </p>
            </div>

            <div className="mt-[50px] mb-[30px] leading-[180%]">
              <p className="text-[18px] mb-[20px]">
                <strong className="font-bold text-[18px] mb-[5px]">
                  Q. 어떻게요?
                </strong>
              </p>
              <p className="text-[18px]">
                A. 사실 의외로 단순해서, 말하기 민망할 정도지만 그냥 해보세요.
                일단 부딛쳐보고 문제부터 찾아야해요. 문제도 모르니까 갑갑하고
                답답해서 미치는거에요.
              </p>
            </div>
          </div>

          <div className="border-[#00d48d] border-t-[1px] flex flex-col text-[15px] gap-[20px] m-[24px_0_24px]">
            <div className="flex items-start gap-[8px] mt-[24px]">
              <span className="font-bold mr-[60px] text-[13px]">발행일</span>
              <div className="flex-col gap-[8px] ">
                <p>{data.createdAt}</p>
              </div>
            </div>

            <div className="flex items-center gap-[8px]">
              <span className="font-bold text-[13px] mr-[115px]">PD</span>
              <div className="flex-col gap-[8px]">
                <p>김수진</p>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="font-bold text-[13px] mr-[100px]">에디터</span>
              <div className="flex-col gap-[8px]">
                <p>채진솔</p>
                <p>김다희</p>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="font-bold text-[13px] mr-[90px]">디자이너</span>
              <div className="flex-col gap-[8px]">
                <p>이수연</p>
              </div>
            </div>
          </div>

          {/* 후기 */}
          <div className="border-t-[1px] border-[#00d48d]">
            <h3 className="font-bold mr-[5px] mt-[40px] mb-[10px]">후기</h3>
            {/* 별 */}
            <Link to="/Login">
              <div className="flex mb-[10px]">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={
                      index <= (hoverIndex >= 0 ? hoverIndex : selectedIndex)
                        ? '/images/bhj/star-on.png'
                        : '/images/bhj/star.png'
                    }
                    alt="별점"
                    className="cursor-pointer transition-all w-[40px] h-[40px]"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
            </Link>
            {/* 후기입력칸 */}
            <Link to="/Login">
              <div className="flex flex-col" ref={commentRef}>
                <form className="">
                  <label className="items-start">
                    <textarea
                      type="text"
                      className="w-[100%] h-[116px] p-[15px_15px] bg-[#f7f7f7] rounded-[6px] text-[16px] border-0 placeholder-[#a1a1a1] hover:outline-[#00d48d] hover:outline-[1px] caret-[#00d48d]"
                      placeholder="콘텐츠에 대한 의견을 남겨주세요."
                    />
                  </label>
                </form>
              </div>
            </Link>
            <div className="flex justify-end">
              <button
                type="button"
                className="btn border-0 h-[100%] w-[12%] rounded-[6px] mt-[20px] p-[6px_15px] bg-[#ebedec] text-[#bfbfbf] cursor-default "
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
