import React from 'react';
import SearchIcon from '../assets/icon-search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label for="user-search">
        <img src={SearchIcon} alt="search icon"></img>
      </label>
      <input
        type="search"
        id="user-search"
        placeholder="Search GitHub username..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
