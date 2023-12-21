'use client'
import { PostInter } from "@/types/post";
import { useState } from "react";

export default function PostComponent({post}: {post : PostInter}) {
    const [count , setCount ] = useState(post.id)
    return <div>
        {post.title}
        <hr />
        post.id {post.id}
        <hr />
        count is {count} 
        <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
}
