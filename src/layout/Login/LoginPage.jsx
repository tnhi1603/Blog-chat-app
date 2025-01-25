import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import './LoginPage.css';
import Image from '../../assets/login.png';
import welcome from '../../assets/welcome.gif';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div class="background-accent"></div>
      <div className="form-container-login">
        <div className="welcome-gif">
          <img src={welcome} alt="Welcome Animation" />
        </div>
        <h2>Please Fill out form to Login</h2>
        <form>
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
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
    </div>
  );
};

export default LoginPage;
