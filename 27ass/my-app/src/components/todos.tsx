'use client'
import { todosAtom, todosLenAtom } from "@/state/jotai";
import { useAtom } from "jotai"
import TodoComponent from "./todo";
export default function TodosComponent () {
    const [todosList, setTodosList] = useAtom(todosAtom);
    const [todosLen, ] = useAtom(todosLenAtom);
    function addTodo () {
        setTodosList([...todosList, {title: 'example', isCompleted: true}])
    }
    // function deleteTodo(index: number) {
    //     setTodosList(
    //         todosList.filter((todo, indexTodo) => index !== indexTodo)
    //     )
    // }
    return <div>
        <h1>TODOS</h1>
        {/* {todosList.map((todo , index) => <div key={index}>
            {todo.title}
            <hr />
            <button>{todo.isCompleted ? 'complete' : 'not complete' } </button>
            <hr />
            <button onClick={() => deleteTodo(index)}>delete</button>
        </div>)} */}
        {todosList.map((todo, index) => <TodoComponent index={index}  key={index}/>)}
        <hr />
        <button onClick={addTodo}>add todo</button>
        <div>Total todos {todosList.length}</div>
        <div>total todos {todosLen}</div>
    </div>
}
