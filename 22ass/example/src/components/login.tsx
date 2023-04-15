import { supabase } from "@/lib/supabase";
import type { AppState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "@/lib/getUser";

export const LoginComponent = () => {
  const authState = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  async function login() {
    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(res);
  }
  async function googleLogin() {
    await login();
    checkUser(dispatch);
  }
  return (
    <>
    <div className="LoginBtn">
        {authState.authState ? <h1>{authState.user?.email}</h1> : <button onClick={googleLogin}>Login with Google</button>}
    </div>
      
    </>
  );
};
