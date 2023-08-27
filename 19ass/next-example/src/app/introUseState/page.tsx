"use client"
import styles from '../page.module.css';

// import PropsComponent from '@/components/propsCom';
import  { useState } from 'react';
import NameOfComponent from '@/components/exampleComponent'
import JotaiExample from '@/components/jotai';
import ZustandArrayExample from '@/components/zustandArrayExample';
import JotaiArrExample from '@/components/jotaiArrExample';
import RecoilExampleBaseComponent from '@/components/recoilExampleBase';
import { RecoilRoot } from 'recoil';
import CounterComponent from '@/components/counter';
import ReduxComponent from '@/stores/redux/reduxComponent';
import { Provider } from 'react-redux';
import store from '@/stores/redux/store';

export default function Page () {
    const [count, setCount] = useState(0);
    return (
        <main>
            <p className={styles.container}>--count: {count}</p>
            <NameOfComponent 
                number={count}
            />
            <button className={styles.container} onClick={() => setCount(count + 1)}>add</button>
            {/* <PropsComponent age={count} /> */}
            <CounterComponent />
            <JotaiExample />

            <ZustandArrayExample />
            <JotaiArrExample />
            <RecoilRoot>
                <RecoilExampleBaseComponent />
            </RecoilRoot>
            <Provider store={store}>
                <ReduxComponent />
            </Provider>
        </main>
    )
}