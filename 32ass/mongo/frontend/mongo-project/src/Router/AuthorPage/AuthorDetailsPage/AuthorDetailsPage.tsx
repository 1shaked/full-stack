import { NavLink, useParams } from "react-router-dom"
import { trpc } from "../../../trpc";

export function AuthorDetailsPage() {
    const params = useParams()
    const {id} = params;
    const author_details_query = trpc.author.details.useQuery(id ?? '')
    if (id === undefined) return <main>Error no id was provided</main>
    if (author_details_query.isLoading) return <main>Loading ... </main>
    if (author_details_query.data === undefined || author_details_query.data.authorDetails === null) return <h1>No author with this details</h1>
    return <main>
        <h1>AuthorDetailsPage</h1>
        id is 
        {/* {JSON.stringify(params, null , 2)} */}
        <div>
            {author_details_query.data.authorDetails.name}
            <p>
                {author_details_query.data.authorDetails.bio}
            </p>
        </div>
        <div>
            <h3>books</h3>
            {author_details_query.data.books.map((book , index) => <div key={index}>
                <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
            </div>)}
        </div>
        {/* <pre>
            {JSON.stringify(author_details_query.data, null, 2 )}
        </pre> */}
    </main>
}