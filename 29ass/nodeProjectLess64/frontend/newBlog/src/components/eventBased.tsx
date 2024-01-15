import { trpc } from "../trpc";


export function EventBase() {
    const add_mutation = trpc.sub.add.useMutation();
    trpc.sub.onAdd.useSubscription(undefined, {
        onData: (data) => {
            console.log(data)
        },
        onStarted: () => {
            console.log('started')
        },
        onError: (err) => {
            console.log(err)
        }
    });
    return <>

        <div>
            text
        </div>
        <button onClick={() => {
            add_mutation.mutate({
                id: Math.random().toFixed(3).toString(),
                text: 'text'
            })
        }}>emit</button>


    </>
}