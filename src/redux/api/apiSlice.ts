import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../../models/enums';
import { SearchPeopleData, SearchShowsData, ShowData } from '../../models/interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: URL.BASE_URL }),
  endpoints: (builder) => ({
    loadShows: builder.query<ShowData[], number>({
      query: (page) => `shows?page=${page}`,
    }),
    searchShows: builder.query<SearchShowsData[], string>({
      query: (searchValue) => `search/shows?q=${searchValue}`,
    }),
    getShowById: builder.query<ShowData, string>({
      query: (id) => `shows/${id}`,
    }),
    searchPeople: builder.query<SearchPeopleData[], string>({
      query: (searchValue) => `search/people?q=${searchValue}`,
    }),
  }),
});

export const { useLoadShowsQuery, useSearchShowsQuery, useGetShowByIdQuery, useSearchPeopleQuery } =
  apiSlice;
