// import { useComputed, useSignal } from "@preact/signals";
import { IntroSignal } from "../../components/signals/intro";

import { useSignal, useComputed } from "@preact/signals-react";
import { IntroSignalOutFile } from "../../components/signals/outFiles";
import { todosSignal } from "../../components/signals/signalData";
import { UnrelatedFile } from "../../components/signals/unrelatedFile";

function Counter() {
	const count = useSignal(0);
	const double = useComputed(() => count.value * 2);

	return (
		<button onClick={() => count.value++}>
			Value: {count.value}, value x 2 = {double.value}
		</button>
	);
}

export function SignalsIntro() {

    return <main>
        <Counter />
        <hr />
        <IntroSignal />
        <hr />
        <IntroSignalOutFile todosSignal={todosSignal} />
        <UnrelatedFile />
    </main>
}