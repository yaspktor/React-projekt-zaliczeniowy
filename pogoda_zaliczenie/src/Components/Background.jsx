import React from 'react';

function Background({ weather }) {
  let backgroundImage = '';

  switch (weather) {
    case 'Clear':
      backgroundImage = './src/assets/sunny.jpg';
      break;
    case 'Clouds':
      backgroundImage = './src/assets/cloudy_less.jpg';
      break;
    case 'Rain':
      backgroundImage = './src/assets/rainy.jpg';
      break;
    case 'Thunderstorm':
      backgroundImage = './src/assets/stormy.jpg';
      break;
    default:
      backgroundImage = './src/assets/sunset.jpg';
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
