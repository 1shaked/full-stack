import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const AuthComponent = () => {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    return (<>
        <div>
            <div>{authState ? "Logged in" : "Not Logged In"}</div>
            <button
                onClick={() =>
                    authState
                        ? dispatch(setAuthState(false))
                        : dispatch(setAuthState(true))
                }
            >
                {authState ? "Logout" : "LogIn"}
            </button>
        </div>
    </>);
}