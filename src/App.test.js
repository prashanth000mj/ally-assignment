import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import {test, expect} from 'jest';

test('renders the assignment app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ally.io Assignment/i);
  expect(linkElement).toBeInTheDocument();
});
