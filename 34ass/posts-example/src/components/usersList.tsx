import { trpc } from "../trpc"

export function UsersList() {
    const users_list_query = trpc.userList.useQuery('wow!');
    if (users_list_query.isLoading) return <div>Loading....</div>
    return <>
        <h1>users list</h1>
        {users_list_query.data?.map((user, index) => <div key={index}>
            {user.email}
        </div>)}
    </>
}