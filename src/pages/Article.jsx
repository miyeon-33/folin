// components /Article.jsx
import ArrayButton from '@/components/series/ArrayButton';
import TopMenu from '@/components/series/TopMenu';
import { useUser } from '@/hooks/useUser';

export default function Article() {
  const { isLoading, data = [], isError, error } = useUser();

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
            </div>
          </div>
          <div>아티클만 보기</div>
        </div>
      </main>
    </div>
  );
}
