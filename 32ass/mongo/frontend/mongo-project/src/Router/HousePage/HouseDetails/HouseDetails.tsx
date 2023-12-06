import { useParams } from "react-router-dom"
import { trpc } from "../../../trpc"


export function HouseDetailsPage () {
    const {id} = useParams();
    const home_details_query = trpc.home.get.useQuery(id ?? '');
    if (home_details_query.isLoading) return <h1>Loading...</h1>
    if (home_details_query.data === undefined) return <h1>Page does not exist</h1>
    return <main>
        <h1>House Details</h1>
        {home_details_query.data.address}
        <hr />
        {home_details_query.data.city}
        <hr />
        personId - {home_details_query.data.persons.map((person, index) => <pre key={index}>
            {JSON.stringify(person, null , 2)}
        </pre>)}
    </main>
}


