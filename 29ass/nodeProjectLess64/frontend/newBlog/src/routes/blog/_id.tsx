import { useParams } from "react-router-dom"
import { trpc } from "../../trpc";
import { useForm } from "react-hook-form";

interface CommentFormInterface {
    comment: string;
}
export function BlogIdPage() {
    const { id } = useParams();
    const id_num = parseInt(id ?? '0');
    if (isNaN(id_num) || id_num < 0) return <div>error</div>
    const { register,handleSubmit} = useForm<CommentFormInterface>();
    const blogQuery = trpc.blog.item.useQuery({ id: id_num});
    const commentCreateMut = trpc.blog.comment.create.useMutation({
        onSuccess: () => {
            alert('comment added');
            blogQuery.refetch();
        }
    });
    if (blogQuery.isLoading) return <div>Loading...</div>
    if (blogQuery.data?.blogData == null || blogQuery.data?.blogData == undefined) return <div>This page does not exists</div>
    return <div>
        <h1>{blogQuery.data.blogData.title} - { id } </h1>
        <p>
            {blogQuery.data.blogData.content}
        </p>

        <form onSubmit={handleSubmit( (data) => {
            commentCreateMut.mutate({ ...data, blogId: id_num})
        })}>
            <input type="text" placeholder="comment" {...register('comment')} />
            <button type="submit">add comment</button>
        </form>
        {blogQuery.data?.blogComments.map((comment, index) => <div key={index}>
            {comment.comment}
        </div>)}
    </div>
}