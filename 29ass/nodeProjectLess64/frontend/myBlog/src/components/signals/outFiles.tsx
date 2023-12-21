

import { useForm } from "react-hook-form";
import { SignalTodoInterface } from "./interfaceExampleTodo";
import { Signal } from "@preact/signals-react";


export function IntroSignalOutFile({todosSignal}: {todosSignal: Signal<SignalTodoInterface[]>}) {
    const {handleSubmit, register} = useForm<SignalTodoInterface>()


    return <div>
        {todosSignal.value.map((todo, index) => <div key={index}>
            {todo.text} - {index}
        </div>)}
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
            todosSignal.value = [...todosSignal.value, data]
            console.log(todosSignal)
        })}>
            <input type="text" {...register('text')} />
            <button type="submit">add todo</button>
        </form>


    </div>
}