import "./Workouts.css";

const Workout = () => {
  return (
    <div className="workout">
      <button className="workBtn">Prev</button>
      <button className="workBtn">Next</button>
      <div className="workText">
        <h2>Workout #1</h2>
        <p>Burpees 10 reps</p>
        <p>Push Ups 10 reps</p>
      </div>
    </div>
  );
};

export default Workout;
