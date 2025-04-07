// pages / Series.jsx
import { useUser } from '@/hooks/useUser';
import TopMenu from '@/components/series/TopMenu';
import ArrayButton from '@/components/series/ArrayButton';
import SeriesView from '@/components/series/SeriesView';
import SeriesBox from '@/components/series/SeriesBox';

export default function Series() {
  const { isLoading, data, isError, error } = useUser();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.meeage}</>;

  return (
    <div className=" bg-[#ebedec] border">
      <main className=" max-w-[1248px]  w-full pt-[52px] px-[24px] mx-auto  h-[1500px] mt-0">
        <div className="w-full max-w-[1200px] border border-amber-500">
          <div className="flex w-full max-w-[1200px] justify-between pt-[4px] border">
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
            <SeriesBox />
          </div>
        </div>
      </main>
    </div>
  );
}
