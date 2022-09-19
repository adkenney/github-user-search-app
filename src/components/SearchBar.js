import React, { useRef } from 'react';
import SearchIcon from '../assets/icon-search.svg';

const SearchBar = props => {
  const userInputRef = useRef();
  // function to lift current user input to fetch function
  const searchUserHandler = event => {
    event.preventDefault();
    const enteredUser = userInputRef.current.value;
    props.userSearchHandler(enteredUser);
  };

  return (
    <div className="search-bar">
      <label htmlFor="user-search">
        <img src={SearchIcon} alt="search icon"></img>
      </label>
      <input
        type="search"
        id="user-search"
        placeholder="Search GitHub username..."
        ref={userInputRef}
      />
      <button onClick={searchUserHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
