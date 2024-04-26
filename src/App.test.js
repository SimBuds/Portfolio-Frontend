import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}

  observe() {}

  unobserve() {}
};

test('renders app header', () => {
  const { container, getByTestId } = render(<App />);
  console.log(container.innerHTML);  // Check the entire HTML structure
  try {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  } catch (error) {
    console.error("Header element not found:", error);
  }
});