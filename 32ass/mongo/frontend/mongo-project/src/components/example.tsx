import { trpc } from "../trpc";

export function Example() {
    const author_query = trpc.author.list.useQuery()
    if (author_query.isLoading) return <div>loading...</div>
    return <div>
        <pre>
            {JSON.stringify(author_query.data, null , 2)}
        </pre>
    </div>

}