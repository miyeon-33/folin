import { http, HttpResponse } from 'msw';
import detail from './seriesDummy.json';

// let maxId = Math.max(...people.map((item) => item.id));

export const seriesHandlers = [
  // GET
  http.get('/detail', async () => {
    await sleep(200);
    return HttpResponse.json(detail);
  }),
  http.get('/detail/:id', async ({ params }) => {
    await sleep(200);
    const { id } = params;

    return HttpResponse.json(
      detail.filter((person) => person.id === parseInt(id))
    );
  }),

  // POST
  http.post('/detail', async ({ request }) => {
    await sleep(200);
    const item = await request.json();
    maxId++;
    detail.push({ ...item, id: maxId });

    return HttpResponse.json(detail);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
