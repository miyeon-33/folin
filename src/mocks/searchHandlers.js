import { http, HttpResponse } from 'msw';
import series from './series.json';

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
  http.get('/seminar', async ({ request }) => {
    await sleep(200);

    // URL에서 페이지 정보 가져오기 (기본값 1)
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');

    const filteredSeries = series.filter((item) =>
      item.title?.includes(keyword)
    );

    return HttpResponse.json(filteredSeries);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
