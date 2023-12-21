import ClientDataFetch from "@/components/clientDataFetch";
import { PostsInterface } from "@/types/post"
import { sleep } from "@/utils/sleep"
import Link from "next/link";
async function getData(id: number) {
    await sleep(2);
    console.log(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const localRes = await fetch(`http://localhost:3000/api/hello/`);
    console.log(localRes);
    console.log(localRes.body)
    // console.log(await localRes.json())
    const posts = (await res.json()) as PostsInterface
    return posts;
}
export default async function Page({params}: { params: {postId: string} }) {
    console.log(params)
    if (parseInt(params.postId).toString() == 'NaN'){
        throw 'Value error';
    }
    const data = await  getData(parseInt(params.postId));
    console.log(data);
    return (
        <div>
            <h1>Posts</h1>
            <section>
               <h2>id -{data.id}</h2>
               <h2>user id - {data.userId}</h2>
               <hr />
               <h2>title - {data.title}</h2>
               <hr />
               <h2>body - {data.body}</h2>
            </section>
            <section>
                <Link href={'/dataFetch/' + (data.id + 1)}>next</Link>
                <hr />
                <Link href={'/dataFetch/' + (data.id - 1)}>prev</Link>
            </section>
            <ClientDataFetch />
        </div>
    );

}