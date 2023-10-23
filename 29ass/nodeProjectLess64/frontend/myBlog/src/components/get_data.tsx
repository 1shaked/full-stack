import { useQuery } from "@tanstack/react-query";
import { BlogInterface } from "./get_data/get_data_types";
import { useState } from "react";


export function GetData() {
    const [count, setCount] = useState(0)
    const get_data_server_react_query = useQuery({queryKey: ['get_data_server', count], queryFn: async () => {
        const response = await fetch(`http://localhost:3300/blog/item/${count}`); // getting the server response 
        const data = await response.json() // getting the data from the response
        console.log(count)
        return data as BlogInterface;
    }});
    if (get_data_server_react_query.isLoading || get_data_server_react_query.data === undefined) return <div>Loading...</div>
    
    return (<div>
        <h1>get data {count}</h1>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
        <button onClick={() => setCount(count - 1)}>count - 1</button>
        <div>
            {get_data_server_react_query?.data?.data?.title ?? 'no title'}
            <hr />
            {get_data_server_react_query?.data?.data?.content ?? 'no content'}
        </div>
    </div>);
}