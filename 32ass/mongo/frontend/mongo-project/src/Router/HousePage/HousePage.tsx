import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"

export function HousePage() {
    const home_query = trpc.home.list.useQuery();
    if (home_query.data === undefined || home_query.isLoading) return <div>Loading...</div>
    return <main>
        <h1>House Page</h1>
        {home_query.data.map((home, index) => <div key={index}>
            <NavLink to={`/house/${home.id}`}>
            {home.address}
            - {home.city}
            - {home.rooms}
        </NavLink>
        <hr />
        </div>)}
    </main>
}