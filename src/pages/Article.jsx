// components /Article.jsx
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import ArticleBox from '@/components/series/ArticleBox';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function Article() {
  const {
    isLoading,
    articleData = [],
    isError,
    error,
  } = useQuery({
    queryKey: ['article'],
    queryFn: () => fetch('/article').then((res) => res.json()),
  });
  console.log(articleData);

  // 스와이프 각 날짜별 정렬
  useEffect(() => {
    articleData?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, []);

  return (
    <div className=" bg-[#ebedec] border">
      <main className=" max-w-[1248px]  w-full pt-[52px] px-[24px] mx-auto  h-[1500px] mt-0">
        <div className="w-full max-w-[1200px] border border-amber-500">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px] border">
            <div>
              <TopMenu />
            </div>
            <div className="flex justify-between mt-0">
              <ArrayButton />
            </div>
          </div>
          <div className="pt-[64px]">
            <ul>
              <li>
                {articleData.map((art) => (
                  <ArticleBox key={art.id} art={art} />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
