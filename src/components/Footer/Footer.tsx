import React, { useState } from 'react';
import style from './Footer.module.scss';
import Logo from '../Logo/Logo';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  selectPeople,
  setIsError,
  setIsIsLoading,
  setPeople,
  setSearchPerson,
} from '../../redux/slices/PeopleSlice';
import { useSearchPeopleQuery } from '../../redux/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../models/enums';

const Footer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const { searchPerson } = useSelector(selectPeople);
  const { data, isError } = useSearchPeopleQuery(searchPerson);
  const navigate = useNavigate();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    setInputValue(target);
  };

  const handleActorSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputValue);

    if (inputValue) {
      console.log(data);
      dispatch(setIsIsLoading(true));
      dispatch(setSearchPerson(inputValue));
      if (data) {
        dispatch(setPeople(data));
        navigate(`/${ROUTER_PATHS.PEOPLE}?q=${encodeURIComponent(inputValue)}`);
      }
      if (isError) {
        dispatch(setIsError(isError));
      }
      dispatch(setIsIsLoading(false));
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
                autoComplete="false"
              />
              <button className={style.button} onClick={handleActorSearch}>
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
