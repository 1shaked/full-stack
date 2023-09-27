'use client'
import {useSelector, useDispatch, Provider} from 'react-redux';
import { RootState } from '@/stores/redux/store';
import { increment , decrement} from '@/stores/redux/counterSlice'
import store from '@/stores/redux/store'
import counterReducers from '@/stores/redux/counterSlice';

export default function Page() {
    return <Provider store={store}>
        <CounterRedux />
    </Provider>
}

function CounterRedux() {
    const counter = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();
    console.log(counterReducers)
    return (
        <div>
            <h1>Page</h1>
            <p>Counter: {counter}</p>
            <button onClick={() =>  dispatch(increment())}>+</button>
            <button onClick={() =>  dispatch(decrement())}>-</button>
        </div>
    );
}