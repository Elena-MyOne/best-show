export const mockPerson = {
  id: 6367,
  url: 'https://www.tvmaze.com/people/6367/bob-banks',
  name: 'Bob Banks',
  country: null,
  birthday: null,
  deathday: null,
  gender: 'Male',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/254060.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/101/254060.jpg',
  },
  updated: 1664724118,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/people/6367',
    },
  },
};

const mockPerson2 = {
  id: 7060,
  url: 'https://www.tvmaze.com/people/7060/bob-mccracken',
  name: 'Bob McCracken',
  country: null,
  birthday: null,
  deathday: null,
  gender: 'Male',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/184/460676.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/184/460676.jpg',
  },
  updated: 1695267944,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/people/7060',
    },
  },
};

export const mockPeople = [
  { score: 0.70710677, person: mockPerson },
  { score: 0.5, person: mockPerson2 },
];
