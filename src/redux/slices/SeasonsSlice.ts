import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EpisodeData } from '../../models/interfaces';
import { RootState } from '../store';

export interface EpisodesState {
  id: string;
  episodes: EpisodeData[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: EpisodesState = {
  id: '',
  episodes: [],
  isLoading: false,
  isError: false,
};

export const EpisodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setEpisodes(state, action: PayloadAction<EpisodeData[]>) {
      state.episodes = action.payload;
    },
  },
});

export const selectEpisodes = (state: RootState): EpisodesState => state.episodes;

export const { setId, setEpisodes } = EpisodesSlice.actions;
export default EpisodesSlice.reducer;
