import { doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAtomValue } from "jotai";
import { isLoggedInAtom, userAtom } from "../userState";
import { getCurrentDateFormatted, getCurrentTimeFormatted } from "../utils/getCurrentTime";
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
    const docRef = doc(firebaseDB, 'messages', getCurrentDateFormatted());
    const docSnap = await getDoc(docRef);
    console.log(getCurrentDateFormatted())
    console.log(docSnap.metadata);
    console.log(docSnap.data());
    return {data: docSnap.data(), id: docSnap.id} as MessagesOpenChatInterface
}
export function MessagesOpenChatRealTime() {
    const messagesQuery = useQuery({
        queryKey: ['messagesOpenChatRealTime'],
        queryFn: readMessages
    });
    const isLoggedIn = useAtomValue(isLoggedInAtom)
    const user = useAtomValue(userAtom)
    const {handleSubmit, register} = useForm<FormMessageInterface>()
    if (messagesQuery.isLoading) return <div>Loading...</div>
    if (!isLoggedIn) return <div>you are not isLoggedIn</div>
    return <div>
        <h1>open chat</h1>
        <div>
            {Object.entries(messagesQuery.data?.data.messages ?? {}).map((item, index) => {
                return <div key={index}>
                    {item[0]} --- {item[1].sender} - {item[1].message}
                </div>
            })}
        </div>
        <form onSubmit={handleSubmit( async (message) => {
            // const collectionMessage = collection(firebaseDB, 'messages');
            if (messagesQuery.data === undefined) return ;
            const dataToSave = {...messagesQuery.data.data};
            
            dataToSave.messages[getCurrentTimeFormatted()] = {
                sender: user?.email ?? '',
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