import { ReactNode } from "react";

interface ForComponentInterface<T> {
    array: T[];
    nodeComponent: ReactNode; // <div></div>
}
export default function ForComponent<G>(props: ForComponentInterface<G>) {
    return <div>
        {props.nodeComponent}
        {props.array.map((item, index) => <div key={index}>The index is - {index}</div>)}
    </div>
}