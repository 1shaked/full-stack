import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc"
import { Dialog, MenuItem, Select } from "@mui/material";
import { JSXElementConstructor, ReactElement, useState } from "react";
import { useForm, Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from "react-hook-form";

interface AddHouseInterface {
    address: string;
    city: string;
    rooms: number;
    persons: string[]    
}

export function HousePage() {
    const home_query = trpc.home.list.useQuery();
    const persons_query = trpc.person.list_names.useQuery();
    const create_house_mutation = trpc.home.createHouse.useMutation({
        onSuccess: () => {
            home_query.refetch();
            setIsOpenAddHouse(false)
        }
    });
    const {register, handleSubmit, control} = useForm<AddHouseInterface>()
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
                if (persons_query.data === undefined) return ;
                const persons: { id: string, name: string}[] = data.persons.map((person_id) => {
                    const index_of_person = persons_query.data?.findIndex((person) => person.id === person_id);
                    const person = persons_query.data[index_of_person]
                    return {
                        id: person_id,
                        name: person.name
                    }
                });
                create_house_mutation.mutate({
                    address: data.address,
                    rooms: parseInt(data.rooms.toString()),
                    city: data.city,
                    persons: persons ?? [],

                })
            })}>
                   address <input type="text" {...register('address')} /> 
                   <br />
                   city <input type="text" {...register('city')} /> 
                   <br />
                   rooms <input type="number" {...register('rooms')} /> 
                   <hr />
                   {/* <Controller 
                    name='persons' 
                    control={control}
                    render={( {field} ) => <>
                        <Select
                            {...field}
                            multiple>
                            {persons_query.data?.map((person) => <MenuItem key={person.id} value={person.id}>
                                {person.name}
                            </MenuItem>)}
                        </Select>
                    </>}                
                    /> */}
                   <select {...register('persons')} multiple>
                    {persons_query.data?.map((person => <option key={person.id} value={person.id}>{person.name}</option>))}
                   </select>
                   <button type="submit">submit</button>
            </form>
        </Dialog>
    </main>
}