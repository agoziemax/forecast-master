import React from 'react';
import './styles/weatherCard.css';

function WeatherCard({ weather }) {
 

  const {
    sys: { country },
    name: city,
    main: { temp, humidity, temp_max, temp_min},
    weather: [{ description, main, icon }],
  } = weather;
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div>
      <div className='weather-card d-flex justify-content-between mt-5 '>
        <div className=''>
          <h2>
            {city}, {country}
          </h2>
          <h3>{temp}°C</h3>
          <p>
            {main} - {description}
          </p>

          <img src={iconUrl} alt='Weather Icon' />
        </div>
        <div className=' d-flex flex-column'>
          <p>Humidity: {humidity}%</p>
          <p>Temp Max: {temp_max}°C</p>
          <p>Temp Min: {temp_min}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
