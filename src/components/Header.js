import React from 'react';
import DarkIcon from '../assets/icon-moon.svg';
import LightIcon from '../assets/icon-sun.svg';

const Header = props => {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme-toggle">
        <p>{props.theme === 'light' ? 'dark' : 'light'}</p>
        <img
          src={props.theme === 'light' ? `${DarkIcon}` : `${LightIcon}`}
          onClick={props.themeHandler}
          alt="theme toggle"
        ></img>
      </div>
    </header>
  );
};

export default Header;
