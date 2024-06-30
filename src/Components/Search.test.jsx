import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('renders search input', () => {
  render(<Search location="" setLocation={() => {}} searchLocation={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/enter location/i);
  expect(inputElement).toBeInTheDocument();
});

test('calls setLocation on input change', () => {
  const setLocation = vi.fn();
  render(<Search location="" setLocation={setLocation} searchLocation={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/enter location/i);
  fireEvent.change(inputElement, { target: { value: 'New York' } });
  expect(setLocation).toHaveBeenCalledWith('New York');
});

test('calls searchLocation on Enter key press', () => {
  const searchLocation = vi.fn();
  render(<Search location="" setLocation={() => {}} searchLocation={searchLocation} />);
  const inputElement = screen.getByPlaceholderText(/enter location/i);
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
  expect(searchLocation).toHaveBeenCalled();
});
