import { useForm } from "react-hook-form";
import { trpc } from "../trpc"
import { useState } from "react";

interface UserCreateInterface {
    name: string;
    email: string;
}

export function UsersList() {
    const users_list_query = trpc.userList.useQuery();
    const user_add_mutation = trpc.userCreate.useMutation({
        onSuccess: () => {
            users_list_query.refetch()
        }
    });
    const user_delete_mutation = trpc.userDelete.useMutation({
        onSuccess: () => {
            users_list_query.refetch()
        }
    })
    const user_update_mutation = trpc.userUpdate.useMutation({
        onSuccess: () => {
            users_list_query.refetch()
        }
    })
    const {register , handleSubmit,} = useForm<UserCreateInterface>();
    const update_form = useForm<UserCreateInterface>()
    const [selectedUserToUpdate, setSelectedUserToUpdate] = useState(-1);

    // useEffect(() => {
    //     if (selectedUserToUpdate === -1) reset();
    //     if (users_list_query.data === undefined) return ;
    //     const user = users_list_query.data[selectedUserToUpdate]
    //     reset({
    //         name: user.name ?? '',
    //         email: user.email
    //     })
    // }, [selectedUserToUpdate])
    if (users_list_query.isLoading) return <div>Loading....</div>
    return <>
        <h1>users list</h1>
        {users_list_query.data?.map((user, index) => <div key={index}>
            {selectedUserToUpdate === index ? <>
            <form onSubmit={update_form.handleSubmit((data) => {
                debugger;
                user_update_mutation.mutate({...data , id: user.id})
            })}>
                email <input type="text" {...update_form.register('email')} />
                <br />
                name: <input type="text" {...update_form.register('name')} /> 
                <button type="submit">update</button>
                <button>cancel</button>
            </form>
            </> : <>
                {user.email} - <button onClick={() => user_delete_mutation.mutate(user.id)} style={{color: 'rgb(230, 0 ,0 )'}}>DELETE</button>
                - <button onClick={() => {
                    setSelectedUserToUpdate(index);
                    update_form.reset({
                        name: user.name ?? '',
                        email: user.email,
                    })
                    // reset({
                    //     name: user.name ?? 'name',
                    //     email: user.email
                    // })
                }}> edit</button>
                <hr />
            </>}
            
        </div>)}

        <hr />

        <form onSubmit={handleSubmit((data) => user_add_mutation.mutate(data))}>
            name
            <input type="text" {...register('name')} />
            <br />
            email
            <input type="text" {...register('email')} />

            <button type="submit">submit</button>
        </form>
    </>
}