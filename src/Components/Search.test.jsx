import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('renders search input', () => {
  const setLocation = vi.fn();
  const searchLocation = vi.fn();

  render(<Search location="" setLocation={setLocation} searchLocation={searchLocation} />);

  const inputElement = screen.getByPlaceholderText(/Enter location/i);
  expect(inputElement).toBeInTheDocument();
});

test('calls setLocation on input change', () => {
  const setLocation = vi.fn();
  const searchLocation = vi.fn();

  render(<Search location="" setLocation={setLocation} searchLocation={searchLocation} />);

  const inputElement = screen.getByPlaceholderText(/Enter location/i);
  fireEvent.change(inputElement, { target: { value: 'New York' } });

  expect(setLocation).toHaveBeenCalledWith('New York');
});
