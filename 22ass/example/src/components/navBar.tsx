// a navbar component that will be used in the app
import { LoginComponent } from "@/components/login";
import { supabase } from "@/lib/supabase";
import type { AppState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState, setUserState } from "../store/authSlice";

export const NavBarComponent = () => {
  const authState = useSelector((state: AppState) => state.auth);
    const dispatch = useDispatch();
  async function logout () {
    await supabase.auth.signOut();
    // notify redux that the user is logged out
    dispatch(setAuthState(false));
    dispatch(setUserState(null));

}
  return (
    <>
      <nav>
        {authState.authState ? <button onClick={logout}>Logout</button> : null}
        <h2>Task It</h2>
        <div>
          <LoginComponent />
        </div>
      </nav>
    </>
  );
};
