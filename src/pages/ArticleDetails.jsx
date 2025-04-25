// components /series /ArticleDetails.jsx
import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import ArticleSummary from '@/components/series/ArticleSummary';
import ArticleTitle from '@/components/series/ArticleTitle';
import ArticleComment from '@/components/series/ArticleComment';
import NowArticle from '@/components/series/NowArticle';
import RecommendArticle from '@/components/series/RecommendArticle';
import Membership from '@/components/Membership';

export default function ArticleDetails() {
  // URL에서 topicId 가져오기
  const { articleId } = useParams();

  // 날짜 형식 변경 함수
  const formatDate = (date) => {
    return date?.replace(/-/g, '.');
  };

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['post', articleId],
    queryFn: () => fetch(`/post/${articleId}`).then((res) => res.json()),
  });

  const {
    isPending: articlePending,
    data: articleData,
    isError: articleIsError,
    error: articleError,
  } = useQuery({
    queryKey: ['article', articleId],
    queryFn: () => fetch(`/article/${articleId}`).then((res) => res.json()),
  });

  const name = articleData?.[0].author;
  const topicId = articleData?.[0].topicId;

  const {
    isPending: linkerPending,
    data: linkerData,
    isError: linkerIsError,
    error: linkerError,
  } = useQuery({
    queryKey: ['linker', name],
    queryFn: () => fetch(`/linker-name/${name}`).then((res) => res.json()),
    enabled: !!name, // name 값이 있을 때만 페칭 실행
  });

  const {
    isPending: seriesPending,
    data: seriesData,
    isError: seriesIsError,
    error: seriesError,
  } = useQuery({
    queryKey: ['series-topic', topicId],
    queryFn: () => fetch(`/series-topic/${topicId}`).then((res) => res.json()),
    enabled: !!topicId, // topicId 값이 있을 때만 페칭 실행
  });
  console.log(seriesData, '**');
  const {
    isPending: recommendPending,
    data: recommendData,
    isError: recommendIsError,
    error: recommendError,
  } = useQuery({
    queryKey: ['recommend'],
    queryFn: () => fetch(`/recommend`).then((res) => res.json()),
  });

  if (isPending) {
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>오류 발생: {error.message}</p>;
  }

  return (
    <main className="bg-white">
      <div className="max-w-[1248px] w-full px-[24px] m-auto pt-[52px] h-auto mt-0 max-md:px-[8px] max-md:pt-[56px]">
        <div className="max-w-[588px] pt-[64px] m-auto max-sm:pt-[40px] max-sm:px-[8px]">
          <ArticleTitle
            articleId={articleId}
            topicId={topicId}
            articleData={articleData}
            data={data}
            linkerData={linkerData}
          />

          <div className="w-[588px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>

          <div className="w-full">
            <ArticleSummary data={data} />

            <div className="w-[588px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
          </div>

          <div className=" flex h-[1000px] justify-center items-center">
            <p
              className="text-center text-gray-400"
              style={{ whiteSpace: 'pre-line', lineHeight: '2' }}
            >
              {data?.[0].contents}
            </p>
          </div>
          <div className="flex flex-col items-center bg-point1 rounded-[6px] py-[40px] px-[66px]">
            <span className="font-bold mb-[16px] break-keep break-words text-center">
              더 많은 콘텐츠가 궁금하신가요?
            </span>
            <span className="text-[18px] font-bold mb-[4px]">
              2000여 개의 아티클
            </span>
            <span className="text-[24px] font-bold">무제한 보기</span>
            <Link
              to={`/introduction`}
              className="max-w-[388px] max-sm:w-[246px] bg-[#111] rounded-[6px] py-[14px] px-[16px] mt-[24px] text-center"
            >
              <span className="text-white font-bold">
                지금 첫 달 무료로 시작하기
              </span>
            </Link>
            <div className=" flex mt-[16px] gap-[3px] items-center">
              <span className="text-[13px]">이미 가입했다면</span>
              <Link>
                <span
                  className="underline text-[#111]"
                  onClick={() => {
                    window.location.href = '/login';
                  }}
                >
                  로그인하기
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-[64px] mb-[40px] border-t border-b border-point1">
            <div className="flex flex-col py-[24px] px-[8px] gap-y-[10px]">
              <div className="flex items-baseline gap-x-[24px] text-left">
                <span className="w-[74px] text-[13px] font-bold">발행일</span>
                <span className="font-medium">
                  {formatDate(articleData?.[0].createdAt)}
                </span>
              </div>
              <div className="flex items-baseline gap-x-[24px] text-left">
                <span className="w-[74px] text-[13px] font-bold">에디터</span>
                <div className="flex gap-x-[8px] font-medium">
                  {data[0].editor.map((name, index) => (
                    <span
                      key={index}
                      className="hover:underline cursor-pointer tracking-tighter"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[4px] mb-[40px] text-[#8e8e8e] font-medium">
            <div>※</div>
            <div>
              폴인은 유료 콘텐츠 구독 서비스로 무단 전재와 재배포를 금합니다.
              원문의 20% 이상 인용할 수 없으며, 일부 인용한 경우 반드시 출처를
              표기해야 합니다.
            </div>
          </div>
          <div className="pb-[72px]">
            <ArticleComment data={data} />
            <div className="w-[588px] border-t-[1px] border-solid border-point1 max-sm:w-full"></div>
          </div>
        </div>
      </div>
      <div
        className="relative before:absolute before:inset-0 before:mt-auto before:mx-auto before:w-full before:h-[calc(100%+91px)] before:z-0"
        style={{
          background: 'linear-gradient(#ebedec00 0%, #ebedec 100%)',
          '--tw-before-content': '""',
        }}
      >
        <div className="max-w-[1248px] mx-auto px-[24px] max-md:px-[8px]">
          <NowArticle seriesData={seriesData} articleId={articleId} />
          <RecommendArticle recommendData={recommendData} />
        </div>
        <Membership />
      </div>
    </main>
  );
}
