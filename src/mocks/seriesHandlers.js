// mocks / seriesHandler.js
import { http, HttpResponse } from 'msw';
import series from './series.json';

export const seriesHandlers = [
  // GET / series
  http.get('/series', async ({ request }) => {
    await sleep(200);

    // URL에서 페이지 정보 가져오기 (기본값 1)
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);

    // topicId 별로 그룹화
    const groupByTopicId = (data) => {
      return data.reduce((acc, item) => {
        const { topicId } = item;

        if (!acc[topicId]) {
          acc[topicId] = [];
        }
        acc[topicId].push(item);
        return acc;
      }, {});
    };

    const groupedData = groupByTopicId(series);
    const itemsPerPage = 10;

    // 페이지별 데이터 가져오기
    const getDataByPage = (groupedData, page, itemsPerPage) => {
      const mergedData = Object.values(groupedData);
      // 뒤집기
      mergedData.reverse();
      const totalPages = Math.ceil(mergedData.length / itemsPerPage);

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {
        data: mergedData.slice(startIndex, endIndex),
        totalPages: totalPages,
      };
    };

    const result = getDataByPage(groupedData, page, itemsPerPage);
    // console.log(result.data, 'sadf');

    // 각 슬라이드별 최신화순 정렬
    result.data = result.data.map((item) => {
      return item.sort((a, b) => b.id - a.id);
    });
    // console.log(result.data, '1');

    // 페이지 정보를 응답에 포함
    return HttpResponse.json({
      data: result.data,
      pagination: {
        currentPage: page,
        totalPages: result.totalPages,
      },
    });
  }),

  // GET / topicId=18
  http.get('/series/18', async () => {
    await sleep(200);
    const filteredData = series.filter((item) => item.topicId === 18);
    return HttpResponse.json(filteredData);
  }),

  //GET /article
  http.get('/article', async ({ request }) => {
    await sleep(200);

    // URL에서 페이지 정보 가져오기 (기본값 1)
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);

    const articleData = series.filter((item) => item.video === 'N');

    const itemsPerPage = 24;
    // 페이지별 데이터 가져오기
    const getDataByPage = (articleData, page, itemsPerPage) => {
      const totalPages = Math.ceil(articleData.length / itemsPerPage);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return {
        data: articleData.slice(startIndex, endIndex),
        totalPages: totalPages,
      };
    };

    // 페이지네이션 적용
    const result = getDataByPage(articleData, page, itemsPerPage);

    console.log(result.data, '000');
    // 두 데이터를 함께 반환
    return HttpResponse.json({
      data: result.data, // 필터링된 전체 데이터
      pagination: {
        currentPage: page,
        totalPages: result.totalPages,
      }, // 페이지네이션 적용된 데이터
    });
  }),

  //GET /video
  http.get('/video', async ({ request }) => {
    await sleep(200);

    // URL에서 페이지 정보 가져오기 (기본값 1)
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);

    const videoData = series.filter((item) => item.video === 'Y');

    const itemsPerPage = 24;
    // 페이지별 데이터 가져오기
    const getDataByPage = (videoData, page, itemsPerPage) => {
      const totalPages = Math.ceil(videoData.length / itemsPerPage);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return {
        data: videoData.slice(startIndex, endIndex),
        totalPages: totalPages,
      };
    };

    // 페이지네이션 적용
    const result = getDataByPage(videoData, page, itemsPerPage);

    console.log(result.data, '000');
    // 두 데이터를 함께 반환
    return HttpResponse.json({
      data: result.data, // 필터링된 전체 데이터
      pagination: {
        currentPage: page,
        totalPages: result.totalPages,
      }, // 페이지네이션 적용된 데이터
    });
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
