import { useForm } from "react-hook-form";
import { trpc } from "../trpc"

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
    const {register , handleSubmit} = useForm<UserCreateInterface>()
    if (users_list_query.isLoading) return <div>Loading....</div>
    return <>
        <h1>users list</h1>
        {users_list_query.data?.map((user, index) => <div key={index}>
            {user.email} - <button onClick={() => user_delete_mutation.mutate(user.id)} style={{color: 'rgb(230, 0 ,0 )'}}>DELETE</button>
            <hr />
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