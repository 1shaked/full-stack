import { useSignal } from "@preact/signals-react";
import { useMemo, useState } from "react"


export function MemoExample () {

    console.count('MemoExample');
    const countSignal = useSignal(0)
    const [todo, setTodo] = useState([5 , 3 , 2 , 1]);
    const [count, setCount] = useState(0);
    const todo_total = useMemo(() => {
        console.count('memo func run')

        return todo.reduce((acc, current) => {
            for (let i = 0; i < 100000000; i++) {
    
            }
            acc = current + acc;
            return acc;
        }, 0);
    }, [todo.length])
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>-</button>

        <button onClick={() => {
            setTodo([...todo, count])
        }}>add to do</button>
        <pre>{JSON.stringify(todo, null , 2)}</pre>
        <h2>todo total {todo_total}</h2>

        <button onClick={() => countSignal.value = countSignal.value++}>+</button>
        {countSignal.value}
    </>
}