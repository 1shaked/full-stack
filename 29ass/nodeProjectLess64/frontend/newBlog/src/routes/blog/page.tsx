import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import './blogList.css'
import { useAtomValue } from "jotai";
import { UserInfoAtom } from "../../state/userState";
// import { ReduxCounter } from "../../components/redux_counter";
// import { ReduxStringArr } from "../../components/redux_string_arr";
// import { ReduxPosts } from "../../components/redux_posts";
export function BlogPage() {
    const user_info = useAtomValue(UserInfoAtom)
    const blogQuery = trpc.blog.list.useQuery();
    
    const deleteBlogMutation = trpc.blog.delete.useMutation({
        onSuccess: () => {
            blogQuery.refetch();
        }
    })
    if (blogQuery.isLoading) return <div>Loading...</div>
    return <div>
        <h1>blog list</h1>
        user = {JSON.stringify(user_info, null , 2)}
        {/* <ReduxPosts /> */}
        {/* <ReduxCounter /> */}
        {/* <ReduxStringArr /> */}
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