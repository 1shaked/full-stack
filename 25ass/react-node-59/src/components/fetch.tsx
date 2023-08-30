import { useEffect, useState } from "react";


export default function FetchComponent() {
    const [film , setFilm] = useState<{ [key: string] : string}>({
        name: 'shaked',
        last: 'chen'
    });
    async function fetchData() {
        const res = await fetch('http://localhost:4000/example/home?password=123&user=sda&mn=BY0fRMsTwTH7_lSjpZ4pTbmMAsjimfMZZOIl.3LObFw5142R3TA5V')
        const data = await res.json();
        console.log(data);
        setFilm(data?.query ?? {})
    }
    useEffect(() => {
        fetchData() //
    }, [])
    return <div>
        <h2>title</h2>
        {Object.keys(film).map((key, index) => <div key={index}>{key} - {film[key]}</div>)}
    </div>
}