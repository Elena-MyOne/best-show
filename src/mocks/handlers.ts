import { http, HttpResponse } from 'msw';
import { mockPeople } from './mockPeople';

export const handlers = [
  http.get('https://api.tvmaze.com/search/people', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (query === 'error') {
      return HttpResponse.error();
    }

    if (query === 'bob') {
      return HttpResponse.json(mockPeople, { status: 200 });
    }

    return HttpResponse.json(mockPeople, { status: 200 });
  }),
];
