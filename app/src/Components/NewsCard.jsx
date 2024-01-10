// NewsCard.jsx

import React from 'react';
import './NewsCard.css';

const NewsCard = ({ item }) => {
  const { title, description, imageUrl } = item;

  return (
    <div className="container">
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${imageUrl || "https://dummyimage.com/400x200"})` }}></div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <a href="#" className="link">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="icon"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        {item.media && item.media.thumbnail && (
          <img src={item.media.thumbnail.url} alt="News Thumbnail" className="thumbnail" />
        )}
      </div>
    </div>
  );
};

export default NewsCard;