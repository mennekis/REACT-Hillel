import React from "react";
import { useReducer } from "react";

const Counter = () => {
  const initialValue = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return {
          count: state.count + 1,
        };
      case "minus":
        return {
          count: state.count - 1,
        };
      case "reset":
        return {
          count: 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
//   console.log(state);

  const handlePlus = () => {
    dispatch({ type: "plus" });
  };
  const handleMinus = () => {
    dispatch({ type: "minus" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
