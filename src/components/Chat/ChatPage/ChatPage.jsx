import React, { useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import MessagePage from "../MessagePage/MessagePage";
import avatarImage from "../../../assets/img.jpg";
import "./ChatPage.css";

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
//   const [isChatListVisible, setIsChatListVisible] = useState(true);

  const chats = [
    {
      id: 1,
      avatar: {avatarImage},
      name: "Suporte ADMIN",
      messagePreview: "Lorem Ipsum has been...",
      isRead: false,
      time: "8:00 PM",
    },
    {
      id: 2,
      avatar: {avatarImage},
      name: "John Doe",
      messagePreview: "Hey! How are you?",
      isRead: true,
      time: "7:45 PM",
    },
    // Add more chat data here
  ];

  const messages = [
    {
      isSender: false,
      avatar: {avatarImage},
      message: "Lorem Ipsum has been the industry's standard dummy text...",
      time: "8:00 PM",
    },
    {
      isSender: true,
      avatar: {avatarImage},
      message: "Lorem Ipsum has been the industry's standard dummy text...",
      time: "8:01 PM",
    },
    // Add more message data here
  ];

  return (
    <div className="chat-page">
        <div className="chat-list">
          {chats.map((chat) => (
            <ChatCard
              key={chat.id}
              avatar={chat.avatar}
              name={chat.name}
              messagePreview={chat.messagePreview}
              isRead={chat.isRead}
              time={chat.time}
              isSelected={chat.id === selectedChatId}
              onClick={() => setSelectedChatId(chat.id)}
            />
          ))}
        </div>
      {/* <button
        className="toggle-chat-list"
        onClick={() => setIsChatListVisible((prev) => !prev)}
      >
        {isChatListVisible ? "Hide Chat List" : "Show Chat List"}
      </button> */}

      {/* Message Section */}
      <div className="message-section">
        {selectedChatId ? (
          <MessagePage messages={messages} />
        ) : (
          <p className="select-chat-placeholder">Select a chat to view messages</p>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
