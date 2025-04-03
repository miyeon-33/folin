import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <Header />
      {/* 중첩된 내부 라우트가 Outlet으로 들어옴 */}
      <Outlet />
      <Footer />
    </div>
  );
}
