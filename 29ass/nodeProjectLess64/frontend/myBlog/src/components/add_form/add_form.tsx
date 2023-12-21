import { useForm } from "react-hook-form";


interface AddBlogInterface {
    title: string;
    content: string;
}
export function AddForm() {
    const {register, handleSubmit}  = useForm<AddBlogInterface>();
    // const form = useForm<AddBlogInterface>();
    // form.
    async function onSubmit( data : AddBlogInterface) {
        // send a message to the server to add the blog
        const response = await fetch('http://localhost:3300/blog/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const serverData = await response.json()
        console.log({data, response,serverData});
    }

    return (
        <div>
            <h2>form</h2>
            <form onSubmit={handleSubmit( onSubmit )}>
                <input type="text" placeholder="title" {...register('title')} />
                <input type="text" placeholder="content" {...register('content')} />
                <button type="submit">create blog</button>
            </form>
        </div>
    )
}