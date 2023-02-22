import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>
    <Counter count={count} onIncrement={incrementCount} />
  </div>

  );
}
export default App;



