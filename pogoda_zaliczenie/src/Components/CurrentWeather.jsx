import React from 'react';
import Forecast from './Forecast';

function CurrentWeather({ data, forecast }) {
  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          <h1>{Math.round(data.main.temp - 273.15)}°C</h1>
        </div>
        <div className="description">
          <p>{data.weather[0].description}</p>
        </div>
      </div>

      <div className="bottom">
        <div className="feels">
          <p className="bold">{Math.round(data.main.feels_like - 273.15)}°C</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">{data.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">{data.wind.speed} m/s</p>
          <p>Wind Speed</p>
        </div>
      </div>

      {/* Add Forecast component here */}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default CurrentWeather;
