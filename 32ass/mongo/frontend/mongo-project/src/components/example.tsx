import { trpc } from "../trpc";

export function Example() {
    const post_query = trpc.posts.useQuery();
    if (post_query.isLoading) return <div>loading</div>
    return <div>
        <pre>
            {JSON.stringify(post_query.data, null , 2)}
        </pre>
    </div>

}