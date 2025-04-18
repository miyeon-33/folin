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

  http.get('/linkers/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = linker.filter((item) => item.id === parseInt(id));

    return HttpResponse.json(filteredData);
  }),

  http.get('/linker-name/:name', async ({ params }) => {
    const { name } = params;
    await sleep(200);

    const filteredData = linker.filter((item) => item.name === name);

    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
