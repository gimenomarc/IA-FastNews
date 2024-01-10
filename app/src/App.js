// App.js
import React, { useState, useEffect } from 'react';
import NewsCard from './Components/NewsCard';
import Header from './Components/Header';
import './App.css';

function App() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3001/noticias');
        const data = await response.json();
        setNewsItems(data);
        console.log(data); // onsole.log para depurar
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="news-container">
        {newsItems.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;