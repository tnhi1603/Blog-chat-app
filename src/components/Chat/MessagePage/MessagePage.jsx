import React, { useState, useRef, useEffect } from "react";
import Info from "../Info/Info";
import MessageCard from "../MessageCard/MessageCard";
import MessageInput from "../MessageInput/MessageInput";
import avatarImage from "../../../assets/img.jpg";
import "./MessagePage.css";

const MessagePage = ({ messages = [], userInfo = {} }) => {
  const [chatMessages, setChatMessages] = useState(messages);
  const messageEndRef = useRef(null);
  
  const handleSend = (newMessage) => {
    const formattedMessage = {
      ...newMessage,
      isSender: true,
    };
    setChatMessages((prevMessages) => [...prevMessages, formattedMessage]);
  };

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="message-page">
      {/* User Info Section */}
      <Info
        avatar={avatarImage || "https://via.placeholder.com/40"}
        name={userInfo.name || "Unknown User"}
        id={userInfo.id || "N/A"}
        onCall={() => alert("Voice call initiated")}
        onVideoCall={() => alert("Video call initiated")}
        onInfo={() => alert("User information")}
      />

      {/* Chat Messages */}
      <div className="message-content">
        {chatMessages.map((msg, index) => (
          <MessageCard
            key={index}
            avatar={msg.avatar}
            message={msg.message}
            time={msg.time}
            isSender={msg.isSender}
          />
        ))}
        <div ref={messageEndRef}></div>
      </div>

      {/* Message Input */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default MessagePage;
