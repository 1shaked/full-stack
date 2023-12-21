'use client'
import {useZustandCounter} from '@/stores/zustand/classExample'
import { useState } from 'react';

export default function ZustandClassExample() {
    const [num, setNum] = useState<number>(0);
    const counterObject = useZustandCounter();
    return <>
        <h3>This is Zustand class example</h3>
        <h4>Counter value is {counterObject.count}</h4>
        {/* <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value || '0'))} /> */}
        <input type="number" value={counterObject.by} onChange={(e) => counterObject.setBy(parseInt(e.target.value || '0'))} />
        <button onClick={() => counterObject.incrementBy(counterObject.by)}>INCREMENT BY 1</button>
        <button onClick={() => counterObject.decrementBy(counterObject.by)}>DECREMENT BY 1</button>
        {/* <button onClick={() => counterObject.incrementBy(num)}>INCREMENT BY 1</button>
        <button onClick={() => counterObject.decrementBy(num)}>DECREMENT BY 1</button>
         */}
    </>
}