import React, { useState } from 'react';
import './Dashboard.css';
import Card from '../Card/Card';
import Post from '../Post/Post';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const currentUserAvatar = 'https://via.placeholder.com/50';

  const handlePostSubmit = (newPost) => {
    setPosts([{ ...newPost, id: posts.length + 1, time: 'Just now' }, ...posts]);
  };

  return (
    <div className="dashboard">
      <Post currentUserAvatar={currentUserAvatar} onPostSubmit={handlePostSubmit} />
      <div className="news-feed">
        {posts.map((post) => (
          <Card
            key={post.id}
            avatar={currentUserAvatar}
            name="You"
            content={post.content}
            image={post.image}
            time={post.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
