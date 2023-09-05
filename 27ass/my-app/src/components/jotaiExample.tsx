'use client'
import { textAtom } from "@/state/jotai";
import { useAtom } from "jotai"
export default function JotaiExample() {
    const [name, setName] = useAtom(textAtom);
    return <div>
        <h1>Jotai - {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
}
