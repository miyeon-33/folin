import { http, HttpResponse } from 'msw';
import seminarData from './seminarData.json';

export const seminarHandlers = [
  http.get('/seminars', async () => {
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
    const { seminars: paginatedData, totalPages } = getDataByPage(
      seminarData,
      page,
      itemsPerPage
    );

    return HttpResponse.json({ page, totalPages, seminars: paginatedData });
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
