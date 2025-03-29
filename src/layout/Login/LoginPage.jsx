import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import './LoginPage.css';
import Image from '../../assets/login.png';
import welcome from '../../assets/welcome.gif';
import { useState } from "react";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission
        try {
            const response = await authApi.login(user);
            console.log("Đăng nhập thành công:", response);
            setShowPopup(true);
            setTimeout(() => {
              setShowPopup(false);
              navigate("/"); // Chuyển sang trang Home
            }, 2000);
        } catch (error) {
            console.error("Đăng nhập thất bại:", error);
        }
    };

  return (
    <div className="login-container">
      <div class="background-accent"></div>
      <div className="form-container-login">
        <div className="welcome-gif">
          <img src={welcome} alt="Welcome Animation" />
        </div>
        <h2>Please Fill out form to Login</h2>
        <form>
          <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
        <div className="social-icons">
          <a href="/facebook" className="icon">
            <FaFacebook />
          </a>
          <a href="/whatsapp" className="icon">
            <FaWhatsapp />
          </a>
          <a href="/telegram" className="icon">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="illustration-login">
        <img src={Image} alt="Illustration" />
      </div>
      {showPopup && (
        <div className="popup">
          <p>Đăng nhập thành công!</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
