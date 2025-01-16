import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <h4>Friends</h4>
      <div className="friend">
        <p>Steve Jobs</p>
        <button>Chat</button>
      </div>
      <div className="friend">
        <p>Elon Musk</p>
        <button>Chat</button>
      </div>
    </div>
  );
};

export default RightSidebar;
