import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Filter from './Filter';
import jest, {test, expect} from 'jest';

test('renders filter component', () => {
    render(<Filter category='test-category'/>);
    const filterElement = screen.getByText(/test-category/);
    expect(filterElement).toBeInTheDocument();
});

test('should call toggleFilter when filter is selected', () => {
    const toggleFilter = jest.fn();
    render(<Filter category='test-category' toggleFilter={toggleFilter}/>);
    const filterElement = screen.getByText(/test-category/);
    fireEvent.click(filterElement);
    expect(toggleFilter).toBeCalled();
});