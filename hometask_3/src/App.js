import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

import List from "./components/List";

function App() {
  const [isShown, SetIsShown] = useState("true");
  return (
    <div className="App">
      <h1>Yobi dobi</h1>

      <List />
      {isShown && <Box />}
      <button onClick={() => SetIsShown(!isShown)}>Toggler</button>
    </div>
  );
}

export default App;
