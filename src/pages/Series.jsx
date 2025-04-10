// pages / Series.jsx
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import SeriesView from '@/components/series/SeriesView';
import SeriesBox from '@/components/series/SeriesBox';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function Series() {
  const {
    isLoading,
    data = [],
    isError,
    error,
  } = useQuery({
    queryKey: ['series'],
    queryFn: () => fetch('/series').then((res) => res.json()),
  });

  useEffect(() => {
    data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, []);

  let maxId = Math.max(...data?.map((item) => item[0].topicId));
  console.log(maxId);

  return (
    <main className="bg-[#ebedec]">
      <div className=" max-w-[1248px]  w-full pt-[52px] px-[24px] bg-[#ebedec] mx-auto  h-auto mt-0">
        <div className="w-full max-w-[1200px] border border-amber-500">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px]">
            <div>
              <TopMenu />
            </div>
            <div className="flex justify-between mt-0">
              <div>
                <ArrayButton />
              </div>
              <div>
                <SeriesView />
              </div>
            </div>
          </div>
          <div className="pt-[64px]">
            {data.map((topic) => (
              <SeriesBox key={topic.id} topic={topic} maxId={maxId} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
