import React from 'react';
import './NewsCard.css';

const NewsCard = ({ item }) => {
  const { title, content, link, categories, image } = item;

  return (
    <div className="container">
        {image && (
          <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
        )}
      <div className="card">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{content}</p>
          <div className="categories">
            {categories && categories.map((category, index) => (
              <span key={index} className="category">{category}</span>
            ))}
          </div>
        </div>
        {/* Comentario: Puedes ajustar el estilo y la posición del enlace según tus preferencias */}
      </div>
    </div>
  );
};

export default NewsCard;