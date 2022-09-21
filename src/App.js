import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch user name from github API
  const fetchUserHandler = useCallback(
    async userName => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );

        if (response.status !== 200) {
          throw new error('Something went wrong!');
        }

        const data = await response.json();

        setUser(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    },
    [error]
  );

  useEffect(() => {
    fetchUserHandler('octocat');
  }, [fetchUserHandler]);

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container" id={theme}>
      <Header theme={theme} themeHandler={toggleTheme} />
      <SearchBar userSearchHandler={fetchUserHandler} />
      <main>
        {!isLoading && user && <UserCard userData={user} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading ...</p>}
      </main>
    </div>
  );
}

export default App;
