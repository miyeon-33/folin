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

    const filteredSeries = series.filter((item) =>
      item.introduce?.includes(keyword)
    );

    return HttpResponse.json(filteredSeries);
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
