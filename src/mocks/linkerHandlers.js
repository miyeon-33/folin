// mocks / linkerHandler.js
import { http, HttpResponse } from 'msw';
import linker from './linker.json';

export const linkerHandlers = [
  http.get('/linker/:topicId', async ({ params }) => {
    const { topicId } = params;
    await sleep(200);

    const filteredData = linker.filter(
      (item) => item.topicId === parseInt(topicId)
    );

    return HttpResponse.json(filteredData);
  }),

  http.get('/linker/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = linker.filter((item) => item.id === parseInt(id));
    console.log(filteredData);
    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
