
import { useSelector } from "react-redux"
import {CounterInterface, incremented, } from '../redux/counterSlice'
import { useDispatch } from "react-redux"
export function ReduxCounter() {
    const counter = useSelector((state: CounterInterface) => state)
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