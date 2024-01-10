import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  let [count, setCount] = useState(30);

  const countdown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("count is 0");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(countdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <button className="timerBtn">{count}</button>
    </div>
  );
};

export default Timer;
