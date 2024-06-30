import { render } from '@testing-library/react';
import Background from './Background';

test('renders correct background image based on weather', () => {
  const { rerender } = render(<Background weather="Clear" />);
  expect(document.querySelector('.bg')).toHaveStyle(`background-image: url(clearBackground)`);

  rerender(<Background weather="Clouds" />);
  expect(document.querySelector('.bg')).toHaveStyle(`background-image: url(cloudyBackground)`);
});
