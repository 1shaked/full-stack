'use client'
import { useState, useEffect } from 'react'
import { PostsInterface } from "@/types/post"
import { sleep } from "@/utils/sleep"

export default function Profile() {
  const [data, setData] = useState<PostsInterface[]>([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then(async (data) => {
        await sleep(2);
        setData(data as PostsInterface[])
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div>
      <h1>fetch on client</h1>
      {data.map((post, index) => <div key={index}>{post.title}</div>)}
    </div>
  )
}