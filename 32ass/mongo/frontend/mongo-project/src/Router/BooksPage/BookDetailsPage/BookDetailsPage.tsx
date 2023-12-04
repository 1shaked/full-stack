import { useParams } from "react-router-dom"
import { trpc } from "../../../trpc";

export function BookDetailsPage() {
    const params = useParams()
    const id = params.id ?? '';
    const book_details_query = trpc.book.bookDetails.useQuery(id);
    if (book_details_query.isLoading) return <div>Loading...</div>
    if (book_details_query.data === null || book_details_query.data === undefined) return <div>No book with this id</div>
    return <main>
        <h1> {book_details_query.data.title} - {id}</h1>
           
        <p>
            {book_details_query.data.description}
        </p>
        {book_details_query.data.publishedAt}

    </main>
}