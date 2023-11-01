import { GetDataAndAddForm } from "../components/get_data_and_add_form";
import { todo, todoCountChar } from "../components/signalsClass/stateTodo";
import { TrpcExample } from "../components/trpc/trpcExample";

export function HomePage() {
    return <div>
        <TrpcExample />
        home page
        <GetDataAndAddForm />
        {todo.value.map((todo, index) => <p key={index}> {todo.text} </p>)}
        <h3>todo count - {todoCountChar}</h3>
    </div>
}