import React from 'react';
import Card from '../../Home/Card/Card';
import avt from '../../../assets/img.jpg';
import './PostList.css';

const PostList = () => {
  const posts = [
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Charles',
      content: 'Just enjoying a sunny day!',
      image: 'https://via.placeholder.com/300',
      time: '2 hours ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Charles',
      content: 'Loving the new updates on this platform.',
      image: '',
      time: '5 hours ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Charlie',
      content: 'Check out this awesome view from my trip!',
      image: 'https://via.placeholder.com/300',
      time: '1 day ago',
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Card
          key={index}
          avatar={avt}
          name={post.name}
          content={post.content}
          image={post.image}
          time={post.time}
        />
      ))}
    </div>
  );
};

export default PostList;
