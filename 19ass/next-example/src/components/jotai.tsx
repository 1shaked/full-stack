import { useAtom } from 'jotai';
import { countAtom } from '@/stores/jotai/example';

export default function JotaiExample() {
    const [count, setCount] = useAtom(countAtom);

    return <>
        <h2>Jotai atom count is { count }</h2>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    </>
}