'use client'
import TodoComponent from "@/components/todo";
import { useState } from "react";


export default function Page() {
    const [listOfToDos, setListOfToDos] = useState<string[]>(['air pods', 'buy me']);
    const [valueToAdd, setValueToAdd] = useState('');
    function addToTheToDo() {
        console.log('click me');
        // get the data from the input element
        console.log(valueToAdd);
        // add the input data to the list of to dos
        if (valueToAdd != '') {
            setListOfToDos([...listOfToDos,valueToAdd]);
        }
        setValueToAdd('');
        // tell the user thanks
    }
    return (
        <>
            <h2>Our list of to do's</h2>
            { listOfToDos.map((el) => <TodoComponent todo={el} />) }
            <div>
                value of {valueToAdd}
                <br />
                <input type="text" value={valueToAdd} onChange={(e) => setValueToAdd(e.target.value)} />
                <button onClick={addToTheToDo}>Add to the list</button>   
            </div>  
        </>
    );
}

// function e<T>(param: T) {

// }

// e<number>(10)