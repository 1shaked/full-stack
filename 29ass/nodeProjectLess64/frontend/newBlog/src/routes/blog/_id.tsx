import { useParams } from "react-router-dom"

export function BlogIdPage() {
    const { id } = useParams()
    return <div>
        <h1>blog details - { id } </h1>
    </div>
}