import { useParams } from "react-router-dom"
import { trpc } from "../../../trpc";

export function PersonsDetailsPage() {
    const { id  } = useParams();
    const person_query = trpc.person.get.useQuery(id ?? '');
    return <main>
        <h1>PersonsDetailsPage</h1>
        <h2>{person_query.data?.name}</h2>
        <p>{person_query.data?.bio}</p>
        {person_query.data?.homes.map((home, index) => <div key={index}>
            address = {home.address} - rooms = {home.rooms}
        </div>)}
    </main>    
}