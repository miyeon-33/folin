// mocks /plannerHandler.js
import { http, HttpResponse } from 'msw';
import planner from './planner.json';

export const plannerHandler = [
  // GET /planner/1
  http.get('/planner/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = planner.filter((item) =>
      item.topicId.includes(parseInt(id))
    );
    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
