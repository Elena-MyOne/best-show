import React from 'react';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.body}>
          &copy; Developed by{' '}
          <a className="link" href="https://myoneweb.us/" target="_blank" rel="noopener noreferrer">
            MyOne
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
