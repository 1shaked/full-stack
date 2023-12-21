import { useQuery } from "@tanstack/react-query"
import {z} from 'zod';

const PostItemZod = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

const PostArrayZod = z.array(PostItemZod);

// type PostArrayType = z.infer<typeof PostArrayZod>

export function PostsList() {
    const post_list_query = useQuery({
        queryKey: ['post_list_query'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const data = await response.json() ;
            const res_zod = PostArrayZod.safeParse(data);
            if (res_zod.success) {
                return res_zod.data
            }
            console.log(res_zod.error);
            return [];

        },
        // refetchInterval: 3000,
    }, );
    if (post_list_query.isLoading) return <div>Loading ... </div>
    return <>
        <h1>posts list</h1>
        {post_list_query.data?.map((post, index) => <div key={index}>
            {post.title}
        </div>)}
    </>
}