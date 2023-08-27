'use client'

import { useRef } from "react"

export default function RefUse57 () {
    let num = useRef(0);

    function inc () {
        num.current = num.current + 1
        console.log(num.current);
    }
    return <>
        <h2>Title = {num.current}</h2>
        <button onClick={inc}>click me</button>
    </>
}