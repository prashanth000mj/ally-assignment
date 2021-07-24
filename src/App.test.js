import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the assignment app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ally.io Assignment/i);
  expect(linkElement).toBeInTheDocument();
});
