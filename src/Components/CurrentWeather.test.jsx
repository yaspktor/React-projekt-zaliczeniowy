import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';

const mockData = {
  name: 'London',
  main: { temp: 295.15, feels_like: 293.15, humidity: 50 },
  weather: [{ description: 'clear sky' }],
  wind: { speed: 3.5 },
};

test('renders current weather data', () => {
  render(<CurrentWeather data={mockData} forecast={null} />);
  
  expect(screen.getByText(/London/i)).toBeInTheDocument();
  expect(screen.getByText(/22°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Feels Like/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed/i)).toBeInTheDocument();
});
