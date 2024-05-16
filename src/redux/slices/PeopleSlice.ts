import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchPeopleData } from '../../models/interfaces';
import { RootState } from '../store';

export interface SearchPeopleState {
  searchPerson: string;
  people: SearchPeopleData[];
}

const initialState: SearchPeopleState = {
  searchPerson: '',
  people: [],
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
  },
});

export const selectPeople = (state: RootState): SearchPeopleState => state.people;
export const { setSearchPerson, setPeople } = PeopleSlice.actions;
export default PeopleSlice.reducer;
