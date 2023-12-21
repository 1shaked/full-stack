import { signal, useComputed, useSignal } from "@preact/signals-react";
import { useForm } from "react-hook-form";

interface SignalTodoInterface {
    text: string;
}

export function IntroSignal() {
    const {handleSubmit, register} = useForm<SignalTodoInterface>()
    const todosSignal = useSignal<SignalTodoInterface[]>([
        { text: "Buy groceries" },
        { text: "Walk the dog" },
      ]);

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