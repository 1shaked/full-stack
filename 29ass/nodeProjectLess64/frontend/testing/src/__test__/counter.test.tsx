import { useState } from "react";
import { render, screen, fireEvent } from '@testing-library/react'

function Counter () {
    const [count , setCount ] = useState(0);

    return <>
        <div data-testid='counter'>
            {count}
        </div>
        <button data-testid='increment-button' onClick={() => {
            setCount(count + 1)
        }}>+</button>
        <button data-testid='decrement-button' onClick={() => {
            setCount(count - 1)
        }}>-</button>
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
    fireEvent.click(increment_button);
    const text = screen.getByTestId('counter').textContent;
    expect(text).toContain('1');
});

test('testing multiple clicks' , () => {
    render(<Counter />);

    let count = 0;
    
    // get random number + 1 or -1
    const change_by = Math.random() < 0.5 ? 1 : -1;
    
    const increment_button = screen.getByTestId('increment-button');
    const decrement_button = screen.getByTestId('decrement-button');
    if (change_by === 1) fireEvent.click(increment_button);
    else fireEvent.click(decrement_button);
    count = count + change_by;
    const text = screen.getByTestId('counter').textContent;
    console.log(text)
    expect(text).toBe(count.toString())
})