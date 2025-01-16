import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import './Post.css';

const Post = ({ currentUserAvatar, onPostSubmit }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePost = () => {
    if (content.trim() || image) {
      onPostSubmit({ content, image });
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img src={currentUserAvatar} alt="User avatar" className="avatar" />
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          value={content}
          onChange={handleContentChange}
        />
        <label className="attach-icon">
          <FaImage size={50} />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>
      </div>
      {image && (
        <div className="image-preview">
          <img src={image} alt="Preview" />
        </div>
      )}
      <button className="post-button" onClick={handlePost} disabled={!content.trim() && !image}>
        Post
      </button>
    </div>
  );
};

export default Post;
