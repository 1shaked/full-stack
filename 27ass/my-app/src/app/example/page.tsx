'use client'

import { useEffect, useState } from "react";

interface PostInter {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Page() {
    const [postList, setPostList] = useState<PostInter[]>([]);
    async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await res.json()
        setPostList(data);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return <main>
        <h1>example page </h1>
        
        {postList.map((post, index) => <div key={index}>
            {post.title}
        </div>)}
    </main>
}