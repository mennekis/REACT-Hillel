import React from "react";
import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  let value = 0;

  const [counter, setCounter] = useState(value);
  const handleIncrement = (myCounterValue) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (myCounterValue) => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>
        My Counter: <b>{counter}</b>
      </p>
      <div>
        <Button text="+" onClick={handleIncrement} />
        <Button text="-" onClick={handleDecrement} />
      </div>
    </div>
  );
};

export default Counter;
