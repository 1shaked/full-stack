// // Counter.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Counter from '../../components/testing/Counter';

// describe('Counter Component', () => {
//   test('initially, the count is 0', () => {
//     const counter = render(<Counter />);
//     const countElement = screen.getByTestId('count');
//     expect(countElement).toHaveTextContent('0');
//   });

//   test('increment button increases the count', () => {
//     render(<Counter />);
//     const incrementButton = screen.getByText('Increment');
//     fireEvent.click(incrementButton);
//     const countElement = screen.getByTestId('count');
//     expect(countElement).toHaveTextContent('1');
//   });

//   test('decrement button decreases the count', () => {
//     render(<Counter />);
//     const decrementButton = screen.getByText('Decrement');
//     fireEvent.click(decrementButton);
//     const countElement = screen.getByTestId('count');
//     expect(countElement).toHaveTextContent('-1');
//   });
// });
