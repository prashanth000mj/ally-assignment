import { render, screen, fireEvent } from '@testing-library/react';
import KeyResult from './KeyResult';

test('renders KeyResult component', () => {
    const okr = {
        title: 'test-title'
    };
    render(<KeyResult okr={okr} index={0}/>);
    const titleElement = screen.getByText(/test-title/);
    const indexElement = screen.getByText(/a\./);
    expect(titleElement).toBeInTheDocument();
    expect(indexElement).toBeInTheDocument();
});

test('should calculate the alphabetic index for the index passed', () => {
    const okr = {
        title: 'test-title'
    };
    render(<KeyResult okr={okr} index={26}/>);
    const indexElement = screen.getByText(/1a\./);
    expect(indexElement).toBeInTheDocument();
});

test('should call the prop function passed when the okr title is clicked', () => {
    const selectOKR = jest.fn();
    const okr = {
        title: 'test-title'
    };
    render(<KeyResult okr={okr} index={1} selectOKR={selectOKR}/>);
    const okrTitleElement = screen.getByText(/test-title/);
    fireEvent.click(okrTitleElement);
    expect(selectOKR).toBeCalledTimes(1);
    expect(selectOKR.mock.calls[0][0]).toBe(okr);
});