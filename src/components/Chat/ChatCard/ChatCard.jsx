import React from "react";
import "./ChatCard.css";
import avatarImage from "../../../assets/img.jpg";

const ChatCard = ({ avatar, name, messagePreview, isRead, time, isSelected, onClick }) => {
  return (
    <div 
      className={`chat-card ${isSelected ? "selected" : ""}`} 
      onClick={onClick}
    >
      <img src={avatarImage} alt={`${name}'s avatar`} className="chat-avatar" />
      <div className="chat-info">
        <div className="chat-name-time">
          <span className="chat-name">{name}</span>
          <span className="chat-time">{time}</span>
        </div>
        <div className="chat-preview">
          {messagePreview}
          {!isRead && <span className="unread-dot"></span>}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
