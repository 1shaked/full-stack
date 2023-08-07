'use client'
import ZustandClassExample from "@/components/zustandClassExample";
import {useZustandCounter} from '@/stores/zustand/classExample'

export default function Page() {
    const counterObject = useZustandCounter();

    return <>
        This is zustand Page
        <br />
        <h3>In Page counter is {counterObject.count}</h3>
        <br />
        <ZustandClassExample />
    </>
}