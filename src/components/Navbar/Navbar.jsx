import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Blog</div>
      <div className="nav-icons">
        <span>🏠</span>
        <span>🔔</span>
      </div>
    </div>
  );
};

export default Navbar;
