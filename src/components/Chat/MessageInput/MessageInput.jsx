import React, { useState } from "react";
import { AiOutlinePaperClip, AiOutlineSend } from "react-icons/ai"; // Import icons
import "./MessageInput.css";
import avatarImage from "../../../assets/img.jpg";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
        const newMessage = {
            message: message,
            time: new Date().toLocaleTimeString(),
            avatar: {avatarImage},
          };
        onSend(newMessage);
        setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="message-input-box"
      />
      <button className="attach-btn">
        <AiOutlinePaperClip />
      </button>
      <button className="send-btn" onClick={handleSend}>
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default MessageInput;
