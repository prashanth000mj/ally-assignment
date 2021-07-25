import { fireEvent, render, screen,waitFor } from '@testing-library/react';
import OKRs from './OKRs';


const prepareMockImplementation = (data) => {
  return () => 
  Promise.resolve({
    json: () => Promise.resolve({ 
      data: data
    }),
  })
};

const prepareMockErrorImplementation = () => {
  return () => {
    throw new Error('test-error');
  }
};

global.fetch = jest.fn();

const sampleData = [{
  id: 'test-id-1',
  title: 'test-title-1',
  parent_objective_id: '',
  category: 'test-category-1'
},{
  id: 'test-id-2',
  title: 'test-title-2',
  parent_objective_id: 'test-id-1',
},{
  id: 'test-id-3',
  title: 'test-title-3',
  parent_objective_id: 'test-id-1',
},{
  id: 'test-id-4',
  title: 'test-title-4',
  parent_objective_id: '',
  category: 'test-category-2'
},{
  id: 'test-id-5',
  title: 'test-title-5',
  parent_objective_id: 'test-id-4',
},{
  id: 'test-id-6',
  title: 'test-title-6',
  parent_objective_id: 'test-id-4',
}];

jest.mock('./Objective', () => ({selectOKR}) => <span onClick={selectOKR}>test-Objective</span>);
jest.mock('./OKRDetails', () => ({onClose}) => <span onClick={onClose}>details-dialog</span>);

afterAll(()=> {
    jest.unmock('./Objective');
});

beforeEach(() => {
  fetch.mockClear();
});

test('renders OKRs component', async () => {
  global.fetch.mockImplementation(prepareMockImplementation([]));
  render(<OKRs />);
  const okrsElement = await waitFor(() =>screen.getByText(/Objectives & Key Results/));
  expect(okrsElement).toBeInTheDocument();
});

test('renders Objectives fetched from API', async () => {
  global.fetch.mockImplementation(prepareMockImplementation(sampleData));

  render(<OKRs />);
  const objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  expect(objectiveElements.length).toBe(2);
});

test('renders error when api fetch fails', async () => {
  global.fetch.mockImplementation(prepareMockErrorImplementation());
  render(<OKRs />);
  const errorElement = await waitFor(() =>screen.getByText(/No data - test-error/));
  expect(errorElement).toBeInTheDocument();
});

test('should filter objects when category selected', async () => {
  global.fetch.mockImplementation(prepareMockImplementation(sampleData));

  render(<OKRs />);
  const categoryFilter = await waitFor(() =>screen.getByText(/test-category-1/));
  fireEvent.click(categoryFilter);
  const objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  expect(objectiveElements.length).toBe(1);
});

test('should display all objectives when filters are removed', async () => {
  global.fetch.mockImplementation(prepareMockImplementation(sampleData));

  render(<OKRs />);
  const categoryFilter = await waitFor(() =>screen.getByText(/test-category-1/));
  fireEvent.click(categoryFilter);
  let objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  expect(objectiveElements.length).toBe(1);

  fireEvent.click(categoryFilter);
  objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  expect(objectiveElements.length).toBe(2);
});

test('should open the dialog when okr is selected for details', async () => {
  global.fetch.mockImplementation(prepareMockImplementation(sampleData));

  render(<OKRs />);
  const objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  fireEvent.click(objectiveElements[0]);
  const dialogElement = screen.getByText(/details-dialog/);
  expect(dialogElement).toBeInTheDocument();
});

test('should close the dialog when onClose is called ftom dialog', async () => {
  global.fetch.mockImplementation(prepareMockImplementation(sampleData));

  render(<OKRs />);
  const objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  fireEvent.click(objectiveElements[0]);
  const dialogElement = screen.getByText(/details-dialog/);
  expect(dialogElement).toBeInTheDocument();
  fireEvent.click(dialogElement);
  expect(dialogElement).not.toBeInTheDocument();
});
