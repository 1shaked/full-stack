import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import { Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddHouseInterface {
    address: string;
    city: string;
    rooms: string;    
}

export function HousePage() {
    const home_query = trpc.home.list.useQuery();
    const create_house_mutation = trpc.home.createHouse.useMutation();
    const {register, handleSubmit} = useForm<AddHouseInterface>()
    const [isOpenAddHouse, setIsOpenAddHouse] = useState(false);
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
        <hr />
        <button onClick={() => setIsOpenAddHouse(true)}>open dialog</button>
        <Dialog open={isOpenAddHouse} onClose={ () => setIsOpenAddHouse(false) }>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                   address <input type="text" {...register('address')} /> 
                   <br />
                   city <input type="text" {...register('city')} /> 
                   <br />
                   rooms <input type="number" {...register('rooms')} /> 
                   <hr />
                   <button type="submit">submit</button>
            </form>
        </Dialog>
    </main>
}