import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import ShowsSlice from './slices/ShowsSlice';
import PeopleSlice from './slices/PeopleSlice';

export const store = configureStore({
  reducer: {
    shows: ShowsSlice,
    people: PeopleSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
