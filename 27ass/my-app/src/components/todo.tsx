'use client'
import { todosAtom } from "@/state/jotai";
import { useAtom } from "jotai"

export default function TodoComponent({index}: { index: number}) {
    const [todosList , setTodosList] = useAtom(todosAtom);
    function deleteTodo() {
        setTodosList(
            todosList.filter((todo, indexTodo) => index !== indexTodo)
        )
    }
    function setTodoTitle(text : string) {
        setTodosList(
            todosList.map((todo, todoIndex) => {
                if (todoIndex == index) {
                    todo.title = text;
                }
                return todo;
            })
        )
    }
    return <div>
        {todosList[index].title}
    <input type="text" onChange={(e) => setTodoTitle(e.target.value)} value={todosList[index].title} />
    <hr />
    <button>{todosList[index].isCompleted ? 'complete' : 'not complete' } </button>
    <hr />
    <button onClick={deleteTodo}>delete</button>
</div>
}