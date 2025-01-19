import React from "react";
import { FiPhone, FiVideo, FiInfo } from "react-icons/fi"; // Import icons
import "./Info.css";
import avatarImage from "../../../assets/img.jpg";

const Info = ({ avatar, name, id, onCall, onVideoCall, onInfo }) => {
  return (
    <div className="info-bar">
      <div className="user-info">
        <img src={avatarImage} alt={`${name}'s avatar`} className="info-avatar" />
        <div>
          <div className="info-name">{name}</div>
          <div className="info-id">{id}</div>
        </div>
      </div>
      <div className="info-actions">
        <button className="info-btn" onClick={onCall}>
          <FiPhone />
        </button>
        <button className="info-btn" onClick={onVideoCall}>
          <FiVideo />
        </button>
        <button className="info-btn" onClick={onInfo}>
          <FiInfo />
        </button>
      </div>
    </div>
  );
};

export default Info;
