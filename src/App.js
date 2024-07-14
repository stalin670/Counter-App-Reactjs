import { useState } from "react";
import "./App.css"

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const zero = () => {
    setCount(0);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className="head">Counter App</h1>
      <h3 className="value">{count}</h3>
      <button onClick={increase} className="button increase">Increase</button>
      <button onClick={zero} className="button">Set 0</button>
      <button onClick={decrease} className="button decrease">Decrease</button>
    </div>
  );
}

export default App;
