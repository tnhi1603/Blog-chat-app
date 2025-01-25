import React from 'react';
import './Header.css';
import avatar from '../../../assets/img.jpg';

function Header() {
  return (
    <div className="header-container">
      <div className="header-background">
        <img src={avatar} alt="Background" className="header-image" />
      </div>
      <div className="header-avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="header-info">
        <h2>Charles Deo</h2>
        <p>UI/UX Designer</p>
        <div className="header-buttons">
          <button className="btn-primary">Follow</button>
          <button className="btn-secondary">Schedule a Meeting</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
