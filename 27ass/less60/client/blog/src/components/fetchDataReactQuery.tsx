import { useQuery } from "react-query"

async function getProducts() {
    const res = await fetch('http://localhost:3300/products/example');
    return await res.json() as { name: string, desc: string, id: number}[]
}

export function FetchDataReactQuery() {
    const {isLoading, error , data, isError  } = 
        useQuery('productsNameOfQueryYouCanCallItWhateverYouWant', getProducts)
    if (isLoading) return <h1>loading</h1>
    if (isError) return <h1>error - {String(error)}</h1> 
    return <div>
        <h1>wow react query is awesome</h1>
        {data?.map((blog) => <div key={blog.id}>{blog.name}</div>)}
    </div>
}