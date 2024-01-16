import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const workoutCount = 5;
  const [appState, setAppState] = useState({ count: 8, state: "stopped" });
  const cooldownCount = 3;

  //Pure Function
  const newTick = (state, cooldownCount, workoutCount) => {
    if (state.state == "stopped") {
      return { count: workoutCount, state: state.state };
    }

    if (state.count > 0) {
      return { count: state.count - 1, state: state.state };
    } else {
      // get below 0
      if (state.state == "workout")
        // in workout
        return { count: cooldownCount, state: "cooldown" };
      // in cooldown mode
      else return { count: workoutCount, state: "workout" };
    }
  };

  const startTimer = () => {
    setAppState({ count: workoutCount, state: "workout" });
  };

  const stopTimer = () => {
    setAppState({ count: workoutCount, state: "stopped" });
  };

  const toggleTimer = () => {
    if (appState.state !== "stopped") {
      stopTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAppState((prevState) => {
        console.log(prevState);
        return newTick(prevState, cooldownCount, workoutCount);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button className="timerBtn" onClick={toggleTimer}>
        {appState.count}
      </button>
    </div>
  );
};

export default Timer;
