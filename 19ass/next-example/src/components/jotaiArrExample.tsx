'use client'
import { useAtom } from 'jotai';
import { arrAtom, sumLetters } from "@/stores/jotai/jotaiArrayExample";
import { useState } from 'react';


export default function JotaiArrExample() {
    const [arr, setArr] =  useAtom(arrAtom);
    const sumLettersHook = useAtom(sumLetters)[0];
    const [itemToAdd, setItem] = useState('');

    function addToArr () {
        if (itemToAdd == '') return;
        setArr(
            [...arr, itemToAdd]
        );
        setItem('')
    }
    function deleteFromArr(index: number) {
        setArr([...arr.slice(0, index), ...arr.slice(index+1, arr.length)])
    }
    return <>
        <h2>Jotai arr example</h2>
        <ul>
            {arr.map((str, index) => <div key={index}>
                Str value is = {str}
                <button onClick={() => deleteFromArr(index)}>DELETE</button>
            </div>)}
        </ul>
        {/* add element */}
        <input type="text" value={itemToAdd} onChange={(e) => setItem(e.target.value)} />
        <button onClick={addToArr}>ADD To Arr</button>
        <h3>Total letters {sumLettersHook}</h3>
    </>
}