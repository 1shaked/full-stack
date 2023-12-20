
import { useSelector } from "react-redux"
import {add } from '../redux/counterSlice'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { RootState } from "../redux/store"
export function ReduxStringArr() {
    const counter = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    const [text , setText] = useState('')
    return <div>
        <h1>redux start!</h1>
        <p>
            {counter.arr.join(' , ')}
        </p>

        <input type="text" value={text} onChange={(e) => setText(e.target.value ?? '')} />
        <button onClick={() => dispatch(add(text))}>add text</button>

        <hr />
        <hr />
        <hr />
        <hr />
    </div>
}