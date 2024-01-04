import { useState } from "react";
import Title from "./components/Title";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
