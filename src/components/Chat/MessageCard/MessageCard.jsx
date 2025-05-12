import React from "react";
import "./MessageCard.css";


const MessageCard = ({ isSender, avatar, message, time }) => {
  return (
    <div className={`message-card ${isSender ? "sent" : "received"}`}>
      {!isSender && <img src={avatarImage} alt="User Avatar" className="message-avatar" />}
      <div className="message-content">
        <p className="message-text">{message}</p>
        <span className="message-time">{time}</span>
      </div>
      {isSender && <img src={avatarImage} alt="User Avatar" className="message-avatar" />}
    </div>
  );
};

export default MessageCard;
