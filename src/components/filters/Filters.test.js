import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Filters from './Filters';
import jest, {test, expect} from 'jest';

jest.mock('./Filter', () => {
    const test = () => <span>test-filter</span>;
    return test;
});

test('renders filters component', () => {
    const filters = [];
    render(<Filters filters={filters}/>);
    const filterElement = screen.getByText(/Filters/);
    expect(filterElement).toBeInTheDocument();
});

test('renders filters passed', () => {
    const filters = ['filter1','filter2'];
    render(<Filters filters={filters} selectedFilters={new Set()}/>);
    const filterElements = screen.getAllByText(/test-filter/);
    expect(filterElements.length).toBe(2);
});

test('should show filters by default', () => {
    const filters = ['filter1','filter2'];
    render(<Filters filters={filters} selectedFilters={new Set()}/>);
    const colapseIcon = screen.getByTestId('filter-colapse-icon');
    expect(colapseIcon).toBeInTheDocument();
});

test('should hide filters on clicking on colapse icon', () => {
    const filters = ['filter1','filter2'];
    render(<Filters filters={filters} selectedFilters={new Set()}/>);
    const colapseIcon = screen.getByTestId('filter-colapse-icon');
    fireEvent.click(colapseIcon);
    expect(colapseIcon).not.toBeInTheDocument();
});

test('should hide filters on clicking on Filters text', () => {
    const filters = ['filter1','filter2'];
    render(<Filters filters={filters} selectedFilters={new Set()}/>);
    const filtersElement = screen.getByText('Filters');
    const colapseIcon = screen.getByTestId('filter-colapse-icon');
    fireEvent.click(filtersElement);
    expect(colapseIcon).not.toBeInTheDocument();
});

test('should open filters on clicking on expan icon', () => {
    const filters = ['filter1','filter2'];
    render(<Filters filters={filters} selectedFilters={new Set()}/>);
    const colapseIcon = screen.getByTestId('filter-colapse-icon');
    fireEvent.click(colapseIcon);
    expect(colapseIcon).not.toBeInTheDocument();

    const expandIcon = screen.getByTestId('filter-expand-icon');
    fireEvent.click(expandIcon);
    expect(expandIcon).not.toBeInTheDocument();
});