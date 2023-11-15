import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../firebase_connection";
interface AuthFormInterface {
    email: string;
    password: string;
}

export function AuthExample() {
    const {handleSubmit, register} = useForm<AuthFormInterface>();
    const queryAuthMutation = useMutation({
        mutationFn: async (data: AuthFormInterface) => {
            const userCredential = await createUserWithEmailAndPassword(authFirebase, data.email, data.password);
            console.log({data, userCredential});
            
        }
    });
    console.log(authFirebase.currentUser)
    return <main>
        <h1>AuthExample</h1>
        <form onSubmit={handleSubmit( (data: AuthFormInterface) => queryAuthMutation.mutate(data))}>
            <input type="text" {...register('email')} placeholder="email" />
            <input type="text" {...register('password')} placeholder="password" />
            <button type="submit">create user</button>
        </form>
    </main>
}