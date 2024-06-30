import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

vi.mock('axios');

global.fetch = vi.fn();

test('fetches and displays weather data on Enter key press', async () => {
  const mockWeatherData = {
    name: 'New York',
    main: {
      temp: 295.15,
      feels_like: 293.15,
      humidity: 80
    },
    weather: [{ description: 'clear sky', main: 'Clear' }],
    wind: { speed: 3 },
    coord: { lat: 40.7128, lon: -74.0060 }
  };
  const mockForecastData = {
    list: [
      {
        dt: 1618308000,
        main: { temp: 295.15 },
        weather: [{ main: 'Clear' }]
      }
    ]
  };

  // Mock the fetch responses
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockWeatherData
  });
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockForecastData
  });

  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter location/i);
  fireEvent.change(inputElement, { target: { value: 'New York' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
  expect(screen.getByText(/new york/i)).toBeInTheDocument();
});
