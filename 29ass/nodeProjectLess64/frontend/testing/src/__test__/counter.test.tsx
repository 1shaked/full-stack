import { useState } from "react";
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

function Counter () {
    const [count , setCount ] = useState(0);

    return <>
        <div data-testid='counter'>
            {count}
        </div>
        <button onClick={() => {
            setCount(count + 1)
        }}>+</button>
    </>
}


test('testing counter' , () => {
    render(<Counter />);
    const text = screen.getByTestId('counter').textContent;
    // console.log(text);
    expect(text).toBe('0')
})