import { signal } from "@preact/signals-react"
import { useState } from "react";

interface TodoInterface {
    text: string;
}

const todo = signal<TodoInterface[]>([
    { text: 'x'},
    { text: 'y'},
    { text: 'z'},
]);

export function IntroSignals() {
    const [todoText, setTodoText] = useState('');
    return <div>
        <div>
            {todoText}
            <input type="text" onChange={(e) => setTodoText(e.target.value)} />
            <button onClick={() => {
                todo.value = [...todo.value, { text: todoText }]
            }}>add todo</button>
        </div>
        signals
        {todo.value.map((todo, index) => <p key={index}> {todo.text} </p>)}
    </div>
}