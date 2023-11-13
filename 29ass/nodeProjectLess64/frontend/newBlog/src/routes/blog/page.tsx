import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import './blogList.css'
export function BlogPage() {
    const blogQuery = trpc.blog.list.useQuery();
    const deleteBlogMutation = trpc.blog.delete.useMutation({
        onSuccess: () => {
            blogQuery.refetch();
        }
    })
    if (blogQuery.isLoading) return <div>Loading...</div>
    return <div>
        <h1>blog list</h1>
        <NavLink to={'/blog/add'} className='AddBlogLink'>add blog</NavLink>
        <hr />
        {blogQuery.data?.map((blog, index) => <div key={index} className='blogListRow'>
            <NavLink className="blogList" to={`/blog/${blog.id}`}>
                {blog.title}
            </NavLink>
            <button onClick={() => deleteBlogMutation.mutate({id: blog.id})} className='DeleteBlogBtn'>delete blog</button>
        </div>)}
        
    </div>
}
/**
 * 1. add blog button
 * 2. create a new blog page 
 *      - configure the router for the route /blog/add
 *      - create the types for the form to add the blog
 *      - send the data 
 * 3. create an trpc api end point for creating a new blog
 */