import { NavLink, useParams } from "react-router-dom"
import { trpc } from "../../../trpc";
import Dialog from '@mui/material/Dialog';
import { useForm } from "react-hook-form";
import { useState } from "react";
interface BookDetailsInterface {
    id: string;
    title: string;
    authorId: string;
    description: string;
}
export function BookDetailsPage() {
    const params = useParams()
    const id = params.id ?? '';
    const book_details_query = trpc.book.bookDetails.useQuery(id);
    const [is_edit_open, set_is_edit_open] = useState(false)
    const {register, handleSubmit, reset} = useForm<BookDetailsInterface>({
        defaultValues: {...book_details_query.data , description: book_details_query.data?.description ?? '', } 
    });
    const authors_details_query = trpc.author.list.useQuery()
    const book_edit_mutation = trpc.book.bookEdit.useMutation({
        onSuccess: () => {
            console.log('refetch data')
            book_details_query.refetch()
        }
    })
    if (book_details_query.isLoading) return <div>Loading...</div>
    if (book_details_query.data === null || book_details_query.data === undefined) return <div>No book with this id</div>
    return <main>
        <h1> {book_details_query.data.title}</h1>
           
        <p>
            {book_details_query.data.description}
        </p>
        <h5>{book_details_query.data.publishedAt}</h5>
        <NavLink to={`/author/${book_details_query.data.authorId}`}>{book_details_query.data.authorId}</NavLink>
        <Dialog open={is_edit_open}>
            <button onClick={() => set_is_edit_open(false)}>close</button>
            <h1>wow</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
                book_edit_mutation.mutate({...data, id: book_details_query?.data?.id ?? ''})
            })}>
                <input type="text" {...register('title')} />
                <input type="text" {...register('description')} />
                <select {...register('authorId')}>
                {authors_details_query?.data?.map((author, index) => <option key={index} value={author.id}>
                    {author.name}
                </option>)}
            </select>
            <button type="submit">update data</button>
            </form>
        </Dialog>
        <button onClick={() => {
            set_is_edit_open(true);
            reset({...book_details_query.data , description: book_details_query.data?.description ?? '', })
        }}>edit</button>
    </main>
}