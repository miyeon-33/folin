import ArticleSearch from '@/components/search/ArticleSearch';
import LinkerSearch from '@/components/search/LinkerSearch';
import Results from '@/components/search/Results';
import SeminarSearch from '@/components/search/SeminarSearch';
import SeriesSearch from '@/components/search/SeriesSearch';
import Tab from '@/components/search/Tab';
import VideoSearch from '@/components/search/VideoSearch';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showSeminar, setShowSeminar] = useState(false);
  const [showLinker, setShowLinker] = useState(false);
  const keyword = searchParams.get('keyword') || '';

  const handleShowMore = () => {
    setShowMore(true);
  };
  const handleShowArticle = () => {
    setShowArticle(true);
  };
  const handleShowVideo = () => {
    setShowVideo(true);
  };
  const handleShowSeminar = () => {
    setShowSeminar(true);
  };
  const handleShowLinker = () => {
    setShowLinker(true);
  };

  // Series 데이터 가져오기
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () =>
      fetch(`/search?keyword=${keyword}`).then((res) => res.json()),
  });

  // Seminar 데이터 가져오기
  const {
    isLoading: isLoadingSeminar,
    data: seminarData,
    isError: isErrorSeminar,
    error: seminarError,
  } = useQuery({
    queryKey: ['search-seminar', keyword],
    queryFn: () =>
      fetch(`/search-seminar?keyword=${keyword}`).then((res) => res.json()),
  });
  // Linker 데이터 가져오기
  const {
    isLoading: isLoadingLinker,
    data: linkerData,
    isError: isErrorLinker,
    error: LinkerError,
  } = useQuery({
    queryKey: ['search-linker', keyword],
    queryFn: () =>
      fetch(`/search-linker?keyword=${keyword}`).then((res) => res.json()),
  });

  return (
    <div className="pt-[52px] max-sm:pt-[60px] bg-[#ebedec] pb-[50px]">
      <Results
        data={data || []}
        setSearchParams={setSearchParams}
        keyword={keyword}
      />
      <Tab
        data={data?.filteredSeries || []}
        seminarData={seminarData}
        linkerData={linkerData}
        total={data?.total || []}
        setActiveIndex={setActiveIndex}
      />
      {isLoading && <p>Loading series data...</p>}
      {isError && <p>{error.message}</p>}
      {activeIndex === 0 && (
        <>
          <SeriesSearch
            data={data?.filteredSeries || []}
            total={data?.total || []}
            setShowMore={handleShowMore}
            showMore={showMore}
          />
          <ArticleSearch
            data={data?.filteredSeries || []}
            total={data?.total || []}
            setShowArticle={handleShowArticle}
            showArticle={showArticle}
          />
          <VideoSearch
            data={data?.filteredSeries || []}
            total={data?.total || []}
            setShowVideo={handleShowVideo}
            showVideo={showVideo}
          />
          <SeminarSearch
            data={seminarData || []}
            setShowSeminar={handleShowSeminar}
            showSeminar={showSeminar}
          />
          <LinkerSearch
            data={linkerData || []}
            setShowLinker={handleShowLinker}
            showLinker={showLinker}
          />
        </>
      )}
      {activeIndex === 1 && (
        <SeriesSearch
          data={data?.filteredSeries || []}
          total={data?.total || []}
          showMore={true}
        />
      )}
      {activeIndex === 2 && (
        <ArticleSearch
          data={data?.filteredSeries || []}
          total={data?.total || []}
          showArticle={true}
        />
      )}
      {activeIndex === 3 && (
        <VideoSearch
          data={data?.filteredSeries || []}
          total={data?.total || []}
          showVideo={true}
        />
      )}
      {isLoadingSeminar && <p>Loading seminar data...</p>}
      {isErrorSeminar && <p>{seminarError.message}</p>}
      {activeIndex === 4 && (
        <SeminarSearch data={seminarData || []} showSeminar={true} />
      )}
      {isLoadingLinker && <p>Loading linker data...</p>}
      {isErrorLinker && <p>{LinkerError.message}</p>}
      {activeIndex === 5 && (
        <LinkerSearch data={linkerData || []} showLinker={true} />
      )}
    </div>
  );
}
