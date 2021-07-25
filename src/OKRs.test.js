import { render, screen,waitFor } from '@testing-library/react';
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

jest.mock('./Objective', () => () => <span>test-Objective</span>);

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
  global.fetch.mockImplementation(prepareMockImplementation([{
    id: 'test-id-1',
    title: 'test-title-1',
    parent_objective_id: '',
  },{
    id: 'test-id-2',
    title: 'test-title-2',
    parent_objective_id: 'test-id-1',
  },{
    id: 'test-id-3',
    title: 'test-title-3',
    parent_objective_id: 'test-id-1',
  }]));

  render(<OKRs />);
  const objectiveElements = await waitFor(() =>screen.getAllByText(/test-Objective/));
  expect(objectiveElements.length).toBe(1);
});

test('renders error when api fetch fails', async () => {
  global.fetch.mockImplementation(prepareMockErrorImplementation());
  render(<OKRs />);
  const errorElement = await waitFor(() =>screen.getByText(/No data - test-error/));
  expect(errorElement).toBeInTheDocument();
});