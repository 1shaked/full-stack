'use client'
import ForComponent from "@/components/ForCompoent";
import Test from "@/components/test";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to React</h1>
      <h2>NF let go! {count}</h2>
      <h3>count is --- {count}</h3>
      <p>text</p>
      <button onClick={() => setCount(count + 1)}>Click me +1</button>
      <input type="text" />
      <Test/>
      <div>buy me stuff</div>
      <section>
        <span>want new</span>
      </section>
      <section>
        <ForComponent array={['a', 'b', 'c', 'd']} nodeComponent={<div> hey i am a child </div>} />
      </section>
    </div>
  );
}
