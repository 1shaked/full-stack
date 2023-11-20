import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { authFirebase } from "../firebase_connection";
import { useState } from "react";
interface AuthFormInterface {
  email: string;
  password: string;
}

export function AuthExample() {
  const { handleSubmit, register } = useForm<AuthFormInterface>();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(authFirebase.currentUser !== null);
    function updateUser() {
        if (authFirebase.currentUser === null) setUser(false);
        else setUser(true)
    }
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
    onSuccess: (data, variables, ctx) => {
        console.log({data, variables, ctx});
        updateUser()
    }
  });
//   authFirebase.onAuthStateChanged((authState) => {
//     if (authState === null) setUser(false)
//     else setUser(true)
//   });

  if (!user) return <main>
  <h1>AuthExample</h1>
  {/* <pre>
    currentUser
    {JSON.stringify(authFirebase.currentUser, null, 2)}
</pre> */}
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
    updateUser();
  }}> sign out </button>;
}
