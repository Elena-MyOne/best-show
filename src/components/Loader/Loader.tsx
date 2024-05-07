import React from 'react';
import style from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <>
      <div className={style.loading}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </>
  );
};

export default Loader;
