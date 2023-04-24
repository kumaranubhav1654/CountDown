import "./styles.css";
import React, { useState } from "react";
import Display from "../components/Display";
import Button from "../components/Button";
import InputBox from "../components/InputBox";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const incrementCount = () => {
    clearInterval(intervalId);
    let intervalsId = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue === 0) {
          clearInterval(intervalId);
          return 0;
        } else return prevValue - 1;
      });
    }, 500);
    setIntervalId(intervalsId);
  };

  const decrementCount = () => {
    clearInterval(intervalId);
  };

  const setInput = (e) => {
    setInputCount(e.target.value);
    setCount(e.target.value);
  };
  return (
    <div className="App">
      <Button btnText="Start" btnHandler={incrementCount} />
      <Display DisplayText={count} />
      <InputBox inputVal={inputCount} inputHandler={(e) => setInput(e)} />
      <Button btnText="Stop" btnHandler={decrementCount} />
    </div>
  );
}
