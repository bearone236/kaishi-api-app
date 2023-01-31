import React from 'react';
import { Link } from 'react-router-dom';
import MarvelLogo from '../images/marvel_header_logo.png';

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={MarvelLogo} alt="ロゴ" decoding="async" />
      </div>

      <nav className="header-link">
        <ul>
          <li>
            <Link to={`/`}>Movie</Link>
          </li>
          <li>
            <a href="https://marvel.disney.co.jp/" rel="noopener noreferrer" target="_blank">
              Marvel
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
