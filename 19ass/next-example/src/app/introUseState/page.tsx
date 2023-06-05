"use client"
import  { useState } from 'react';

export default function Page () {
    const [count, setCount] = useState(0);
    return (
        <main>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
        </main>
    )
}