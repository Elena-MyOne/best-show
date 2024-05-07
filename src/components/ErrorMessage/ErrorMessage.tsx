import React from 'react';
import style from './ErrorMessage.module.scss';
import { MdReportGmailerrorred } from 'react-icons/md';

const ErrorMessage: React.FC = () => {
  return (
    <div className={style.error}>
      <MdReportGmailerrorred />
      <span className={style.text}>Error occurred please try later</span>
    </div>
  );
};

export default ErrorMessage;
