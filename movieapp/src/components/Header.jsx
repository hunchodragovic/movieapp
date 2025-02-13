import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Movies</Link>
        </div>
        <ul className="nav-links">
          <li>
            {" "}
            <NavLink to="/">Watchlist</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/watched">Watched list</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/add">Add</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
