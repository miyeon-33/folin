// mocks / seriesHandler.js
import { http, HttpResponse } from 'msw';
import series from './series.json';

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
const page = 1; // 페이지 번호

export const seriesHandlers = [
  // GET
  http.get('/series', async () => {
    await sleep(200);
    const groupedData = groupByTopicId(series);

    // 페이지별 데이터 가져오기
    const getDataByPage = (groupedData, page, itemsPerPage = 2) => {
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
    return HttpResponse.json(series);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
