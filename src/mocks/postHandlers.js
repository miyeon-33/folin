// mocks / postHandlers.js
import { http, HttpResponse } from 'msw';
import post from './post.json';

export const postHandlers = [
  http.get('/post/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = post.filter((item) => item.id === parseInt(id));
    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
