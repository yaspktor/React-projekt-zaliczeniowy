import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';

const mockData = {
  name: 'New York',
  main: {
    temp: 295.15,
    feels_like: 293.15,
    humidity: 80
  },
  weather: [{ description: 'clear sky', main: 'Clear' }],
  wind: { speed: 3 }
};

test('renders weather data correctly', () => {
  render(<CurrentWeather data={mockData} forecast={null} />);
  expect(screen.getByText(/new york/i)).toBeInTheDocument();
  expect(screen.getByText(/22°C/)).toBeInTheDocument(); // temp - 273.15
  expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
});
