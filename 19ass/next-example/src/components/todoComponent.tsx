'use client'
import { todoArrayAtom } from '@/stores/jotai/example'
import { useAtom } from 'jotai'
import '@/styles/todo.css'
export default function TodoComponent(props: {index: number}) {
    const [todoArray, setTodoArray] = useAtom(todoArrayAtom);
    function toggleIsComplete() {
        // change the is complete if true -> false,
        // if false -> true
        setTodoArray([]);
    }   
    return <div className='todoItem'>
        <div>{todoArray[props.index].title}</div> 
        <button className='todoBtn' onClick={toggleIsComplete}>{todoArray[props.index].isComplete ? 'completed' : 'need to do'}</button>
    </div>
}