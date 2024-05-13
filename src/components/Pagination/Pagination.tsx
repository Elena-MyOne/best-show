import React, { useState, useEffect } from 'react';
import style from './Pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  loadShows,
  selectShows,
  setApiCallPage,
  setCurrentPage,
  setIsIsLoading,
} from '../../redux/slices/ShowsSlice';
import { useLoadShowsQuery } from '../../redux/api/apiSlice';
import { LAST_PAGE } from '../../constants/page.constants';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const Pagination: React.FC = () => {
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const {
    nextPage,
    prevPage,
    currentPage = 0,
    switchMoreShows,
    apiCallPage,
  } = useSelector(selectShows);

  const { data: showsData, isLoading: isLoadingOnPagination } = useLoadShowsQuery(apiCallPage);

  React.useEffect(() => {
    dispatch(setIsIsLoading(isLoadingOnPagination));
  }, [dispatch, isLoadingOnPagination]);

  const handleNextButton = async () => {
    if (!switchMoreShows && nextPage !== null) {
      dispatch(setApiCallPage(nextPage));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(nextPage));
    }
  };

  const handlePrevButton = async () => {
    if (!switchMoreShows && prevPage !== null && prevPage != undefined) {
      dispatch(setApiCallPage(prevPage));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(prevPage));
    }
  };

  const handleLast = async () => {
    if (!switchMoreShows && LAST_PAGE) {
      dispatch(setApiCallPage(LAST_PAGE));
      showsData && dispatch(loadShows(showsData));
      dispatch(setCurrentPage(LAST_PAGE ?? 0));
    }
  };

  useEffect(() => {
    setIsNextDisabled(switchMoreShows || nextPage === null || currentPage >= LAST_PAGE);
    setIsPrevDisabled(switchMoreShows || prevPage === null || currentPage === 0);
  }, [switchMoreShows, nextPage, prevPage, currentPage]);

  return (
    <div className={style.buttons}>
      <button
        className={style.prev}
        disabled={isPrevDisabled}
        onClick={handlePrevButton}
        data-testid="prev-button"
      >
        <MdOutlineArrowBackIos />
      </button>

      <button className={style.current} data-testid="current-button">
        {currentPage + 1}
      </button>

      {currentPage < LAST_PAGE && (
        <button
          className={style.nextCurrent}
          onClick={handleNextButton}
          data-testid="next-current-button"
        >
          {currentPage + 2}
        </button>
      )}

      {currentPage < LAST_PAGE - 1 && <div className={style.dots}>...</div>}

      {currentPage < LAST_PAGE - 1 && (
        <button className={style.last} onClick={handleLast} data-testid="last-button">
          {LAST_PAGE + 1}
        </button>
      )}

      <button
        className={style.next}
        disabled={isNextDisabled}
        onClick={handleNextButton}
        data-testid="next-button"
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
