
import { useState } from 'react';
import './App.css'
// import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0);
  const [n, setN] = useState(0);
  const [source, setSource] = useState<[number , number][]>([ ]);
  // 12 -> [ [1 , 12 ] , [2 , 6], [3 , 4], [4 , 3] , [6 , 2] , ] 
  function generateSource () {
    const arr_sources: [number , number][] = []
    for (let i = 1; i < n; i++) {
      // check if this is a source
      if (n % i !== 0) continue;
      arr_sources.push([i , n / i]);
    }
    setSource(arr_sources)
  }
  return (

    <>
      <div>
        {/* <Todos /> */}
        <h1>Counter</h1>
        <h2 id='counter'>{count}</h2>
        <button onClick={() => setCount(count + 1)} id='increment'>Increment</button>
        <button onClick={() => setCount(count - 1)} id='decrement'>Decrement</button>

        <hr />

        <input type="number" onChange={(e) => setN(parseInt(e.target.value))} />
        <button onClick={generateSource}>generate source - {n}</button>

        {source.map((source_item , index) => <div key={index}>
          {source_item[0]}
          X
          {source_item[1]}
        </div>)}
      </div>
    </>
  )
}

export default App
