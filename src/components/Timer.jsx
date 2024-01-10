import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const initialCount = 30;
  const [count, setCount] = useState(initialCount);
  const [intervalId, setIntervalId] = useState(null);

  const countdown = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      } else {
        console.log("Count is 0");
        stopTimer();
        return prevCount;
      }
    });
  };

  const startTimer = () => {
    const id = setInterval(countdown, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    setCount(initialCount);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const toggleTimer = () => {
    if (intervalId) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <button className="timerBtn" onClick={toggleTimer}>
        {count}
      </button>
    </div>
  );
};

export default Timer;
