import "./App.css";
import Home from "./components/Home";
import { createContext } from "react";

export const Context = createContext(null);

function App() {
  const users = [
    { id: 1, name: "User 1", position: "junior" },
    { id: 2, name: "User 2", position: "middle" },
    { id: 3, name: "User 3", position: "middle" },
    { id: 4, name: "User 4", position: "middle" },
    { id: 5, name: "User 5", position: "senior" },
    { id: 6, name: "User 6", position: "tech-lead" },
  ];

  return (
    <div className="App">
      APP
      <Context.Provider value={{ users }}>
        <Home />
      </Context.Provider>
    </div>
  );
}

export default App;
