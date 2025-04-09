import HomeSeries from '@/components/HomeSeries';
import Keyword from '@/components/Keyword';
import NewSeries from '@/components/NewSeries';
import Shorts from '@/components/Shorts';
import Subscribe from '@/components/Subscribe';
import SubSlide from '@/components/SubSlide';
import ViewedArticles from '@/components/ViewedArticles';
import ViewedVideo from '@/components/ViewedVideo';

export default function Home() {
  return (
    <main className="h-[5000px] pt-[56px] max-sm:mt-[60px] bg-[#ebedec]">
      <Subscribe />
      <NewSeries />
      <Keyword />
      <Shorts />
      <ViewedArticles />
      <ViewedVideo />
      <HomeSeries />
      <SubSlide />
    </main>
  );
}
