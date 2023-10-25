import { useMutation, useQuery } from "@tanstack/react-query";
import { BlogInterface } from "./get_data/get_data_types";
import { useState } from "react";
import { useForm } from "react-hook-form";


interface AddBlogInterface {
    title: string;
    content: string;
}

export function GetDataAndAddForm() {
    const [count, setCount] = useState(0);

    const get_data_server_react_query = useQuery({queryKey: ['get_data_server', count], queryFn: async () => {
        const response = await fetch(`http://localhost:3300/blog/item/${count}`); // getting the server response 
        const data = await response.json() // getting the data from the response
        console.log(count)
        return data as BlogInterface;
    }, }, );
    
    const {register, handleSubmit}  = useForm<AddBlogInterface>();
    const blogAddMutation = useMutation( {
        mutationFn: async (data: AddBlogInterface) => { // the function that will add the data
            // send a message to the server to add the blog
            const response = await fetch('http://localhost:3300/blog/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            return await response.json() as BlogInterface;
        },
        onSuccess(data, variables, context) {
            console.log({data, variables, context});
            get_data_server_react_query.refetch()
        },
    } );
    // const form = useForm<AddBlogInterface>();
    // form.
    async function onSubmit( data : AddBlogInterface) {
        // send a message to the server to add the blog
        blogAddMutation.mutate(data);
        // refetch
    }

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
        <div>
            <h2>form</h2>
            <form onSubmit={handleSubmit( onSubmit )}>
                <input type="text" placeholder="title" {...register('title')} />
                <input type="text" placeholder="content" {...register('content')} />
                <button type="submit">create blog</button>
            </form>
        </div>
    </div>);
}