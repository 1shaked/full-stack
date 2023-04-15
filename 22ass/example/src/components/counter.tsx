
import { increment, decrement } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../store/store";
export const CounterComponent = () => {
    const counter = useSelector((state: AppState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h2>The counter value is {counter}</h2>
            <button 
            onClick={() => dispatch(increment())}
            className="bg-green-100 hover:bg-green-200 text-green-700 font-bold py-2 px-4 rounded-full">
                Increment
            </button>

            <button
            onClick={() => dispatch(decrement())}
            className="bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-4 rounded-full">
                Decrement
            </button>

        </>
    );
}