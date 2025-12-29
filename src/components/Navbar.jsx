import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <h2 className="logo">Taskify</h2>
        </Link>
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
    
      </ul>
    </nav>
  );
};

export default Navbar;
