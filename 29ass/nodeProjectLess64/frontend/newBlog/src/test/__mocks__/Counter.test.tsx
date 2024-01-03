// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Counter from '../../components/testing/Counter';

describe('Counter Component', () => {
  test('initially, the count is 0', () => {
    render(<Counter />);
    // const countElement = screen.getByTestId('count');
    screen.getByText('0')
    // expect(countElement).toHaveTextContent('0');
  });

  test('increment button increases the count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    screen.getByText('1')
    // const countElement = screen.getByTestId('count');
    // expect(countElement).toHaveTextContent('1');
  });

  test('decrement button decreases the count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    screen.getByText('-1')
    // const countElement = screen.getByTestId('count');
    // expect(countElement).toHaveTextContent('-1');
  });
});
