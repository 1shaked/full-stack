import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { useForm } from "react-hook-form";
import { useAtomValue } from "jotai";
import { isLoggedInAtom, userAtom } from "../userState";
import { getCurrentDateFormatted, getCurrentTimeFormatted } from "../utils/getCurrentTime";
import { useEffect, useState } from "react";
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

export function MessagesOpenChatRealTime() {

    const [openChatInfo, setOpenChatIInfo] = useState<MessagesOpenChatInterface | null>(null);
    const isLoggedIn = useAtomValue(isLoggedInAtom)
    const user = useAtomValue(userAtom)
    const {handleSubmit, register} = useForm<FormMessageInterface>()
    
    useEffect(() => {
        const stream = onSnapshot(doc(firebaseDB, 'messages', getCurrentDateFormatted()), (docRef) => {
            const data = {data: docRef.data(), id: docRef.id} as MessagesOpenChatInterface;
            setOpenChatIInfo(data);
        });
        return () => {
            stream();
        }
    }, [])
    
    if (!isLoggedIn) return <div>you are not isLoggedIn</div>
    return <div>
        <h1>open chat - {user?.email}</h1>
        <div>
            {Object.entries(openChatInfo?.data.messages ?? {}).sort((first_item , second_item) =>  {
                const local_key_time_first = first_item[0]
                const local_key_time_second = second_item[0];
                const [hoursA, minutesA, secondsA] = local_key_time_first.split(':').map(Number);
                const [hoursB, minutesB, secondsB] = local_key_time_second.split(':').map(Number);

                const totalSecondsA = hoursA * 3600 + minutesA * 60 + secondsA;
                const totalSecondsB = hoursB * 3600 + minutesB * 60 + secondsB;

                return totalSecondsA - totalSecondsB;
            }).map((item, index) => {
                return <div key={index}>
                    {item[0]} --- {item[1].sender} - {item[1].message}
                </div>
            })}
        </div>
        <form onSubmit={handleSubmit( async (message) => {
            // const collectionMessage = collection(firebaseDB, 'messages');
            if (openChatInfo === null) return ;
            const dataToSave = {...openChatInfo.data};
            
            dataToSave.messages[getCurrentTimeFormatted()] = {
                sender: user?.email ?? '',
                message: message.message
            }
            await setDoc(doc(firebaseDB, 'messages', openChatInfo.id) , dataToSave)
        })}>
            <input type="text" placeholder="message" {...register('message')} />
            <button type="submit">send</button>
        </form>
    </div>
}