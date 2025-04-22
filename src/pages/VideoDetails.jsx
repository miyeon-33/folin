import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';

export default function VideoDetails() {
  const { articleId } = useParams();
  const [isRate, setIsRate] = useState(false);

  function handleRate() {
    setIsRate((prevState) => !prevState);
  }

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['series', articleId],
    queryFn: () => fetch(`/series/${articleId}`).then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <main className=" p-[172px_24px_160px_24px]">
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
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
        {/* 아티클 데이타 가져오기 */}
        <div className="flex m-auto flex-col pt-[64px] max-w-[588px]">
          <div className="mb-[10px]">
            <span className="justify-start">어쩌구저쩌구아티클그거</span>
          </div>

          <div className="">
            <h3 className="font-bold text-[28px]">
              여기가시리즈타이틀이들어와야하는데그럼시리즈핸들러에다가보내줘야하나요청해야하나
            </h3>
          </div>
          <div className="flex justify-between gap-4 m-[26px_0_28px]">
            <p className="text-[#00aa73] text-[12px] leading-[30px]">
              <span className="mr-[10px]">여기에</span>키워드
            </p>

            <div className="flex justify-center ml-[10px]">
              <div className="flex justify-end ml-[10px]">
                <Link
                  to="/Login"
                  type="button"
                  className="btn border-0 w-[28px] h-[28px] [background:url(/images/bhj/review.png)_no-repeat_center_center/28px] hover:bg-[url(/images/bhj/review-on.png)]"
                >
                  <span className="sr-only">댓글</span>
                </Link>

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
          {/*여기에 링커 데이터 */}
          <div className="flex justify-center items-center border h-[30px] flex-col gap-[8px] mb-[40px]">
            {/* <img src={data} alt={data} /> */}
            {/* <strong className='font-bold mr-[3px]'>{data}</strong> */}
            {/* <p>{data}</p> */}
          </div>

          <span className="border-t-[1px] border-[#00d48d] w-[100%]"></span>

          <div className="p-[64px_8px_0]">
            <h3 className="font-bold text-[24px]">제목이겠죠?</h3>
            <p className="text-[18px] mt-[24px]">
              내용이 가득가득 있 겠 죠? 근데 이거 유저가 쓴 글 같은 데 요
              데이터로 못 만들 것 같은 데 욧?!
            </p>
          </div>

          {/* 링커데이타 이름을 쓰는 부분이 있네요 */}
          <div className="border-[#00d48d] border-t-[1px] flex flex-col text-[15px] gap-[20px] m-[24px_0_24px]">
            <div className="flex items-start gap-[8px] mt-[24px]">
              <span className="font-bold">발행일</span>
              <div className="flex-col gap-[8px]">
                <p>2025.04.16</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-[8px]">
              <span className="font-bold">PD</span>
              <div className="flex-col gap-[8px] mr-[250px]">
                <p>김수진</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[8px]">
              <span className="font-bold">에디터</span>
              <div className="flex-col gap-[8px] mr-[250px]">
                <p>채진솔</p>
                <p>김다희</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[8px]">
              <span className="font-bold">디자이너</span>
              <div className="flex-col gap-[8px] mr-[250px]">
                <p>이수연</p>
              </div>
            </div>
          </div>

          {/* 후기 */}
          <div className="border-t-[1px] border-[#00d48d]">
            <h3 className="font-bold mr-[5px] mt-[40px] mb-[10px]">후기</h3>

            {/* 별 */}
            <div className="flex mb-[10px]">
              <div
                className={`inset-0 bg-no-repeat bg-center w-[40px] h-[40px] ${
                  isRate
                    ? 'bg-transparent bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                    : 'bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                }`}
                style={{
                  backgroundSize: '35px',
                }}
              ></div>
              <div className="flex">
                <div
                  className={`inset-0 bg-no-repeat bg-center w-[40px] h-[40px] ${
                    isRate
                      ? 'bg-transparent bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                      : 'bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                  }`}
                  style={{
                    backgroundSize: '35px',
                  }}
                ></div>
              </div>
              <div className="flex">
                <div
                  className={`inset-0 bg-no-repeat bg-center w-[40px] h-[40px] ${
                    isRate
                      ? 'bg-transparent bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                      : 'bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                  }`}
                  style={{
                    backgroundSize: '35px',
                  }}
                ></div>
              </div>
              <div className="flex">
                <div
                  className={`inset-0 bg-no-repeat bg-center w-[40px] h-[40px] ${
                    isRate
                      ? 'bg-transparent bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                      : 'bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                  }`}
                  style={{
                    backgroundSize: '35px',
                  }}
                ></div>
              </div>
              <div className="flex">
                <div
                  className={`inset-0 bg-no-repeat bg-center w-[40px] h-[40px] ${
                    isRate
                      ? 'bg-transparent bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                      : 'bg-[url("/images/bhj/star.png")] hover:bg-[url("/images/bhj/star-on.png")]'
                  }`}
                  style={{
                    backgroundSize: '35px',
                  }}
                ></div>
              </div>
            </div>

            {/* 후기입력칸 */}
            <div className="flex flex-col">
              <form className="">
                <label className="items-start">
                  <textarea
                    type="text"
                    className="w-[100%] h-[116px] p-[15px_15px] bg-[#f7f7f7] rounded-[6px] text-[16px] border-0 placeholder-[#a1a1a1] hover:outline hover:outline-[#00d48d] hover:outline-[1px] caret-[#00d48d]"
                    placeholder="콘텐츠에 대한 의견을 남겨주세요."
                  />
                </label>
              </form>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn border-0 h-[100%] w-[20%] rounded-[6px] mt-[20px] p-[6px_15px] bg-[#ebedec] text-[#bfbfbf] cursor-default "
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
