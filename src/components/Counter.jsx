import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const reduceCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount((count = 0));
  };

  return (
    <>
      <div className="countMover">
        <button onClick={addCount}>+</button>
        <span className="count">{count}</span>
        <button onClick={reduceCount}>-</button>
      </div>
      <div>
        <button className="reset" onClick={resetCount}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Counter;
