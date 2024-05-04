import React from 'react';
import { ShowData } from '../../models/interfaces';
import style from './Card.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface CardProps {
  show: ShowData | null;
  setIsCardItemsDarked: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const Card: React.FC<CardProps> = ({ show, setIsCardItemsDarked }) => {
  const years = `${show && show.premiered ? show.premiered.slice(0, 4) : ''} ${
    show && show.ended ? '- ' + show.ended.slice(0, 4) : ''
  } `;

  const image = show && show.image?.medium;

  const setDarkBackground = () => {
    if (setIsCardItemsDarked) setIsCardItemsDarked(true);
  };

  return (
    <>
      {show ? (
        <Link
          to={`/shows/details/${show.id}`}
          className={style.card}
          onClick={setDarkBackground}
          data-testid="card"
        >
          <div className={style.image}>
            {image ? (
              <img src={image} alt="cover" />
            ) : (
              <div className={style.cover}>My Best TV Show</div>
            )}

            <div className={style.top}>
              <div className={style.rating}>
                <AiFillStar />
                {show.rating &&
                  (show.rating.average ? (
                    <span className={style.average}>{show.rating.average}</span>
                  ) : (
                    <span className={style.average}>Not rated</span>
                  ))}
              </div>
              {show.genres && <div className={style.genres}>{show.genres.join(', ')}</div>}
              <div className={style.years}>{years}</div>
            </div>
          </div>
          <h3 className={style.name}>{show.name}</h3>
        </Link>
      ) : (
        <div className={style.error}>Show is not available in this moment, please try later</div>
      )}
    </>
  );
};

export default Card;
