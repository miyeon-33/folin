import { http, HttpResponse } from 'msw';
import seminarData from './seminarData.json';

export const seminarHandlers = [
  http.get('/seminar', async () => {
    await sleep(100);

    const getDataByPage = (data, page, itemsPerPage = 60) => {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return {
        seminars: data.slice(startIndex, endIndex),
        totalPages,
      };
    };

    const page = 1;
    const itemsPerPage = 60;
    const { seminars, totalPages } = getDataByPage(
      seminarData,
      page,
      itemsPerPage
    );

    return HttpResponse.json({ page, totalPages, seminars });
  }),
  http.get('/seminar/:id', async ({ params }) => {
    await sleep(100);
    const seminarId = parseInt(params.id);

    const seminar = seminarData.find((item) => item.id === seminarId);
    console.log(seminar, '==================================');

    if (!seminar) {
      return HttpResponse.json(
        { error: `seminar with ID ${seminarId} not found` },
        { status: 404 }
      );
    }

    return HttpResponse.json(seminar);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
