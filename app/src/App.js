// App.js
import React, { useState, useEffect } from 'react';
import NewsCard from './Components/NewsCard';
import Header from './Components/Header';
import './App.css';

function App() {
  const [newsItems, setNewsItems] = useState([]);
  const [visibleNews, setVisibleNews] = useState(20);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3001/noticias');
        const data = await response.json();
        setNewsItems(data);
        console.log(data); // console.log para depurar
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const loadMoreNews = () => {
    // Aumenta la cantidad de noticias a mostrar en 20 más
    setVisibleNews((prevVisibleNews) => prevVisibleNews + 20);
  };

  return (
    <div className="App">
      <Header />
      <div className="news-container">
        {newsItems.slice(0, visibleNews).map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
      {visibleNews < newsItems.length && (
        <button className="load-more-button" onClick={loadMoreNews}>
          Cargar mas...
        </button>
      )}
    </div>
  );
}

export default App;