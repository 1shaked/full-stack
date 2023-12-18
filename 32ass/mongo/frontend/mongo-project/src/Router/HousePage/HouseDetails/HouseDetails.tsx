import { NavLink, useParams } from "react-router-dom"
import { trpc } from "../../../trpc"
import { useForm } from "react-hook-form";
import { Dialog } from "@mui/material";
import { useState } from "react";


export function HouseDetailsPage () {
    const {id} = useParams();
    const home_details_query = trpc.home.get.useQuery(id ?? '');
    const person_list_query = trpc.person.list.useQuery()
    const house_query_add = trpc.home.addPerson.useMutation({
        onSuccess: () => {
            home_details_query.refetch()
        }
    })
    const {handleSubmit, register, } = useForm<{ person_id: string; }>();
    const [is_add_person_dialog_open, set_is_add_person_dialog_open] = useState(false)
    if (home_details_query.isLoading || person_list_query.data === undefined) return <h1>Loading...</h1>
    if (home_details_query.data === undefined) return <h1>Page does not exist</h1>
    return <main>
        <h1>House Details</h1>
        {home_details_query.data.address}
        <hr />
        {home_details_query.data?.city}
        <hr />
        persons - {home_details_query.data?.persons?.map((person, index) => <pre key={index}>
            <NavLink to={`/persons/${person.id}`}>{person.name}</NavLink>
        </pre>)}
        <Dialog open={is_add_person_dialog_open} onClose={() => set_is_add_person_dialog_open(false)}>
            <div style={{ width: '50vw', height: '50vh'}}>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                    
                    const index_of_person = person_list_query.data?.findIndex(person => person.id === data.person_id);
                    const person = person_list_query.data[index_of_person]
                    house_query_add.mutate({
                        person_id: data.person_id,
                        name: person.name,
                        home_id: home_details_query.data?.id ?? '',
                    })
                })}>
                    <select {...register('person_id')}>
                        {person_list_query?.data?.map((person, index) => <option key={index} value={person.id}>
                            {person?.name} - {person?.bio}
                        </option>)}
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => set_is_add_person_dialog_open(false)}>Close</button>
            </div>
        </Dialog>
        <button onClick={() => set_is_add_person_dialog_open(true)}>Add Person</button>
    </main>
}


