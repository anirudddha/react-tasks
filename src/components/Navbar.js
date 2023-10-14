import React from 'react';
import './style.css';
import {Link,useLocation,useNavigate} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <Link className="navbar-brand" to="/">Task1</Link>
      <Link className="navbar-brand" to="/calulator">Task2</Link>
      <Link className="navbar-brand" to="/colorpicker">Task3</Link>
      <Link className="navbar-brand" to="/fechdata">Task4</Link>
      <Link className="navbar-brand" to="/agecalculator">Task5</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
