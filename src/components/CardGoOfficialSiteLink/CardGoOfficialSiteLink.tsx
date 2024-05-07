import React from 'react';
import style from './CardGoOfficialSiteLink.module.scss';
import { GoLinkExternal } from 'react-icons/go';

interface CardGoOfficialSiteLinkProps {
  url: string;
}

const CardGoOfficialSiteLink: React.FC<CardGoOfficialSiteLinkProps> = ({ url }) => {
  return (
    <div className={style.link}>
      <a href={url} className="link" target="_blank" rel="noopener noreferrer">
        <span>
          <GoLinkExternal />
        </span>
        <span>Go to official site</span>
      </a>
    </div>
  );
};

export default CardGoOfficialSiteLink;
