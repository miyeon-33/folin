import { http, HttpResponse } from 'msw';
import seminarData from './seminarData.json'; // 데이터
import SeminarDetails from './seminarDetails.json';
import SeminarDetails from './seminarProfile.json';

export const seminarDetailsHandler = [
  http.get('/api/seminars/:id', async ({ params }) => {
    const { id } = params;
    const seminar = seminarData.find((item) => item.id === parseInt(id));
    if (!seminar) {
      return HttpResponse.json({ error: 'Seminar not found' }, { status: 404 });
    }
    return HttpResponse.json(seminar);
  }),
];
