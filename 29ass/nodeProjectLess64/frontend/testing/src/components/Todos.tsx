import { useState } from "react"

export function Todos () {
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState('')
    return <>
        {todos.map((todo , index) => <div key={index} data-testid={index}>
            {todo}
        </div>)}

        <input data-testid='input-new-todo' type="text" name="new-todo" onChange={(e) => setText(e.target.value)} />
        <button data-testid='button-to-add-new-todo' onClick={() => setTodos([...todos, text])}>add todo</button>
    </>
}