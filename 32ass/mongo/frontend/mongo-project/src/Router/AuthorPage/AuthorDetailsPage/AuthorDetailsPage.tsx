import { useParams } from "react-router-dom"
import { trpc } from "../../../trpc";

export function AuthorDetailsPage() {
    const params = useParams()
    const {id} = params;
    const author_details = trpc.author.details.useQuery(id ?? '')
    if (id === undefined) return <main>Error no id was provided</main>
    return <main>
        <h1>AuthorDetailsPage</h1>
        id is {JSON.stringify(params, null , 2)}
        <pre>
            {JSON.stringify(author_details.data, null, 2 )}
        </pre>
    </main>
}