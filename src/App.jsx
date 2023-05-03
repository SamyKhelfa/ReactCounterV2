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
      <div>React Counter V2</div>

      {counter.map((elem, index) => {
        return (
          <div>
            <div className="increment">
              <Increment counter={counter} setCounter={setCounter} />
            </div>

            <div>{elem}</div>

            <div className="decrement">
              <Decrement counter={counter} setCounter={setCounter} />
            </div>

            <div className="reset">
              <Reset counter={counter} setCounter={setCounter}></Reset>
            </div>
          </div>
        );
      })}

      <div className="addcounter">
        <AddCounter counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
