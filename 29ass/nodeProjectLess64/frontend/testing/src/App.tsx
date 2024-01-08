
import { useState } from 'react';
import './App.css'
// import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0);
  return (

    <>
      <div>
        {/* <Todos /> */}
        <h1>Counter</h1>
        <h2 id='counter'>{count}</h2>
        <button onClick={() => setCount(count + 1)} id='increment'>Increment</button>
        <button onClick={() => setCount(count - 1)} id='decrement'>Decrement</button>
      </div>
    </>
  )
}

export default App
