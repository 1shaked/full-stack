'use client'
import TodoComponent from '@/components/todoComponent';
import { leftTodoAtom, todoArrayAtom } from '@/stores/jotai/example'
import { useAtom } from 'jotai'
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Page() {
    const [todoArray, setTodoArray] = useAtom(todoArrayAtom);
    const [leftTodo, setLeftTodo] = useAtom(leftTodoAtom);

    useEffect(() => {
        console.log('the value of todo array has changed')
    }, [todoArray]);
    useEffect(() => {
        console.log('different use effect')
    }, [todoArray])
    useEffect(() => {
        console.log('first time component has been rendered')
    }, [])
    
    // useEffect(() => {
    //     console.log('change count');
    //     setCount(count + 5)
    // }, [count])
    
    return <main>
        <div>
            <h1>Hey guys</h1>
            <div>
                {todoArray.map((_, index) => <TodoComponent key={index} index={index} />)}
            </div>
            <section>
                <div>
                    total todo 
                </div>
                <div>
                    left todo {leftTodo}
                </div>
                <div>
                    what we have done
                </div>
            </section>
            <section>
                <Link href='/introUseState'>go to introUseState</Link>
                {/* <a href="https://google.com">google</a> */}
            </section>
        </div>
    </main>
}