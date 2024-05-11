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
  _embedded: {
    cast: CastData[];
  };
}

export interface CastData {
  person: PersonData;
  character: CharacterData;
  self: boolean;
  voice: boolean;
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
  officialSite: string | null;
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

interface CharacterData {
  id: number;
  url: string;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface SearchPeopleData {
  score: number;
  person: PersonData;
}

export interface PersonData {
  id: number;
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  birthday: null | string;
  deathday: null | string;
  gender: string;
  image: {
    medium: string;
    original: string;
  } | null;
  updated: number;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface EpisodeData {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
      name: string;
    };
  };
}
