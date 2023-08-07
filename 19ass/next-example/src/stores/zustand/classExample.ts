import { create } from 'zustand';

interface CounterInterface {
    count: number;
    by: number;
    incrementBy: (v: number) => void;
    decrementBy: (v: number) => void;
    setBy: (v: number) => void;
}

export const useZustandCounter = create<CounterInterface>()((set) => ({
    count: 0,
    by: 0,
    incrementBy: (v: number) => {
        set(state => ({
                count: state.count + v,
            }) );
    },
    decrementBy: (v: number) => set((state) => ({count: state.count - v})),
    setBy: (v: number) => set(() => ({ by: v }))
}));
 

// const useZustandCounterStore = create<CounterInterface>();
// useZustandCounterStore()






/*
import { create } from 'zustand'

interface ClassExampleInterface {
    counter: number,

    increment: () => void,
}

const useClassExampleStateZustand = create<ClassExampleInterface>()((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter ++}))
}));

export default useClassExampleStateZustand; */