import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"

export function BooksPage() {
    const book_list_query = trpc.book.booksList.useQuery();
    if (book_list_query.isLoading || book_list_query.data === undefined) return <div>Loading...</div> 
    return <main>
        <h1>books page</h1>
        {book_list_query.data.map((book, index) => <div key={index}>
            <h2>
                <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
            </h2>
            <p>
                {book.description}
            </p>
        </div>)}
        {book_list_query.data.length === 0 ? <h2>no books</h2> : <></>}
    </main>
}