import { useForm } from "react-hook-form";
import { trpc } from "../../trpc";

interface AddBlogInterface {
    title: string;
    content: string;
}
export function AddBlog() {
    const {handleSubmit, register} = useForm<AddBlogInterface>();
    const addBlogMutation = trpc.blog.create.useMutation({
        onSuccess: (data) => {
            alert(`blog was added ${data.title} with the id ${data.id}`)
        },
        onError: (error) => {
            // call the api to report the error;
            alert(error.message);
            console.log(error);
        }
    });
    return <div>
        <form onSubmit={handleSubmit( (data) => addBlogMutation.mutate(data) )}>
            <input id="add_blog_title" type="text" placeholder="title" {...register('title')} />
            <input id="add_blog_content" type="text" placeholder="content" {...register('content')} />
            <button id="add_blog_submit" type="submit">add blog</button>
        </form>
    </div>
}