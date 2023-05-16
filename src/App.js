import React from 'react';
import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import getWeatherData from './api';

function App() {
  const [weather, setWeather] = useState(''); // Initialize weather state as null
  const [error, setError] = useState(null);

  const handleSubmit = async (city) => {
    try {
      const result = await getWeatherData(city);
      setWeather(result);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('Location or city not found');
    }

  };

  return (
    <div className='App'>
      <h2 className='mb-5'>FORECAST AI</h2>
      <SearchBar onSubmit={handleSubmit} />
      <p className='fw-bolder text-danger text-warning'>{error}</p>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
