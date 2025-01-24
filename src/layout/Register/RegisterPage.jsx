import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa'; // Import icons
import './RegisterPage.css';
import Image from '../../assets/register.gif';

const Register = () => {
  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Please Fill out form to Register!</h2>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
        <p>
          Yes I have an account? <a href="/login">Login</a>
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
      <div className="illustration">
        <img src={Image} alt="Illustration" />
      </div>
    </div>
  );
};

export default Register;
