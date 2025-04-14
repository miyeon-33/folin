import HomeSeries from '@/components/home/HomeSeries';
import Keyword from '@/components/home/Keyword';
import Membership from '@/components/home/Membership';
import NewSeries from '@/components/home/NewSeries';
import NextSeminar from '@/components/home/NextSeminar';
import Shorts from '@/components/home/Shorts';
import Subscribe from '@/components/home/Subscribe';
import SubSlide from '@/components/home/SubSlide';
import UnderLine from '@/components/home/UnderLine';
import ViewedArticles from '@/components/home/ViewedArticles';
import ViewedVideo from '@/components/home/ViewedVideo';

export default function Home() {
  return (
    <main className=" pt-[56px] max-sm:mt-[60px] bg-[#ebedec]">
      <Subscribe />
      <NewSeries />
      <Keyword />
      <Shorts />
      <ViewedArticles />
      <ViewedVideo />
      <HomeSeries />
      <SubSlide />
      <NextSeminar />
      <UnderLine />
      <Membership />
    </main>
  );
}
