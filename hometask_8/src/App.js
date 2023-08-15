import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/posts"> Posts</NavLink>
        <NavLink to="/users"> Users</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      aPP
    </div>
  );
}

export default App;
