'use client'

import { ChangeEvent, useState } from "react"

export default function ExampleStateListString() {
    const [tasks, setTasks] = useState<string[]>(['abc', 'def', 'gh']);
    const [newTask, setNewTask] = useState('');
    // let newTaskAsaf: string = '';
    function inputChanged(e : ChangeEvent<HTMLInputElement>) {
        // the long way
        // console.log(e); 
        setNewTask(e.target.value);
        // newTaskAsaf = e.target.value;
        // console.log(newTaskAsaf);
    }
    function addNewTask() {
        // console.log(newTaskAsaf);
        // setTasks([...tasks, newTaskAsaf]);
        setTasks([...tasks, newTask]);
    }
    return <>
        <div>
            <h2>there is {tasks.length}</h2>
            <ol>
                {tasks.map( (item, index) => {return <li key={index}>{item}</li>})}
            </ol>
            <hr />
            <input type="text" onChange={(event) => inputChanged(event)} />
            <button onClick={addNewTask}>add task!</button>
            <hr />
            <p>
                <div>
                    new task value is = {newTask}
                </div>
                {/* <div>
                    asaf new task value is = {newTaskAsaf}
                </div> */}
            </p>
        </div>
    </>
} 