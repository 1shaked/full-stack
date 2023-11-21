import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";

interface MessagesOpenChatInterface {
    day: string;
    day_format: string;
    messages: {
        [key: string]: {
            sender: string;
            message: string;
        }
    }
}
async function readMessages() {
    const collectionMessages = collection(firebaseDB, 'messages');
    const q = query(collectionMessages, where('day_format', '==', '20/11/2023'))
    const querySet = (await getDocs(q));
    // console.log(querySet)
    // if (querySet.size === 1) {
    //     return querySet.docs[0].data() as MessagesOpenChatInterface
    // }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const obj: { [key: string]: any } = {};
    // for (const item of querySet.docs) {
    //     const id = item.id
    //     obj[id] = item.data()
    //     console.log(item.data())
    // }
    // console.log(obj)
    // return obj;

    return querySet.docs[0].data() as MessagesOpenChatInterface
}
export function MessagesOpenChat() {
    const messagesQuery = useQuery({
        queryKey: ['messagesOpenChat'],
        queryFn: readMessages
    })
    if (messagesQuery.isLoading) return <div>Loading...</div>
    return <div>
        <h1>open chat</h1>
        <pre>
            chat message
            {JSON.stringify(messagesQuery.data, null , 2)}
        </pre>
    </div>
}