import { TodoInter } from "../types/todoType";

export default function Todo (props: TodoInter) {
return <>
        <h2>{props.title} - </h2>
        <p>{props.isCompleted}</p>
    </>
}