import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Content from "./Pages/Content";
import "./App.css";


function App() {
  return <div>
    <Router>
    <nav className="navbar">
        <div className="logo">MyLogo</div>
        <input type="checkbox" id="menu-toggle"/>
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
        <ul className="nav-links">
            <li><Link to="/Home">Home</Link> </li>
            <li><Link to="/">Explore</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Signup</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/" element={<Content/>}></Route>
      </Routes>
    </Router>
  </div>;
}

export default App;
