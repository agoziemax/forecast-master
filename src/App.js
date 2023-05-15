import React from 'react';
import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import getWeatherData from './api';

function App() {
  const [weather, setWeather] = useState(null); // Initialize weather state as null

  const handleSubmit = async (city) => {
    const result = await getWeatherData(city);
    setWeather(result);
  };

  return (
    <div className='App'>
      <h2>AGMOSPHERE</h2>
      <SearchBar onSubmit={handleSubmit} />
      {weather && <WeatherCard weather={weather} />} {/* Render WeatherCard only if weather is truthy */}
    </div>
  );
}

export default App;
