import PostComponent from "@/components/post";
import { PostInter } from "@/types/post";

export function sleep(seconds: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved');
      }, seconds * 1000);
    });
  }

export default async function Page() {
    await sleep(2)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = (await res.json()) as PostInter[];

    return <main>
        <h1>next fetch page </h1>
        
        {data.map((post, index) => <div key={index}>
            {post.title}
            <PostComponent post={post} />
        </div>)}
    </main>
}