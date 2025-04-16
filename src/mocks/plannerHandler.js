// mocks / seriesHandler.js
import { http, HttpResponse } from 'msw';
import planner from './planner.json';

export const seriesHandlers = [
  // GET /series/1
  http.get('/series/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = planner.filter(
      (item) => item.topicId === parseInt(id)
    );
    console.log(filteredData);
    return HttpResponse.json(filteredData);
  }),
];
