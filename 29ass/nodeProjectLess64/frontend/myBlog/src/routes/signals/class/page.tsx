import { useSignal } from "@preact/signals-react"


export function SignalsIntroClass() {
    const count = useSignal(0);
    
    return <main>
        <h1>SignalsIntroClass</h1>
        <button onClick={() => {
            count.value = count.value - 1;
        }}>-</button>
        <p>
            {count.value}
        </p>
        <button onClick={() => {
            count.value = count.value + 1;
        }}>+</button>
    </main>
}