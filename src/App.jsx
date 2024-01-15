import { useState } from "react";
import Title from "./components/Title";
import Timer from "./components/Timer";
import Workouts from "./components/Workouts";

function App() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <Timer />
      </div>
      <div>
        <Workouts />
      </div>
    </div>
  );
}

export default App;
