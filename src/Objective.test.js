import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Objective from './Objective';

jest.mock('./KeyResult', () => () => <span>test-key-result</span>);

afterAll(()=> {
    jest.unmock('./KeyResult');
});

test('renders Objective component', () => {
    const okr = {
        title: 'test-title'
    };
    render(<Objective okr={okr} index={123}/>);
    const titleElement = screen.getByText(/test-title/);
    const indexElement = screen.getByText(/123\./);
    expect(titleElement).toBeInTheDocument();
    expect(indexElement).toBeInTheDocument();
});

test('should render the key results passed by default', () => {
    const keyResults = [{
        id: 'test-id-1',
        title: 'test-title-1',
    },{
        id: 'test-id-2',
        title: 'test-title-2',
    }];
    render(<Objective okr={keyResults[0]} index={1} keyResults={keyResults}/>);
    const keyResultElements = screen.getAllByText(/test-key-result/);
    expect(keyResultElements.length).toBe(keyResults.length);
});

test('should colapse the key results on colapsing', () => {
    const okr = {
        title: 'test-title'
    };
    render(<Objective okr={okr} index={1}/>);

    const colapseIcon = screen.getByTestId('colapse-icon');
    fireEvent.click(colapseIcon);
    expect(colapseIcon).not.toBeInTheDocument();

    const expandIcon = screen.getByTestId('expand-icon');
    fireEvent.click(expandIcon);
    expect(expandIcon).not.toBeInTheDocument();
});

test('should call the prop function passed when the okr title is clicked', () => {
    const selectOKR = jest.fn();
    const okr = {
        title: 'test-title'
    };
    render(<Objective okr={okr} index={1} selectOKR={selectOKR}/>);
    const okrTitleElement = screen.getByText(/test-title/);
    fireEvent.click(okrTitleElement);
    expect(selectOKR).toBeCalledTimes(1);
    expect(selectOKR.mock.calls[0][0]).toBe(okr);
});