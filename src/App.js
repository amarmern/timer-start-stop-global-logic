import "./styles.css";
import { React, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const StartWatch = () => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    setValue(interval);
  };

  const stopWatch = () => {
    if (value > 0) {
      setCount(count);
      clearInterval(value);
    }
  };
  return (
    <div className="App">
      {count}
      <button onClick={StartWatch}> Start Watch </button>
      <button onClick={stopWatch}> Stop Watch </button>
    </div>
  );
}
