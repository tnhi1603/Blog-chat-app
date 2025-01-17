import React from "react";
import "./NotificationCard.css"; // Import file CSS cho styles

const NotificationCard = ({ title, content, time, avatar, isRead }) => {
  return (
    <div className={`notification-card ${isRead ? "read" : "unread"}`}>
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="message">{content}</p>
        <span className="time">{time}</span>
      </div>
      <div className={`status ${isRead ? "read" : "unread"}`}></div>
    </div>
  );
};

export default NotificationCard;
