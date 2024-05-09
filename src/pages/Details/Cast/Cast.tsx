import React from 'react';
import { CastData } from '../../../models/interfaces';
import style from './Cast.module.scss';
import CardGoOfficialSiteLink from '../../../components/CardGoOfficialSiteLink/CardGoOfficialSiteLink';

interface CastProps {
  cast: CastData[];
}

const Cast: React.FC<CastProps> = ({ cast }) => {
  return (
    <section className={style.cast}>
      <h3 className={style.title}>Cast</h3>
      <div className={style.cards}>
        {cast.map((item) => (
          <div key={item.character.id} className={style.card}>
            {item.character.image ? (
              <div className={style.image}>
                <img src={item.character.image.medium} alt="cover" />
              </div>
            ) : (
              <div className={style.cover}>Best TV Show</div>
            )}
            <div className={style.content}>
              {item.character.name && (
                <div className={style.name}>
                  <span className={style.span}>Character:</span> {item.character.name}
                </div>
              )}
              {item.person.name && (
                <div className={style.name}>
                  <span className={style.span}>Actor:</span> {item.person.name}
                </div>
              )}
              {item.character.url && <CardGoOfficialSiteLink url={item.character.url} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
