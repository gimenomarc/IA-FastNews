import React from 'react';
import './NewsCard.css';

const NewsCard = ({ item }) => {
  const { title, description, link, categories, 'media:content': mediaContent } = item;
  let imageUrl;

  if (mediaContent && mediaContent['@url']) {
    imageUrl = mediaContent['@url'];
  }

  console.log('URL de la imagen:', imageUrl);

  return (
    <div className="container">
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <a href={link} className="link">
            Más información
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
          <div className="categories">
            {categories && categories.map((category, index) => (
              <span key={index} className="category">{category}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
