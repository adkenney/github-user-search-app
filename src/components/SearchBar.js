import React, { useRef } from 'react';
import SearchIcon from '../assets/icon-search.svg';

const SearchBar = props => {
  const userInputRef = useRef();
  // function to lift current user input to fetch function
  const searchUserHandler = () => {
    const enteredUser = userInputRef.current.value;
    props.userSearchHandler(enteredUser);
  };

  const enterKeyHandler = event => {
    if (event.key === 'Enter') {
      searchUserHandler();
    }
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
        onKeyDown={enterKeyHandler}
      />
      {props.error && <div className="error">{props.error}</div>}
      <button onClick={searchUserHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
