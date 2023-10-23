import { useQuery } from "@tanstack/react-query";


export function GetData() {
    const get_data_server_react_query = useQuery({queryKey: ['get_data_server'], queryFn: async () => {
        const response = await fetch('http://localhost:3300/blog/item/1'); // getting the server response 
        const data = await response.json() // getting the data from the response
        return data;
    }});
    if (get_data_server_react_query.isLoading) return <div>Loading...</div>
    
    return (<div>
        <h1>get data</h1>
        <div>
            {JSON.stringify(get_data_server_react_query.data)}
        </div>
    </div>);
}