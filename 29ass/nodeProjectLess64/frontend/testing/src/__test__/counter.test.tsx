import { useState } from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// import userEvent from '@testing-library/user-event'

function Counter () {
    const [count , setCount ] = useState(0);

    return <>
        <div data-testid='counter'>
            {count}
        </div>
        <button data-testid='increment-button' onClick={() => {
            setCount(count + 1)
        }}>+</button>
    </>
}


test('testing counter' , () => {
    render(<Counter />);
    const text = screen.getByTestId('counter').textContent;
    // console.log(text);
    expect(text).toBe('0');
})

test('increment by one counter' , () => {
    render(<Counter />);
    const increment_button = screen.getByTestId('increment-button');
    userEvent.click(increment_button);
    const text = screen.getByTestId('counter').textContent;
    expect(text).toContain('1');
});