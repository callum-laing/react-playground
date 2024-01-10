import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  let [count, setCount] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const countdown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("count is 0");
      setIsRunning(false);
    }
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(countdown, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, isRunning]);

  return (
    <div>
      <button className="timerBtn" onClick={toggleTimer} disabled={isRunning}>
        {count}
      </button>
    </div>
  );
};

export default Timer;
