import { PostsInterface } from "@/types/post"
import { sleep } from "@/utils/sleep"
async function getData() {
    await sleep(2);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    
    console.log(res);
    const posts = (await res.json()) as PostsInterface[]
    return posts;
}
export default async function Page() {
    const data = await  getData();
    console.log(data);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post, index) => <div key={index}>{post.title}</div>)}
            </ul>
        </div>
    );

}