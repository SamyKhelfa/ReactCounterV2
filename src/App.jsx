import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import AddCounter from "./components/AddCounter";

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <>
      <div className="Calculator"></div>
      <container>
        <div className="increment">
          <Increment counter={counter} setCounter={setCounter} />
        </div>

        <p>{counter}</p>

        <div className="decrement">
          <Decrement counter={counter} setCounter={setCounter} />
        </div>

        <div className="reset">
          <Reset counter={counter} setCounter={setCounter}></Reset>
        </div>

        <div classname="addcounter">
          <AddCounter counter={counter} />
        </div>
      </container>
    </>
  );
}

export default App;
