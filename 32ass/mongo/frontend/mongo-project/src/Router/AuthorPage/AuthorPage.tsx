import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"

export function AuthorPage() {
    const author_query = trpc.author.list.useQuery();
    const delete_author_mutation = trpc.author.delete.useMutation({
        onSuccess: () => {
            author_query.refetch();
        }
    });
    if (author_query.isLoading) return <div>Loading ... </div>
    return <main>
        <h1>AuthorPage page</h1>

        <div>
            {delete_author_mutation.isLoading ? <></> : <>
                {author_query.data?.map((author, index) => <div key={index}>
                    {/* {JSON.stringify(author, null , 2 )} */}
                    <h2>
                        <NavLink to={`/author/${author.id}`}>{author.name}</NavLink>
                    </h2>
                    <p>
                        {author.bio}
                    </p>
                    <button onClick={() => {
                        console.log('button clicked ' , author.id)
                        delete_author_mutation.mutate(author.id)
                    }}>DELETE</button>
                    <hr />
                </div>)}
            </>}
            
        </div>
    </main>
}