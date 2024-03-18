import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}

  observe() {}

  unobserve() {}
};

test('renders app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/About Me/i);
  expect(headerElement).toBeInTheDocument();
});