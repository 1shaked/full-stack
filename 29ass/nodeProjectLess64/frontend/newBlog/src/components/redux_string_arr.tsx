
import { useSelector } from "react-redux"
import {CounterInterface, add } from '../redux/counterSlice'
import { useState } from "react"
import { useDispatch } from "react-redux"
export function ReduxStringArr() {
    const counter = useSelector((state: CounterInterface) => state)
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