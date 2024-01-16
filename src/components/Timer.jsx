import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const workoutCount = 5.0;
  const [appState, setAppState] = useState({
    count: workoutCount,
    state: "stopped",
  });
  const [timer, setTimer] = useState(null);
  const cooldownCount = 3;

  //Pure Function
  const newTick = (state, cooldownCount, workoutCount) => {
    if (state.state == "stopped") {
      return { count: workoutCount, state: state.state };
    }

    if (state.count > 0) {
      return { count: Math.max(state.count - 0.05, 0), state: state.state };
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
    let interval = setInterval(() => {
      const event = new CustomEvent("tick");
      document.dispatchEvent(event);
    }, 50);
    setTimer(interval);
    setAppState({ count: workoutCount, state: "workout" });
  };

  const stopTimer = () => {
    clearInterval(timer);
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
    let listener = document.addEventListener("tick", () => {
      setAppState((prevState) => {
        return newTick(prevState, cooldownCount, workoutCount);
      });
    });

    return document.removeEventListener("tick", listener);
  }, []);

  return (
    <div>
      <button
        className={`timerBtn ${
          appState.state === "cooldown" ? "cooldownStyle" : "workoutStyle"
        }`}
        onClick={toggleTimer}
      >
        {appState.count.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </button>
    </div>
  );
};

export default Timer;
