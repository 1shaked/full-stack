'use client'
import TodoComponent from '@/components/todoComponent';
import { todoArrayAtom } from '@/stores/jotai/example'
import { useAtom } from 'jotai'
export default function Page() {
    const [todoArray, setTodoArray] = useAtom(todoArrayAtom);
    return <main>
        <div>
            <h1>Hey guys</h1>
            <div>
                {todoArray.map((_, index) => <TodoComponent key={index} index={index} />)}
            </div>
        </div>
    </main>
}