
import { useSelector } from "react-redux";
import type { AppState } from "../store/store";
export const TestComponent = () => {
    const counter = useSelector((state: AppState) => state.counter.value);
    return (
        <>
            <h1>value = {counter}</h1>
        </>
    );
}