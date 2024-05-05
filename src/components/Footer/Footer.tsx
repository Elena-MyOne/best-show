import React from 'react';
import style from './Footer.module.scss';
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.body}>
          <div className={style.top}>
            <div className={style.logo}>
              <Logo />
            </div>

            <div className={style.genre}>
              <h3 className={style.title}>Genre</h3>
              <ul className={style.list}>
                <li className={style.item}>Drama</li>
                <li className={style.item}>Adventure</li>
                <li className={style.item}>Romance</li>
                <li className={style.item}>Science-Fiction</li>
                <li className={style.item}>Supernatural</li>
                <li className={style.item}>Thriller</li>
                <li className={style.item}>Horror</li>
              </ul>
            </div>
            <div className={style.categories}>
              <h3 className={style.title}>Categories</h3>
              <ul className={style.list}>
                <li className={style.item}>Popular</li>
                <li className={style.item}>New</li>
              </ul>
            </div>
          </div>
          <div className={style.developed}>
            &copy; Developed by{' '}
            <a
              className="link"
              href="https://myoneweb.us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyOne
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
