import { supabase } from "@/lib/supabase"
import { setUserState, setAuthState } from "../store/authSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export async function checkUser(dispatch: Dispatch<AnyAction>) {
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('auth state changed')
        const userResponse = await supabase.auth.getUser()
        console.log(userResponse.data.user);
        if (userResponse.data.user === null || userResponse.data.user === undefined) {
            console.log('user not found')
            dispatch(setAuthState(false));
            dispatch(setUserState(null))

        } else {
            console.log('user found')
            // save the user to the redux store
            dispatch(setAuthState(true));
            dispatch(setUserState({ id: userResponse.data.user.id, email: userResponse.data.user.email ?? ''}))
        }
    })
    // const dispatch = useDispatch();
    const userResponse = await supabase.auth.getUser()
        console.log(userResponse.data.user);
        if (userResponse.data.user === null || userResponse.data.user === undefined) {
            console.log('user not found')
            dispatch(setAuthState(false));
            dispatch(setUserState(null))

        } else {
            console.log('user found')
            // save the user to the redux store
            dispatch(setAuthState(true));
            dispatch(setUserState({ id: userResponse.data.user.id, email: userResponse.data.user.email ?? ''}))
        }
        
}