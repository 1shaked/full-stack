import { forwardRef, useEffect, useRef, useState } from "react"



export function RefComponent() {
    const ref = useRef<HTMLInputElement>(null);
    const ref_odd = useRef<HTMLInputElement>(null);
    const [count , setCount] = useState(0);

    useEffect(( ) => {
        if (count % 2 === 0) {
            ref.current?.focus()
        }
        else {
            ref_odd.current?.focus()
        }
    }, [count])
    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button>
        <br />
        <div>
            even
            <ChildRef ref={ref} />
        </div>
        <div>
            odd
            <ChildRef ref={ref_odd} />
        </div>

    </div>
}

export const ChildRef = forwardRef<HTMLInputElement, {}>((props, ref) => {


    return <div>
        <input type="text" ref={ref} name="" id="" />
    </div>
}) 