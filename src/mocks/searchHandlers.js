import { http, HttpResponse } from 'msw';
import series from './series.json';
import seminar from './seminarData.json';
import linker from './linker.json';

export const searchHandlers = [
  //GET /series?keyword
  http.get('/search', async ({ request }) => {
    await sleep(200);

    // URL에서 페이지 정보 가져오기 (기본값 1)
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');

    // 소개글에서 키워드 포함한 요소 필터
    const filteredSeries = series.filter((item) =>
      item.introduce?.includes(keyword)
    );
    // 필터된 배열에서 topicId만 배열로 뽑아내기
    const topicId = filteredSeries.map((item) => item.topicId);
    // topicId 배열 갯수만큼 반복하여
    // 아티클배열중 topicId가 필터된 토픽아이디 번호와 동일한 배열의 길이만 배열로 뽑기
    const total = topicId.map((item) => {
      return series.filter((article) => article.topicId === item).length;
    });

    // const matchId = series.filter((item) => item.topicId === 15);
    return HttpResponse.json({ filteredSeries, total });
  }),

  //GET /seminar?keyword
  http.get('/search-seminar', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    const filteredSeminar = seminar.filter((item) =>
      item.lecture?.toLowerCase().includes(keyword.toLowerCase())
    );

    if (!keyword) {
      return HttpResponse.json([]);
    }

    return HttpResponse.json(filteredSeminar);
  }),

  //GET /linker?keyword
  http.get('/search-linker', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    const filteredLinker = linker.filter((item) =>
      item.achievements?.toLowerCase().includes(keyword.toLowerCase())
    );

    if (!keyword) {
      return HttpResponse.json([]);
    }

    return HttpResponse.json(filteredLinker);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
