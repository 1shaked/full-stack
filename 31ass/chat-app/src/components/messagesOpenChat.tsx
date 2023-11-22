import { collection, getDocs, query, where, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
// import { useQuery } from "@tanstack/react-query";
interface FormMessageInterface {
    message: string;
}

interface MessagesOpenChatInterface {
    id: string;
    data: {
        day: string;
        day_format: string;
        messages: {
            [key: string]: {
                sender: string;
                message: string;
            }
        }
    }
}
async function readMessages() {
    const collectionMessages = collection(firebaseDB, 'messages');
    const q = query(collectionMessages, where('day_format', '==', '20/11/2023'))
    const querySet = (await getDocs(q));
    querySet.docs[0].id
    return { id: querySet.docs[0].id, data: querySet.docs[0].data() } as MessagesOpenChatInterface
}
export function MessagesOpenChat() {
    const messagesQuery = useQuery({
        queryKey: ['messagesOpenChat'],
        queryFn: readMessages
    });
    const {handleSubmit, register} = useForm<FormMessageInterface>()
    if (messagesQuery.isLoading) return <div>Loading...</div>
    return <div>
        <h1>open chat</h1>
        <pre>
            chat message
            {JSON.stringify(messagesQuery.data, null , 2)}
        </pre>
        <form onSubmit={handleSubmit( async (message) => {
            // const collectionMessage = collection(firebaseDB, 'messages');
            if (messagesQuery.data === undefined) return ;
            const dataToSave = {...messagesQuery.data.data};
            dataToSave.messages['17:46'] = {
                sender: 'shaked1hen@gmail.com',
                message: message.message
            }
            // await addDoc(collectionMessage, dataToSave);
            await setDoc(doc(firebaseDB, 'messages', messagesQuery.data.id) , dataToSave)
            messagesQuery.refetch()
        })}>
            <input type="text" placeholder="message" {...register('message')} />
            <button type="submit">send</button>
        </form>
    </div>
}