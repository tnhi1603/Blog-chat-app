import React, { useState, useEffect } from "react";
import ChatCard from "../ChatCard/ChatCard";
import MessagePage from "../MessagePage/MessagePage";
import avatarImage from "../../../assets/img.jpg";
import messageApi from "../../../api/messageApi";
import "./ChatPage.css";

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState([]);

  const chats = [
    {
      id: 1,
      avatar: avatarImage,
      name: "Suporte ADMIN",
      messagePreview: "Lorem Ipsum has been...",
      isRead: false,
      time: "8:00 PM",
    },
    {
      id: 2,
      avatar: avatarImage,
      name: "John Doe",
      messagePreview: "Hey! How are you?",
      isRead: true,
      time: "7:45 PM",
    },
  ];

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedChatId) {
        try {
          const res = await messageApi.getMessages(selectedChatId);
          setMessages(res.data);
        } catch (err) {
          console.error("Error fetching messages:", err);
        }
      }
    };

    fetchMessages();
  }, [selectedChatId]);

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
