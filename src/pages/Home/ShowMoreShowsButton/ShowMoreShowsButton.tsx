import React from 'react';
import style from './ShowMoreShowsButton.module.scss';
import { useSelector } from 'react-redux';
import { selectShows } from '../../../redux/slices/ShowsSlice';

interface ShowMoreShowsButtonProps {
  showMoreShows: () => void;
  isMoreShows: boolean;
}

const ShowMoreShowsButton: React.FC<ShowMoreShowsButtonProps> = ({
  showMoreShows,
  isMoreShows,
}) => {
  const { switchMoreShows } = useSelector(selectShows);

  return (
    <div className={style.more}>
      <button className="button" onClick={showMoreShows} disabled={switchMoreShows}>
        {isMoreShows ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ShowMoreShowsButton;
