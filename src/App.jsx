import React, { useState } from 'react';
import Background from './Components/Background';
import Search from './Components/Search';
import CurrentWeather from './Components/CurrentWeather';


function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState('');

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          getForecast(data.coord.lat, data.coord.lon);
        })
        .catch((error) => {
          console.error('There was a problem with your fetch operation:', error);
        });
      setLocation('');
    }
  };
  
  const getForecast = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setForecast(data);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  };
  
  
  return (
    <div className="app">
      <Background weather={data.weather ? data.weather[0].main : ''} />
      <Search location={location} setLocation={setLocation} searchLocation={searchLocation} />
      {data.main && <CurrentWeather data={data} forecast={forecast} />}
    </div>
  );
}

export default App;