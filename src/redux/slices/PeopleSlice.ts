import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchPeopleData } from '../../models/interfaces';
import { RootState } from '../store';

export interface SearchPeopleState {
  searchPerson: string;
  people: SearchPeopleData[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: SearchPeopleState = {
  searchPerson: '',
  people: [],
  isLoading: false,
  isError: false,
};

export const PeopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setSearchPerson(state, action: PayloadAction<string>) {
      state.searchPerson = action.payload;
    },
    setPeople(state, action: PayloadAction<SearchPeopleData[]>) {
      state.people = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
  },
});

export const selectPeople = (state: RootState): SearchPeopleState => state.people;
export const { setSearchPerson, setPeople, setIsLoading, setIsError } = PeopleSlice.actions;
export default PeopleSlice.reducer;
