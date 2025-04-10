// mocks / seriesHandler.js
import { http, HttpResponse } from 'msw';
import series from './series.json';

export const seriesHandlers = [
  // GET
  http.get('/series', async () => {
    await sleep(200);

    // topicId 별로 그룹화
    const groupByTopicId = (data) => {
      return data.reduce((acc, item) => {
        const { topicId } = item;

        if (!acc[topicId]) {
          acc[topicId] = [];
        }
        acc[topicId].push(item);
        return acc;
      }, {});
    };
    const page = 2; // 페이지 번호
    const groupedData = groupByTopicId(series);

    // 페이지별 데이터 가져오기
    const getDataByPage = (groupedData, page, itemsPerPage = 10) => {
      const mergedData = Object.values(groupedData);
      // 뒤집기
      mergedData.reverse();
      const totalPages = Math.ceil(mergedData.length / itemsPerPage);

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return mergedData.slice(startIndex, endIndex);
    };

    const result = getDataByPage(groupedData, page);
    console.log(result);
    return HttpResponse.json(result);
  }),

  // GET topicId=18
  http.get('/series/18', async () => {
    await sleep(200);

    const filteredData = series.filter((item) => item.topicId === 18);

    return HttpResponse.json(filteredData);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
