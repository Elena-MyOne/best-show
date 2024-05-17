import { CastData } from '../../models/interfaces';

export const noDate = 'no data to show';

export const initialShow = {
  id: 0,
  image: '',
  name: '',
  rating: 0,
  language: '',
  summary: '',
  genres: [noDate],
  premiered: '',
  ended: '',
  officialSite: '',
  cast: [] as CastData[],
};
