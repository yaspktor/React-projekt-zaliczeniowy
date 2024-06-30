import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';
import axios from 'axios';

vi.mock('axios');

test('renders search input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter location/i);
  expect(inputElement).toBeInTheDocument();
});

test('fetches weather data on enter', async () => {
  axios.get
    .mockResolvedValueOnce({
      data: {
        coord: { lon: 21.0118, lat: 52.2298 },
        weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
        main: { temp: 307.61, feels_like: 309.11, temp_min: 306.28, temp_max: 308.66, pressure: 1006, humidity: 39 },
        visibility: 10000,
        wind: { speed: 10.28, deg: 140 },
        clouds: { all: 0 },
        dt: 1719751086,
        sys: { type: 2, id: 2032856, country: 'PL', sunrise: 1719713905, sunset: 1719774038 },
        timezone: 7200,
        id: 756135,
        name: 'Warsaw',
        cod: 200,
      },
    })
    .mockResolvedValueOnce({
      data: {
        cod: "200",
        message: 0,
        cnt: 40,
        list: [
          {
            dt: 1719759600,
            main: { temp: 307.72, feels_like: 308.53, temp_min: 307.72, temp_max: 307.85, pressure: 1006, humidity: 36 },
            weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
            clouds: { all: 31 },
            wind: { speed: 6.16, deg: 180 },
            visibility: 10000,
            dt_txt: "2024-06-30 15:00:00"
          }
        ],
        city: { id: 756135, name: 'Warsaw', coord: { lat: 52.2298, lon: 21.0118 }, country: 'PL', population: 1000000, timezone: 7200, sunrise: 1719713905, sunset: 1719774038 }
      }
    });

  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter location/i);
  fireEvent.change(inputElement, { target: { value: 'Warsaw' } });

  // Wywołaj bezpośrednio funkcję wyszukiwania lokalizacji
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter' });
  // inaczej kliknij enter
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter' });
  // zatwier

  // Sprawdź, czy dane zostały poprawnie zrenderowane
  await waitFor(() => {
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  });

  // Dodatkowe sprawdzenia poprawności wyświetlania danych
  expect(screen.getByText(/Warsaw/i)).toBeInTheDocument();
  expect(screen.getByText(/34°C/i)).toBeInTheDocument();
});
