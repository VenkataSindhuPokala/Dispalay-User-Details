import "./App.css";
import { useState } from "react";
export default function App() {
  let [count, setCount] = useState(0);
  
  return (
    <>
      <center>
        <h1>Counter App</h1>
        <h1>updated</h1>
        <div class="b_color">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount((count = 0))}>reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
        </div>
      </center>
    </>
  );
}

