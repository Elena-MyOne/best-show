import React, { useEffect } from 'react';
import style from './People.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPeople, setPeople } from '../../redux/slices/PeopleSlice';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import PeopleItems from '../../components/PeopleItems/PeopleItems';
import { ROUTER_PATHS } from '../../models/enums';
import { useSearchPeopleQuery } from '../../redux/api/apiSlice';
import { AppDispatch } from '../../redux/store';
import Loader from '../../components/Loader/Loader';
import { BiError } from 'react-icons/bi';

const People: React.FC = () => {
  const { searchPerson } = useSelector(selectPeople);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, isError } = useSearchPeopleQuery(searchPerson);

  useEffect(() => {
    if (data) {
      dispatch(setPeople(data));
    }
  }, [searchPerson, data, dispatch]);

  return (
    <section className={style.section}>
      <button className={style.button} onClick={() => navigate(`/${ROUTER_PATHS.HOME}`)}>
        <span>
          <MdOutlineKeyboardDoubleArrowLeft />
        </span>
        <span>Go Back</span>
      </button>
      {searchPerson ? (
        <>
          <h2 className={style.title}>
            Search: <span className={style.span}>&quot;{searchPerson}&quot;</span>
          </h2>
          {isLoading && <Loader />}
          {!!data && <PeopleItems />}
          {isError && (
            <div className={style.error}>
              <BiError />
              <span>Oops error</span>
            </div>
          )}
        </>
      ) : (
        <div className={style.empty}>Nothing to show</div>
      )}
    </section>
  );
};

export default People;
