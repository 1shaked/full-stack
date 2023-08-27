import { ReactElement } from "react";

interface HOCInter {
    n: number;
    children: ReactElement
}
export default function HOCExample(props: HOCInter) {

    return <>
        <h1>HOC</h1>
        here put example
        {props.children}
        <p>{props.n}</p>
    </>
}