import { todosSignal } from "./signalData";


export function UnrelatedFile() {
    return <div>
        {todosSignal.value.map((item, index) => <p key={index}> {item.text}</p>)}
    </div>
}