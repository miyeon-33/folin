import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router';

export default function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  return (
    <div>
      <Header keyword={keyword} setSearchParams={setSearchParams} />
      {/* 중첩된 내부 라우트가 Outlet으로 들어옴 */}
      <Outlet />
      <Footer />
    </div>
  );
}
