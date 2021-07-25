import { render, screen } from '@testing-library/react';
import KeyResult from './KeyResult';

test('renders KeyResult component', () => {
    const title = 'test-title';
    render(<KeyResult title={title} index={0}/>);
    const titleElement = screen.getByText(/test-title/);
    const indexElement = screen.getByText(/a\./);
    expect(titleElement).toBeInTheDocument();
    expect(indexElement).toBeInTheDocument();
});

test('should calculate the alphabetic index for the index passed', () => {
    const title = 'test-title';
    render(<KeyResult title={title} index={26}/>);
    const indexElement = screen.getByText(/1a\./);
    expect(indexElement).toBeInTheDocument();
});