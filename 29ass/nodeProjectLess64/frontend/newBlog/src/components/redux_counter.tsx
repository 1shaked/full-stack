
import { useSelector } from "react-redux"
import {incremented } from '../redux/counterSlice'
import { useDispatch } from "react-redux"
import { RootState } from "../redux/store"
export function ReduxCounter() {
    const counter = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    
    return <div>
        <h1>redux start!</h1>
        <button onClick={() => dispatch(incremented())}>+</button>
        <button onClick={() => dispatch(incremented(2))}>+2</button>
        <p>
            {counter.value}
        </p>
    </div>
}