import { http, HttpResponse } from 'msw';
import seminarData from './seminarData.json'; // 기본
import SeminarDetails from './seminarDetails.json'; // 세미나 상세
import seminarProfile from './seminarProfile.json'; // 세미나 프로필

export const seminarDetailsHandler = [
  http.get('/api/seminars/:id', async ({ params }) => {
    const { id } = params;
    const seminarId = parseInt(id);

    // 기본 데이터
    const seminar = seminarData.find((item) => item.id === seminarId);
    if (!seminar) {
      return HttpResponse.json(
        { error: `Seminar with ID ${seminarId} not found` },
        { status: 404 }
      );
    }

    const seminarDetails = SeminarDetails.find(
      (detail) => detail.detid === seminarId
    );
    const seminarProfileData = seminarProfile.find(
      (profile) => profile.pfpId === seminarId
    );

    const response = {
      seminar,
      details: seminarDetails || {},
      profile: seminarProfileData || {},
    };

    return HttpResponse.json(response);
  }),
];
