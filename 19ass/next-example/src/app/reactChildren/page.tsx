import { ReactNode } from "react"
interface Props {
    children: ReactNode;
    n: number;
    node: ReactNode;
}
export default function Page() {
    return <>
        <div>this is the page</div>
        <ChildrenComponent n={10} node={<h2>wow</h2>}>
            <p>This is a inside text p tag</p>
        </ChildrenComponent>
    </>
}

function ChildrenComponent({children, n, node}: Props) {
    return <>
        <h2>Here will be children n = {n}</h2>
        {children}
        <hr />
        {node}
    </>
}