import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import OKRDetails from './OKRDetails';

test('renders OKRDetails Dialog Component', () => {
  const okr = {
    title: 'test-title',
    parentObjective: 'Test-Parent',
  };
  render(<OKRDetails okr={okr} />);
  const titleElement = screen.getByText(/test-title/);
  expect(titleElement).toBeInTheDocument();
});

test('should call onClose when diog is closed', () => {
  const okr = {
    title: 'test-title',
  };
  const onClose = jest.fn();
  render(<OKRDetails okr={okr} onClose={onClose} />);
  const closeElement = screen.getByText(/Close/);
  fireEvent.click(closeElement);
  expect(onClose).toBeCalled();
});
