import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../models/enums';
import style from './Logo.module.scss';
import { MdLocalMovies } from 'react-icons/md';

const Logo: React.FC = () => {
  return (
    <Link to={ROUTER_PATHS.HOME} className={style.logo}>
      <MdLocalMovies />
      <span className={style.text}>Shows</span>
    </Link>
  );
};

export default Logo;
