import React, { useState } from 'react';
import style from './Dropdown.module.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface DropdownProps {
  options: number[];
  selectedSeason: number;
  setSelectedSeason: React.Dispatch<React.SetStateAction<number>>;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedSeason, setSelectedSeason }) => {
  const [isActive, seIsActive] = useState<boolean>(false);

  const handelClick = (season: number): void => {
    setSelectedSeason(season);
    seIsActive(false);
  };

  return (
    <div className={style.dropdown}>
      <div className={style.button} onClick={() => seIsActive(!isActive)}>
        <span>Season {selectedSeason}</span>
        <span>{isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
      </div>
      {isActive && (
        <div className={style.content}>
          {options.map((item) => (
            <div className={style.item} key={item} onClick={() => handelClick(item)}>
              Season {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
