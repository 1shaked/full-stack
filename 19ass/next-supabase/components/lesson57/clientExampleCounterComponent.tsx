'use client'

import { useEffect, useState } from "react"
import { getNumber } from "./serverSideCode";

export default function ClientExampleCounterComponent () {
    const [num, setNum] = useState(0);

    async function getNumberFromServer() {
        // get number from the server
        const n = await getNumber()
        console.log('client side')
        setNum(n);

    }
    useEffect(() => {
        // send a message to the server to get my number
        getNumberFromServer()
    }, [])
    return <>
    <h2>
        num = {num}
    </h2>
    <button onClick={getNumberFromServer}>get new number from the server</button>
    </>
} 