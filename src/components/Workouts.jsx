import "./Workouts.css";
import React, { useState, useEffect } from "react";

const Workout = () => {
  const [workoutId, setWorkoutId] = useState(1);
  const [workoutTxt, setWorkoutTxt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/workouts/${workoutId}.txt`);
        const workoutData = await response.text();
        setWorkoutTxt(workoutData);
      } catch (error) {
        console.error("Error fetching workout data: ", error);
      }
    };

    fetchData();
  }, [workoutId]);

  const handlePrev = () => {
    if (workoutId > 1) {
      setWorkoutId(workoutId - 1);
    }
  };

  const handleNext = () => {
    if (workoutId < 4) {
      setWorkoutId(workoutId + 1);
    }
  };

  return (
    <div className="workout">
      <button onClick={handlePrev} className="workBtn">
        Prev
      </button>
      <button onClick={handleNext} className="workBtn">
        Next
      </button>
      <div className="workText">
        <h2>Workout #{workoutId}</h2>
        <p>{workoutTxt}</p>
      </div>
    </div>
  );
};

export default Workout;
