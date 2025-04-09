import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import { Routes, Route } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Series from '@/pages/Series';
import SeriesDetails from '@/pages/SeriesDetails';
import Article from '@/pages/Article';
import ArticleDetails from '@/pages/ArticleDetails';
import Video from '@/pages/Video';
import Seminar from '@/components/seminar/Seminar';
import SeminarDetails from '@/components/seminar/SeminarDetails';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/seminar" element={<Seminar />} />
          {/* <Route path="/seminar/:articleId" element={<SeminarDetails />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/video/:articleId" element={<VideoDetails />} /> */}
          {/* <Route path="/linker/:articleId" element={<Linker />} /> */}
          <Route path="/series" element={<Series />} />
          <Route path="/series/:articleId" element={<SeriesDetails />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:articleId" element={<ArticleDetails />} />
          <Route path="/video" element={<Video />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
