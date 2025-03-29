import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa'; // Import icons
import './RegisterPage.css';
import Image from '../../assets/register.gif';
import { useState } from "react";
import authApi from "../../api/authApi";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
    const handleSignup = async () => {
        try {
            const response = await authApi.signUp(user);
            console.log("Đăng ký thành công:", response);
        } catch (error) {
            console.error("Đăng ký thất bại:", error);
        }
    };
  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Please Fill out form to Register!</h2>
        <form>
            <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={handleSignup}>Đăng ký</button>
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
