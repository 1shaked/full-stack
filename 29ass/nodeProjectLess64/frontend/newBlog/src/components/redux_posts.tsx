import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchPosts } from "../redux/postSlice";
import { ThunkDispatch } from "redux-thunk";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


export function ReduxPosts() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const post = useSelector((state: RootState) => state.post)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return <div>
        {post.isLoading ? 'Loading...' : 'not loading'}
        <pre>
            {JSON.stringify(post, null , 2)}
        </pre>
    </div>
}