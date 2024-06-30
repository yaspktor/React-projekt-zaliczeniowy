import React, { useState } from 'react';
import axios from 'axios';
import Background from './Components/Background';
import Search from './Components/Search';
import CurrentWeather from './Components/CurrentWeather';






function App() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState('');


  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(apiKey);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`).then((response) => {
        setData(response.data);
        getForecast(response.data.coord.lat, response.data.coord.lon);
      });
      setLocation('');
    }
  };

  const getForecast = (lat, lon) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then((response) => {
      setForecast(response.data);
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