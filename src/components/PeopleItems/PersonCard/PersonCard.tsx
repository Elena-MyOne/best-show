import React from 'react';
import { PersonData } from '../../../models/interfaces';
import style from './PersonCard.module.scss';
import { GoLinkExternal } from 'react-icons/go';

interface PersonCardProps {
  person: PersonData;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div key={person.id} className={style.person}>
      <h3 className={style.name}>{person.name}</h3>
      <div className={style.body}>
        <div className={style.image}>
          {person.image && <img src={person.image.medium} alt="photo" />}
          {!person.image && <div className={style.cover}>Cover</div>}
        </div>
        <div className={style.details}>
          {person.gender && <div className={style.gender}>Gender: {person.gender}</div>}
          {person.birthday && <div className={style.gender}>Birthday: {person.birthday}</div>}
          {person.deathday && <div className={style.gender}>Death date: {person.deathday}</div>}
          {person.country && <div className={style.country}>Country: {person.name}</div>}
          <div className={style.link}>
            <a href={person.url} className="link" target="_blank" rel="noopener noreferrer">
              <span>
                <GoLinkExternal />
              </span>
              <span>Go to official site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
