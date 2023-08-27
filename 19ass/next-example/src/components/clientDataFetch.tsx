'use client'
import { getRandomNumber } from "@/app/dataFetch/route";
import { useEffect, useState } from "react"

export default function ClientDataFetch() {
    const [num, setNum] = useState(0);
    async function getData() {
        const resLocal = await fetch(`http://localhost:3000/api/hello/`)
        console.log(resLocal);
    }
    async function setRandomNumber() {
        const number = await getRandomNumber();
        setNum(number)
    }
    useEffect(() => {
        getData();
        getRandomNumber();
    }, [])
    return <>
        <h2>client data</h2>
        number = {num}
        <button onClick={() => setRandomNumber()}>click to get random number</button>
    </>
}