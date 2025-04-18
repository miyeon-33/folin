// mocks / linkerHandler.js
import { http, HttpResponse } from 'msw';
import linker from './linker.json';

export const linkerHandlers = [
  http.get('/linker/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = linker.filter((item) => item.topicId === parseInt(id));
    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
