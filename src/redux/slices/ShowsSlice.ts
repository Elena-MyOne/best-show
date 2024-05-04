import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getSearchValueFromLocalStorage } from '../../utils/getSearchValueFromLocalStorage';
import { SearchShowsData, ShowData } from '../../models/interfaces';

export interface SearchState {
  searchValue: string;

  shows: ShowData[] | SearchShowsData[];
  isLoading: boolean;
  isError: boolean;

  switchMoreShows: boolean;
  isCardItemsDarked: boolean;

  currentPage: number;
  apiCallPage: number;
  nextPage: number | null;
  prevPage: number | null;
}

const initialState: SearchState = {
  searchValue: getSearchValueFromLocalStorage(),

  shows: [],
  isLoading: false,
  isError: false,

  switchMoreShows: false,
  isCardItemsDarked: false,

  currentPage: 0,
  apiCallPage: 0,
  nextPage: null,
  prevPage: null,
};

export const SearchSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setShows(state, action: PayloadAction<ShowData[] | SearchShowsData[]>) {
      state.shows = action.payload;
    },
    setSwitchMoreShows(state, action: PayloadAction<boolean>) {
      state.switchMoreShows = action.payload;
    },
    setIsCardItemsDarked(state, action: PayloadAction<boolean>) {
      state.isCardItemsDarked = action.payload;
    },
    setIsIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setApiCallPage(state, action: PayloadAction<number>) {
      state.apiCallPage = action.payload;
    },
    setNextPage(state, action: PayloadAction<number | null>) {
      state.nextPage = action.payload;
    },
    setPrevPage(state, action: PayloadAction<number | null>) {
      state.prevPage = action.payload;
    },

    loadShows(state, action: PayloadAction<ShowData[] | SearchShowsData[]>) {
      state.shows = action.payload;
      state.nextPage = state.currentPage + 1;
      state.prevPage = state.currentPage > 0 ? state.currentPage - 1 : null;
    },

    handleSearch(state, action: PayloadAction<ShowData[] | SearchShowsData[]>) {
      if (!state.searchValue) {
        return;
      }

      state.shows = action.payload;
      state.currentPage = 0;
    },
  },
});

export const selectShows = (state: RootState): SearchState => state.shows;
export const {
  setSearchValue,
  setShows,
  setSwitchMoreShows,
  setIsCardItemsDarked,
  setIsIsLoading,
  setIsError,
  setCurrentPage,
  setApiCallPage,
  setNextPage,
  setPrevPage,
  loadShows,
  handleSearch,
} = SearchSlice.actions;
export default SearchSlice.reducer;
