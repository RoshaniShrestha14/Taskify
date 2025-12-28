import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h2 className="logo">Taskify</h2>
      </div>
      <ul className="nav-right">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="nav-link">
            Task Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-link signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
