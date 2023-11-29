import { trpc } from "../../trpc"

export function AuthorPage() {
    const author_query = trpc.author.list.useQuery();
    if (author_query.isLoading) return <div>Loading ... </div>
    return <main>
        <h1>AuthorPage page</h1>
        <div>
            {author_query.data?.map((author, index) => <div key={index}>
                {JSON.stringify(author, null , 2 )}
                <hr />
            </div>)}
        </div>
    </main>
}