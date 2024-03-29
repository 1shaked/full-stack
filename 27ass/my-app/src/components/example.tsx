'use client'
import { useEffect, useState } from "react"
import PropsComponent from "./propsComponent";

export default function Example() {
    const [count, setCount]= useState(0);
    useEffect( () => {
        setCount(10)
    }, [])
    return <div>
        <h1>this is a component {count}</h1>
        <button onClick={() => setCount(count + 1)}>+ increment</button>
        <PropsComponent name="wow" age={count} />
    </div>
}