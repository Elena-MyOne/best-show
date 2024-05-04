import React, { useState } from 'react';
import style from './Header.module.scss';
import { ROUTER_PATHS } from '../../models/enums';
import { Link } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    setInputValue(target);
  };

  const handleButtonClick = () => {};

  return (
    <header className={style.header}>
      <div className={`${style.body} container`}>
        <Link to={ROUTER_PATHS.HOME} className={style.logo}>
          <MdLocalMovies />
          <span className={style.text}>Shows</span>
        </Link>
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
