// mocks / articleHandler.js
import { http, HttpResponse } from 'msw';
import articles from './article.json';

export const articleHandlers = [
  // GET: 그룹화하지 않은 데이터 반환
  http.get('/articles', async () => {
    await sleep(200);

    // 페이지네이션 함수
    const getDataByPage = (data, page, itemsPerPage = 10) => {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {
        articles: data.slice(startIndex, endIndex), // 페이지별 데이터
        totalPages,
      };
    };

    const page = 1; // 기본 페이지 번호
    const itemsPerPage = 30; // 한 페이지당 데이터 수
    const { articles: paginatedArticles, totalPages } = getDataByPage(
      articles,
      page,
      itemsPerPage
    );

    console.log(paginatedArticles); // 결과 확인용
    return HttpResponse.json({ page, totalPages, articles: paginatedArticles });
  }),
];

// Sleep 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
