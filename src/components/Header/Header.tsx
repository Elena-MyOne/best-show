import React, { useState } from 'react';
import style from './Header.module.scss';
import { ROUTER_PATHS } from '../../models/enums';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { getSearchValueFromLocalStorage } from '../../utils/getSearchValueFromLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSearch,
  selectShows,
  setIsError,
  setSearchValue,
} from '../../redux/slices/ShowsSlice';
import { AppDispatch } from '../../redux/store';
import { useSearchShowsQuery } from '../../redux/api/apiSlice';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(getSearchValueFromLocalStorage());

  const { searchValue } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { data: searchShowsData, isError } = useSearchShowsQuery(searchValue);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    setInputValue(target);
  };

  const handleButtonClick = () => {
    dispatch(setSearchValue(inputValue));
    localStorage.setItem('TVShowSearch', searchValue);
    searchShowsData && dispatch(handleSearch(searchShowsData));
    isError && dispatch(setIsError(isError));
    navigate(`/${ROUTER_PATHS.SEARCH}?q=${encodeURIComponent(searchValue)}`);
  };

  const handleSearchForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleButtonClick();
  };

  return (
    <header className={style.header}>
      <div className={`${style.body} container`}>
        <Logo />
        <form className={style.search} onSubmit={handleSearchForm} data-testid="search-form">
          <input
            type="text"
            className={style.input}
            placeholder="Search show..."
            onChange={handleChange}
            value={inputValue}
          />
          <button className={style.button} onClick={handleButtonClick}>
            <BsSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
