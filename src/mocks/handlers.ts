import { http, HttpResponse } from 'msw';
import { mockPeople } from './mockPeople';
import { mockShowsList } from './mockShow';

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

  http.get('https://api.tvmaze.com/shows', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('page');

    if (query === '1000') {
      return HttpResponse.error();
    }

    if (query === '0') {
      return HttpResponse.json(mockShowsList, { status: 200 });
    }

    return HttpResponse.json(mockShowsList, { status: 200 });
  }),
];
