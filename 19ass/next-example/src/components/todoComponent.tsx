'use client'
import { todoArrayAtom } from '@/stores/jotai/example'
import { useAtom } from 'jotai'
import '@/styles/todo.css'
export default function TodoComponent(props: {index: number}) {
    const [todoArray, setTodoArray] = useAtom(todoArrayAtom);
    function toggleIsComplete() {
        // change the is complete if true -> false,
        // if false -> true
        setTodoArray(todoArray.map((todo, index) => {
            return index === props.index ? {...todo, isComplete: !todo.isComplete } : todo
        }));
    }   
    return <div className={`todoItem ${todoArray[props.index].isComplete ? 'todoCompleted' : ''}`}>
        <div>{todoArray[props.index].title}</div> 
        <button className='todoBtn' onClick={toggleIsComplete}>{todoArray[props.index].isComplete ? 'completed' : 'need to do'}</button>
    </div>
}