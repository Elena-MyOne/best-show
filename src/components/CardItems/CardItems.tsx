import React from 'react';
import style from './CardItems.module.scss';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectShows, setIsCardItemsDarked } from '../../redux/slices/ShowsSlice';
import { AppDispatch } from '../../redux/store';

interface CardItemsProps {
  shows: ShowData[] | SearchShowsData[];
}

const CardItems: React.FC<CardItemsProps> = ({ shows }) => {
  const { isCardItemsDarked } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={style.items}>
      {Array.isArray(shows) && shows.length > 0 && (
        <div className={style.shows}>
          {shows.map((item) => {
            if (Object.prototype.hasOwnProperty.call(item, 'show')) {
              const showItem = item as SearchShowsData;
              return (
                <Card
                  key={showItem.show.id}
                  show={showItem.show}
                  setIsCardItemsDarked={() => dispatch(setIsCardItemsDarked(true))}
                />
              );
            } else {
              const show = item as ShowData;
              return (
                <Card
                  key={show.id}
                  show={show}
                  setIsCardItemsDarked={() => dispatch(setIsCardItemsDarked(true))}
                />
              );
            }
          })}
        </div>
      )}
      {isCardItemsDarked && <div className={style.back}></div>}
    </div>
  );
};

export default CardItems;
