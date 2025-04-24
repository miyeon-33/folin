// mocks/videoDetailsHandler.js
import { http, HttpResponse } from 'msw';
import videoDetails from './videodetails.json';

export const videoDetailsHandlers = [
  // 모든 비디오 데이터 반환
  http.get('/videoDetails', async () => {
    await sleep(200);

    const processedData = videoDetails.map((item) => ({
      id: item.id,
      topicId: item.topicId,
      topic: item.topic,
      tag: item.tag,
      key: item.key,
      color: item.color,
      title: item.title,
      name: item.name,
      job: item.job,
      proplie: item.proplie,
      video: item.video,
      favorit: item.favorit,
      createdAt: item.createdAt,
    }));

    return HttpResponse.json(processedData);
  }),

  // 특정 ID로 필터링된 데이터 반환
  http.get('/videoDetails/:id', async ({ params }) => {
    const { id } = params;
    await sleep(200);

    const filteredData = videoDetails.find((item) => item.id === parseInt(id));
    if (!filteredData) {
      return HttpResponse.json(
        { error: `Video details with ID ${id} not found` },
        { status: 404 }
      );
    }

    return HttpResponse.json(filteredData);
  }),

  //topicId에 따른 데이터 반환
  http.get('/videoDetails/topic/:topicId', async ({ params }) => {
    const { topicId } = params;
    await sleep(200);

    const filteredData = videoDetails.filter(
      (item) => item.topicId === parseInt(topicId)
    );
    return HttpResponse.json(filteredData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
