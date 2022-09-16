import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfileDescription from './components/UserProfileDescription';
import UserProfileLinks from './components/UserProfileLinks';
import UserProfileStats from './components/UserProfileStats';

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <main>
        <div className="content-card">
          <UserProfileDescription />
          <UserProfileStats />
          <UserProfileLinks />
        </div>
      </main>
    </div>
  );
}

export default App;
