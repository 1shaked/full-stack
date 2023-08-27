'use client'
import HOCExample from "@/components/lesson57/HOC57";
import ClientExampleCounterComponent from "@/components/lesson57/clientExampleCounterComponent";
import RefUse57 from "@/components/lesson57/useRef57";

export default function Page() {
    return <main>
        <section>
            <HOCExample n={10} component={ExampleCom}/>
            {/* <ExampleCom /> */}
            <RefUse57 />
            <ClientExampleCounterComponent />
        </section>
    </main>
}

function ExampleCom () {
    return <h1>Example</h1>
}
function ExampleCom2 () {
    return <h1>r2r2r2r2r</h1>
}
