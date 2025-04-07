import NewSeries from '@/components/NewSeries';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  return (
    <main className="h-[1000px] mt-[56px] max-sm:mt-[60px] bg-[#ddd]">
      <Subscribe />
      <NewSeries />
    </main>
  );
}
