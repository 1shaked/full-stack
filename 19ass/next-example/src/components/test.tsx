import useZustandStore from '@/stores/zustand/store';
export default function Test() {
    const {bears, increase} = useZustandStore()
    // const store = useZustandStore()

    return (
        <div>
            <h2>bears = {bears}</h2>
            <button onClick={() => increase(5)}></button>
        </div>
    );
}