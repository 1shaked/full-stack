"use client"
// import PropsComponent from '@/components/propsCom';
import  { useState } from 'react';
import NameOfComponent from '@/components/exampleComponent'

export default function Page () {
    const [count, setCount] = useState(0);
    return (
        <main>
            <p>count: {count}</p>
            <NameOfComponent 
                number={count}
            />
            <button onClick={() => setCount(count + 1)}>add</button>
            {/* <PropsComponent age={count} /> */}
        </main>
    )
}