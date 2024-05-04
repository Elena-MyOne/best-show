export interface SearchShowsData {
  score: number;
  show: ShowData;
}

export interface ShowData {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[] | null;
  status: string;
  runtime: number;
  averageRuntime: number | null;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ScheduleData;
  rating: RatingData;
  weight: number;
  network: NetworkData;
  webChannel: null;
  dvdCountry: null;
  externals: ExternalsData;
  image: ImageData;
  summary: string;
  updated: number;
  _links: LinksData;
}

interface ScheduleData {
  time: string;
  days: string[];
}

interface RatingData {
  average: number;
}

interface NetworkData {
  id: number;
  name: string;
  country: CountryData;
  officialSite: string;
}

interface CountryData {
  name: string;
  code: string;
  timezone: string;
}

interface ExternalsData {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface ImageData {
  medium: string;
  original: string;
}

interface LinksData {
  self: { href: string };
  previousepisode: { href: string };
}
