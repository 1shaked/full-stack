import { useState } from "react";

export default function CounterComponent () {
    const [count, setCount] = useState(0);

    return <>
        <p>count is {count}</p>
        <button onClick={() => setCount(count + 1)}>+ plus </button>
        <button onClick={() => setCount(count - 1)}>- minus</button>
    </>
}