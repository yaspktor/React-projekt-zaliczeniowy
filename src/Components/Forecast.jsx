import React, {useRef} from 'react';
import clearIcon from '../assets/sunny_icon.png';
import cloudyIcon from '../assets/clouds.png';
import rainIcon from '../assets/rain.png';
import stormIcon from '../assets/storm.png';
import snowIcon from '../assets/snow.png';



const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return clearIcon;
    case 'Clouds':
      return cloudyIcon;
    case 'Rain':
      return rainIcon;
    case 'Thunderstorm':
      return stormIcon;
    case 'Snow': 
      return snowIcon;

    default:
      return './assets/default_icon.jpg';
  }
};
const filterForecasts = (list) => {
  const filtered = [];
  const dates = new Set();

  list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.getDate();

    if (!dates.has(day)) {
      filtered.push(item);
      dates.add(day);
    }
  });

  return filtered.slice(0, 5); 
};


function Forecast({ forecast }) {
  const containerRef = useRef(null);

  if (!forecast || !forecast.list) {
    return null; 
    
  }
  //console.log(forecast);
  const filteredList = filterForecasts(forecast.list);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="forecast-wrapper">
      
      <div className="forecast-container" ref={containerRef}>
        <div className="forecast-list">
          {filteredList.map((item, index) => {
            const date = new Date(item.dt * 1000);
            const dayName = dayNames[date.getDay()];
            const icon = getIcon(item.weather[0].main);

            return (
              <div className="forecast-item" key={index}>
                <p>{dayName}</p>
                <img src={icon} alt={item.weather[0].main} />
                <p>{Math.round(item.main.temp - 273.15)}°C</p>
                <p>{item.weather[0].main}</p>
              </div>
            );
          })}
        </div>
        
      </div>
      <div className="scroll">    
          <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
      <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
      </div>

    </div>
  );
}

export default Forecast;