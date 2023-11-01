import { useState } from "react";
import { todo, todoCountChar } from "./stateTodo";



export function IntroSignals() {
    const [todoText, setTodoText] = useState('');
    return <div>
        <div>
            <input type="text" onChange={(e) => setTodoText(e.target.value)} />
            <button onClick={() => {
                todo.value = [...todo.value, { text: todoText }]
            }}>add todo</button>
        </div>
        signals
        {todo.value.map((todo, index) => <p key={index}> {todo.text} </p>)}
        <h3>todo count - {todoCountChar}</h3>
    </div>
}
