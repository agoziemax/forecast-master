import React from 'react'
import './styles/weatherCard.css'

function WeatherCard({weather}) {

  if (weather === "") {
    return <div>Loading...</div>; // Add a loading state or message
  }

  const country = weather.sys.country;
  return (
    <div>
      <div className='weather-card d-flex justify-content-between '>
        <div className=''>
          <h2>
            {country}
          </h2>
          <p></p>
        </div>
        <div className=' d-flex flex-column'>
          <p>20</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard
