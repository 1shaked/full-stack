import { useQuery } from "@tanstack/react-query"
import { trpcClient } from "../../trpc"

export function TrpcExample() {
    const trpcResponse = useQuery({queryKey: ['trpcExample'], queryFn: () => trpcClient.list.query() })
    if (trpcResponse.isLoading || trpcResponse.data === undefined) return <div>loading or undefined</div>
    return <div>
        trpc example
        {trpcResponse.data.map((text, index) => <p key={index}>{text}</p>)}
    </div>
}