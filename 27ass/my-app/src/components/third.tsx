'use client'
import { textAtom, lenTextAtom } from "@/state/jotai";
import { useAtom } from "jotai"

export default function JotaiThirdExample() {
    const [name, _] = useAtom(textAtom);
    const [lengthAtom, ] = useAtom(lenTextAtom) 
    return <div>
        <h1>Jotai third - {name}</h1>
        <h2>text atom length is {lengthAtom}</h2>
    </div>
}