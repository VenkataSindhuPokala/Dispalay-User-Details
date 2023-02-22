import React from 'react';

function Counter(props) {
  return (
    <div>
     
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>Sindhu</button>
    </div>
  );
}

export default Counter;