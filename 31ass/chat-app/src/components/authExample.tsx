import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { authFirebase } from "../firebase_connection";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { isLoggedInAtom, userAtom } from "../userState";
interface AuthFormInterface {
    email: string;
    password: string;
}

export function AuthExample() {
    const { handleSubmit, register } = useForm<AuthFormInterface>();
    const [login, setLogin] = useState(false);
    const setUser = useSetAtom(userAtom)
    const isLoggedIn = useAtomValue(isLoggedInAtom)

    const queryAuthMutation = useMutation({
        mutationFn: async (data: AuthFormInterface) => {
            console.log(login);
            if (login) {
                const userCredential = await signInWithEmailAndPassword(
                    authFirebase,
                    data.email,
                    data.password
                );
                console.log(userCredential);
            } else {
                const userCredential = await createUserWithEmailAndPassword(
                    authFirebase,
                    data.email,
                    data.password
                );
                console.log({ data, userCredential });
            }
        },
        onSuccess: () => {
            setUser(authFirebase.currentUser)
        }
    });
    if (!isLoggedIn) return <main>
        <h1>AuthExample</h1>
        <button onClick={async () => {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(authFirebase, provider);
            setUser(authFirebase.currentUser)

        }}>Google login</button>
        <form
            onSubmit={handleSubmit((data: AuthFormInterface) =>
                queryAuthMutation.mutate(data)
            )}
        >
            <input type="text" {...register("email")} placeholder="email" />
            <input
                type="text"
                {...register("password")}
                placeholder="password"
            />
            <button type="submit" onClick={() => setLogin(false)}>
                create user
            </button>
            <button type="submit" onClick={() => setLogin(true)}>
                login user
            </button>
        </form>
    </main>;
    return <button onClick={async () => {
        await signOut(authFirebase)
        setUser(authFirebase.currentUser)

    }}> sign out </button>;
}
