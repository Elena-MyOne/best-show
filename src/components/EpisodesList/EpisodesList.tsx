import React from 'react';
import { EpisodeData } from '../../models/interfaces';
import style from './EpisodesList.module.scss';
import './carousel.scss';
import { GrStar } from 'react-icons/gr';
import Carousel from 'react-multi-carousel';

interface EpisodesListProps {
  episodesList: EpisodeData[];
}

const EpisodesList: React.FC<EpisodesListProps> = ({ episodesList }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1399, min: 1100 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1099, min: 575 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 574, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {episodesList.map((episode) => (
          <div key={episode.id} className={style.body}>
            <div className={style.image}>
              <img src={episode.image.medium} alt="episode cover" />
            </div>
            <div className={style.content}>
              <div className={style.name}>
                <span>{episode.number}. </span>
                {episode.name}
              </div>

              <div className={style.rating}>
                <span>
                  <GrStar />
                </span>
                <span>{episode.rating.average}</span>
              </div>
              <div className={style.summary}>
                <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
              </div>
            </div>
            <div className={style.airdate}>{episode.airdate.slice(0, 4)}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EpisodesList;
