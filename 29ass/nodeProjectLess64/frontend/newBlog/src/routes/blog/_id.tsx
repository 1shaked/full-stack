import { useParams } from "react-router-dom"
import { trpc } from "../../trpc";

export function BlogIdPage() {
    const { id } = useParams();
    const id_num = parseInt(id ?? '0');
    if (isNaN(id_num) || id_num < 0) return <div>error</div>
    const blogQuery = trpc.blog.item.useQuery({ id: id_num});

    if (blogQuery.isLoading) return <div>Loading...</div>
    if (blogQuery.data?.blogData == null || blogQuery.data?.blogData == undefined) return <div>This page does not exists</div>
    return <div>
        <h1>{blogQuery.data.blogData.title} - { id } </h1>
        <p>
            {blogQuery.data.blogData.content}
        </p>
        {blogQuery.data?.blogComments.map((comment, index) => <div key={index}>
            {comment.comment}
        </div>)}
    </div>
}