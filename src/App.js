import './App.css';

import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

function App() {
  return (
    <div className='App'>
      <h2>AGMOSPHERE</h2>
      <SearchBar />

      <WeatherCard/>
    </div>
  );
}

export default App;
