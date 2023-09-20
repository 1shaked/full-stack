import { useEffect } from "react";
import { useQuery } from "react-query";

async function getBlogList() {
    const res = await fetch('http://localhost:3300/blog/list');
    const data = await res.json();
    return data as {id: number, title: string, content: string;}[];
}

async function addData() {
    const res = await fetch('http://localhost:3300/blog/add', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            title: 'g',
            content: 'w'
        })
    });
    console.log(res)
}

export function BlogList () {
    const {isLoading, isError, data: blogsList} = useQuery('BlogList' , getBlogList);
    
    useEffect( () => {
        addData()
    }, []);
    if (isLoading) return <h1>loading...</h1>
    if (isError) return <h1>error...</h1>
    return <>
        <h1>Blog list</h1>
        <div>
            {blogsList?.map((blog, index) => <div key={index}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
            </div>)}
        </div>
    </>
}