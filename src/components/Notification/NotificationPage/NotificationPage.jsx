import React from "react";
import NotificationCard from "../NotificationCard/NotificationCard";
import "./NotificationPage.css"; 

const NotificationPage = () => {
  const notifications = [
    {
      title: "We released some new features",
      content: "Check them out!",
      time: "",
      avatar: "",
      isRead: false,
    },
    {
      title: "Brian Griffin wants to collaborate",
      content: "",
      time: "5 days ago",
      avatar: "https://via.placeholder.com/50",
      isRead: false,
    },
    {
      title: "User Research Opportunity",
      content: "Adam from The Mayor's Office is looking for people like you.",
      time: "1 month ago",
      avatar: "https://via.placeholder.com/50",
      isRead: true,
    },
    {
      title: "User Research Opportunity",
      content: "Neil is looking for people like you.",
      time: "1 month ago",
      avatar: "https://via.placeholder.com/50",
      isRead: true,
    },
    {
      title: "User Research Opportunity",
      content: "Quagmire from Giggity Co. is looking for people like you.",
      time: "1 month ago",
      avatar: "https://via.placeholder.com/50",
      isRead: true,
    },
  ];

  return (
    <div className="notification-page">
      <h2 className="page-title">Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <NotificationCard key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
