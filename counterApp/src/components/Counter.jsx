import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <h2>Count:{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
