import React from 'react';
import { useSelector } from 'react-redux';
import { selectPeople } from '../../redux/slices/PeopleSlice';
import style from './PeopleItems.module.scss';

import PersonCard from './PersonCard/PersonCard';

const PeopleItems: React.FC = () => {
  const { people } = useSelector(selectPeople);

  return (
    <>
      <div className={style.people}>
        {people.map((person) => (
          <PersonCard key={person.person.id} person={person.person} />
        ))}
      </div>
    </>
  );
};

export default PeopleItems;
