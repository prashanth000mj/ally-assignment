import { fireEvent, render, screen } from '@testing-library/react';
import Objective from './Objective';

jest.mock('./KeyResult', () => () => <span>test-key-result</span>);

afterAll(()=> {
    jest.unmock('./KeyResult');
});

test('renders Objective component', () => {
    const title = 'test-title';
    render(<Objective title={title} index={123}/>);
    const titleElement = screen.getByText(/test-title/);
    const indexElement = screen.getByText(/123\./);
    expect(titleElement).toBeInTheDocument();
    expect(indexElement).toBeInTheDocument();
});

test('should render the key results passed by default', () => {
    const title = 'test-title';
    const keyResults = [{
        id: 'test-id-1',
        title: 'test-title-1',
    },{
        id: 'test-id-2',
        title: 'test-title-2',
    }];
    render(<Objective title={title} index={1} keyResults={keyResults}/>);
    const keyResultElements = screen.getAllByText(/test-key-result/);
    expect(keyResultElements.length).toBe(keyResults.length);
});

test('should colapse the key results on colapsing', () => {
    const title = 'test-title';
    render(<Objective title={title} index={1}/>);
    
    const colapseIcon = screen.getByTestId('colapse-icon');
    fireEvent.click(colapseIcon);
    expect(colapseIcon).not.toBeInTheDocument();

    const expandIcon = screen.getByTestId('expand-icon');
    fireEvent.click(expandIcon);
    expect(expandIcon).not.toBeInTheDocument();

    
});