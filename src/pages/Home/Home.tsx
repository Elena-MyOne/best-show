import React, { useEffect, useState } from 'react';
import { useLoadShowsQuery, useSearchShowsQuery } from '../../redux/api/apiSlice';
import style from './Home.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  handleSearch,
  loadShows,
  selectShows,
  setCurrentPage,
  setSwitchMoreShows,
} from '../../redux/slices/ShowsSlice';
import { ROUTER_PATHS } from '../../models/enums';
import { DEFAULT_ITEMS_PER_PAGE, ITEMS_PER_PAGE } from '../../constants/page.constants';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CardItems from '../../components/CardItems/CardItems';
import ShowMoreShowsButton from './ShowMoreShowsButton/ShowMoreShowsButton';

const Home: React.FC = () => {
  const [isMoreShows, setIsMoreShows] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { shows, searchValue, apiCallPage, isLoading } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: showsData,
    isLoading: isLoadingMainPage,
    isError: isLoadingError,
  } = useLoadShowsQuery(apiCallPage);

  const { data: searchShowsData, isError: isSearchError } = useSearchShowsQuery(searchValue);

  useEffect(() => {
    if (searchValue) {
      searchShowsData && dispatch(handleSearch(searchShowsData));
      navigate(`/${ROUTER_PATHS.SEARCH}?q=${encodeURIComponent(searchValue)}`);
    } else {
      showsData && dispatch(loadShows(showsData));
      navigate(`/${ROUTER_PATHS.SHOWS}?page=${encodeURIComponent(apiCallPage)}`);
    }

    dispatch(setSwitchMoreShows(shows.length <= DEFAULT_ITEMS_PER_PAGE));
  }, [searchValue, searchShowsData, showsData, dispatch, navigate, apiCallPage, shows.length]);

  const currentPageItems = shows && shows.slice(0, DEFAULT_ITEMS_PER_PAGE);

  const showMoreShows = () => {
    setIsMoreShows((prev) => !prev);
    dispatch(setCurrentPage(0));
    showsData && dispatch(loadShows(showsData));
  };

  const closeDetails = () => {
    const path = location.pathname;
    if (path.includes('details')) {
      navigate(`${ROUTER_PATHS.HOME}`);
    }
  };

  return (
    <section className={style.body}>
      <>
        <div className={style.top}>
          <h1 className="title">Shows List</h1>
          <div className="pagination">
            {shows && shows.length < ITEMS_PER_PAGE ? null : <Pagination />}
          </div>
        </div>
      </>
      {isLoadingMainPage || isLoading ? (
        <Loader />
      ) : isLoadingError || isSearchError ? (
        <ErrorMessage />
      ) : (
        <>
          <div className={style.content}>
            {shows.length ? (
              <div className={style.items} onClick={closeDetails}>
                {isMoreShows ? <CardItems shows={shows} /> : <CardItems shows={currentPageItems} />}
              </div>
            ) : (
              <div className={style.nothing}>Upsy, nothing to show &#128550;</div>
            )}
          </div>

          {!isLoadingMainPage && (
            <ShowMoreShowsButton showMoreShows={showMoreShows} isMoreShows={isMoreShows} />
          )}
        </>
      )}
    </section>
  );
};

export default Home;
