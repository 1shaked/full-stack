import { computed, effect, useSignal } from "@preact/signals-react"
import { IntroSignals } from "../../../components/signalsClass/introSignals";


export function SignalsIntroClass() {
    const count = useSignal(0);
    const doubleNumber = computed(() => count.value  * 2);
    // effect(() => {
    //     console.log(count.value)
    // })   
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
        <p>
            {doubleNumber.value}
        </p>
        <IntroSignals />
    </main>
}