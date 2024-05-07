import React from 'react';
import style from './CardItems.module.scss';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import Card from '../Card/Card';

interface CardItemsProps {
  shows: ShowData[] | SearchShowsData[];
}

const CardItems: React.FC<CardItemsProps> = ({ shows }) => {
  return (
    <div className={style.items}>
      {Array.isArray(shows) && shows.length > 0 && (
        <div className={style.shows}>
          {shows.map((item) => {
            if (Object.prototype.hasOwnProperty.call(item, 'show')) {
              const showItem = item as SearchShowsData;
              return <Card key={showItem.show.id} show={showItem.show} />;
            } else {
              const show = item as ShowData;
              return <Card key={show.id} show={show} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CardItems;
