import React, { useState } from 'react';
import style from './Footer.module.scss';
import Logo from '../Logo/Logo';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setSearchPerson } from '../../redux/slices/PeopleSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../models/enums';

const Footer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    setInputValue(target);
  };

  const handleActorSearch = (event: React.FormEvent) => {
    event.preventDefault();
    handleButtonClick();
  };

  const handleButtonClick = () => {
    dispatch(setSearchPerson(inputValue));
    if (inputValue) {
      navigate(`/${ROUTER_PATHS.PEOPLE}?q=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.body}>
          <div className={style.top}>
            <div className={style.logo}>
              <Logo />
            </div>
            <form className={style.form} onSubmit={handleActorSearch}>
              <label htmlFor="actor">Find actor: </label>
              <input
                type="text"
                id="actor"
                onChange={handleChange}
                value={inputValue}
                placeholder="Name"
                className={style.input}
                autoComplete="off"
              />
              <button className={style.button} onClick={handleButtonClick}>
                <BsSearch />
              </button>
            </form>
          </div>
          <div className={style.developed}>
            &copy; Developed by{' '}
            <a
              className="link"
              href="https://myoneweb.us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyOne
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
