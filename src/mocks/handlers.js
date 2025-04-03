import { http, HttpResponse } from 'msw';
import people from './dummy.json';

let maxId = Math.max(...people.map((item) => item.id));

export const handlers = [
  // GET
  http.get('/people', async () => {
    await sleep(200);
    return HttpResponse.json(people);
  }),
  http.get('/people/:id', async ({ params }) => {
    await sleep(200);
    const { id } = params;

    return HttpResponse.json(
      people.filter((person) => person.id === parseInt(id))
    );
  }),
  // POST
  http.post('/people', async ({ request }) => {
    await sleep(200);
    const item = await request.json();
    maxId++;
    people.push({ ...item, id: maxId });

    return HttpResponse.json(people);
  }),
  // DELETE
  http.delete('/people/:id', ({ params }) => {
    const { id } = params;
    const parsedId = parseInt(id);

    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      people.splice(index, 1);
    }

    return HttpResponse.json(people);
  }),
  // PUT
  http.put('/people/:id', async ({ params, request }) => {
    const { id } = params;
    const parsedId = parseInt(id);
    const item = await request.json();

    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      // people.splice(index, 1, item);
      people[index] = item;
    }
    return HttpResponse.json(people);
  }),
  // PATCH
  http.patch('/people/:id', async ({ params, request }) => {
    const { id } = params;
    const parsedId = parseInt(id);
    const item = await request.json();

    const index = people.findIndex((person) => person.id === parsedId);

    if (index !== -1) {
      // people.splice(index, 1, item);
      people[index].lang = item.lang;
    }

    return HttpResponse.json(people);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
