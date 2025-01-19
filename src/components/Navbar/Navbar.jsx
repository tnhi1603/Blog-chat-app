import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaBars, FaUserFriends, FaComments, FaUser, FaBlog } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); 
    };

    handleResize(); // Gọi khi render lần đầu
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">Blog</div>
      {!isMobileView ? (
        <div className="nav-icons">
          <Link to="/home"><FaHome /></Link>
          <Link to="/notifications"><FaBell /></Link>
          <Link to="/chat"><FaComments /></Link>
          <Link to="/friends"><FaUserFriends /></Link>
          <Link to="/blog"><FaBlog /></Link>
          <Link to="/profile"><FaUser /></Link>
        </div>
      ) : (
        <div className="dropdown-menu">
          <FaBars onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/home" onClick={() => setIsDropdownOpen(false)}>
                <FaHome /> Home
              </Link>
              <Link to="/notifications" onClick={() => setIsDropdownOpen(false)}>
                <FaBell /> Notifications
              </Link>
              <Link to="/chat" onClick={() => setIsDropdownOpen(false)}>
                <FaComments /> Chat
              </Link>
              <Link to="/friends" onClick={() => setIsDropdownOpen(false)}>
                <FaUserFriends /> Friends
              </Link>
              <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>
                <FaUser /> Profile
              </Link>
              <Link to="/blog" onClick={() => setIsDropdownOpen(false)}>
                <FaBlog /> Blog
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
