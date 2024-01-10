import { useState } from "react";
import Title from "./components/Title";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default App;
