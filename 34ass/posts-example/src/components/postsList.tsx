import { useQuery } from "@tanstack/react-query"

interface PostInterface {
    userId: number,
    id: number,
    title: string,
    body: string
    
}

export function PostsList() {
    const post_list_query = useQuery({
        queryKey: ['post_list_query'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const data = await response.json() as PostInterface[];
            return data;
        },
        refetchInterval: 3000,
        
    }, );
    if (post_list_query.isLoading) return <div>Loading ... </div>
    return <>
        <h1>posts list</h1>
        {post_list_query.data?.map((post, index) => <div key={index}>
            {post.title}
        </div>)}
    </>
}