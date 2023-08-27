interface HOCInter {
    n: number;
    component: React.FC; 
}
export default function HOCExample(props: HOCInter) {

    return <>
        <h1>HOC</h1>
        here put example
        <props.component />
        <p>{props.n}</p>
    </>
}