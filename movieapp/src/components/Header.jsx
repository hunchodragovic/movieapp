import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <a href="#">Movies</a>
        </div>
        <ul className="nav-links">
         <li> <a href="">Watchlist</a></li>
         <li> <a href="">Watchedlist</a></li>
            <li> <a className="btn" href="">Add</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
