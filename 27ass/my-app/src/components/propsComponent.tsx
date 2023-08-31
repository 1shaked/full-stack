import { PropsInter } from "@/types/props"
export default function PropsComponent(props: PropsInter) {
    return <div>
        <h2>props - {props.age}</h2>
        <h2>props name - {props.name}</h2>
    </div>
}