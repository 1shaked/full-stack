import { useParams } from "react-router-dom"

export function BookDetailsPage() {
    const params = useParams()
    const id = params.id ?? '';
    return <main>
        <h1>BookDetailsPage - {id}</h1>
    </main>
}