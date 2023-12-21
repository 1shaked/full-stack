import { useState } from "react";


export function TodosExample() {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('')
    return <div>
        <h2>todos list</h2>
        {todos.map((text, index) => <div key={index}>text</div>)}
        <hr />
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={() => setTodos([...todos, newTodo])}> click me!</button>
    </div>
}