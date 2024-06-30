import React from 'react';
import defaultBackground from '../assets/sunset.jpg';
import clearBackground from '../assets/sunny.jpg';
import cloudyBackground from '../assets/cloudy_less.jpg';
import rainyBackground from '../assets/rainy.jpg';
import stormyBackground from '../assets/stormy.jpg';



function Background({ weather }) {
  let backgroundImage = '';

  switch (weather) {
    case 'Clear':
      backgroundImage = clearBackground;
      break;
    case 'Clouds':
      backgroundImage = cloudyBackground;
      break;
    case 'Rain':
      backgroundImage = rainyBackground;
      break;
    case 'Thunderstorm':
      backgroundImage = stormyBackground;
      break;
    default:
      backgroundImage = defaultBackground;
      break;
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1
  };

  return <div class='bg' style={backgroundStyle}></div>;
}

export default Background;
