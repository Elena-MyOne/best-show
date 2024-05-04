export const getSearchValueFromLocalStorage = () => {
  return localStorage.getItem('TVShowSearch') ?? '';
};
