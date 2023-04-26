import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Increment">
      <Increment counter={counter} setCounter={setCounter} />
    </div>

    //  <div className="Decrement">
    //   <Decrement counter={counter} />
    // </div>
  );
}

export default App;
