'use client'

import { useEffect, useState } from "react"

export default function Page() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
		const interval = setInterval(() => {
			console.log("hey");
		}, 1000);
		return () => clearInterval(interval); // run when component is unmonted
	}, []);

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1);
            console.log(count)
        }, 1000)
    }, [])

    return <h1>{count}</h1>
}