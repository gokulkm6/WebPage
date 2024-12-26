import React from 'react';
import './Navbar.css';
import kent from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={kent }  className="logo-img" />
        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="nav-links">
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
        <button className="btn-primary">Free Trial</button>
      </div>
    </nav>
  );
};

export default Navbar;
