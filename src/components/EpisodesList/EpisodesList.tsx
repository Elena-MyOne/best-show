import React from 'react';
import { EpisodeData } from '../../models/interfaces';
import style from './EpisodesList.module.scss';
import { GrStar } from 'react-icons/gr';

interface EpisodesListProps {
  episodesList: EpisodeData[];
}

const EpisodesList: React.FC<EpisodesListProps> = ({ episodesList }) => {
  return (
    <div className={style.episodes}>
      {episodesList.map((episode) => (
        <div key={episode.id} className={style.body}>
          <div className={style.image}>
            <img src={episode.image.medium} alt="episode cover" />
          </div>
          <div className={style.content}>
            <div className={style.name}>{episode.name}</div>

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
    </div>
  );
};

export default EpisodesList;
