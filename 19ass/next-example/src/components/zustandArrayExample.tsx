import UseExampleZustandArrStore from '@/stores/zustand/storeArray';


export default function ZustandArrayExample() {
    const {arr} = UseExampleZustandArrStore()

    return <>
        <h2>zustand example with arr</h2>

        <ul>
            {arr.map((num, index) => <div key={index}>
                item is {num}
            </div>)}
        </ul>
    </>;
}