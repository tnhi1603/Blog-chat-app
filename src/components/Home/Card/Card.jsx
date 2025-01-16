import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Card = ({ avatar, name, content, image, time }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
        <h3>{name}</h3>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {image && <img src={image} alt="Post content" className="post-image" />}
      </div>
      <div className="card-footer">
        <p className="timestamp">{time}</p>
        <div className="card-actions">
          <button
            className={`action-button ${liked ? 'liked' : ''}`}
            onClick={handleLikeClick}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </button>
          <button className="action-button">
            <FontAwesomeIcon icon={faComment} /> Comment
          </button>
          <button className="action-button">
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
