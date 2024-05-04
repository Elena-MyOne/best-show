import React from 'react';
import style from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return (
    <>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
