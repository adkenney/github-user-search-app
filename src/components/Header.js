import React from 'react';
import DarkIcon from '../assets/icon-moon.svg';

const Header = () => {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme-toggle">
        <p>DARK</p>
        <img src={DarkIcon} alt="theme toggle"></img>
      </div>
    </header>
  );
};

export default Header;
