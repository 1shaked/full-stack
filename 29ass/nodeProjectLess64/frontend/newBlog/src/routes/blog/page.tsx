import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import './blogList.css'
export function BlogPage() {
    const blogQuery = trpc.blog.list.useQuery();
    if (blogQuery.isLoading) return <div>Loading...</div>
    return <div>
        <h1>blog list</h1>
        {blogQuery.data?.map((blog, index) => <NavLink className="blogList" key={index} to={`/blog/${blog.id}`}>
            {blog.title}
        </NavLink>)}
    </div>
}