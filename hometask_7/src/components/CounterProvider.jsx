import React from "react";
import { createContext } from "react";
import Counter from "./Counter";

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={{}}>
      <Counter />
    </CounterContext.Provider>
  );
};

export default CounterProvider;
