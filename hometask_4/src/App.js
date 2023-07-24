import { Route,Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Articles from "./pages/Articles";

import PageNotFound from "./pages/PageNotFound";


function App() {
  return <div>


<nav className="navigation">

  <NavLink to="/">Home</NavLink>
  <NavLink to="/about">About</NavLink>
 
  <NavLink to="/articles">Articles</NavLink>
</nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:postId" element={<Post/>}/>
      
      <Route path="*" element={<PageNotFound/>}/>

    </Routes>
    
  </div>;
}

export default App;
