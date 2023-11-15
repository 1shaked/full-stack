import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form"

interface AddDataExampleInterface {
    firstName: string;
    lastName: string;
}

// async function addData() {}

export function AddDataToExampleComponent() {
    const {handleSubmit, register} = useForm<AddDataExampleInterface>();
    const queryMuta = useMutation({
        
        mutationFn: async (data :AddDataExampleInterface ) => {
            console.log(data)
            return ;
        }
    })
    return <form onSubmit={handleSubmit( (data) => queryMuta.mutate(data))}>
        <h1>form</h1>
        <input type="text" {...register('firstName')}/>
        <input type="text" {...register('lastName')}/>
        <button type="submit">add data</button>
    </form>
}