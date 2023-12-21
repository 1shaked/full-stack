import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { queryClient } from "../query_client";
interface AddDataExampleInterface {
    firstName: string;
    lastName: string;
}

// async function addData() {}

export function AddDataToExampleComponent() {
    const {handleSubmit, register} = useForm<AddDataExampleInterface>();
    const queryMuta = useMutation({
        
        mutationFn: async (data :AddDataExampleInterface ) => {
            const collectionTest = collection(firebaseDB , 'test');
            addDoc(collectionTest, data);
            console.log(data)
            return ;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['test']})
        }
    })
    return <form onSubmit={handleSubmit( (data) => queryMuta.mutate(data))}>
        <h1>form</h1>
        <input type="text" {...register('firstName')}/>
        <input type="text" {...register('lastName')}/>
        <button type="submit">add data</button>
    </form>
}