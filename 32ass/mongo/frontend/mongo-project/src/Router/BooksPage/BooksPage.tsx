import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import { useForm } from "react-hook-form";
interface BookInterface {
    title: string;
    description: string;
    authorId:string;
}

export function BooksPage() {
    const book_list_query = trpc.book.booksList.useQuery();
    const {register, handleSubmit} = useForm<BookInterface>();
    const authors_details_query = trpc.author.list.useQuery()
    const book_add_mutation = trpc.book.bookCreate.useMutation({
        onSuccess: () => {
            book_list_query.refetch();
        }
    })
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
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
            debugger;
            book_add_mutation.mutate(data)
        })}>
            <input type="text" {...register('title')} placeholder="title" />
            <input type="text" {...register('description')} placeholder="description" />
            {/* <input type="text" {...register('authorId')} placeholder="authorId" /> */}
            <select {...register('authorId')}>
                {authors_details_query?.data?.map((author, index) => <option key={index} value={author.id}>
                    {author.name}
                </option>)}
            </select>
            <button type="submit">send data</button>
        </form>
    </main>
}